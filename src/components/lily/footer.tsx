import React from 'react';
import Link from 'next/link';
import { Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted to-muted/80 mt-24 border-t border-border/50">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-accent font-bold text-primary">
              Lily Suda
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Lifestyle expert, parenting advocate, and podcast host sharing authentic wisdom for modern families.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-background text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-background text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <Youtube size={22} />
              </a>
              <a
                href="mailto:hello@lilysuda.com"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-background text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300" />
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300" />
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6 text-lg">
              Stay Connected
            </h4>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get weekly parenting tips and lifestyle inspiration delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-border focus:border-primary shadow-sm focus:shadow-md transition-all duration-300"
              />
              <button className="gradient-pink px-6 py-3 rounded-lg font-heading font-medium hover:brightness-105 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Lily Suda. All rights reserved. Made with{' '}
            <span className="text-primary">♥</span> for modern families.
          </p>
        </div>
      </div>
    </footer>
  );
}
