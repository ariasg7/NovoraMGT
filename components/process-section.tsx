import React from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Book First Call',
    description: "We start by understanding your vision, challenges, and goals. This would be a strategic conversation about what success looks like for your brand.",
  },
  {
    number: '02',
    title: 'Strategy & Direction',
    description: 'Approved creators join a personalized onboarding call where we define content strategy, brand positioning, pricing, and growth objectives. We handle contracts, platform setup, and expectations so creators can focus on creating.',
  },
  {
    number: '03',
    title: 'Launch & Monetize',
    description: 'Once onboarded, creators are matched with campaigns, brand deals, and growth opportunities. We manage negotiations, deliverables, and performance tracking-helping creators scale their influence and income.',
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    description: "Creators get ongoing support with analytics, feedback, and strategy updates to grow their audience and maximize revenue.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 px-8 bg-zinc-950 text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-6">Our Process</h2>
          <p className="text-xl text-white/60 max-w-[700px] mx-auto">
            Crafting bold visuals that inspire and elevate brands with thought process.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step) => (
            <a 
              key={step.number} 
              href="https://cal.com/novora/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block" // Ensures the link takes up full width
            >
              <div className="group relative p-8 bg-black/40 border border-white/10 rounded-lg hover:border-white/30 hover:bg-black/60 transition-all duration-300 h-full">
                
                {/* Step Number */}
                <div className="text-6xl text-white/20 group-hover:text-white/40 transition-colors duration-300 mb-4">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-3xl mb-4">{step.title}</h3>

                {/* Step Description */}
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}