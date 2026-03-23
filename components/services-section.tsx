import React from 'react';
import { Video, Layers, Scissors, Kanban } from 'lucide-react';

// 1. Updated data with specific icons and descriptions from your reference
const services = [
  {
    icon: Video, // Matches the Video Camera SVG
    title: 'Filming & Production',
    description: 'Our team handles professional filming and production to ensure your content looks high-quality, polished, and platform-ready. From setup to execution, we capture content that stops the scroll and elevates your brand.',
    link: 'https://cal.com/novora/30min'
  },
  {
    icon: Layers, // Matches the Layers/Palette SVG
    title: 'Branding & Positioning',
    description: 'We help define and refine your personal brand so your content is consistent, recognizable, and marketable. From visual identity to messaging, we position you to stand out and attract the right audience and partners.',
    link: 'https://cal.com/novora/30min'
  },
  {
    icon: Scissors, // Matches the Scissors/TrendingUp SVG
    title: 'Editing & Post-Production',
    description: 'Our editors transform raw footage into clean, engaging content optimized for every platform. Fast-paced, on-brand, and trend-aware—your content is delivered ready to perform.',
    link: 'https://cal.com/novora/30min'
  },
  {
    icon: Kanban, // Matches the Kanban/Sparkles SVG
    title: 'Content Planning & Strategy',
    description: 'We build data-driven content plans that remove the guesswork from growth. With strategic scheduling, trend analysis, and performance insights, we keep your content consistent, intentional, and scalable.',
    link: 'https://cal.com/novora/30min'
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-black text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Services
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-[700px] mx-auto leading-relaxed">
            We’re a full-service content team built so influencers can focus on creating, not the chaos behind the scenes. From filming and editing to scheduling, strategy, and brand deals, we handle everything off-camera to help your brand grow faster and smarter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a 
                key={index} 
                href={service.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="h-full p-8 md:p-10 bg-zinc-950 border border-white/10 rounded-xl hover:border-white/30 hover:bg-zinc-900/50 transition-all duration-500">
                  {/* Icon Container */}
                  <div className="w-14 h-14 mb-8 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-medium mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="https://cal.com/novora/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}