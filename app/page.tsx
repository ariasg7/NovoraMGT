import { Navigation } from '../components/navigation';
import { HeroSection } from '../components/hero-section';
import { PortfolioGrid } from '../components/portfolio-grid';
import { BrandPartnerships } from '../components/brand-partnerships';
import CreatorPartnerships from '../components/creator-partnerships';
import ProcessSection from '../components/process-section';
import ServicesSection from '../components/services-section';
import {FinalCTA} from '../components/final-cta';
import {Footer} from '../components/footer';

export default function App() {
  return (
    <div className="w-full bg-[#000000] min-h-screen">
      <Navigation />
      < HeroSection/>
      <ServicesSection/>
      < PortfolioGrid/>
      < BrandPartnerships/>
      < CreatorPartnerships/>
      < ProcessSection />
      < FinalCTA />
      < Footer />
    </div>
  );
}