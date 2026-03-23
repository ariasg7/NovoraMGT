'use client';

import { useEffect, useState } from 'react';
import logo from '../public/img/novora.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img src="/img/novora.png" alt="Novora" className="h-10 w-auto" />
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('work')}
            className="text-[15px] text-white/70 hover:text-white transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('brand-partnerships')}
            className="text-[15px] text-white/70 hover:text-white transition-colors"
          >
            Brand Partnerships
          </button>
          <button
            onClick={() => scrollToSection('creator-partnerships')}
            className="text-[15px] text-white/70 hover:text-white transition-colors"
          >
            Creator Partnerships
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-[15px] text-white/70 hover:text-white transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="text-[15px] text-white/70 hover:text-white transition-colors"
          >
            Process
          </button>
        </div>

        {/* CTA Button */}
        <a href = "https://cal.com/novora/30min" target = "_blank">
        <button className="px-6 py-2.5 bg-white text-black rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300">
          Book Now
        </button> </a>
      </div>
    </nav>
  );
}