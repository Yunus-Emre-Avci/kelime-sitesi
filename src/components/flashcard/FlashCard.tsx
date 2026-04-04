import { motion } from 'framer-motion';
import type { Word } from '../../db/lexidb';
import { PillBadge } from '../ui';
import { Volume2, BookOpen, Zap } from 'lucide-react';

interface FlashCardProps {
  word: Word;
  isFlipped: boolean;
  onFlip: () => void;
}

export const FlashCard: React.FC<FlashCardProps> = ({ word, isFlipped, onFlip }) => {
  return (
    <div 
      className="relative w-full max-w-md h-[450px] perspective-1000 cursor-pointer group"
      onClick={onFlip}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden glass-elevated border-white/10 rounded-lg p-8 flex flex-col justify-between items-center text-center shadow-2xl">
          <div className="w-full flex justify-between items-start">
             <div className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors" onClick={(e) => {
               e.stopPropagation();
               window.speechSynthesis.speak(new SpeechSynthesisUtterance(word.english));
             }}>
               <Volume2 size={20} />
             </div>
             <PillBadge variant="primary" className="text-xs uppercase tracking-widest">{word.level}</PillBadge>
          </div>

          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 group-hover:scale-105 transition-transform duration-500">
              {word.english}
            </h2>
            <p className="font-mono text-primary text-lg opacity-80">{word.phonetic}</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1 text-muted text-sm font-medium uppercase tracking-tighter">
              <Zap size={14} className="text-primary" />
              Tap to reveal meaning
            </div>
            <div className="text-[10px] text-muted opacity-50 uppercase tracking-[0.2em]">LexiLearn Protocol v1.0</div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden glass-elevated border-primary/20 rounded-lg p-8 flex flex-col justify-between items-center text-center shadow-2xl rotate-y-180 overflow-y-auto">
          <div className="w-full flex justify-between items-start border-b border-white/10 pb-4 mb-4">
             <PillBadge variant="tertiary" className="text-xs uppercase tracking-widest">Meaning</PillBadge>
             <div className="text-xs font-mono text-muted">{word.english}</div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-8 w-full">
            <div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light mb-2">
                {word.turkishMeaning}
              </h3>
              <div className="h-[2px] w-12 bg-primary/30 mx-auto" />
            </div>

            <div className="space-y-4">
              {word.dictionaryDefinition && (
                <div className="text-sm text-on-surface/80 leading-relaxed max-w-xs mx-auto">
                  <span className="text-muted text-[10px] uppercase font-bold tracking-widest block mb-1">Definition</span>
                  {word.dictionaryDefinition}
                </div>
              )}
              
              {word.exampleSentence && (
                <div className="text-sm italic text-muted leading-relaxed font-serif p-4 bg-white/[0.03] rounded border border-white/5">
                  <span className="text-primary text-[10px] uppercase font-bold tracking-widest block mb-1 not-italic">Example</span>
                  "{word.exampleSentence.split(new RegExp(`(${word.english})`, 'gi')).map((part, i) => 
                    part.toLowerCase() === word.english.toLowerCase() 
                      ? <span key={i} className="text-primary font-bold not-italic">{part}</span> 
                      : part
                  )}"
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 w-full flex justify-center">
            <div className="text-[10px] text-muted uppercase tracking-widest flex items-center gap-2">
              <BookOpen size={12} />
              Protocol Response Required
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
