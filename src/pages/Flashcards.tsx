import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useWordStore } from '../store/useWordStore';
import { type Word } from '../db/lexidb';
import { useSessionStore } from '../store/useSessionStore';
import { useProgressStore } from '../store/useProgressStore';
import { FlashCard } from '../components/flashcard/FlashCard';
import { Button, GlassCard, PillBadge, ProgressBar } from '../components/ui';
import { 
  X, 
  Check, 
  AlertCircle, 
  ChevronRight, 
  Home, 
  RotateCcw,
  Trophy,
  Zap,
  BookOpen
} from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { XP_CORRECT_FLASHCARD } from '../utils/xp';

export const Flashcards: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
   const query = new URLSearchParams(location.search);
  const mode = query.get('mode') as 'due' | 'all' | 'weak' | 'unit' | 'unit-weak' | null;
  const unitParam = query.get('unit');

  const { words, updateWordSRS } = useWordStore();
  const { 
    isActive, 
    currentIndex, 
    words: sessionWords, 
    correctAnswers, 
    xpEarned,
    startSession, 
    nextWord, 
    endSession, 
    resetSession 
  } = useSessionStore();
  const { addXP, updateStreak } = useProgressStore();

  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionFinished, setSessionFinished] = useState(false);

  // Initialize session
  useEffect(() => {
    if (mode && !isActive) {
      const now = new Date();
      let filtered: Word[] = [];
      
      if (mode === 'due') {
        filtered = words.filter(w => new Date(w.nextReviewDate) <= now);
      } else if (mode === 'weak' || mode === 'unit-weak') {
        filtered = words.filter(w => {
          const isWeak = w.wrongCount > 0 && w.masteryLevel < 3;
          const matchesUnit = mode === 'unit-weak' ? w.tags.includes(unitParam || '') : true;
          return isWeak && matchesUnit;
        });
      } else if (mode === 'unit' && unitParam) {
        filtered = words.filter(w => w.tags.includes(unitParam));
      } else {
        filtered = [...words].sort(() => Math.random() - 0.5).slice(0, 20);
      }

      if (filtered.length > 0) {
        startSession('flashcard', filtered);
        setSessionFinished(false);
      }
    }
  }, [mode, isActive, words, startSession, unitParam]);

  const handleResponse = async (quality: number) => {
    const currentWord = sessionWords[currentIndex];
    if (!currentWord) return;

    const isCorrect = quality >= 3;
    
    // First, flip the card back to the front to hide the current answer
    setIsFlipped(false);
    
    // Wait for the flip-back animation (300ms is enough for a smooth transition before the word changes)
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Update SRS
    await updateWordSRS(currentWord.id, quality);
    
    // Update progress
    if (isCorrect) {
      await addXP(XP_CORRECT_FLASHCARD);
    }
    
    // Move to next word in the store
    nextWord(isCorrect, isCorrect ? XP_CORRECT_FLASHCARD : 0);

    // Check if we just answered the last word
    if (currentIndex + 1 >= sessionWords.length) {
      setSessionFinished(true);
      await endSession();
      await updateStreak();
    }
  };

  if (!mode && !isActive) {
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
        <header>
          <h1 className="text-3xl font-bold font-display">Study Hub</h1>
          <p className="text-muted text-sm italic mt-1">Select your study protocol to begin.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StudyModeCard 
            title="SRS Review" 
            desc="Focus on words due for review today based on SM-2 algorithm."
            icon={<Zap className="text-primary" />}
            count={words.filter(w => new Date(w.nextReviewDate) <= new Date()).length}
            link="/flashcards?mode=due"
            variant="primary"
          />
          <StudyModeCard 
            title="Weak Words" 
            desc="Focus on words you struggle with (wrongCount > 0 & level < 3)."
            icon={<AlertCircle className="text-danger" />}
            count={words.filter(w => w.wrongCount > 0 && w.masteryLevel < 3).length}
            link="/flashcards?mode=weak"
            variant="warning"
          />
          <StudyModeCard 
            title="Random Mix" 
            desc="A quick session of 20 random words from your bank."
            icon={<BookOpen className="text-purple-400" />}
             count={words.length}
            link="/flashcards?mode=all"
            variant="secondary"
          />
        </div>

        <GlassCard className="p-8">
          <header className="mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <BookOpen className="text-primary" />
              Unit Training
            </h2>
            <p className="text-muted text-xs">Targeted practice for specific curriculum units.</p>
          </header>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => {
              const unitWords = words.filter(w => w.tags.includes(`Unit ${n}`));
              const masteredCount = unitWords.filter(w => w.masteryLevel >= 4).length;
              const progress = unitWords.length > 0 ? (masteredCount / unitWords.length) * 100 : 0;
              
              return (
                <div key={n} className="relative group">
                  <Link 
                    to={`/flashcards?mode=unit&unit=Unit+${n}`}
                    className="flex flex-col items-center p-3 rounded-DEFAULT bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all"
                  >
                    <span className="text-xs font-bold text-muted group-hover:text-primary mb-1">UNIT</span>
                    <span className="text-2xl font-bold font-display">{n}</span>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </Link>
                  {unitWords.filter(w => w.wrongCount > 0 && w.masteryLevel < 3).length > 0 && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-danger text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-bg shadow-lg animate-pulse">
                      {unitWords.filter(w => w.wrongCount > 0 && w.masteryLevel < 3).length}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>
    );
  }

  if (sessionFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center space-y-8 pt-12"
      >
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <Trophy className="text-primary relative inline-block mb-4" size={80} />
        </div>
        
        <div>
          <h2 className="text-4xl font-extrabold mb-2">Session Complete!</h2>
          <p className="text-muted">You've successfully completed the study protocol.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <StatBox label="Reviewed" value={sessionWords.length} />
          <StatBox label="Accuracy" value={`${Math.round((correctAnswers / sessionWords.length) * 100)}%`} color="text-accent" />
          <StatBox label="XP Earned" value={`+${xpEarned}`} color="text-primary" />
          <StatBox label="Streak" value={useProgressStore.getState().progress?.currentStreak || 0} color="text-orange-500" />
        </div>

        <div className="flex items-center gap-4 pt-12">
          <Button variant="ghost" className="flex-1" onClick={() => {
            resetSession();
            setSessionFinished(false);
          }}>
            <RotateCcw className="mr-2" size={18} />
            Study Again
          </Button>
          <Link to="/" className="flex-1">
            <Button className="w-full">
              <Home className="mr-2" size={18} />
              Back to Terminal
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  if (!sessionWords.length && mode) {
     return (
       <div className="flex flex-col items-center justify-center p-24 text-center glass rounded-lg max-w-xl mx-auto">
         <div className="p-4 bg-muted/10 rounded-full mb-6">
           <AlertCircle className="text-muted" size={48} />
         </div>
         <h2 className="text-2xl font-bold mb-2">No words to review</h2>
         <p className="text-muted mb-8">Your review queue is empty for this mode. Great job!</p>
         <Link to="/">
           <Button variant="primary">Return Home</Button>
         </Link>
       </div>
     )
  }

  const currentWord = sessionWords[currentIndex];

  if (!currentWord && !sessionFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-200px)] flex flex-col items-center justify-center gap-12 animate-in fade-in zoom-in-95 relative">
      <button 
        onClick={() => {
          resetSession();
          navigate('/flashcards');
        }}
        className="absolute top-0 right-0 p-3 hover:bg-white/5 rounded-full transition-colors group"
        title="Exit Session"
      >
        <X className="text-muted group-hover:text-danger transition-colors" size={24} />
      </button>

      <div className="w-full max-w-md space-y-4">
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-muted">
          <span>Session Progress</span>
          <span>{currentIndex + 1} / {sessionWords.length}</span>
        </div>
        <ProgressBar value={currentIndex + 1} max={sessionWords.length} />
      </div>

      <FlashCard 
        word={currentWord} 
        isFlipped={isFlipped} 
        onFlip={() => setIsFlipped(!isFlipped)} 
      />

      <div className="h-20 w-full flex justify-center items-center gap-4">
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="tip"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-muted text-sm font-medium italic opacity-50 flex items-center gap-2">
                <Zap size={14} className="text-primary" />
                Tap card to show meaning and reveal controls
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleResponse(0);
                }}
                className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity group/skip"
              >
                Skip Word
                <ChevronRight size={12} className="ml-1 group-hover/skip:translate-x-0.5 transition-transform" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="controls"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center gap-4 px-2"
            >
              <FeedbackButton 
                onClick={() => handleResponse(0)} 
                color="text-danger" 
                hoverBg="hover:bg-danger/20"
                icon={<X size={20} />}
                label="Didn't Know"
                sub="Reset SRS"
              />
              <FeedbackButton 
                onClick={() => handleResponse(3)} 
                color="text-orange-500" 
                hoverBg="hover:bg-orange-500/20"
                icon={<AlertCircle size={20} />}
                label="Almost"
                sub="Soon"
              />
              <FeedbackButton 
                onClick={() => handleResponse(5)} 
                color="text-accent" 
                hoverBg="hover:bg-accent/20"
                icon={<Check size={20} />}
                label="Got It"
                sub="Mastered"
                isPrimary
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const StudyModeCard: React.FC<{ 
  title: string, 
  desc: string, 
  icon: React.ReactNode, 
  count: number, 
  link: string,
  variant: 'primary' | 'secondary' | 'warning' | 'tertiary'
}> = ({ title, desc, icon, count, link, variant }) => (
  <Link to={link}>
    <GlassCard hover className="p-8 h-full flex flex-col justify-between group">
      <div>
        <div className="p-3 bg-white/5 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          {title}
          <ChevronRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
        </h3>
        <p className="text-muted text-sm leading-relaxed">{desc}</p>
      </div>
      <div className="mt-8 flex justify-between items-center text-xs">
        <span className="uppercase tracking-widest font-bold opacity-30">Status Monitor active</span>
        <PillBadge variant={variant}>{count} Words Available</PillBadge>
      </div>
    </GlassCard>
  </Link>
);

const FeedbackButton: React.FC<{ 
  onClick: () => void, 
  color: string, 
  hoverBg: string,
  icon: React.ReactNode,
  label: string,
  sub: string,
  isPrimary?: boolean
}> = ({ onClick, color, hoverBg, icon, label, sub, isPrimary }) => (
  <button 
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    className={clsx(
      "glass border border-white/10 p-4 rounded-lg min-w-[120px] transition-all duration-300 group hover:border-white/30",
      hoverBg,
      isPrimary && "shadow-[0_0_20px_rgba(16,185,129,0.2)] bg-accent/5 border-accent/20"
    )}
  >
    <div className={clsx("flex justify-center mb-1 group-hover:scale-110 transition-transform", color)}>
      {icon}
    </div>
    <div className={clsx("text-[10px] font-bold uppercase tracking-widest", color)}>
      {label}
    </div>
    <div className="text-[10px] text-muted opacity-50 uppercase tracking-tighter">
      {sub}
    </div>
  </button>
);

const StatBox: React.FC<{ label: string, value: string | number, color?: string }> = ({ label, value, color = "text-on-surface" }) => (
  <GlassCard className="p-4 text-center">
    <div className="text-xs text-muted font-bold uppercase tracking-widest mb-1">{label}</div>
    <div className={clsx("text-2xl font-bold", color)}>{value}</div>
  </GlassCard>
);
