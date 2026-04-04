import { useState, useEffect, useCallback } from 'react';
import { clsx } from 'clsx';
import { useWordStore } from '../store/useWordStore';
import { useProgressStore } from '../store/useProgressStore';
import { Button, GlassCard, PillBadge, ProgressBar } from '../components/ui';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Zap, 
  HelpCircle,
  ArrowRight,
  Trophy
} from 'lucide-react';
import { motion } from 'framer-motion';
import { XP_CORRECT_QUIZ } from '../utils/xp';
import type { Word } from '../db/lexidb';

type QuestionType = 'en-tr' | 'tr-en' | 'sentence';

interface Question {
  type: QuestionType;
  word: Word;
  options: string[];
  correctAnswer: string;
}

export const Activities: React.FC = () => {
  const [activeActivity, setActiveActivity] = useState<'selection' | 'quiz' | 'fill-blank'>('selection');
  const [selectedUnit, setSelectedUnit] = useState<string | 'All'>('All');

  if (activeActivity === 'selection') {
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
        <header>
          <h1 className="text-3xl font-bold font-display">Activity Matrix</h1>
          <p className="text-muted text-sm mt-1">Challenge your cognitive recall with specialized training protocols.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ActivityCard 
            title="Neural Quiz" 
            desc="4-option multiple choice test alternating between meanings and sentence context."
            icon={<HelpCircle size={24} className="text-primary" />}
            difficulty="Medium"
            xp="+15 XP"
            onClick={() => setActiveActivity('quiz')}
          />
          <ActivityCard 
            title="Syntax Terminal" 
            desc="Construct sentences by filling in the missing technical vocabulary."
            icon={<Zap size={24} className="text-accent" />}
            difficulty="Hard"
            xp="+20 XP"
            onClick={() => setActiveActivity('fill-blank')}
          />
        </div>

        <GlassCard className="p-8">
          <header className="mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Zap className="text-primary" />
              Targeted Training
            </h2>
            <p className="text-muted text-xs">Filter activities by a specific curriculum unit.</p>
          </header>
          
          <div className="flex flex-wrap gap-3">
            {['All', 'Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6', 'Unit 7', 'Unit 8'].map(unit => (
              <button
                key={unit}
                onClick={() => setSelectedUnit(unit)}
                className={clsx(
                  "px-6 py-2 rounded-DEFAULT text-xs font-bold transition-all border",
                  selectedUnit === unit 
                    ? "bg-primary text-bg border-primary shadow-[0_0_15px_rgba(195,192,255,0.3)]" 
                    : "bg-white/5 border-white/10 text-muted hover:text-on-surface hover:border-white/20"
                )}
              >
                {unit}
              </button>
            ))}
          </div>
        </GlassCard>
      </div>
    );
  }

  if (activeActivity === 'quiz') {
    return <QuizEngine onExit={() => setActiveActivity('selection')} unit={selectedUnit} />;
  }

  return <FillBlankEngine onExit={() => setActiveActivity('selection')} unit={selectedUnit} />;
};

const ActivityCard: React.FC<{ 
  title: string, 
  desc: string, 
  icon: React.ReactNode, 
  difficulty: string, 
  xp: string,
  onClick: () => void 
}> = ({ title, desc, icon, difficulty, xp, onClick }) => (
  <GlassCard hover className="p-8 group cursor-pointer border border-white/5" onClick={onClick}>
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex gap-2">
        <PillBadge variant="secondary" className="text-[10px]">{difficulty}</PillBadge>
        <PillBadge variant="tertiary" className="text-[10px]">{xp}</PillBadge>
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
      {title}
      <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
    </h3>
    <p className="text-muted text-sm leading-relaxed mb-8">{desc}</p>
    <Button className="w-full" variant="ghost">Initialize Protocol</Button>
  </GlassCard>
);

const QuizEngine: React.FC<{ onExit: () => void, unit: string }> = ({ onExit, unit }) => {
  const { words } = useWordStore();
  const { addXP, updateStreak } = useProgressStore();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<{ word: string, correct: boolean }[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const getRandomDistractors = useCallback((currentWord: Word, field: 'english' | 'turkishMeaning') => {
    return words
      .filter(w => w.id !== currentWord.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w[field]);
  }, [words]);

  const generateQuestions = useCallback(() => {
    // Filter by unit if not 'All'
    const filteredWords = unit === 'All' 
      ? words 
      : words.filter(w => w.tags.includes(unit));

    if (filteredWords.length < 2) return;
    
    // Pick 10 random words (or fewer if not enough)
    const quizWords = [...filteredWords]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    
    const newQuestions: Question[] = quizWords.map(word => {
      const type: QuestionType = ['en-tr', 'tr-en', 'sentence'][Math.floor(Math.random() * 3)] as QuestionType;
      
      let correctAnswer = '';
      let options: string[] = [];

      if (type === 'en-tr') {
        correctAnswer = word.turkishMeaning;
        options = [correctAnswer, ...getRandomDistractors(word, 'turkishMeaning')];
      } else if (type === 'tr-en') {
        correctAnswer = word.english;
        options = [correctAnswer, ...getRandomDistractors(word, 'english')];
      } else {
        correctAnswer = word.english;
        options = [correctAnswer, ...getRandomDistractors(word, 'english')];
      }

      return {
        type,
        word,
        correctAnswer,
        options: options.sort(() => Math.random() - 0.5)
      };
    });

    setQuestions(newQuestions);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  }, [words, unit, getRandomDistractors]);

  useEffect(() => {
    generateQuestions();
  }, [generateQuestions]);

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    
    const isCorrect = option === questions[currentIndex].correctAnswer;
    if (isCorrect) {
      setScore(s => s + 1);
      addXP(XP_CORRECT_QUIZ);
    }
    
    setResults([...results, { word: questions[currentIndex].word.english, correct: isCorrect }]);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      updateStreak();
    }
  };

  if (isFinished) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto text-center space-y-8 pt-12">
        <Trophy className="text-primary inline-block mb-4" size={80} />
        <h2 className="text-4xl font-bold">Quiz Complete</h2>
        <div className="text-6xl font-black text-primary">{Math.round((score / questions.length) * 100)}%</div>
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          <GlassCard className="p-4">
            <div className="text-xs text-muted uppercase">Correct</div>
            <div className="text-2xl font-bold text-accent">{score}</div>
          </GlassCard>
          <GlassCard className="p-4">
            <div className="text-xs text-muted uppercase">XP Gained</div>
            <div className="text-2xl font-bold text-primary">+{score * XP_CORRECT_QUIZ}</div>
          </GlassCard>
        </div>
        <div className="flex gap-4 pt-12">
          <Button variant="ghost" className="flex-1" onClick={onExit}>Back to Base</Button>
          <Button variant="primary" className="flex-1" onClick={generateQuestions}>Try Again</Button>
        </div>
      </motion.div>
    );
  }

  if (questions.length === 0) return null;

  const q = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto space-y-12 relative">
      <button 
        onClick={onExit}
        className="absolute -top-12 right-0 p-3 hover:bg-white/5 rounded-full transition-colors group"
        title="Exit Activity"
      >
        <XCircle className="text-muted group-hover:text-danger transition-colors" size={24} />
      </button>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-muted">
          <span>Neural Quiz Session</span>
          <span>{currentIndex + 1} / {questions.length}</span>
        </div>
        <ProgressBar value={currentIndex + 1} max={questions.length} />
      </div>

      <GlassCard className="p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <PillBadge variant="primary" className="text-[10px]">{q.type.toUpperCase()}</PillBadge>
        </div>
        
        <div className="text-center mb-12">
          {q.type === 'sentence' ? (
            <div className="space-y-4">
              <div className="text-xs text-muted uppercase tracking-widest font-bold">Complete the sentence</div>
              <h3 className="text-2xl md:text-3xl font-serif italic text-on-surface leading-relaxed">
                "{q.word.exampleSentence.replace(new RegExp(q.word.english, 'gi'), '__________')}"
              </h3>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-xs text-muted uppercase tracking-widest font-bold">
                {q.type === 'en-tr' ? 'What is the Turkish meaning of' : 'Which English word means'}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                {q.type === 'en-tr' ? q.word.english : q.word.turkishMeaning}
              </h3>
              {q.type === 'en-tr' && <div className="text-primary font-mono">{q.word.phonetic}</div>}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {q.options.map((option, i) => (
            <button
              key={i}
              onMouseDown={() => handleOptionSelect(option)}
              className={clsx(
                'p-5 text-left rounded-lg border transition-all duration-300 font-medium group relative overflow-hidden',
                !isAnswered ? 'bg-white/5 border-white/10 hover:border-primary/50 hover:bg-white/[0.08]' : 
                option === q.correctAnswer ? 'bg-accent/10 border-accent/50 text-accent shadow-[0_0_20px_rgba(16,185,129,0.2)]' :
                option === selectedOption ? 'bg-danger/10 border-danger/50 text-danger' : 'bg-white/5 border-white/10 opacity-50'
              )}
            >
              <div className="flex items-center gap-3 relative z-10">
                <div className={clsx(
                  "w-8 h-8 rounded flex items-center justify-center text-xs font-bold border transition-colors",
                  option === q.correctAnswer && isAnswered ? "bg-accent border-accent text-bg" :
                  option === selectedOption && isAnswered ? "bg-danger border-danger text-bg" :
                  "bg-white/5 border-white/10 text-muted group-hover:border-primary group-hover:text-primary"
                )}>
                  {String.fromCharCode(65 + i)}
                </div>
                {option}
              </div>
            </button>
          ))}
        </div>

        {isAnswered && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-12 flex justify-between items-center p-4 bg-white/5 rounded border border-white/5">
            <div className="flex items-center gap-2">
              {selectedOption === q.correctAnswer ? (
                <div className="text-accent flex items-center gap-2 font-bold">
                  <CheckCircle2 size={20} /> Correct Recall
                </div>
              ) : (
                <div className="text-danger flex items-center gap-2 font-bold">
                  <XCircle size={20} /> Sync Failed
                </div>
              )}
            </div>
            <Button onClick={nextQuestion} size="sm" className="gap-2">
              Continue Protocol <ChevronRight size={16} />
            </Button>
          </motion.div>
        )}
      </GlassCard>
    </div>
  );
};

const FillBlankEngine: React.FC<{ onExit: () => void, unit: string }> = ({ onExit, unit }) => {
  const { words } = useWordStore();
  const { addXP, updateStreak } = useProgressStore();
  
  const [exercises, setExercises] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const filteredWords = unit === 'All' 
      ? words 
      : words.filter(w => w.tags.includes(unit));

    if (filteredWords.length > 0) {
      setExercises([...filteredWords].sort(() => Math.random() - 0.5).slice(0, 5));
    }
  }, [words, unit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswered) return;
    
    const correct = userInput.trim().toLowerCase() === exercises[currentIndex].english.toLowerCase();
    setIsCorrect(correct);
    setIsAnswered(true);
    if (correct) {
      setScore(s => s + 1);
      addXP(20);
    }
  };

  const next = () => {
    if (currentIndex + 1 < exercises.length) {
      setCurrentIndex(currentIndex + 1);
      setUserInput('');
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      updateStreak();
    }
  };

  if (isFinished) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto text-center space-y-8 pt-12">
        <Zap className="text-accent inline-block mb-4 shadow-[0_0_30px_rgba(16,185,129,0.3)]" size={80} />
        <h2 className="text-4xl font-bold">Protocol Executed</h2>
        <div className="text-6xl font-black text-accent">{score}/{exercises.length}</div>
        <p className="text-muted">Grammatical structures reinforced successfully.</p>
        <div className="flex gap-4 pt-12">
          <Button variant="ghost" className="flex-1" onClick={onExit}>Back</Button>
          <Button variant="primary" className="flex-1" onClick={() => {
            setExercises([...words].sort(() => Math.random() - 0.5).slice(0, 5));
            setCurrentIndex(0);
            setIsFinished(false);
            setScore(0);
          }}>Re-Initialize</Button>
        </div>
      </motion.div>
    );
  }

  if (exercises.length === 0) return null;
  const current = exercises[currentIndex];

  return (
    <div className="max-w-3xl mx-auto space-y-12 relative">
      <button 
        onClick={onExit}
        className="absolute -top-12 right-0 p-3 hover:bg-white/5 rounded-full transition-colors group"
        title="Exit Activity"
      >
        <XCircle className="text-muted group-hover:text-danger transition-colors" size={24} />
      </button>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-muted">
          <span>Syntax Terminal Session</span>
          <span>{currentIndex + 1} / {exercises.length}</span>
        </div>
        <ProgressBar value={currentIndex + 1} max={exercises.length} color="bg-accent" />
      </div>

      <GlassCard className="p-12">
        <div className="mb-8">
           <PillBadge variant="tertiary" className="text-[10px] uppercase tracking-widest mb-4">Context</PillBadge>
           <div className="text-lg text-muted italic mb-2">Meaning: {current.turkishMeaning}</div>
           <h3 className="text-2xl md:text-3xl font-serif text-on-surface leading-loose">
              "{current.exampleSentence.split(new RegExp(`(${current.english})`, 'gi')).map((part, i) => 
                part.toLowerCase() === current.english.toLowerCase() 
                  ? <span key={i} className="inline-block min-w-[150px] border-b-2 border-primary/50 text-transparent">_______</span> 
                  : part
              )}"
           </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative group">
            <input 
              type="text" 
              autoFocus
              className={clsx(
                "w-full bg-transparent border-b-2 px-0 py-4 text-3xl font-mono text-center transition-all focus:outline-none",
                !isAnswered ? "border-white/10 focus:border-primary" : 
                isCorrect ? "border-accent text-accent" : "border-danger text-danger"
              )}
              placeholder="TYPE THE WORD"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={isAnswered}
            />
            {isAnswered && !isCorrect && (
              <div className="text-center mt-4 text-accent font-bold uppercase tracking-widest animate-pulse">
                Correct: {current.english}
              </div>
            )}
          </div>

          <div className="flex justify-center">
             {!isAnswered ? (
               <Button type="submit" size="lg" className="w-full md:w-auto px-12">Submit Response</Button>
             ) : (
               <Button type="button" size="lg" className="w-full md:w-auto px-12" onClick={next}>
                 Next Exercise <ArrowRight className="ml-2" size={18} />
               </Button>
             )}
          </div>
        </form>
      </GlassCard>
    </div>
  );
};
