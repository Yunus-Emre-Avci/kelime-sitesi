import React, { useMemo } from 'react';
import { useWordStore } from '../store/useWordStore';
import { useProgressStore } from '../store/useProgressStore';
import { GlassCard, ProgressBar } from '../components/ui';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { 
  TrendingUp, 
  Award, 
  Brain, 
  CheckCircle2, 
  Target,
  Zap,
  Activity
} from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Progress: React.FC = () => {
  const { words } = useWordStore();
  const { progress } = useProgressStore();

  const masteryData = useMemo(() => {
    const counts = [0, 0, 0, 0, 0];
    words.forEach(w => counts[w.masteryLevel]++);
    return [
      { name: 'New', value: counts[0], color: '#94A3B8' },
      { name: 'Learning', value: counts[1], color: '#C3C0FF' },
      { name: 'Familiar', value: counts[2], color: '#F59E0B' },
      { name: 'Proficient', value: counts[3], color: '#10B981' },
      { name: 'Mastered', value: counts[4], color: '#4F46E5' },
    ];
  }, [words]);

  // Mock weekly data (in a real app, this would come from the sessions table)
  const weeklyData = [
    { day: 'Mon', xp: 120 },
    { day: 'Tue', xp: 210 },
    { day: 'Wed', xp: 50 },
    { day: 'Thu', xp: 300 },
    { day: 'Fri', xp: 150 },
    { day: 'Sat', xp: 420 },
    { day: 'Sun', xp: 180 },
  ];

    const totalAccuracy = useMemo(() => {
    const totalCorrect = words.reduce((acc, w) => acc + w.correctCount, 0);
    const totalWrong = words.reduce((acc, w) => acc + w.wrongCount, 0);
    const total = totalCorrect + totalWrong;
    return total > 0 ? Math.round((totalCorrect / total) * 100) : 0;
  }, [words]);

  const unitStats = useMemo(() => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map(n => {
      const unitWords = words.filter(w => w.tags.includes(`Unit ${n}`));
      const masteredCount = unitWords.filter(w => w.masteryLevel >= 4).length;
      const progress = unitWords.length > 0 ? (masteredCount / unitWords.length) * 100 : 0;
      return { 
        unit: `Unit ${n}`, 
        progress: Math.round(progress),
        total: unitWords.length,
        mastered: masteredCount
      };
    });
  }, [words]);

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8 pb-20"
    >
      <header>
        <h1 className="text-3xl font-bold font-display">Neural Progress Terminal</h1>
        <p className="text-muted text-sm mt-1">Real-time analysis of your linguistic synchronization.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div variants={item} className="lg:col-span-2">
          <GlassCard className="p-8 h-full">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Activity className="text-primary" size={20} />
              Weekly Cognitive Load (XP)
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C3C0FF" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity={0.4}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="day" 
                    stroke="#94A3B8" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="#94A3B8" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{ 
                      backgroundColor: '#1B1A26', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#E3E0F1'
                    }}
                  />
                  <Bar dataKey="xp" fill="url(#barGradient)" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={item}>
          <GlassCard className="p-8 h-full flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 w-full flex items-center gap-2">
              <Brain className="text-purple-400" size={20} />
              Mastery Matrix
            </h3>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={masteryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {masteryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1B1A26', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36} 
                    formatter={(value) => <span className="text-xs text-muted font-bold uppercase">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
               <div className="text-2xl font-bold text-on-surface">
                 {Math.round((words.filter(w => w.masteryLevel >= 3).length / words.length) * 100)}%
               </div>
               <div className="text-[10px] text-muted uppercase tracking-widest">Efficiency Rating</div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<TrendingUp className="text-primary" />} 
          label="Neural Growth" 
          value={`+${calculateGrowth()}%`} 
          sub="Last 7 days" 
        />
        <StatCard 
          icon={<Target className="text-accent" />} 
          label="Global Accuracy" 
          value={`${totalAccuracy}%`} 
          sub="Session average" 
        />
        <StatCard 
          icon={<Award className="text-orange-500" />} 
          label="Rank" 
          value={progress?.level ? `Lvl ${progress.level}` : 'N/A'} 
          sub="Aspirant Polyglot" 
        />
        <StatCard 
          icon={<CheckCircle2 className="text-blue-400" />} 
          label="Sync Points" 
          value={progress?.totalXP || 0} 
          sub="Available for usage" 
        />
      </div>

      <GlassCard className="p-8">
        <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
          <Target className="text-primary" size={20} />
          Curriculum Synchronization (Units 1-8)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {unitStats.map((stat, idx) => (
            <div key={stat.unit} className="space-y-2">
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted uppercase tracking-widest">CURRICULUM SEGMENT</span>
                  <span className="text-sm font-bold text-on-surface">{stat.unit}</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-display text-primary">{stat.progress}%</span>
                  <span className="text-xs text-muted block">{stat.mastered} / {stat.total} words mastered</span>
                </div>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.progress}%` }}
                  transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                  className="h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_15px_rgba(195,192,255,0.3)]"
                />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="text-primary" size={20} />
            Mastery Pathway
          </h3>
          <div className="space-y-6">
            {masteryData.slice(1).reverse().map((m, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span style={{ color: m.color }}>{m.name}</span>
                  <span className="text-muted">{m.value} Words</span>
                </div>
                <ProgressBar value={m.value} max={words.length} color={`bg-[${m.color}]`} />
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Zap className="text-orange-500" size={20} />
            Study Momentum
          </h3>
          <div className="flex flex-col items-center justify-center h-full space-y-4">
             <div className="text-6xl font-black text-orange-500 mb-2 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">
               {progress?.currentStreak || 0}
             </div>
             <div className="text-sm text-muted uppercase tracking-[0.3em] font-bold">Daily Protocol Streak</div>
             <p className="text-center text-muted max-w-xs text-sm italic">
               "{progress?.currentStreak && progress.currentStreak > 0 ? "Synchronization is high. Maintain the frequency for optimal consolidation." : "Initialize a protocol to begin synchronization."}"
             </p>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode, label: string, value: string | number, sub: string }> = ({ icon, label, value, sub }) => (
  <GlassCard className="p-6 border-white/5 hover:border-white/20 transition-all">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-2 bg-white/5 rounded-lg border border-white/10">{icon}</div>
      <div className="text-[10px] text-muted font-bold uppercase tracking-widest">{label}</div>
    </div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-xs text-muted italic">{sub}</div>
  </GlassCard>
);

function calculateGrowth() {
  // Mock growth calculation for UI
  return 12;
}
