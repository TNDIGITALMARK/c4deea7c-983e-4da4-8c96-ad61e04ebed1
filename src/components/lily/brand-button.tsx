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
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-heading font-medium transition-all hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    pink: 'gradient-pink text-foreground hover:opacity-90 shadow-md',
    yellow: 'gradient-yellow text-foreground hover:opacity-90 shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    ghost: 'text-primary hover:bg-primary/10',
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
      {children}
    </button>
  );
}
