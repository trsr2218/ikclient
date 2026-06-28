'use client';

import { useEffect, useState } from 'react';
import { X, Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstall() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
    if (outcome === 'accepted') setVisible(false);
  };

  if (!visible || !prompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-80 z-50 bg-[#0a3d47] text-white rounded-2xl shadow-2xl p-4 flex items-start gap-3 animate-slide-up">
      <div className="flex-1">
        <p className="font-semibold text-sm">Install Ikhaya Home</p>
        <p className="text-xs text-teal-200 mt-0.5">Access offline anytime: quick support at your fingertips.</p>
        <button
          onClick={install}
          className="mt-3 flex items-center gap-1.5 bg-[#e8a838] text-[#0a3d47] font-semibold text-xs px-4 py-2 rounded-lg hover:bg-[#f0be68] transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Install App
        </button>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-teal-300 hover:text-white transition-colors mt-0.5"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
