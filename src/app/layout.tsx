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

// www.ikhayahome.com currently still serves the client's old Wix site, not this build.
// Point metadata at the live deployment until DNS for the real domain is cut over,
// then set NEXT_PUBLIC_SITE_URL (or update this fallback) to the real domain.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ikclient.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'A Place Called Home: Protecting Children, Ending Sexual Violence',
    template: '%s | A Place Called Home',
  },
  description:
    'A Place Called Home works across Zambia on awareness, prevention, and response to sexual violence against children: training pastors and educators, supporting survivors, and driving policy change.',
  keywords: [
    'child sexual violence prevention',
    'Zambia',
    'survivors',
    'trauma-informed care',
    'child safeguarding',
    'whistleblower reporting',
    'nonprofit',
    'Lusaka',
    'A Place Called Home',
  ],
  authors: [{ name: 'A Place Called Home' }],
  creator: 'A Place Called Home',
  publisher: 'A Place Called Home',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_ZM',
    url: SITE_URL,
    siteName: 'A Place Called Home',
    title: 'A Place Called Home: Protecting Children, Ending Sexual Violence',
    description:
      'Awareness, prevention, and response to sexual violence against children in Zambia: training communities, supporting survivors, driving policy change.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Place Called Home',
    description: 'Protecting children. Ending silence. Restoring hope.',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Ikhaya',
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
