'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/lily/navbar';
import { Footer } from '@/components/lily/footer';
import { ContentCard } from '@/components/lily/content-card';
import { CategoryTag } from '@/components/lily/category-tag';
import { Search } from 'lucide-react';

// Mock blog data with categories
const blogPosts = [
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
  {
    id: 4,
    title: 'Summer Safety Tips for Busy Moms',
    description: 'Essential safety guidelines to keep your family safe and happy throughout the summer season without sacrificing fun.',
    category: 'Parenting Tips',
    date: 'June 1, 2024',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop',
    href: '/blog/summer-safety-tips',
  },
  {
    id: 5,
    title: 'Luxury Wellness on a Budget',
    description: 'Experience spa-quality self-care and wellness practices at home without breaking the bank. Luxury doesn&apos;t have to be expensive.',
    category: 'Luxury Health',
    date: 'May 28, 2024',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
    href: '/blog/luxury-wellness-budget',
  },
  {
    id: 6,
    title: 'DIY Sensory Play Activities',
    description: 'Boost your child&apos;s development with these simple, mess-free sensory play activities using household items.',
    category: 'Children Activities',
    date: 'May 25, 2024',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop',
    href: '/blog/diy-sensory-play',
  },
  {
    id: 7,
    title: 'Bella&apos;s Competition Journey',
    description: 'Follow along as our golden retriever Bella trains for and wins the regional pet competition. Tips for pet parents included!',
    category: 'Pet Care',
    date: 'May 20, 2024',
    image: 'https://images.unsplash.com/photo-1633473624210-d579640b6e63?w=800&h=600&fit=crop',
    href: '/blog/bella-competition-winner',
  },
  {
    id: 8,
    title: 'Building Morning Routines That Stick',
    description: 'Transform chaotic mornings into peaceful starts with these practical strategies for creating sustainable family routines.',
    category: 'Lifestyle Inspiration',
    date: 'May 15, 2024',
    image: 'https://images.unsplash.com/photo-1495001258031-d1b407bc1776?w=800&h=600&fit=crop',
    href: '/blog/morning-routines',
  },
  {
    id: 9,
    title: 'Mindful Parenting in a Digital Age',
    description: 'Navigate screen time, social media, and technology with intention while raising emotionally intelligent children.',
    category: 'Parenting Tips',
    date: 'May 10, 2024',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=600&fit=crop',
    href: '/blog/mindful-parenting-digital',
  },
];

const categories = [
  { label: 'All Posts', count: blogPosts.length },
  { label: 'Parenting Tips', count: blogPosts.filter(p => p.category === 'Parenting Tips').length },
  { label: 'Children Activities', count: blogPosts.filter(p => p.category === 'Children Activities').length },
  { label: 'Luxury Health', count: blogPosts.filter(p => p.category === 'Luxury Health').length },
  { label: 'Pet Care', count: blogPosts.filter(p => p.category === 'Pet Care').length },
  { label: 'Lifestyle Inspiration', count: blogPosts.filter(p => p.category === 'Lifestyle Inspiration').length },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              The Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Practical tips, heartfelt stories, and expert advice on parenting, lifestyle,
              wellness, and everything in between. Welcome to our community of mindful parents!
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <CategoryTag
                key={category.label}
                label={category.label}
                count={category.count}
                active={selectedCategory === category.label}
                onClick={() => setSelectedCategory(category.label)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ContentCard {...post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No posts found. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
