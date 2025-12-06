import React from 'react';
import { Navbar } from '@/components/lily/navbar';
import { Footer } from '@/components/lily/footer';
import { BrandButton } from '@/components/lily/brand-button';
import { Heart, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-cream py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Hi, I&apos;m{' '}
                  <span className="text-primary font-accent">Lily Suda</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Welcome to my corner of the internet! I&apos;m a mom, lifestyle enthusiast,
                  podcast host, and your partner in navigating the beautiful chaos of modern
                  parenthood.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  My mission is simple: to create a community where parents feel supported,
                  inspired, and empowered to build lives they love—without the pressure of
                  perfection.
                </p>
                <div className="flex gap-4">
                  <Link href="/blog">
                    <BrandButton variant="pink" size="lg">
                      Explore Blog
                    </BrandButton>
                  </Link>
                  <Link href="/podcast">
                    <BrandButton variant="yellow" size="lg">
                      Listen to Podcast
                    </BrandButton>
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 animate-fade-in">
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop"
                    alt="Lily Suda"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center">
              My Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I started this journey as a new mom feeling overwhelmed by the endless stream
                of advice and impossible standards. I quickly realized that what parents really
                need isn&apos;t more pressure—it&apos;s more authenticity, practical wisdom, and a
                community that celebrates the messy, imperfect, beautiful reality of raising
                humans.
              </p>
              <p>
                Today, I share my experiences, insights, and tips across my blog and podcast,
                covering everything from parenting strategies and children&apos;s activities to
                luxury wellness practices and lifestyle inspiration. My approach combines
                evidence-based advice with real-world practicality and a healthy dose of humor.
              </p>
              <p>
                When I&apos;m not creating content, you&apos;ll find me spending time with my family,
                experimenting with new recipes, practicing yoga, or enjoying adventures with our
                golden retriever Bella (yes, the one who won the regional pet competition!).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="py-20 gradient-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
              What You&apos;ll Find Here
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-md hover-lift text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <Sparkles size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Parenting Tips
                </h3>
                <p className="text-muted-foreground">
                  Practical, judgment-free advice for navigating the ups and downs of
                  parenthood with grace and humor.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-md hover-lift text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-4">
                  <Heart size={28} className="text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Wellness & Self-Care
                </h3>
                <p className="text-muted-foreground">
                  Accessible luxury wellness practices and self-care strategies for busy
                  parents who deserve to feel their best.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-md hover-lift text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <Star size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Lifestyle Inspiration
                </h3>
                <p className="text-muted-foreground">
                  Tips and ideas for creating a beautiful, intentional life that reflects
                  your values and brings you joy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Let&apos;s Connect!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I&apos;d love to have you as part of our community. Subscribe to get weekly tips,
              exclusive content, and join thousands of parents creating beautiful lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl"
              />
              <BrandButton variant="pink" size="md">
                Subscribe
              </BrandButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
