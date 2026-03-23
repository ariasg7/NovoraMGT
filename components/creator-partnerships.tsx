'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

// --- 1. DATA INDEX ---
interface Creator {
  name: string;
  niche: string;
  followers: string;
  handle: string;
  instagram: string;
  image: string;
  results: string[];
}

const creators: Creator[] = [
  {
    name: "6ix9ine",
    niche: "Rapper",
    followers: "23.3M",
    handle: "@6ix9ine",
    instagram: "https://www.instagram.com/6ix9ine",
    image: "/img/Creators/6ix9nine.webp",
    results: [
      "Global brand positioning strategy",
      "Digital presence optimization",
      "Strategic content creative direction"
    ]
  },
  {
    name: "Lily Phillips",
    niche: "Influencer",
    followers: "1.5M",
    handle: "@lilyphillip_s",
    instagram: "https://www.instagram.com/lilyphillip_s",
    image: "/img/Creators/lilyphillip_s.webp",
    results: [
      "Secured premium brand endorsements",
      "2.5x engagement rate increase",
      "Cohesive aesthetic overhaul"
    ]
  },
  {
    name: "Braeden Carter",
    niche: "Streamer",
    followers: "396K",
    handle: "@braedencarterrr",
    instagram: "https://www.instagram.com/braedencarterrr",
    image: "/img/Creators/braedencarterrr.webp",
    results: [
      "Stream overlay & brand identity design",
      "Cross-platform growth strategy",
      "Merchandise line conceptualization"
    ]
  },
  {
    name: "Michael Beasley",
    niche: "Athlete",
    followers: "641K",
    handle: "@michael8easley",
    instagram: "https://www.instagram.com/michael8easley",
    image: "/img/Creators/michael8easley.webp",
    results: [
      "Professional athlete brand management",
      "Commercial partnership outreach",
      "Legacy positioning & media strategy"
    ]
  }
];

// --- 2. COMPONENT ---
export default function CreatorPartnerships() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerChange = (newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 400);
  };

  const handleNext = () => !isTransitioning && triggerChange((currentIndex + 1) % creators.length);
  const handlePrev = () => !isTransitioning && triggerChange((currentIndex - 1 + creators.length) % creators.length);

  const creator = creators[currentIndex];

  return (
    <section id="creator-partnerships" className="py-32 px-8 bg-black relative overflow-hidden">
      
      {/* Background accent - EXACTLY AS PER YOUR ORIGINAL CODE */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.02]" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Creator Partnerships</h2>
          <p className="text-xl text-white/60 max-w-[700px] mx-auto">
            Elevating the world's most influential voices through strategic identity 
            and high-impact creative execution.
          </p>
        </div>

        {/* Carousel Content */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[600px]">
            
            {/* Left Column: Image Card */}
            <div className={`relative transition-all duration-500 ease-in-out ${
              isTransitioning ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'
            }`}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm text-white/80 mb-4">
                    {creator.niche}
                  </div>
                  <h3 className="text-5xl font-bold text-white mb-2">{creator.name}</h3>
                  <div className="flex items-center gap-3 text-white/70">
                    <span className="text-xl font-medium text-white">{creator.followers}</span>
                    <span className="w-1 h-1 bg-white/30 rounded-full" />
                    <a 
                      href={creator.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      {creator.handle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Results */}
            <div className={`transition-all duration-500 delay-100 ${
              isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}>
              <h4 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-6 font-mono">Strategic Impact</h4>
              <h3 className="text-3xl md:text-4xl text-white mb-8">Partnership Results</h3>
              
              <div className="space-y-6 mb-12">
                {creator.results.map((result, index) => (
                  <div key={index} className="group flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-white/40 group-hover:text-white group-hover:bg-white/5 transition-all">
                      {index + 1}
                    </div>
                    <p className="text-xl text-white/70 pt-1 group-hover:text-white transition-colors">{result}</p>
                  </div>
                ))}
              </div>

              <a href = "https://cal.com/novora/30min" target = "_blank" ><button className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 font-bold">
                Scale Your Brand
              </button> </a>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicator Dots */}
            <div className="flex gap-2">
              {creators.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isTransitioning && triggerChange(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}