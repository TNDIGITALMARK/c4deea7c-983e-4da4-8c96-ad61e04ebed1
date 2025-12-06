import React from 'react';
import { Navbar } from '@/components/lily/navbar';
import { Footer } from '@/components/lily/footer';
import { BrandButton } from '@/components/lily/brand-button';
import { Mic, Play, Calendar, Users } from 'lucide-react';
import Link from 'next/link';

// Mock podcast episodes data
const podcastEpisodes = [
  {
    id: 1,
    episode: 47,
    title: 'Navigating Mom Guilt',
    description: 'Join me as we explore the complexities of mom guilt and share practical strategies to embrace imperfection and find joy in the journey.',
    guest: null,
    date: 'June 18, 2024',
    duration: '42 min',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    episode: 46,
    title: 'Healthy Family Meals with Dr. Sarah Chen',
    description: 'Pediatric nutritionist Dr. Sarah Chen shares expert advice on creating balanced, nutritious meals that even picky eaters will love.',
    guest: 'Dr. Sarah Chen, Pediatric Nutritionist',
    date: 'June 11, 2024',
    duration: '48 min',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    episode: 45,
    title: 'Toddler Tantrums: Understanding and Responding',
    description: 'Decode your toddler&apos;s tantrums and learn effective, compassionate strategies for managing big emotions in little bodies.',
    guest: null,
    date: 'June 4, 2024',
    duration: '39 min',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    episode: 44,
    title: 'Preventing Mom Burnout',
    description: 'Recognize the signs of burnout and discover self-care strategies that actually work for busy moms juggling everything.',
    guest: null,
    date: 'May 28, 2024',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    episode: 43,
    title: 'Building Emotional Intelligence in Children',
    description: 'Learn practical techniques for helping your children identify, understand, and manage their emotions from an early age.',
    guest: null,
    date: 'May 21, 2024',
    duration: '41 min',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    episode: 42,
    title: 'Luxury Wellness Practices for Moms',
    description: 'Bring spa-quality self-care into your daily routine with these accessible luxury wellness practices designed for busy schedules.',
    guest: null,
    date: 'May 14, 2024',
    duration: '36 min',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    episode: 41,
    title: 'Creating Family Traditions That Last',
    description: 'Build meaningful family traditions that create lasting memories and strengthen bonds across generations.',
    guest: null,
    date: 'May 7, 2024',
    duration: '44 min',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
  },
  {
    id: 8,
    episode: 40,
    title: 'Sleep Training: What Really Works',
    description: 'Cut through the noise and discover evidence-based sleep training methods that align with your parenting philosophy.',
    guest: null,
    date: 'April 30, 2024',
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&h=600&fit=crop',
  },
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-brand text-secondary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 rounded-full mb-6">
              <Mic size={16} />
              <span className="text-sm font-heading font-medium">
                The Lily Suda Podcast
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Real Talk for Real Parents
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Join me every week for honest conversations about parenting, wellness, and
              creating a life you love. No judgment, just real talk and practical wisdom from
              someone who&apos;s living it alongside you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <BrandButton variant="yellow" size="lg">
                Listen on Spotify
              </BrandButton>
              <BrandButton variant="outline" size="lg">
                Listen on Apple Podcasts
              </BrandButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                2,500+
              </div>
              <div className="text-sm text-muted-foreground">Weekly Listeners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                47
              </div>
              <div className="text-sm text-muted-foreground">Episodes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                12+
              </div>
              <div className="text-sm text-muted-foreground">Expert Guests</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                4.9
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode Highlight */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Latest Episode
              </h2>
              <p className="text-lg text-muted-foreground">
                Fresh insights and conversations you don&apos;t want to miss
              </p>
            </div>

            <div className="bg-card rounded-3xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={podcastEpisodes[0].image}
                    alt={podcastEpisodes[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="flex items-center gap-2 text-white">
                      <Calendar size={16} />
                      <span className="text-sm">{podcastEpisodes[0].date}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{podcastEpisodes[0].duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-sm font-heading font-semibold text-primary mb-2">
                    Episode {podcastEpisodes[0].episode}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    {podcastEpisodes[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {podcastEpisodes[0].description}
                  </p>
                  <div className="flex gap-4">
                    <BrandButton variant="pink" size="md">
                      <Play size={16} className="mr-2" />
                      Listen Now
                    </BrandButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
              All Episodes
            </h2>

            <div className="space-y-6">
              {podcastEpisodes.map((episode, index) => (
                <div
                  key={episode.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-md hover-lift transition-all"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                    {/* Episode Image */}
                    <div className="relative h-48 md:h-auto rounded-xl overflow-hidden">
                      <img
                        src={episode.image}
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Episode Info */}
                    <div className="md:col-span-3 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-sm font-heading font-semibold text-primary">
                          Episode {episode.episode}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {episode.date}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {episode.duration}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
                        {episode.title}
                      </h3>
                      {episode.guest && (
                        <div className="flex items-center gap-2 mb-3">
                          <Users size={16} className="text-primary" />
                          <span className="text-sm text-muted-foreground">
                            Guest: {episode.guest}
                          </span>
                        </div>
                      )}
                      <p className="text-muted-foreground mb-4">
                        {episode.description}
                      </p>
                      <div>
                        <BrandButton variant="pink" size="sm">
                          <Play size={14} className="mr-2" />
                          Listen
                        </BrandButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 gradient-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Mic size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Never Miss an Episode
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to The Lily Suda Podcast on your favorite platform and join our
              community of mindful parents creating beautiful lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <BrandButton variant="pink" size="lg">
                Subscribe on Spotify
              </BrandButton>
              <BrandButton variant="yellow" size="lg">
                Subscribe on Apple Podcasts
              </BrandButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
