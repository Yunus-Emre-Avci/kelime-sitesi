import React, { useState } from 'react';
import { useProgressStore } from '../store/useProgressStore';
import { useWordStore } from '../store/useWordStore';
import { GlassCard, Button } from '../components/ui';
import { 
  Download, 
  Upload, 
  AlertTriangle,
  Zap,
  Target,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Settings: React.FC = () => {
  const { progress, setDailyGoal, resetProgress } = useProgressStore();
  const { words, importCSV, clearWords, initdb } = useWordStore();
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [resetCode, setResetCode] = useState('');

  const handleExport = () => {
    const headers = ['english', 'phonetic', 'turkishmeaning', 'definition', 'example', 'level'];
    const rows = words.map(w => [
      w.english, 
      w.phonetic, 
      w.turkishMeaning, 
      w.dictionaryDefinition, 
      w.exampleSentence, 
      w.level
    ]);
    const csvContent = [headers, ...rows].map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'lexilearn-backup.csv';
    link.click();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        importCSV(text);
        alert('Vocabulary data synchronization successful.');
      };
      reader.readAsText(file);
    }
  };

  const handleReset = async () => {
    if (resetCode === 'RESET') {
      await clearWords();
      await initdb();
      await resetProgress();
      setShowResetConfirm(false);
      setResetCode('');
      alert('All progress, history, and local caches have been incinerated. The environment has been re-seeded.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4">
      <header>
        <h1 className="text-3xl font-bold font-display">System Configuration</h1>
        <p className="text-muted text-sm mt-1">Adjust the core parameters of your LexiLearn experience.</p>
      </header>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-muted flex items-center gap-2">
            <Target size={14} className="text-primary" />
            Learning Parameters
          </h2>
          
          <GlassCard className="p-8 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded">
                    <Zap className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-bold">Daily Word Goal</div>
                    <div className="text-xs text-muted">The amount of words to sync daily.</div>
                  </div>
                </div>
                <div className="text-3xl font-black text-primary">{progress?.dailyGoal || 20}</div>
              </div>
              <input 
                type="range" 
                min="5" 
                max="50" 
                step="5"
                value={progress?.dailyGoal || 20}
                onChange={(e) => setDailyGoal(Number(e.target.value))}
                className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-muted font-bold uppercase tracking-widest">
                <span>5 Words</span>
                <span>50 Words</span>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white/5" />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded">
                  <ShieldCheck className="text-purple-400" size={20} />
                </div>
                <div>
                  <div className="font-bold">Preferred Proficiency Level</div>
                  <div className="text-xs text-muted">Targeted vocabulary database selection.</div>
                </div>
              </div>
              <div className="flex gap-2">
                {['B1', 'B2', 'Both'].map((lvl) => (
                   <button 
                    key={lvl}
                    className="px-4 py-2 rounded glass border border-white/10 text-xs font-bold hover:bg-white/5 transition-all"
                   >
                     {lvl}
                   </button>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-muted flex items-center gap-2">
            <Download size={14} className="text-accent" />
            Data Persistence & Migration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard hover className="p-6 cursor-pointer group" onClick={handleExport}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Download className="text-accent" size={24} />
                </div>
                <div>
                   <div className="font-bold">Local Backup (CSV)</div>
                   <div className="text-xs text-muted">Download your entire vocabulary list.</div>
                </div>
              </div>
            </GlassCard>

            <label className="cursor-pointer">
              <input type="file" className="hidden" accept=".csv" onChange={handleImport} />
              <GlassCard hover className="p-6 cursor-pointer group h-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Upload className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Restore Cache</div>
                    <div className="text-xs text-muted">Upload a LexiLearn compatible CSV.</div>
                  </div>
                </div>
              </GlassCard>
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-muted flex items-center gap-2">
            <AlertTriangle size={14} className="text-danger" />
            Terminal Clearance
          </h2>
          
          <GlassCard className="p-8 border-danger/20 bg-danger/5">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div className="space-y-1">
                 <h3 className="font-bold text-danger">Reset All Local Data</h3>
                 <p className="text-sm text-muted">This action will incinerate all progress, history, and word bank additions. There is no recovery protocol.</p>
               </div>
               <Button variant="danger" className="md:w-32" onClick={() => setShowResetConfirm(true)}>Execute</Button>
             </div>
          </GlassCard>
        </section>
      </div>

      {/* Reset Confirmation Modal */}
      <AnimatePresence>
        {showResetConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResetConfirm(false)}
              className="absolute inset-0 bg-bg/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative glass-elevated border-danger/30 p-8 max-w-md w-full rounded-lg"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                 <div className="p-4 bg-danger/10 rounded-full border border-danger/20">
                   <AlertTriangle className="text-danger" size={48} />
                 </div>
                 <div className="space-y-2">
                   <h3 className="text-2xl font-bold text-white">Critical Confirmation</h3>
                   <p className="text-muted text-sm">To confirm the total reset of your LexiLearn environment, please type <span className="text-danger font-mono font-bold">RESET</span> below.</p>
                 </div>
                 
                 <input 
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 font-mono text-center text-xl tracking-widest focus:outline-none focus:border-danger/50"
                  value={resetCode}
                  onChange={(e) => setResetCode(e.target.value.toUpperCase())}
                  placeholder="CODE"
                 />

                 <div className="flex w-full gap-4 pt-4">
                    <Button variant="ghost" className="flex-1" onClick={() => setShowResetConfirm(false)}>Abort</Button>
                    <Button variant="danger" className="flex-1" disabled={resetCode !== 'RESET'} onClick={handleReset}>Confirm Purge</Button>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
