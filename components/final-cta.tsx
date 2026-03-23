'use client';

import React, { useEffect, useState } from 'react';

export function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('final-cta');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="final-cta" className="relative py-40 px-8 overflow-hidden bg-black">
      {/* Background Image with Dark Overlay and Animated Smoke */}
      <div className="absolute inset-0 z-0">
        {/* Animated smoke background */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-out ${
            isVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1702551927220-792470e92e2e?q=80&w=2000"
            alt="Abstract dark background"
            className="w-full h-full object-cover opacity-50 animate-smoke-float"
          />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        
        {/* Animated smoke overlay */}
        <div className="absolute inset-0 animate-smoke-drift opacity-30 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center z-[1]">
        <div className="w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[900px] mx-auto text-center">
        <h2 className="text-6xl md:text-7xl mb-8 leading-tight text-white font-bold">
          Create something unforgettable.
        </h2>
        <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-[600px] mx-auto">
          Partner with a team that understands vision, execution, and impact.
        </p>
        <a href = "https://cal.com/novora/30min" target = "_blank">
        <button className="px-12 py-5 bg-white text-black text-lg rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-300 transform hover:scale-105 font-bold">
          Book Now
        </button> </a>
      </div>
    </section>
  );
}