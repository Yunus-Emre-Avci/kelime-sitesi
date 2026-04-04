import { create } from 'zustand';
import { db, type Word } from '../db/lexidb';
import { seedWords } from '../data/b1b2-seed-words';
import { calculateSRS } from '../utils/srs';

interface WordState {
  words: Word[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  initdb: () => Promise<void>;
  fetchWords: () => Promise<void>;
  addWord: (word: Omit<Word, 'id' | 'createdAt' | 'interval' | 'repetition' | 'easeFactor' | 'nextReviewDate' | 'masteryLevel' | 'correctCount' | 'wrongCount' | 'lastStudied'>) => Promise<void>;
  updateWordSRS: (id: string, quality: number) => Promise<void>;
  deleteWord: (id: string) => Promise<void>;
  importCSV: (csvContent: string) => Promise<void>;
  clearWords: () => Promise<void>;
}

export const useWordStore = create<WordState>((set, get) => ({
  words: [],
  isLoading: false,
  error: null,

  initdb: async () => {
    const count = await db.words.count();
    if (count === 0) {
      const wordsToSeed: Word[] = seedWords.map((sw) => ({
        ...sw,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date(),
        masteryLevel: 0,
        correctCount: 0,
        wrongCount: 0,
        lastStudied: null,
      }));
      await db.words.bulkAdd(wordsToSeed);
    }
    await get().fetchWords();
  },

  fetchWords: async () => {
    set({ isLoading: true });
    try {
      const words = await db.words.toArray();
      set({ words, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  addWord: async (wordData) => {
    const newWord: Word = {
      ...wordData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      interval: 0,
      repetition: 0,
      easeFactor: 2.5,
      nextReviewDate: new Date(),
      masteryLevel: 0,
      correctCount: 0,
      wrongCount: 0,
      lastStudied: null,
    };
    await db.words.add(newWord);
    await get().fetchWords();
  },

  updateWordSRS: async (id, quality) => {
    const word = await db.words.get(id);
    if (!word) return;

    const result = calculateSRS(
      quality,
      word.interval,
      word.repetition,
      word.easeFactor
    );

    const updates: Partial<Word> = {
      ...result,
      lastStudied: new Date(),
      correctCount: quality >= 3 ? word.correctCount + 1 : word.correctCount,
      wrongCount: quality < 3 ? word.wrongCount + 1 : word.wrongCount,
    };

    await db.words.update(id, updates);
    await get().fetchWords();
  },

  deleteWord: async (id) => {
    await db.words.delete(id);
    await get().fetchWords();
  },

  importCSV: async (csvContent) => {
    // Basic CSV parsing logic
    const lines = csvContent.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    
    const wordsToImport: Word[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      const wordObj: any = {};
      headers.forEach((header, index) => {
        wordObj[header] = values[index];
      });

      if (wordObj.english && wordObj.turkishmeaning) {
        wordsToImport.push({
          id: crypto.randomUUID(),
          english: wordObj.english,
          phonetic: wordObj.phonetic || '',
          turkishMeaning: wordObj.turkishmeaning,
          dictionaryDefinition: wordObj.definition || '',
          exampleSentence: wordObj.example || '',
          level: (wordObj.level as "B1" | "B2") || "B1",
          tags: [],
          createdAt: new Date(),
          interval: 0,
          repetition: 0,
          easeFactor: 2.5,
          nextReviewDate: new Date(),
          masteryLevel: 0,
          correctCount: 0,
          wrongCount: 0,
          lastStudied: null,
        });
      }
    }
    
    if (wordsToImport.length > 0) {
      await db.words.bulkAdd(wordsToImport);
      await get().fetchWords();
    }
  },

  clearWords: async () => {
    await db.words.clear();
    await get().fetchWords();
  }
}));
