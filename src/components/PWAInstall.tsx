'use client';

import { useEffect, useState } from 'react';
import { X, Download, Share, Plus } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

function isIOS() {
  if (typeof navigator === 'undefined') return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function isInStandaloneMode() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in window.navigator && (window.navigator as { standalone?: boolean }).standalone === true);
}

export default function PWAInstall() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [ios, setIos] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (isInStandaloneMode()) return;

    const wasEverDismissed = sessionStorage.getItem('pwa-dismissed');
    if (wasEverDismissed) return;

    const iosDevice = isIOS();
    setIos(iosDevice);

    if (iosDevice) {
      setTimeout(() => setVisible(true), 4000);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setVisible(true), 3000);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = async () => {
    if (!prompt) return;
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === 'accepted') dismiss();
  };

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem('pwa-dismissed', '1');
  };

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-84 z-50 animate-slide-up">
      <div className="bg-[#0a3d47] text-white rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 pt-4 pb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="Home-Ikhaya" className="w-10 h-10 rounded-xl object-cover shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm leading-tight">Install Home-Ikhaya</p>
            <p className="text-teal-300 text-xs mt-0.5">Access offline · Fast · No app store needed</p>
          </div>
          <button onClick={dismiss} className="text-teal-400 hover:text-white transition-colors shrink-0 p-1" aria-label="Dismiss">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mx-4" />

        {/* Body */}
        <div className="px-4 py-3">
          {ios ? (
            <div className="space-y-2">
              <p className="text-xs text-teal-200 mb-3">To install on your iPhone or iPad:</p>
              <div className="flex items-center gap-3 text-xs text-white/90">
                <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <Share className="w-3.5 h-3.5" />
                </div>
                <span>Tap the <strong>Share</strong> button in Safari</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/90">
                <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <Plus className="w-3.5 h-3.5" />
                </div>
                <span>Tap <strong>&ldquo;Add to Home Screen&rdquo;</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/90">
                <div className="w-7 h-7 rounded-lg bg-[#e8a838]/20 flex items-center justify-center shrink-0 text-[#e8a838] font-bold text-xs">✓</div>
                <span>Tap <strong>&ldquo;Add&rdquo;</strong> to confirm</span>
              </div>
            </div>
          ) : (
            <button
              onClick={install}
              className="w-full flex items-center justify-center gap-2 bg-[#e8a838] hover:bg-[#f0be68] text-[#0a3d47] font-bold text-sm px-4 py-3 rounded-xl transition-colors"
            >
              <Download className="w-4 h-4" />
              Add to Home Screen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
