/**
 * SM-2 Algorithm implementation for LexiLearn.
 *
 * Quality (0-5):
 * 5: Perfect response
 * 4: Correct response after a hesitation
 * 3: Correct response recalled with serious difficulty
 * 2: Incorrect response; where the correct one seemed easy to recall
 * 1: Incorrect response; the correct one remembered
 * 0: Complete blackout.
 *
 * In our app we simplify to:
 * 0: Didn't Know (quality: 0)
 * 3: Almost (quality: 3)
 * 5: Got It (quality: 5)
 */

export interface SRSResult {
  interval: number;
  repetition: number;
  easeFactor: number;
  nextReviewDate: Date;
  masteryLevel: 0 | 1 | 2 | 3 | 4;
}

export function calculateSRS(
  quality: number,
  previousInterval: number,
  previousRepetition: number,
  previousEaseFactor: number
): SRSResult {
  let interval: number;
  let repetition: number;
  let easeFactor: number;

  if (quality >= 3) {
    if (previousRepetition === 0) {
      interval = 1;
    } else if (previousRepetition === 1) {
      interval = 6;
    } else {
      interval = Math.round(previousInterval * previousEaseFactor);
    }
    repetition = previousRepetition + 1;
  } else {
    repetition = 0;
    interval = 1;
  }

  // Update ease factor: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor =
    previousEaseFactor +
    (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  
  if (easeFactor < 1.3) {
    easeFactor = 1.3;
  }

  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);
  nextReviewDate.setHours(0, 0, 0, 0); // Start of the day

  // Mastery Logic
  // interval >= 21 days -> Mastered (4)
  // interval >= 7 days -> Proficient (3)
  // interval >= 2 days -> Familiar (2)
  // repetition > 0 -> Learning (1)
  // default -> New (0)
  
  let masteryLevel: 0 | 1 | 2 | 3 | 4 = 0;
  if (interval >= 21) masteryLevel = 4;
  else if (interval >= 7) masteryLevel = 3;
  else if (interval >= 2) masteryLevel = 2;
  else if (repetition > 0) masteryLevel = 1;

  return {
    interval,
    repetition,
    easeFactor,
    nextReviewDate,
    masteryLevel,
  };
}
