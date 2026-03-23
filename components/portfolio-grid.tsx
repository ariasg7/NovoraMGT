'use client';

import { useState } from 'react';

// 1. Switched images to more stable placeholder URLs or you can use your local /img/ folders
const portfolioItems = [
  {
    id: 1,
    title: 'Luxury Brand Identity',
    category: 'Branding',
    image: '/img/Stock/designer bags.jpg',
  },
  {
    id: 2,
    title: 'Creative Packaging',
    category: 'Branding',
    image: '/img/Stock/cat in the rr.jpg',
  },
  {
    id: 3,
    title: 'Minimal Product Design',
    category: 'Campaigns',
    image: '/img/Stock/plan and trucks.jpg',
  },
  {
    id: 4,
    title: 'Creator Studio Setup',
    category: 'Creators',
    image: '/img/Stock/money passport.jpg',
  },
  {
    id: 5,
    title: 'Creative Outreach',
    category: 'Campaigns',
    image: '/img/Stock/palm trees.jpg',
  },
  {
    id: 6,
    title: 'Creator Partnerships',
    category: 'Creators',
    image: '/img/Stock/martini.jpg',
  },
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState<string>('All');
  const filters = ['All', 'Branding', 'Campaigns', 'Creators'];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="work" className="py-32 px-8 bg-black text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Featured Work</h2>
          <p className="text-xl text-white/60 max-w-[600px] mx-auto">
            A curated selection of our brand transformations and creative executions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {filters.map((filterName) => (
            <button
              key={filterName}
              onClick={() => setFilter(filterName)}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                filter === filterName
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {filterName}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer"
            >
              {/* 2. Simplified Image Tag */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay with Content */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center px-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70 uppercase tracking-widest text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}