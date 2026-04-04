import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Layers, 
  Activity, 
  BarChart3, 
  Settings,
  ChevronRight,
  Zap
} from 'lucide-react';
import { clsx } from 'clsx';
import { useProgressStore } from '../../store/useProgressStore';
import { getXPProgress, XP_PER_LEVEL } from '../../utils/xp';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/', icon: LayoutDashboard },
  { id: 'wordbank', label: 'Word Bank', path: '/wordbank', icon: BookOpen },
  { id: 'flashcards', label: 'Flashcards', path: '/flashcards', icon: Layers },
  { id: 'activities', label: 'Activities', path: '/activities', icon: Activity },
  { id: 'progress', label: 'Progress', path: '/progress', icon: BarChart3 },
  { id: 'settings', label: 'Settings', path: '/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-surface border-r border-white/5 transition-all duration-300">
      <div className="p-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent flex items-center gap-2">
          <Zap className="text-primary fill-primary/20" />
          LexiLearn
        </h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => clsx(
              'flex items-center gap-3 px-4 py-3 rounded-DEFAULT transition-all duration-300 group',
              isActive 
                ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(195,192,255,0.1)]' 
                : 'text-muted hover:bg-white/5 hover:text-on-surface'
            )}
          >
            <item.icon size={20} className="group-hover:scale-110 transition-transform" />
            <span className="font-medium">{item.label}</span>
            <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </NavLink>
        ))}
      </nav>

      <div className="p-6">
        <UserMiniProfile />
      </div>
    </aside>
  );
};

const UserMiniProfile: React.FC = () => {
  const { progress } = useProgressStore();
  if (!progress) return null;

  const xpProgress = getXPProgress(progress.totalXP);

  return (
    <div className="glass p-4 border border-white/10">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-bg font-bold">
          {progress.level}
        </div>
        <div>
          <div className="text-sm font-bold text-on-surface">Level {progress.level}</div>
          <div className="text-xs text-muted">Aspirant Learner</div>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] text-muted uppercase tracking-widest font-bold">
          <span>XP</span>
          <span>{xpProgress} / {XP_PER_LEVEL}</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary shadow-[0_0_8px_rgba(195,192,255,0.5)] transition-all duration-500"
            style={{ width: `${(xpProgress / XP_PER_LEVEL) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export const MobileNav: React.FC = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 glass border-t border-white/5 px-4 flex items-center justify-around z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) => clsx(
            'flex flex-col items-center justify-center gap-1 transition-all duration-300',
            isActive ? 'text-primary scale-110' : 'text-muted'
          )}
        >
          <item.icon size={20} />
          <span className="text-[10px] font-medium">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export const TopBar: React.FC = () => {
  const { progress } = useProgressStore();
  const location = useLocation();
  const currentPathName = navItems.find(item => item.path === location.pathname)?.label || 'LexiLearn';

  return (
    <header className="h-20 px-8 flex items-center justify-between sticky top-0 bg-bg/80 backdrop-blur-md z-40 md:ml-64 border-b border-white/5">
      <h2 className="text-xl font-bold font-display">{currentPathName}</h2>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="text-orange-500 flex items-center gap-1">
            <Zap size={18} fill="currentColor" />
            <span className="font-bold">{progress?.currentStreak || 0}</span>
          </div>
          <div className="text-xs text-muted font-medium uppercase tracking-tighter">Streak</div>
        </div>
        
        <div className="h-8 w-[1px] bg-white/10" />
        
        <div className="flex items-center gap-2">
          <div className="text-primary font-mono font-bold">
            {progress?.totalXP || 0}
          </div>
          <div className="text-xs text-muted font-medium uppercase tracking-tighter">Total XP</div>
        </div>
      </div>
    </header>
  );
};

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar />
      <TopBar />
      <main className="md:ml-64 p-8 pb-24 md:pb-8 max-w-7xl mx-auto min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  );
};
