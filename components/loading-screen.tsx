'use client';

import React, { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Mimic the 1.5s delay from your script
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsVisible(false), 700); // Match transition duration
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo Reveal */}
      <div className="overflow-hidden w-64 md:w-96">
        <img
          src="img/novora.png"
          alt="Novora"
          className="w-full object-contain animate-slide-in"
        />
      </div>

      {/* Cloudy line */}
      <div className="relative w-64 md:w-96 h-1 mt-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 via-white/70 to-white/20 animate-cloud-line" />
      </div>

      <style jsx>{`
        @keyframes slide-in {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        @keyframes cloud-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-in { animation: slide-in 1.2s ease-out forwards; }
        .animate-cloud-line { animation: cloud-line 2s linear infinite; }
      `}</style>
    </div>
  );
}