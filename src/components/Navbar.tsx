'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Heart, Phone, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') setInstallPrompt(null);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navBg = scrolled
    ? 'bg-[#0a3d47]/95 backdrop-blur-md shadow-lg shadow-black/20'
    : 'bg-[#0a3d47]/95 backdrop-blur-md shadow-none';

  return (
    <>
      {/* Support & reporting banner */}
      <div className="bg-[#C41E3A] text-white text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <Phone className="w-3.5 h-3.5 shrink-0" />
        <span>24/7 Support &amp; Reporting Line: </span>
        <a href="tel:+260966841631" className="underline hover:no-underline">+260 966 841 631</a>
        <span className="mx-1">·</span>
        <a href="tel:+260979268260" className="underline hover:no-underline">+260 979 268 260</a>
      </div>

      <header className={cn('sticky top-0 z-40 transition-all duration-300', navBg)}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/20 group-hover:ring-white/50 transition-all shrink-0">
              <Image src="/icons/icon-192.png" alt="A Place Called Home Logo" width={40} height={40} className="object-cover w-full h-full" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white text-base leading-tight block">A Place Called Home</span>
              <span className="text-teal-300 text-[10px] uppercase tracking-widest leading-none block mt-0.5">Ikhaya</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  pathname === href
                    ? 'bg-white/15 text-white'
                    : 'text-teal-100 hover:bg-white/10 hover:text-white'
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {installPrompt && (
              <button
                onClick={handleInstall}
                className="flex items-center gap-1.5 text-sm font-medium text-teal-100 hover:text-white border border-teal-400/40 hover:border-white/40 px-4 py-2 rounded-lg transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Install App
              </button>
            )}
            <Link
              href="/book"
              className="text-sm font-medium text-teal-100 hover:text-white border border-teal-400/40 hover:border-white/40 px-4 py-2 rounded-lg transition-all"
            >
              Book Appointment
            </Link>
            <Link
              href="/support"
              className="flex items-center gap-1.5 bg-[#e8a838] hover:bg-[#f0be68] text-[#0a3d47] font-semibold text-sm px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Heart className="w-3.5 h-3.5" />
              Donate Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden bg-[#0a3d47] border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      pathname === href
                        ? 'bg-white/15 text-white'
                        : 'text-teal-100 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pt-3 flex flex-col gap-2">
                  {installPrompt && (
                    <button
                      onClick={handleInstall}
                      className="flex items-center justify-center gap-1.5 bg-white/10 border border-teal-400/40 text-teal-100 font-semibold text-sm px-4 py-3 rounded-lg w-full"
                    >
                      <Download className="w-4 h-4" />
                      Install App
                    </button>
                  )}
                  <Link
                    href="/book"
                    className="block text-center text-sm font-medium border border-teal-400/40 text-teal-100 px-4 py-3 rounded-lg"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/support"
                    className="flex items-center justify-center gap-1.5 bg-[#e8a838] text-[#0a3d47] font-semibold text-sm px-4 py-3 rounded-lg"
                  >
                    <Heart className="w-3.5 h-3.5" />
                    Donate Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
