import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ContentCardProps {
  title: string;
  description: string;
  image?: string;
  category?: string;
  date?: string;
  href?: string;
  className?: string;
}

export function ContentCard({
  title,
  description,
  image,
  category,
  date,
  href,
  className,
}: ContentCardProps) {
  const CardWrapper = href ? Link : 'div';
  const wrapperProps = href ? { href } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={cn(
        'group block bg-card rounded-3xl overflow-hidden shadow-lg hover-lift cursor-pointer border border-border/50 hover:border-primary/30 transition-all duration-400',
        className
      )}
    >
      {image && (
        <div className="relative w-full h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </div>
      )}
      <div className="p-6">
        {category && (
          <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-heading font-medium bg-primary/15 text-primary rounded-full mb-3 border border-primary/20">
            {category}
          </span>
        )}
        <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{description}</p>
        {date && (
          <p className="text-xs text-muted-foreground font-medium">{date}</p>
        )}
      </div>
    </CardWrapper>
  );
}
