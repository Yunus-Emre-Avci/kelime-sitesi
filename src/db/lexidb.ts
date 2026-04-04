import Dexie, { type Table } from 'dexie';

export interface Word {
  id: string;                    // uuid
  english: string;               // "ambiguous"
  phonetic: string;              // "/æmˈbɪɡ.ju.əs/"
  turkishMeaning: string;        // "belirsiz, muğlak"
  dictionaryDefinition: string;  // "open to more than one interpretation"
  exampleSentence: string;       // "The instructions were ambiguous."
  level: "B1" | "B2";
  tags: string[];
  createdAt: Date;
  // SRS fields
  interval: number;              // days until next review
  repetition: number;            // number of successful reviews
  easeFactor: number;            // SM-2 ease factor (default 2.5)
  nextReviewDate: Date;
  // Mastery
  masteryLevel: 0 | 1 | 2 | 3 | 4; // 0=New, 1=Learning, 2=Familiar, 3=Proficient, 4=Mastered
  correctCount: number;
  wrongCount: number;
  lastStudied: Date | null;
}

export interface StudySession {
  id: string;
  date: Date;
  mode: "flashcard" | "quiz" | "fill-blank" | "match";
  wordsStudied: string[];   // Word IDs
  correctAnswers: number;
  wrongAnswers: number;
  duration: number;         // seconds
  xpEarned: number;
}

export interface UserProgress {
  id: string; // "singleton"
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: Date | null;
  dailyGoal: number;        // words per day target
  totalWordsLearned: number;
  level: number;            // user level based on XP
}

export class LexiDatabase extends Dexie {
  words!: Table<Word>;
  sessions!: Table<StudySession>;
  progress!: Table<UserProgress>;

  constructor() {
    super('LexiDB');
    this.version(1).stores({
      words: 'id, english, level, nextReviewDate, masteryLevel, *tags',
      sessions: 'id, date, mode',
      progress: 'id'
    });
  }
}

export const db = new LexiDatabase();
