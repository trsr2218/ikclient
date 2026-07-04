import Link from 'next/link';
import Image from 'next/image';
import { Heart, Phone, Mail, MapPin, Share2, MessageCircle, Camera, PlayCircle } from 'lucide-react';

const footerLinks = {
  Organization: [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Our Services' },
    { href: '/events', label: 'Events & Workshops' },
    { href: '/about#team', label: 'Our Team' },
  ],
  Support: [
    { href: '/support', label: 'Donate Now' },
    { href: '/support#volunteer', label: 'Volunteer' },
    { href: '/support#partner', label: 'Partner With Us' },
    { href: '/book', label: 'Book Appointment' },
  ],
  Legal: [
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/contact', label: 'Contact Us' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#041e24] text-gray-300">
      {/* CTA strip */}
      <div className="bg-gradient-to-r from-[#0a3d47] to-[#146a82] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Together, we build a Zambia free from silence
          </h2>
          <p className="text-teal-200 mb-6 max-w-xl mx-auto">
            Your support, however small, changes lives. Every kwacha funds awareness, training, and protection for children.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 bg-[#e8a838] hover:bg-[#f0be68] text-[#0a3d47] font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg"
          >
            <Heart className="w-4 h-4" />
            Support Home-Ikhaya
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/20 shrink-0">
                <Image src="/logo.jpg" alt="A Place Called Home-Ikhaya Logo" width={48} height={48} className="object-cover w-full h-full" />
              </div>
              <div>
                <span className="font-bold text-white text-xl block leading-none">A Place Called Home-Ikhaya</span>
                <span className="text-teal-400 text-xs">Awareness · Prevention · Response</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              Awareness, prevention, and response to sexual violence against children in Zambia: training church and community leaders, supporting survivors, and driving policy change. We are not a shelter or accommodation provider.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e8a838] mt-0.5 shrink-0" />
                <span className="text-gray-400">No. 994 Chipilepile Rd. Avondale, Lusaka, Zambia</span>
              </div>
              <a href="tel:+260966841631" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#e8a838] shrink-0" />
                +260 966 841 631
              </a>
              <a href="mailto:ikhayahome@outlook.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#e8a838] shrink-0" />
                ikhayahome@outlook.com
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: Share2, label: 'Facebook' },
                { icon: MessageCircle, label: 'X / Twitter' },
                { icon: Camera, label: 'Instagram' },
                { icon: PlayCircle, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#e8a838] hover:text-[#0a3d47] flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-white font-semibold text-sm mb-4">{section}</h3>
              <ul className="space-y-2.5">
                {items.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-gray-400 hover:text-[#e8a838] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} A Place Called Home-Ikhaya. All rights reserved. Registered Nonprofit: Zambia.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 mx-0.5" /> for children
          </p>
        </div>
      </div>
    </footer>
  );
}
