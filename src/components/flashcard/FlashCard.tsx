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
               const utterance = new SpeechSynthesisUtterance(word.english);
                utterance.lang = 'en-US';
                utterance.rate = 0.85; // Slightly slower for better clarity and learning
                
                // Try to find a high quality English voice if available
                const voices = window.speechSynthesis.getVoices();
                const englishVoice = voices.find(v => 
                  (v.lang.startsWith('en-US') || v.lang.startsWith('en-GB')) && 
                  (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium') || v.name.includes('Microsoft'))
                ) || voices.find(v => v.lang.startsWith('en-US')) || voices.find(v => v.lang.startsWith('en-GB')) || voices.find(v => v.lang.startsWith('en'));
                
                if (englishVoice) {
                  utterance.voice = englishVoice;
                }
                
                window.speechSynthesis.speak(utterance);
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
        <div className="absolute inset-0 backface-hidden glass-elevated border-primary/20 rounded-lg p-6 flex flex-col justify-between items-center text-center shadow-2xl rotate-y-180 overflow-hidden">
          <div className="w-full flex justify-between items-start border-b border-white/10 pb-2 mb-2">
             <PillBadge variant="tertiary" className="text-[10px] uppercase tracking-widest font-bold">Lexical Intel</PillBadge>
             <div className="text-[10px] font-mono text-muted uppercase tracking-widest">{word.english}</div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-3 w-full overflow-hidden">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                {word.turkishMeaning || "Anlam Girilmedi"}
              </h3>
              {word.turkishDefinition && (
                <p className="text-[11px] text-muted leading-tight max-w-[280px] mx-auto italic">
                  {word.turkishDefinition}
                </p>
              )}
            </div>

            <div className="space-y-2.5">
              {word.dictionaryDefinition && (
                <div className="text-[11px] text-on-surface/80 leading-snug max-w-[300px] mx-auto bg-white/[0.02] p-2 rounded border border-white/5 text-left border-l-primary/40 border-l-2">
                  <span className="text-primary text-[9px] uppercase font-bold tracking-widest block mb-0.5">English Definition</span>
                  {word.dictionaryDefinition}
                </div>
              )}
              
              {word.exampleSentence && (
                <div className="text-xs italic text-muted leading-snug font-serif p-3 bg-white/[0.03] rounded border border-white/5 text-left relative overflow-hidden">
                  <span className="text-accent text-[9px] uppercase font-bold tracking-widest block mb-1 not-italic">Usage Example</span>
                  <div className="relative z-10">
                    "{word.exampleSentence.split(new RegExp(`(${word.english})`, 'gi')).map((part, i) => 
                      part.toLowerCase() === word.english.toLowerCase() 
                        ? <span key={i} className="text-accent font-bold not-italic">{part}</span> 
                        : part
                    )}"
                  </div>
                  <div className="absolute top-0 right-0 w-12 h-12 bg-accent/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-xl" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-white/10 w-full flex justify-center">
            <div className="text-[8px] text-muted uppercase tracking-[0.2em] flex items-center gap-2 opacity-40">
              <BookOpen size={10} />
              Protocol Synchronized
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
