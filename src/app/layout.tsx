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
    default: 'A Place Called Home-Ikhaya: Protecting Children, Ending Sexual Violence',
    template: '%s | A Place Called Home-Ikhaya',
  },
  description:
    'A Place Called Home-Ikhaya works across Zambia on awareness, prevention, and response to sexual violence against children — training pastors and educators, supporting survivors, and driving policy change.',
  keywords: [
    'child sexual violence prevention',
    'Zambia',
    'survivors',
    'trauma-informed care',
    'child safeguarding',
    'whistleblower reporting',
    'nonprofit',
    'Lusaka',
    'A Place Called Home-Ikhaya',
  ],
  authors: [{ name: 'A Place Called Home-Ikhaya' }],
  creator: 'A Place Called Home-Ikhaya',
  publisher: 'A Place Called Home-Ikhaya',
  metadataBase: new URL('https://www.ikhayahome.com'),
  openGraph: {
    type: 'website',
    locale: 'en_ZM',
    url: 'https://www.ikhayahome.com',
    siteName: 'A Place Called Home-Ikhaya',
    title: 'A Place Called Home-Ikhaya: Protecting Children, Ending Sexual Violence',
    description:
      'Awareness, prevention, and response to sexual violence against children in Zambia — training communities, supporting survivors, driving policy change.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A Place Called Home-Ikhaya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Place Called Home-Ikhaya',
    description: 'Protecting children. Ending silence. Restoring hope.',
    images: ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Home-Ikhaya',
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
