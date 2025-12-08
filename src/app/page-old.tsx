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
        <div className="container py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-heading font-medium text-primary">
                  Trusted Lifestyle Expert
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Welcome to My{' '}
                <span className="text-primary font-accent">Beautiful</span> Corner
                of the Internet
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm Lily Suda—lifestyle enthusiast, parenting advocate, and your guide to
                navigating modern motherhood with grace, humor, and a touch of luxury. Join
                our community for authentic tips on parenting, wellness, and creating a life
                you love.
              </p>
              <div className="flex flex-wrap gap-4">
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
              <div className="relative rounded-3xl overflow-hidden shadow-xl hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&h=1000&fit=crop"
                  alt="Lily Suda with family"
                  className="w-full h-auto object-cover"
                />
                {/* Decorative floating element */}
                <div className="absolute top-8 right-8 bg-secondary text-secondary-foreground px-6 py-3 rounded-full shadow-lg animate-float">
                  <p className="font-heading font-semibold text-sm">
                    2500+ Podcast Listeners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 50C240 20 480 20 720 50C960 80 1200 80 1440 50V100H0V50Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Pet Competition Winner Announcement */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="gradient-yellow rounded-3xl p-8 md:p-12 shadow-lg animate-scale-in">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Trophy size={64} className="text-secondary-foreground" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-foreground mb-2">
                  🎉 Bella Won the Regional Pet Competition!
                </h2>
                <p className="text-secondary-foreground/80 text-lg">
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

        {/* Membership CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/generated/membership-golfers-community.png"
              alt="Sterling Oaks Members"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Elevate Your Game at Sterling Oaks
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed">
              Join a community of passionate golfers and enjoy unparalleled access to our world-class facilities. Our memberships include priority tee times, exclusive events, access to the elite practice academy, and unforgettable experiences. Discover the privilege of belonging to Sterling Oaks Golf Club.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6"
            >
              <Link href="/membership">Discover Membership Tiers</Link>
            </Button>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                World-Class Facilities
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every detail designed to enhance your golfing experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Championship Courses</h3>
                <p className="text-muted-foreground text-sm">
                  Three award-winning courses designed by Robert Trent Jones II
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Practice Facilities</h3>
                <p className="text-muted-foreground text-sm">
                  State-of-the-art driving range, putting greens, and short game areas
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Golf Academy</h3>
                <p className="text-muted-foreground text-sm">
                  Expert instruction from PGA professionals with cutting-edge technology
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Clubhouse & Dining</h3>
                <p className="text-muted-foreground text-sm">
                  Elegant clubhouse with fine dining and private event spaces
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                What Our Members Say
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join a community of passionate golfers who call Sterling Oaks home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-card p-8 rounded-lg border shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-accent">30+</div>
                <div className="text-sm md:text-base text-primary-foreground/90">Years of Excellence</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-accent">500+</div>
                <div className="text-sm md:text-base text-primary-foreground/90">Member Families</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-accent">15+</div>
                <div className="text-sm md:text-base text-primary-foreground/90">Tournament Championships</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-accent">75K+</div>
                <div className="text-sm md:text-base text-primary-foreground/90">Rounds Played Annually</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Events */}
              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Events Calendar</h3>
                <p className="text-muted-foreground mb-6">
                  Join us for tournaments, clinics, and exclusive member events throughout the year.
                </p>
                <Button asChild variant="outline">
                  <Link href="/events">View Events</Link>
                </Button>
              </div>

              {/* Academy */}
              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Golf Academy</h3>
                <p className="text-muted-foreground mb-6">
                  Improve your game with our PGA professionals and state-of-the-art training facilities.
                </p>
                <Button asChild variant="outline">
                  <Link href="/academy">Learn More</Link>
                </Button>
              </div>

              {/* Contact */}
              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Visit Us</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a tour or contact us to learn more about membership opportunities.
                </p>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}