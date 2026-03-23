export function BrandPartnerships() {
  const brandLogos = [
    { name: 'Premium Brand A', src: '/img/Brands/Brand1.webp' },
    { name: 'Luxury Co.', src: '/img/Brands/Brand2.webp' },
    { name: 'Elite Brand', src: '/img/Brands/Brand3.webp' },
    { name: 'Prestige Group', src: '/img/Brands/Brand4.webp' },
    { name: 'Excellence Inc.', src: '/img/Brands/Brand5.webp' },
    { name: 'Premium Partners', src: '/img/Brands/Brand6.webp' },
    { name: 'Global Elite', src: '/img/Brands/Brand7.webp' },
    { name: 'Visionary Corp', src: '/img/Brands/Brand8.webp' },
  ];

  return (
    <section id="brand-partnerships" className="py-32 px-8 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-5xl md:text-6xl mb-8 font-bold text-white">Experience across brands such as...</h2>
            <div className="space-y-6 text-lg text-white/70 mb-10">
              <p>
                We don't just design, we partner with brands who are serious about long-term growth and market leadership.
              </p>
              <p>
                Our approach combines strategic positioning, creative direction, and flawless execution to transform how the world sees your brand.
              </p>
              <p>
                From visual identity to market campaigns, we operate as an extension of your team, aligned with your vision and committed to exceptional results.
              </p>
            </div>
            <a href = "https://cal.com/novora/30min" target = "_blank">
            <button className="px-8 py-4 bg-white text-black rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 font-medium">
              Partner With Us
            </button> </a>
          </div>

          {/* Right: Brand Logos Grid */}
          <div className="grid grid-cols-2 gap-6">
            {brandLogos.map((brand, index) => (
              <div
                key={index}
                className="aspect-[3/2] bg-zinc-900 rounded-lg flex items-center justify-center border border-white/5 hover:border-white/20 transition-all duration-300 group"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="max-h-[60%] max-w-[70%] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}