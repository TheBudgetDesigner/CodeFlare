import React from 'react';
import { cn } from '@/lib/utils';

// Uiverse.io inspired liquid loader
export const LiquidLoader = ({ 
  size = 'md',
  color = 'accent' 
}: {
  size?: 'sm' | 'md' | 'lg';
  color?: 'accent' | 'primary' | 'tip-green';
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    accent: 'bg-accent',
    primary: 'bg-primary',
    'tip-green': 'bg-tip-green'
  };

  return (
    <div className={cn("relative", sizeClasses[size])}>
      <div className={cn(
        "absolute inset-0 rounded-full animate-ping opacity-20",
        colorClasses[color]
      )}></div>
      <div className={cn(
        "absolute inset-0 rounded-full animate-pulse",
        colorClasses[color]
      )}></div>
      <div className={cn(
        "absolute inset-2 rounded-full animate-bounce",
        colorClasses[color]
      )}></div>
    </div>
  );
};

// Uiverse.io inspired dots loader
export const DotsLoader = ({ 
  color = 'accent' 
}: {
  color?: 'accent' | 'primary' | 'tip-green';
}) => {
  const colorClasses = {
    accent: 'bg-accent',
    primary: 'bg-primary',
    'tip-green': 'bg-tip-green'
  };

  return (
    <div className="flex space-x-2">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-3 h-3 rounded-full animate-bounce",
            colorClasses[color]
          )}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
};

// Uiverse.io inspired spinner
export const SpinnerLoader = ({ 
  size = 'md',
  color = 'accent' 
}: {
  size?: 'sm' | 'md' | 'lg';
  color?: 'accent' | 'primary' | 'tip-green';
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-4'
  };

  const colorClasses = {
    accent: 'border-accent border-t-transparent',
    primary: 'border-primary border-t-transparent',
    'tip-green': 'border-tip-green border-t-transparent'
  };

  return (
    <div
      className={cn(
        "rounded-full animate-spin",
        sizeClasses[size],
        colorClasses[color]
      )}
    />
  );
};

// Uiverse.io inspired wave loader
export const WaveLoader = ({ 
  color = 'accent' 
}: {
  color?: 'accent' | 'primary' | 'tip-green';
}) => {
  const colorClasses = {
    accent: 'bg-accent',
    primary: 'bg-primary',
    'tip-green': 'bg-tip-green'
  };

  return (
    <div className="flex items-end space-x-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 rounded-full",
            colorClasses[color]
          )}
          style={{
            height: `${20 + Math.sin(i) * 10}px`,
            animation: `wave 1s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { height: 20px; }
          50% { height: 40px; }
        }
      `}</style>
    </div>
  );
};

// Uiverse.io inspired input with glow effect
export const GlowInput = ({ 
  placeholder,
  value,
  onChange,
  type = 'text',
  className 
}: {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative group", className)}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "w-full px-4 py-3 bg-background border-2 border-muted rounded-lg transition-all duration-300",
          "focus:border-accent focus:outline-none focus:ring-0",
          "group-hover:border-accent/50",
          "placeholder:text-muted-foreground"
        )}
        style={{
          boxShadow: 'none',
          transition: 'all 0.3s ease'
        }}
        onFocus={(e) => {
          e.target.style.boxShadow = '0 0 20px hsl(var(--accent)/0.3)';
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = 'none';
        }}
      />
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent via-primary to-tip-green opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
    </div>
  );
};

// Uiverse.io inspired floating label input
export const FloatingLabelInput = ({ 
  label,
  value,
  onChange,
  type = 'text',
  className 
}: {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
}) => {
  const [focused, setFocused] = React.useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className={cn("relative group", className)}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn(
          "w-full px-4 pt-6 pb-3 bg-background border-2 border-muted rounded-lg transition-all duration-300",
          "focus:border-accent focus:outline-none focus:ring-0",
          "peer"
        )}
      />
      <label
        className={cn(
          "absolute left-4 text-muted-foreground transition-all duration-300 pointer-events-none",
          (focused || hasValue) 
            ? "top-2 text-xs text-accent" 
            : "top-4 text-base"
        )}
      >
        {label}
      </label>
      {/* Animated underline */}
      <div className={cn(
        "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300",
        focused ? "w-full" : "w-0"
      )}></div>
    </div>
  );
};

// Uiverse.io inspired search input with animation
export const AnimatedSearchInput = ({ 
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  className 
}: {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  className?: string;
}) => {
  const [focused, setFocused] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && value) {
      onSearch(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative group", className)}>
      <div className={cn(
        "relative overflow-hidden rounded-full bg-background border-2 border-muted transition-all duration-300",
        focused && "border-accent shadow-lg shadow-accent/20 scale-105"
      )}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full px-6 py-3 bg-transparent focus:outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-muted-foreground hover:text-accent transition-colors duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>
      
      {/* Animated background glow */}
      <div className={cn(
        "absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-tip-green opacity-0 transition-opacity duration-300 -z-10 blur-md",
        focused && "opacity-30"
      )}></div>
    </form>
  );
};
