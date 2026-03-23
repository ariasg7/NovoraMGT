'use client';

import { useEffect, useState } from 'react';

// 2. Correct way to handle your local logo
const logo = '/img/novora.png'; 
// 3. Correct way to handle your background image
const bgImage = '/img/hero_background.jpeg'; 

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-out ${
            isLoaded ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* 4. Use standard img tag for simplicity with your local path */}
          <img
            src={bgImage}
            alt="Abstract dark background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center">
        {/* Large Logo Display */}
        <div
          className={`mb-12 flex justify-center transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img 
            src={logo} 
            alt="Novora" 
            className="w-auto h-[120px] md:h-[400px] object-contain"
          />
        </div>

        {/* Headline */}
        <h1
          className={`text-[48px] md:text-[72px] font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Creator's Unfair Advantage
        </h1>

        {/* Subheadline */}
        <p
          className={`text-xl md:text-2xl text-white/70 mb-12 max-w-[700px] mx-auto transition-all duration-1000 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Grow your brand with full-scale content strategy and hands-on support. From filming to posting, collaborations, and backends operations, we handle it all so you can focus on creating
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a href = "https://cal.com/novora/30min" target ="_blank"><button className="px-8 py-4 bg-white text-black rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 text-lg font-medium">
            Book Now
          </button> </a>
          <button
            onClick={() => scrollToSection('work')}
            className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg"
          >
            Explore Our Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[2px] h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}