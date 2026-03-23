'use client';

import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo and Tagline */}
          <div>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center hover:opacity-80 transition-opacity mb-4"
                >
                    <img 
                    src="img/novora.png" 
                    alt="Novora" 
                    className="h-12 w-auto" 
                    />
                </button>
                <p className="text-white/50 text-sm">
                    Premium branding and creative execution for ambitious brands.
                </p>
            </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm tracking-wider mb-4 text-white/70">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white/50 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/50 hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#work" className="text-white/50 hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#brand-partnerships" className="text-white/50 hover:text-white transition-colors">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm tracking-wider mb-4 text-white/70">Connect</h3>
            <div className="flex gap-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/novoramgt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7a5 5 0 100 10 5 5 0 000-10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 6.5h.01" />
                </svg>
              </a>

              {/* Mail */}
              <a 
                href="mailto:novoramgt@gmail.com" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/50 text-sm border-t border-white/10 pt-8">
          &copy; {currentYear} Novora. All rights reserved.
        </div>

        {/* Disclaimer */}
        <div className="text-center text-white/40 text-xs mt-4 max-w-4xl mx-auto">
          Disclaimer: The information provided on this website is for general informational purposes only and does not constitute professional advice. All creator images and brand logos represent past and current collaborations and do not imply endorsement or partnership.
        </div>
      </div>
    </footer>
  );
}