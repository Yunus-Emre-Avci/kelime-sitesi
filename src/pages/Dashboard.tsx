import React, { useMemo } from 'react';
import { useWordStore } from '../store/useWordStore';
import { useProgressStore } from '../store/useProgressStore';
import { GlassCard, PillBadge, Button } from '../components/ui';
import { 
  Zap, 
  Calendar, 
  TrendingUp, 
  AlertCircle,
  Play,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Dashboard: React.FC = () => {
  const { words } = useWordStore();
  const { progress } = useProgressStore();

  const dueWords = useMemo(() => {
    const now = new Date();
    return words.filter(w => new Date(w.nextReviewDate) <= now);
  }, [words]);



  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <header className="flex flex-col gap-2">
        <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
          Welcome back, <span className="text-primary italic">Lexicographer</span>.
        </motion.h1>
        <motion.p variants={item} className="text-muted text-lg max-w-2xl">
          Your path to English mastery is clear. You have {dueWords.length} words due for review today.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div variants={item}>
          <GlassCard className="p-6 h-full border-l-4 border-l-primary">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded">
                <Calendar className="text-primary" size={24} />
              </div>
              <PillBadge variant="primary">Today</PillBadge>
            </div>
            <div className="text-3xl font-bold">{dueWords.length}</div>
            <div className="text-sm text-muted">Words due for review</div>
          </GlassCard>
        </motion.div>

        <motion.div variants={item}>
          <GlassCard className="p-6 h-full border-l-4 border-l-orange-500">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-orange-500/10 rounded">
                <Zap className="text-orange-500" size={24} />
              </div>
              <PillBadge variant="warning">Hot</PillBadge>
            </div>
            <div className="text-3xl font-bold">{progress?.currentStreak || 0} Days</div>
            <div className="text-sm text-muted">Current daily streak</div>
          </GlassCard>
        </motion.div>

        <motion.div variants={item}>
          <GlassCard className="p-6 h-full border-l-4 border-l-emerald-500">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-500/10 rounded">
                <TrendingUp className="text-emerald-500" size={24} />
              </div>
              <PillBadge variant="tertiary">Mastery</PillBadge>
            </div>
            <div className="text-3xl font-bold">
              {words.filter(w => w.masteryLevel === 4).length}
            </div>
            <div className="text-sm text-muted">Total words mastered</div>
          </GlassCard>
        </motion.div>

        <motion.div variants={item}>
          <GlassCard className="p-6 h-full border-l-4 border-l-purple-500">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-purple-500/10 rounded">
                <Activity className="text-purple-500" size={24} />
              </div>
              <PillBadge variant="secondary">Global</PillBadge>
            </div>
            <div className="text-3xl font-bold">{words.length}</div>
            <div className="text-sm text-muted">Total word bank size</div>
          </GlassCard>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div variants={item} className="lg:col-span-2">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <AlertCircle className="text-danger" size={20} />
                🔥 Week Words (Unit Training)
              </h3>
              <div className="text-xs text-muted italic">Words you've missed or are learning.</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(n => {
                const unitTag = `Unit ${n}`;
                const unitWeakWords = words.filter(w => 
                  w.tags.includes(unitTag) && 
                  (w.wrongCount > 0 && w.masteryLevel < 2)
                );

                if (unitWeakWords.length === 0) return null;

                return (
                  <div key={n} className="p-4 rounded-DEFAULT bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all group flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Unit {n}</div>
                        <div className="text-2xl font-bold">{unitWeakWords.length}</div>
                        <div className="text-[10px] text-muted uppercase">Target Words</div>
                      </div>
                      <div className="p-2 bg-danger/10 rounded">
                        <Activity size={16} className="text-danger" />
                      </div>
                    </div>
                    
                    <Link to={`/flashcards?mode=unit-weak&unit=Unit+${n}`}>
                      <Button size="sm" className="w-full text-xs py-1 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                        Practice Unit {n}
                      </Button>
                    </Link>
                  </div>
                );
              })}
              {words.filter(w => w.wrongCount > 0 && w.masteryLevel < 2).length === 0 && (
                <div className="col-span-2 text-center py-12 text-muted italic border border-dashed border-white/10 rounded-lg">
                  No weak words detected in any unit. You're doing great!
                </div>
              )}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={item}>
          <GlassCard className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h3 className="text-xl font-bold mb-4">Quick Session</h3>
            <p className="text-muted text-sm mb-6">
              Start a 5-minute flashcard session with words due for review today.
            </p>
            <div className="space-y-4">
              <Link to="/flashcards?mode=due">
                <Button className="w-full justify-between" size="lg">
                  <div className="flex items-center gap-2">
                    <Play fill="currentColor" size={16} />
                    Review Now
                  </div>
                  <span className="bg-bg/20 px-2 py-0.5 rounded text-xs">
                    {dueWords.length} Words
                  </span>
                </Button>
              </Link>
              <Link to="/activities">
                <Button variant="ghost" className="w-full">
                  Explore Activities
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Zap className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted uppercase">Daily Goal</div>
                  <div className="font-bold">{progress?.dailyGoal || 0} Words per day</div>
                </div>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary shadow-[0_0_8px_rgba(195,192,255,0.4)]"
                  style={{ width: `${Math.min(100, (dueWords.length / (progress?.dailyGoal || 20)) * 100)}%` }}
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};
