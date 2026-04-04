import { create } from 'zustand';
import { db, type UserProgress } from '../db/lexidb';
import { calculateLevel } from '../utils/xp';

interface ProgressState {
  progress: UserProgress | null;
  isLoading: boolean;
  
  // Actions
  initProgress: () => Promise<void>;
  addXP: (amount: number) => Promise<void>;
  updateStreak: () => Promise<void>;
  setDailyGoal: (goal: number) => Promise<void>;
  resetProgress: () => Promise<void>;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  progress: null,
  isLoading: false,

  initProgress: async () => {
    set({ isLoading: true });
    let progress = await db.progress.get('singleton');
    if (!progress) {
      progress = {
        id: 'singleton',
        totalXP: 0,
        currentStreak: 0,
        longestStreak: 0,
        lastStudyDate: null,
        dailyGoal: 20,
        totalWordsLearned: 0,
        level: 1,
      };
      await db.progress.add(progress);
    }
    set({ progress, isLoading: false });
  },

  addXP: async (amount) => {
    const { progress } = get();
    if (!progress) return;

    const newXP = progress.totalXP + amount;
    const newLevel = calculateLevel(newXP);

    const updates = {
      totalXP: newXP,
      level: newLevel,
    };

    await db.progress.update('singleton', updates);
    set({ progress: { ...progress, ...updates } });
  },

  updateStreak: async () => {
    const { progress } = get();
    if (!progress) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const lastDay = progress.lastStudyDate ? new Date(progress.lastStudyDate) : null;
    if (lastDay) lastDay.setHours(0, 0, 0, 0);

    let newStreak = progress.currentStreak;
    let newLongestStreak = progress.longestStreak;

    if (!lastDay) {
      newStreak = 1;
    } else {
      const diff = today.getTime() - lastDay.getTime();
      const oneDay = 24 * 60 * 60 * 1000;

      if (diff === oneDay) {
        newStreak += 1;
      } else if (diff > oneDay) {
        newStreak = 1;
      }
    }

    if (newStreak > newLongestStreak) {
      newLongestStreak = newStreak;
    }

    const updates = {
      currentStreak: newStreak,
      longestStreak: newLongestStreak,
      lastStudyDate: new Date(),
    };

    await db.progress.update('singleton', updates);
    set({ progress: { ...progress, ...updates } });
  },

  setDailyGoal: async (goal) => {
    const { progress } = get();
    if (!progress) return;

    await db.progress.update('singleton', { dailyGoal: goal });
    set({ progress: { ...progress, dailyGoal: goal } });
  },

  resetProgress: async () => {
    await db.sessions.clear();
    await db.progress.delete('singleton');
    await get().initProgress();
  }
}));
