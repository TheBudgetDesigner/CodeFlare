import React from 'react';
import { cn } from '@/lib/utils';

// Uiverse.io inspired glass morphism card
export const GlassCard = ({ 
  children, 
  className,
  hover = true 
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-background/80 backdrop-blur-lg border border-accent/20",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-accent/10 before:to-primary/10 before:opacity-0 before:transition-opacity before:duration-300",
        hover && "hover:before:opacity-100 hover:scale-105 hover:shadow-2xl transition-all duration-300",
        className
      )}
    >
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};

// Uiverse.io inspired floating card with shadow
export const FloatingCard = ({ 
  children, 
  className,
  intensity = 'medium' 
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
}) => {
  const intensityClasses = {
    light: 'hover:translate-y-[-4px] shadow-lg hover:shadow-xl',
    medium: 'hover:translate-y-[-8px] shadow-xl hover:shadow-2xl',
    strong: 'hover:translate-y-[-12px] shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]'
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-card border border-border transition-all duration-300 cursor-pointer group",
        intensityClasses[intensity],
        className
      )}
    >
      {/* Floating particle effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-accent rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-6 left-8 w-1 h-1 bg-tip-green rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};

// Uiverse.io inspired neon border card
export const NeonCard = ({ 
  children, 
  className,
  color = 'accent' 
}: {
  children: React.ReactNode;
  className?: string;
  color?: 'accent' | 'primary' | 'tip-green' | 'flop-red';
}) => {
  const colorClasses = {
    accent: 'shadow-accent/20 hover:shadow-accent/40 border-accent/30',
    primary: 'shadow-primary/20 hover:shadow-primary/40 border-primary/30',
    'tip-green': 'shadow-tip-green/20 hover:shadow-tip-green/40 border-tip-green/30',
    'flop-red': 'shadow-flop-red/20 hover:shadow-flop-red/40 border-flop-red/30'
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-card/90 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 group",
        colorClasses[color],
        className
      )}
      style={{
        boxShadow: `0 0 20px hsl(var(--${color})/0.2)`,
      }}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${color} via-transparent to-${color} animate-pulse`}></div>
      </div>
      
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};

// Uiverse.io inspired tilting card
export const TiltCard = ({ 
  children, 
  className 
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (y / rect.height) * 20;
    const rotateY = (x / rect.width) * -20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-card border border-border transition-all duration-300 cursor-pointer",
        "hover:shadow-2xl",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative z-10 p-6" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </div>
  );
};

// Uiverse.io inspired gradient border card
export const GradientBorderCard = ({ 
  children, 
  className 
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative p-[2px] rounded-2xl group transition-all duration-300 hover:scale-105", className)}>
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-primary to-tip-green opacity-70 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
      
      {/* Card content */}
      <div className="relative rounded-2xl bg-card p-6">
        {children}
      </div>
    </div>
  );
};

// Uiverse.io inspired particle card
export const ParticleCard = ({ 
  children, 
  className 
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-card border border-border group hover:scale-105 transition-all duration-300", className)}>
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-accent rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};
