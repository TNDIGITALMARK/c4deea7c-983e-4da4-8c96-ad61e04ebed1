import React from 'react';
import { Navbar } from '@/components/lily/navbar';
import { Footer } from '@/components/lily/footer';
import { BrandButton } from '@/components/lily/brand-button';
import { ContentCard } from '@/components/lily/content-card';
import { Sparkles, Heart, Mic, Trophy } from 'lucide-react';
import Link from 'next/link';

// Mock data - Lily Suda lifestyle blog posts
const featuredPosts = [
  {
    id: 1,
    title: '5 Summer Activities for Toddlers',
    description: 'Keep your little ones entertained and engaged with these fun, easy, and educational summer activities perfect for toddlers.',
    category: 'Parenting Tips',
    date: 'June 15, 2024',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
    href: '/blog/5-summer-activities-for-toddlers',
  },
  {
    id: 2,
    title: 'Organic Meal Prep for Picky Eaters',
    description: 'Transform mealtime battles into delightful dining experiences with these organic, kid-approved recipes and meal prep strategies.',
    category: 'Luxury Health',
    date: 'June 10, 2024',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    href: '/blog/organic-meal-prep-for-picky-eaters',
  },
  {
    id: 3,
    title: 'Creating Calm Bedtime Routines',
    description: 'Discover how to create peaceful bedtime rituals that help your children wind down and get the restful sleep they need.',
    category: 'Children Activities',
    date: 'June 5, 2024',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=600&fit=crop',
    href: '/blog/creating-calm-bedtime-routines',
  },
];

// Latest podcast episode
const latestPodcast = {
  title: 'Navigating Mom Guilt',
  episode: 'Episode 47',
  description: 'Join me as we explore the complexities of mom guilt and share practical strategies to embrace imperfection and find joy in the journey.',
  image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative gradient-cream overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container py-24 md:py-36 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="animate-fade-in-up space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary/15 backdrop-blur-sm rounded-full mb-4 border border-primary/20 shadow-sm">
                <Sparkles size={18} className="text-primary" />
                <span className="text-sm font-heading font-medium text-primary">
                  Trusted Lifestyle Expert
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Welcome to My{' '}
                <span className="text-shimmer font-accent text-5xl md:text-6xl lg:text-7xl">Beautiful</span>{' '}
                Corner of the Internet
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I&apos;m Lily Suda—lifestyle enthusiast, parenting advocate, and your guide to
                navigating modern motherhood with grace, humor, and a touch of luxury. Join
                our community for authentic tips on parenting, wellness, and creating a life
                you love.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
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

            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift group">
                <img
                  src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&h=1000&fit=crop"
                  alt="Lily Suda with family"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Decorative floating element */}
                <div className="absolute top-8 right-8 bg-gradient-yellow text-secondary-foreground px-6 py-3 rounded-full shadow-xl animate-float border border-secondary/20">
                  <p className="font-heading font-semibold text-sm">
                    2500+ Podcast Listeners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced decorative wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
            <path
              d="M0 50C240 20 480 20 720 50C960 80 1200 80 1440 50V100H0V50Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Pet Competition Winner Announcement */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="gradient-yellow rounded-3xl p-8 md:p-12 shadow-2xl animate-scale-in border border-secondary/20 relative overflow-hidden group">
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="flex-shrink-0 animate-pulse-glow">
                <Trophy size={72} className="text-secondary-foreground drop-shadow-lg" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-foreground mb-3 leading-tight">
                  🎉 Bella Won the Regional Pet Competition!
                </h2>
                <p className="text-secondary-foreground/90 text-lg leading-relaxed">
                  Our beloved golden retriever Bella took first place in the regional pet
                  competition! So proud of our furry family member. Read about her journey
                  on the blog.
                </p>
              </div>
              <Link href="/blog/bella-competition-winner">
                <BrandButton variant="outline" size="md">
                  Read More
                </BrandButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative background gradient */}
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-heading font-medium border border-primary/20">
                Featured Content
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Latest from the Blog
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover practical tips, heartfelt stories, and expert advice on parenting,
              lifestyle, and wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ContentCard {...post} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog">
              <BrandButton variant="outline" size="lg">
                View All Posts
              </BrandButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Podcast Episode */}
      <section className="py-24 gradient-cream relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 top-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary/15 backdrop-blur-sm rounded-full mb-6 border border-primary/20 shadow-sm">
                <Mic size={18} className="text-primary" />
                <span className="text-sm font-heading font-medium text-primary">
                  Latest Episode
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                The Lily Suda Podcast
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Real conversations about real parenting, wellness, and living authentically.
              </p>
            </div>

            <div className="bg-card rounded-3xl overflow-hidden shadow-2xl hover-lift group border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <img
                    src={latestPodcast.image}
                    alt={latestPodcast.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-card to-card/95">
                  <span className="inline-block text-sm font-heading font-semibold text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full w-fit border border-primary/20">
                    {latestPodcast.episode}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {latestPodcast.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {latestPodcast.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <BrandButton variant="pink" size="md">
                      Listen Now
                    </BrandButton>
                    <Link href="/podcast">
                      <BrandButton variant="ghost" size="md">
                        All Episodes
                      </BrandButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-pink rounded-full mb-8 shadow-xl animate-pulse-glow">
              <Heart size={40} className="text-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Join Our Growing Community
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Get weekly tips, exclusive content, and join thousands of parents creating
              beautiful, intentional lives for their families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-border focus:border-primary shadow-md focus:shadow-xl transition-all duration-300"
              />
              <BrandButton variant="pink" size="md">
                Subscribe
              </BrandButton>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Join 5,000+ parents already subscribed. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
