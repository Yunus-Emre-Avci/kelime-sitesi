export const XP_PER_LEVEL = 500;
export const XP_CORRECT_FLASHCARD = 10;
export const XP_CORRECT_QUIZ = 15;
export const XP_CORRECT_FILL_BLANK = 20;

export function calculateLevel(totalXP: number): number {
  return Math.floor(totalXP / XP_PER_LEVEL) + 1;
}

export function getXPProgress(totalXP: number): number {
  return totalXP % XP_PER_LEVEL;
}

export function getXPForNextLevel(totalXP: number): number {
  return XP_PER_LEVEL - getXPProgress(totalXP);
}
