import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WhatsAppConcierge from '@/components/WhatsAppConcierge';

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://thenoireparfums.com'),
  title: {
    default: 'The Noiré — Luxury Perfumes India | 10 Fragrances',
    template: '%s | The Noiré',
  },
  description:
    'Some moments never leave. Ten unisex luxury perfumes handcrafted in India. ₹999 for 50 ml bottles with free sample and pan-India express delivery.',
  keywords: [
    'The Noiré',
    'luxury perfume India',
    'unisex perfume India',
    'Kannauj rose Mysore sandalwood fragrance',
    'eau de parfum India',
    'discovery box perfume India',
  ],
  authors: [{ name: 'The Noiré Creative Studio, India' }],
  openGraph: {
    title: 'The Noiré — Luxury Perfumes India',
    description: 'Some moments never leave. Ten handcrafted unisex perfumes.',
    url: 'https://thenoireparfums.com',
    siteName: 'The Noiré',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/the-noire-bottle-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'The Noiré Signature Bottle India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Noiré — Luxury Perfumes India',
    description: 'Some moments never leave. Ten perfumes.',
    images: ['/images/the-noire-bottle-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Italiana&family=Tenor+Sans&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#111111] font-sans selection:bg-[#6B1226] selection:text-white">
        <CartProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <CartDrawer />
          <WhatsAppConcierge />
        </CartProvider>
      </body>
    </html>
  );
}
