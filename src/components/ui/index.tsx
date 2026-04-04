import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  isLoading,
  children,
  ...props
}) => {
  const variants = {
    primary: 'btn-primary',
    ghost: 'btn-ghost',
    danger: 'bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 px-6 py-3 rounded transition-all duration-300',
    accent: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 px-6 py-3 rounded transition-all duration-300',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
};

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, elevated, hover, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
      'glass rounded-DEFAULT overflow-hidden transition-all duration-300',
      elevated && 'glass-elevated',
      hover && 'hover:border-white/20 hover:bg-white/[0.08]',
      className
    )}>
      {children}
    </div>
  );
};

export const PillBadge: React.FC<{ children: React.ReactNode, variant?: 'primary' | 'secondary' | 'tertiary' | 'warning', className?: string }> = ({ children, variant = 'primary', className }) => {
  const variants = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    tertiary: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };
  return (
    <span className={cn('pill whitespace-nowrap', variants[variant], className)}>
      {children}
    </span>
  );
};

export const ProgressBar: React.FC<{ value: number, max: number, className?: string, color?: string }> = ({ value, max, className, color = 'bg-primary' }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={cn('h-2 w-full bg-white/5 rounded-full overflow-hidden', className)}>
      <div 
        className={cn('h-full transition-all duration-500', color)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export const TerminalInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return (
    <div className="relative group w-full">
      <input
        className={cn(
          'w-full bg-transparent border-b border-white/20 px-0 py-2 font-mono text-on-surface focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-muted',
          className
        )}
        {...props}
      />
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-focus-within:w-full shadow-[0_0_10px_rgba(195,192,255,0.5)]" />
    </div>
  );
};
