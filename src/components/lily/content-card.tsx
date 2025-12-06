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
        'block bg-card rounded-2xl overflow-hidden shadow-md hover-lift cursor-pointer',
        className
      )}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {category && (
          <span className="inline-block px-3 py-1 text-xs font-heading font-medium bg-primary/20 text-primary rounded-full mb-3">
            {category}
          </span>
        )}
        <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        {date && (
          <p className="text-xs text-muted-foreground">{date}</p>
        )}
      </div>
    </CardWrapper>
  );
}
