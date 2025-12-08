import React from 'react';
import { cn } from '@/lib/utils';

interface BrandButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'pink' | 'yellow' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function BrandButton({
  variant = 'pink',
  size = 'md',
  className,
  children,
  ...props
}: BrandButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-heading font-medium transition-all duration-300 hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden';

  const variants = {
    pink: 'gradient-pink text-foreground hover:brightness-105 shadow-lg hover:shadow-2xl hover:-translate-y-1',
    yellow: 'gradient-yellow text-foreground hover:brightness-105 shadow-lg hover:shadow-2xl hover:-translate-y-1',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-md',
    ghost: 'text-primary hover:bg-primary/10 hover:shadow-sm',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {(variant === 'pink' || variant === 'yellow') && (
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      )}
    </button>
  );
}
