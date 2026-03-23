'use client';

import { useEffect, useState } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false); // Close menu after clicking
  };

  const navLinks = [
    { name: 'Work', id: 'work' },
    { name: 'Brand Partnerships', id: 'brand-partnerships' },
    { name: 'Creator Partnerships', id: 'creator-partnerships' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled || isOpen ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}
            className="flex items-center hover:opacity-80 transition-opacity z-[70]"
          >
            <img src="/img/novora.png" alt="Novora" className="h-10 w-auto" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[15px] text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a href="https://cal.com/novora/30min" target="_blank">
              <button className="px-6 py-2.5 bg-white text-black rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300">
                Book Now
              </button>
            </a>
          </div>

          {/* Mobile Sandwich Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white z-[70] hover:opacity-70 transition-opacity"
            aria-label="Toggle Menu"
          >
              {isOpen ? (
                // X Icon (Stays the same)
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Updated 3-Line Sandwich Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[50] bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full items-center justify-center space-y-8 p-8">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-light tracking-[0.2em] uppercase text-white hover:text-white/50 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Book Now Button inside Sandwich */}
          <div className="pt-8">
            <a href="https://cal.com/novora/30min" target="_blank" onClick={() => setIsOpen(false)}>
              <button className="px-12 py-4 bg-white text-black font-bold uppercase tracking-[0.15em] text-sm hover:bg-white/90 transition-all active:scale-95 rounded-full">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}