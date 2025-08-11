import React from 'react';
import { cn } from '@/lib/utils';

// Uiverse.io inspired button with liquid effect
export const LiquidButton = ({ 
  children, 
  className, 
  onClick,
  variant = 'primary' 
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'accent' | 'secondary';
}) => {
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-primary-foreground',
    accent: 'bg-accent hover:bg-accent/90 text-accent-foreground',
    secondary: 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 group",
        variants[variant],
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:blur-sm opacity-70 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute inset-0 rounded-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </button>
  );
};

// Uiverse.io inspired glowing border button
export const GlowBorderButton = ({ 
  children, 
  className, 
  onClick 
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden px-6 py-3 rounded-lg bg-background border border-accent/20 text-foreground font-medium transition-all duration-300 group hover:scale-105",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent via-primary to-tip-green animate-spin-slow opacity-50"></div>
        <div className="absolute inset-[2px] rounded-lg bg-background"></div>
      </div>
      {/* Content overlay */}
      <div className="absolute inset-[2px] rounded-lg bg-background flex items-center justify-center">
        <span className="relative z-10 group-hover:text-accent transition-colors duration-300">{children}</span>
      </div>
    </button>
  );
};

// Uiverse.io inspired pulse button
export const PulseButton = ({ 
  children, 
  className, 
  onClick,
  color = 'accent' 
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: 'accent' | 'primary' | 'tip-green';
}) => {
  const colorClasses = {
    accent: 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/25',
    primary: 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/25',
    'tip-green': 'bg-tip-green hover:bg-tip-green/90 text-tip-green-foreground shadow-tip-green/25'
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105",
        "before:absolute before:inset-0 before:rounded-full before:animate-ping before:opacity-20",
        colorClasses[color],
        className
      )}
      style={{
        animation: 'pulse-shadow 2s ease-in-out infinite'
      }}
    >
      <span className="relative z-10">{children}</span>
      <style jsx>{`
        @keyframes pulse-shadow {
          0%, 100% {
            box-shadow: 0 0 0 0 currentColor;
          }
          50% {
            box-shadow: 0 0 0 10px transparent;
          }
        }
      `}</style>
    </button>
  );
};

// Uiverse.io inspired morphing button
export const MorphButton = ({ 
  children, 
  className, 
  onClick 
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden px-8 py-4 bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-2xl transition-all duration-500 hover:rounded-full hover:scale-110 group",
        className
      )}
    >
      <span className="relative z-10 transition-all duration-300 group-hover:scale-110">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </button>
  );
};

// CSS for animations
export const UiverseButtonStyles = () => (
  <style jsx global>{`
    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    .animate-spin-slow {
      animation: spin-slow 3s linear infinite;
    }
  `}</style>
);
