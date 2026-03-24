import type { Metadata } from 'next';
import './globals.css';
import { LoadingScreen } from '../components/loading-screen';
import { GlowingCursor } from '../components/glowing-cursor';

export const metadata: Metadata = {
  // Replace with your real domain tomorrow
  metadataBase: new URL('https://www.novoramgt.com'), 
  title: {
    default: 'Novora Management',
    template: '%s | Novora Management'
  },
  description: 'Boutique influencer and social media management for the next generation of female creators. Based in Miami & Los Angeles, we scale your presence and secure elite brand partnerships.',
  keywords: [
    'Influencer Management Miami',
    'Creator Agency Los Angeles',
    'Social Media Management for Women',
    'How to scale social media 2026',
    'Boutique Influencer Agency',
    'Novora Management',
    'Brand Deal Negotiation for Creators',
    'Miami Creator Studio',
    'LA Talent Management'
  ],
  authors: [{ name: 'Giani Arias' }],
  creator: 'Giani Arias',
  
  // OpenGraph (Social Media SEO - How it looks when shared on IG/Twitter/iMessage)
  openGraph: {
    title: 'Novora Management | Scaling Elite Creators',
    description: 'Boutique management for the digital elite. We scale 18-30 year old creators through strategic branding and high-impact partnerships in Miami & LA.',
    url: 'https://www.novoramgt.com',
    siteName: 'Novora Management',
    images: [
      {
        url: 'https://raw.githubusercontent.com/ariasg7/NovoraMGT/refs/heads/main/public/img/Novora_bg.jpeg', 
        width: 1200,
        height: 630,
        alt: 'Novora Management - Creator Growth & Branding'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Robots (Ensures Google indexes your site properly)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Extra: Verification for Google Search Console (Recommended for tomorrow)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* These components handle the global effects */}
        <LoadingScreen />
        <GlowingCursor />
        
        {/* This renders your actual page content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}