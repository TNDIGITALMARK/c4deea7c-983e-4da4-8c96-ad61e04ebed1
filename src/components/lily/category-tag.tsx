import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryTagProps {
  label: string;
  count?: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function CategoryTag({
  label,
  count,
  active = false,
  onClick,
  className,
}: CategoryTagProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full font-heading font-medium text-sm transition-all',
        active
          ? 'bg-primary text-primary-foreground shadow-md'
          : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary',
        className
      )}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className={cn(
          'px-2 py-0.5 rounded-full text-xs',
          active ? 'bg-primary-foreground/20' : 'bg-background'
        )}>
          {count}
        </span>
      )}
    </button>
  );
}
