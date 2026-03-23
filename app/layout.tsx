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
  description: 'Miami’s premier creative studio crafting digital legacies through high-impact branding, production, and elite creative execution.',
  keywords: [
    'Creative Studio Miami', 
    'Branding Agency Miami', 
    'Content Production Miami', 
    'Digital Marketing Miami', 
    'Novora Management', 
    'Artist Management Miami'
  ],
  authors: [{ name: 'Giani Arias' }],
  creator: 'Giani Arias',
  
  // OpenGraph (Social Media SEO)
  openGraph: {
    title: 'Novora Management',
    description: 'Crafting digital legacies through high-impact branding and elite creative execution in Miami, FL.',
    url: 'https://www.novoramgt.com',
    siteName: 'Novora Management',
    images: [
      {
        url: 'https://raw.githubusercontent.com/ariasg7/NovoraMGT/refs/heads/main/public/img/Novora_bg.jpeg', 
        width: 1200,
        height: 630,
        alt: 'Novora Management Miami'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Robots (Tells Google to index the site)
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
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