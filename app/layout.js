import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Stitched | Custom Apparel for Moments That Matter',
    template: '%s | Stitched',
  },
  description: 'Stitched creates fully custom, cut-and-sew apparel for life\'s biggest moments. Five specialized brands for weddings, celebrations, corporate events, and more.',
  metadataBase: new URL('https://gostitched.com'),
  openGraph: {
    title: 'Stitched | Custom Apparel for Moments That Matter',
    description: 'Fully custom, cut-and-sew apparel for life\'s biggest moments. Five specialized brands, one commitment to quality.',
    url: 'https://gostitched.com',
    siteName: 'Stitched',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/assets/Submark transparent.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
