import { create } from 'zustand';
import { type Word, type StudySession, db } from '../db/lexidb';

interface SessionState {
  isActive: boolean;
  mode: StudySession['mode'] | null;
  words: Word[];
  currentIndex: number;
  correctAnswers: number;
  wrongAnswers: number;
  startTime: number | null;
  xpEarned: number;
  
  // Actions
  startSession: (mode: StudySession['mode'], words: Word[]) => void;
  nextWord: (isCorrect: boolean, xp: number) => void;
  endSession: () => Promise<void>;
  resetSession: () => void;
}

export const useSessionStore = create<SessionState>((set, get) => ({
  isActive: false,
  mode: null,
  words: [],
  currentIndex: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  startTime: null,
  xpEarned: 0,

  startSession: (mode, words) => {
    set({
      isActive: true,
      mode,
      words,
      currentIndex: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      startTime: Date.now(),
      xpEarned: 0,
    });
  },

  nextWord: (isCorrect, xp) => {
    const { currentIndex, correctAnswers, wrongAnswers, xpEarned } = get();
    set({
      currentIndex: currentIndex + 1,
      correctAnswers: isCorrect ? correctAnswers + 1 : correctAnswers,
      wrongAnswers: isCorrect ? wrongAnswers : wrongAnswers + 1,
      xpEarned: xpEarned + xp,
    });
  },

  endSession: async () => {
    const { mode, words, correctAnswers, wrongAnswers, startTime, xpEarned } = get();
    if (!mode || !startTime) return;

    const duration = Math.floor((Date.now() - startTime) / 1000);
    const session: StudySession = {
      id: crypto.randomUUID(),
      date: new Date(),
      mode,
      wordsStudied: words.map(w => w.id),
      correctAnswers,
      wrongAnswers,
      duration,
      xpEarned,
    };

    await db.sessions.add(session);
    set({ isActive: false });
  },

  resetSession: () => {
    set({
      isActive: false,
      mode: null,
      words: [],
      currentIndex: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      startTime: null,
      xpEarned: 0,
    });
  }
}));
