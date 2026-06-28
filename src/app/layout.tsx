import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PWAInstall from '@/components/PWAInstall';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ikhaya Home: A Safe Place to Heal, Be Heard, and Begin Again',
    template: '%s | Ikhaya Home',
  },
  description:
    'Ikhaya Home supports survivors of sexual and gender-based violence in Zambia through safe shelter, trauma-informed counseling, legal advocacy, and community education.',
  keywords: [
    'gender-based violence',
    'SGBV',
    'Zambia',
    'survivors',
    'safe shelter',
    'counseling',
    'legal aid',
    'nonprofit',
    'Lusaka',
    'Ikhaya Home',
  ],
  authors: [{ name: 'Ikhaya Home' }],
  creator: 'Ikhaya Home',
  publisher: 'Ikhaya Home',
  metadataBase: new URL('https://www.ikhayahome.com'),
  openGraph: {
    type: 'website',
    locale: 'en_ZM',
    url: 'https://www.ikhayahome.com',
    siteName: 'Ikhaya Home',
    title: 'Ikhaya Home: A Safe Place to Heal, Be Heard, and Begin Again',
    description:
      'Supporting survivors of gender-based violence in Zambia through shelter, counseling, and advocacy.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ikhaya Home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ikhaya Home',
    description: 'A safe place to heal, be heard, and begin again.',
    images: ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Ikhaya Home',
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
    shortcut: '/logo.jpg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a3d47',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#fdfbf8] text-[#0d1b2a] antialiased">
        <ServiceWorkerRegistration />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <PWAInstall />
      </body>
    </html>
  );
}
