import React, { useState, useMemo } from 'react';
import { useWordStore } from '../store/useWordStore';
import { GlassCard, Button, PillBadge, TerminalInput } from '../components/ui';
import { 
  Plus, 
  Search, 
  Download, 
  Upload, 
  Edit2, 
  Trash2,
  Book
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

export const WordBank: React.FC = () => {
  const { words, deleteWord, importCSV } = useWordStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<'All' | 'B1' | 'B2'>('All');
  const [unitFilter, setUnitFilter] = useState<string>('All');
  const [masteryFilter, setMasteryFilter] = useState<number | 'All'>('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredWords = useMemo(() => {
    return words.filter(word => {
      const matchesSearch = word.english.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           word.turkishMeaning.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel = levelFilter === 'All' || word.level === levelFilter;
      const matchesUnit = unitFilter === 'All' || word.tags.includes(unitFilter);
      const matchesMastery = masteryFilter === 'All' || word.masteryLevel === masteryFilter;
      
      return matchesSearch && matchesLevel && matchesUnit && matchesMastery;
    });
  }, [words, searchTerm, levelFilter, unitFilter, masteryFilter]);

  const exportCSV = () => {
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
    link.download = 'lexilearn-vocabulary.csv';
    link.click();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        importCSV(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold font-display">Word Bank</h1>
          <p className="text-muted text-sm mt-1">Manage and expand your personal lexicon.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={exportCSV} className="gap-2">
            <Download size={18} />
            Export
          </Button>
          <label className="cursor-pointer">
            <input type="file" className="hidden" accept=".csv" onChange={handleImport} />
            <div className="btn-ghost flex items-center gap-2">
              <Upload size={18} />
              Import
            </div>
            <p className="text-muted text-xs mt-1">Total words in synchronization: <span className="text-primary font-bold">{words.length}</span></p>
          </label>
          <Button onClick={() => setIsAddModalOpen(true)} className="gap-2">
            <Plus size={18} />
            Add Word
          </Button>
        </div>
      </header>

      <GlassCard className="p-6">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search English or Turkish..."
                className="w-full bg-white/5 border border-white/10 rounded-DEFAULT pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary/50 transition-all font-mono text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-white/5 p-1 rounded-DEFAULT border border-white/10">
              {['All', 'B1', 'B2'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevelFilter(lvl as 'All' | 'B1' | 'B2')}
                  className={clsx(
                    'px-4 py-1.5 rounded-DEFAULT text-xs font-bold transition-all',
                    levelFilter === lvl ? 'bg-primary text-bg shadow-[0_0_10px_rgba(195,192,255,0.3)]' : 'text-muted hover:text-on-surface'
                  )}
                >
                  {lvl}
                </button>
              ))}
            </div>

            <select 
              className="bg-white/5 border border-white/10 rounded-DEFAULT px-4 py-2.5 text-xs font-bold text-on-surface focus:outline-none focus:border-primary/50"
              value={unitFilter}
              onChange={(e) => setUnitFilter(e.target.value)}
            >
              <option value="All">All Units</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                <option key={n} value={`Unit ${n}`}>Unit {n}</option>
              ))}
            </select>
            
            <select 
              className="bg-white/5 border border-white/10 rounded-DEFAULT px-4 py-2.5 text-xs font-bold text-on-surface focus:outline-none focus:border-primary/50"
              value={masteryFilter}
              onChange={(e) => setMasteryFilter(e.target.value === 'All' ? 'All' : Number(e.target.value))}
            >
              <option value="All">All Mastery</option>
              <option value="0">New</option>
              <option value="1">Learning</option>
              <option value="2">Familiar</option>
              <option value="3">Proficient</option>
              <option value="4">Mastered</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-left">
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-muted">Word</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-muted">Meaning</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-muted">Level</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-muted">Mastery</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-muted">Daily Stats</th>
                <th className="py-4 px-4 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {filteredWords.map((word) => (
                <tr key={word.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                  <td className="py-4 px-4">
                    <div className="font-bold text-on-surface">{word.english}</div>
                    <div className="text-xs text-muted font-mono">{word.phonetic}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-sm">{word.turkishMeaning}</div>
                    <div className="text-[10px] text-muted line-clamp-1 max-w-[200px]">{word.exampleSentence}</div>
                  </td>
                  <td className="py-4 px-4">
                    <PillBadge variant="primary" className="text-[10px]">{word.level}</PillBadge>
                  </td>
                  <td className="py-4 px-4">
                    <MasteryTracker level={word.masteryLevel} />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-accent">✓ {word.correctCount}</span>
                      <span className="text-danger">✗ {word.wrongCount}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:text-primary transition-colors"><Edit2 size={16}/></button>
                      <button 
                        className="p-2 hover:text-danger transition-colors"
                        onClick={() => deleteWord(word.id)}
                      >
                        <Trash2 size={16}/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredWords.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-muted italic">
                    No words found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <AddWordModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

const MasteryTracker: React.FC<{ level: number }> = ({ level }) => {
  const labels = ['New', 'Learning', 'Familiar', 'Proficient', 'Mastered'];
  const variants: any = {
    0: 'primary',
    1: 'secondary',
    2: 'warning',
    3: 'accent',
    4: 'tertiary',
  };
  
  return (
    <div className="flex items-center gap-1">
      <PillBadge variant={variants[level]} className="text-[10px]">
        {labels[level]}
      </PillBadge>
      <div className="flex gap-0.5 ml-1">
        {[1, 2, 3, 4].map((step) => (
          <div 
            key={step} 
            className={clsx(
              'w-2 h-1 rounded-full px-0 py-0',
              step <= level ? 'bg-primary' : 'bg-white/10'
            )}
          />
        ))}
      </div>
    </div>
  );
};

const AddWordModal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  const { addWord } = useWordStore();
  const [formData, setFormData] = useState({
    english: '',
    phonetic: '',
    turkishMeaning: '',
    dictionaryDefinition: '',
    exampleSentence: '',
    level: 'B1' as 'B1' | 'B2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addWord({ ...formData, tags: [] });
    setFormData({
      english: '',
      phonetic: '',
      turkishMeaning: '',
      dictionaryDefinition: '',
      exampleSentence: '',
      level: 'B1',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative glass-elevated w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row rounded-lg"
          >
            <div className="flex-1 p-8 overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Book className="text-primary" />
                Add New Word
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs uppercase tracking-widest font-bold text-muted mb-2 block">English Word</label>
                      <TerminalInput 
                        value={formData.english} 
                        onChange={(e) => setFormData({...formData, english: e.target.value})} 
                        placeholder="e.g. persistent"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest font-bold text-muted mb-2 block">Turkish Meaning</label>
                      <TerminalInput 
                        value={formData.turkishMeaning} 
                        onChange={(e) => setFormData({...formData, turkishMeaning: e.target.value})} 
                        placeholder="e.g. ısrarcı, kalıcı"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest font-bold text-muted mb-2 block">Level</label>
                      <div className="flex gap-2">
                        {['B1', 'B2'].map((lvl) => (
                          <button
                            key={lvl}
                            type="button"
                            onClick={() => setFormData({...formData, level: lvl as any})}
                            className={clsx(
                              'flex-1 py-2 rounded border transition-all text-sm font-bold',
                              formData.level === lvl ? 'bg-primary text-bg border-primary' : 'bg-white/5 border-white/10 text-muted'
                            )}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs uppercase tracking-widest font-bold text-muted mb-2 block">Phonetic</label>
                      <TerminalInput 
                        value={formData.phonetic} 
                        onChange={(e) => setFormData({...formData, phonetic: e.target.value})} 
                        placeholder="e.g. /pəˈsɪs.tənt/"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest font-bold text-muted mb-2 block">Definition</label>
                      <textarea
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all min-h-[80px]"
                        value={formData.dictionaryDefinition}
                        onChange={(e) => setFormData({...formData, dictionaryDefinition: e.target.value})}
                        placeholder="English definition..."
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest font-bold text-muted mb-2 block">Example Sentence</label>
                      <textarea
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all min-h-[80px]"
                        value={formData.exampleSentence}
                        onChange={(e) => setFormData({...formData, exampleSentence: e.target.value})}
                        placeholder="Use the word in a sentence..."
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-6 border-t border-white/5">
                  <Button variant="ghost" type="button" onClick={onClose}>Cancel</Button>
                  <Button type="submit">Create Word</Button>
                </div>
              </form>
            </div>

            <div className="w-full md:w-80 bg-gradient-to-br from-primary/10 to-transparent p-8 flex flex-col items-center justify-center border-l border-white/5">
              <h4 className="text-xs uppercase tracking-widest font-bold text-muted mb-6">Live Preview</h4>
              <div className="w-full h-80 glass rounded-lg p-6 flex flex-col justify-between items-center text-center shadow-xl border border-white/10 overflow-hidden relative">
                <div className="absolute top-4 right-4 group-hover:scale-110 transition-transform">
                   <PillBadge variant="primary" className="text-[10px]">{formData.level}</PillBadge>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-3xl font-bold mb-1">{formData.english || '...'}</h3>
                  <p className="text-primary font-mono text-sm">{formData.phonetic || '/.../'}</p>
                </div>

                <div className="w-full space-y-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-[10px] text-muted uppercase tracking-widest mb-1">Meaning</div>
                    <div className="font-bold text-lg">{formData.turkishMeaning || '...'}</div>
                  </div>
                  <div className="text-xs text-muted line-clamp-3 italic">
                    {formData.exampleSentence ? `"${formData.exampleSentence}"` : 'Example sentence preview...'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
