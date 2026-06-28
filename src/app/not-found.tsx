import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 bg-[#fdfbf8]">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-[#0a3d47]/10 mb-4 select-none">404</div>
        <h1 className="text-2xl font-bold text-[#0d1b2a] mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. If you need urgent support, please call our helpline.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="flex items-center gap-2 bg-[#0a3d47] hover:bg-[#146a82] text-white font-semibold px-6 py-3 rounded-xl transition-all">
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <a href="tel:+260966841631" className="flex items-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all">
            <ArrowLeft className="w-4 h-4" /> Call for Help
          </a>
        </div>
      </div>
    </section>
  );
}
