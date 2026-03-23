import type { Metadata } from 'next';
import './globals.css'; // Make sure your styles are imported

// 1. This handles the link previews (OG tags)
export const metadata: Metadata = {
  title: 'Novora Management',
  description: 'Crafting digital legacies through high-impact branding and elite creative execution.',
  openGraph: {
    title: 'Novora',
    description: 'Crafting digital legacies through high-impact branding.',
    url: 'https://yourdomain.com',
    siteName: 'Novora',
    images: [
      {
        url: 'https://yourdomain.com/img/og-image.png', 
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};

// 2. This IS the React Component that Next.js is looking for
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}