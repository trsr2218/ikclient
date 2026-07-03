'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Users, Handshake, CheckCircle, ArrowRight, Landmark, Smartphone, Eye, EyeOff } from 'lucide-react';

const amounts = [10, 50, 100, 200, 500];
const frequencies = ['once', 'monthly', 'yearly'] as const;
type Freq = typeof frequencies[number];
type Visibility = 'public' | 'anonymous';

const impacts = [
  { amount: 'K10', impact: 'covers transport for a survivor to reach us safely' },
  { amount: 'K50', impact: 'funds one school awareness session for children' },
  { amount: 'K100', impact: 'provides materials for a trauma-informed care training session' },
  { amount: 'K200', impact: 'trains one pastor or community leader in trauma-informed care' },
  { amount: 'K500', impact: 'funds a survivor\'s full case escort and documentation' },
];

export default function SupportPage() {
  const [freq, setFreq] = useState<Freq>('once');
  const [selected, setSelected] = useState<number | null>(100);
  const [custom, setCustom] = useState('');
  const [visibility, setVisibility] = useState<Visibility>('public');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#041e24] to-[#0a3d47] py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-4">Support Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">Your generosity changes lives</h1>
          <p className="text-teal-100/80 text-lg leading-relaxed">
            Every contribution: however large or small: directly funds awareness, training, and justice for survivors of sexual violence against children in Zambia.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 px-4 bg-[#fdfbf8]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0d1b2a] mb-6">Make a Donation</h2>

            {/* Frequency */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-7">
              {frequencies.map((f) => (
                <button
                  key={f}
                  onClick={() => setFreq(f)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all capitalize ${
                    freq === f ? 'bg-[#0a3d47] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {f === 'once' ? 'One-Time' : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>

            {/* Amount selector */}
            <p className="text-sm font-semibold text-gray-500 mb-3">Choose an amount (ZMW)</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
              {amounts.map((a) => (
                <button
                  key={a}
                  onClick={() => { setSelected(a); setCustom(''); }}
                  className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${
                    selected === a && !custom
                      ? 'border-[#0a3d47] bg-[#0a3d47] text-white'
                      : 'border-gray-200 text-gray-700 hover:border-[#0a3d47]/50'
                  }`}
                >
                  K{a}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="relative mb-7">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">K</span>
              <input
                type="number"
                placeholder="Other amount"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                className="w-full pl-9 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-[#0a3d47] outline-none transition-colors"
              />
            </div>

            {/* Impact preview */}
            {(selected || custom) && (
              <div className="bg-[#f0f9fb] rounded-xl p-4 mb-6 border border-teal-100">
                <p className="text-sm text-[#0a3d47]">
                  <span className="font-bold">K{custom || selected}</span>{freq === 'monthly' ? ' per month' : freq === 'yearly' ? ' per year' : ''}{' '}
                  {impacts.find(i => parseInt(i.amount.slice(1)) === (custom ? parseInt(custom) : selected))?.impact ??
                    'makes a meaningful difference to a survivor\'s journey.'}
                </p>
              </div>
            )}

            {/* Public / anonymous */}
            <p className="text-sm font-semibold text-gray-500 mb-3">Would you like to be thanked publicly, or remain anonymous?</p>
            <div className="grid grid-cols-2 gap-3 mb-7">
              <button
                type="button"
                onClick={() => setVisibility('public')}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border-2 transition-all ${
                  visibility === 'public' ? 'border-[#0a3d47] bg-[#0a3d47] text-white' : 'border-gray-200 text-gray-600 hover:border-[#0a3d47]/50'
                }`}
              >
                <Eye className="w-4 h-4" /> Thank Me Publicly
              </button>
              <button
                type="button"
                onClick={() => setVisibility('anonymous')}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border-2 transition-all ${
                  visibility === 'anonymous' ? 'border-[#0a3d47] bg-[#0a3d47] text-white' : 'border-gray-200 text-gray-600 hover:border-[#0a3d47]/50'
                }`}
              >
                <EyeOff className="w-4 h-4" /> Keep Me Anonymous
              </button>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-[#e8a838] hover:bg-[#f0be68] text-[#0a3d47] font-bold py-4 rounded-xl transition-all text-base hover:-translate-y-0.5 shadow-md">
              <Heart className="w-4 h-4" />
              Donate K{custom || selected || '0'} {freq !== 'once' ? `/ ${freq}` : ''}
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">Secure payment · 100% goes to programmes · Receipt issued</p>

            {/* Bank & mobile money */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-500 mb-3">Prefer a direct transfer?</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 bg-[#fdfbf8] rounded-xl p-4 border border-gray-100">
                  <Landmark className="w-5 h-5 text-[#0a3d47] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#0d1b2a]">Bank Transfer</p>
                    <p className="text-xs text-gray-500 mt-1">Account details to follow — <Link href="/contact" className="underline hover:text-[#0a3d47]">contact us</Link> for instructions in the meantime.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#fdfbf8] rounded-xl p-4 border border-gray-100">
                  <Smartphone className="w-5 h-5 text-[#0a3d47] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#0d1b2a]">Mobile Money</p>
                    <p className="text-xs text-gray-500 mt-1">Number to follow — <Link href="/contact" className="underline hover:text-[#0a3d47]">contact us</Link> for instructions in the meantime.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-bold text-[#0d1b2a]">Where your money goes</h3>
            {impacts.map(({ amount, impact }) => (
              <div key={amount} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <div className="w-12 h-8 shrink-0 rounded-lg bg-[#0a3d47] text-white text-xs font-bold flex items-center justify-center">
                  {amount}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other ways to support */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-3">More Ways to Help</span>
            <h2 className="text-3xl font-bold text-[#0d1b2a]">Beyond financial giving</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                id: 'volunteer',
                title: 'Volunteer',
                desc: 'Share your time and skills. We need trainers, educators, researchers, drivers, and compassionate humans.',
                cta: 'Join as Volunteer',
                href: '/contact?subject=Volunteer',
              },
              {
                icon: Handshake,
                id: 'partner',
                title: 'Partner With Us',
                desc: 'Organisations and businesses can fund programmes, provide in-kind support, or co-develop community initiatives.',
                cta: 'Explore Partnership',
                href: '/contact?subject=Partnership',
              },
              {
                icon: Heart,
                id: 'spread',
                title: 'Spread the Word',
                desc: 'Share our work on social media, within your community, and with potential donors. Visibility saves lives.',
                cta: 'Share Home-Ikhaya',
                href: '#',
              },
            ].map(({ icon: Icon, id, title, desc, cta, href }) => (
              <div key={id} id={id} className="bg-[#fdfbf8] rounded-2xl p-7 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#0a3d47]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0a3d47]" />
                </div>
                <h3 className="font-bold text-[#0d1b2a] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                <Link href={href} className="inline-flex items-center gap-1.5 text-[#0a3d47] font-semibold text-sm hover:gap-2.5 transition-all">
                  {cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section className="py-16 px-4 bg-[#f0f9fb]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0d1b2a] mb-4">Our commitment to transparency</h2>
          <p className="text-gray-600 mb-8">
            A Place Called Home-Ikhaya is a registered nonprofit in Zambia. We publish annual reports and financial statements. Every donor receives a receipt and impact update, and can choose to be publicly thanked or to remain anonymous.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              ['100%', 'to programmes'],
              ['Annual', 'reports published'],
              ['Registered', 'Zambian nonprofit'],
              ['Audited', 'accounts'],
            ].map(([val, label]) => (
              <div key={label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                <div className="flex justify-center mb-1"><CheckCircle className="w-5 h-5 text-teal-600" /></div>
                <div className="font-bold text-[#0a3d47] text-sm">{val}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-white rounded-2xl p-8 border border-gray-100">
            <h3 className="font-bold text-[#0d1b2a] mb-2">With Gratitude</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
              As generous supporters like you give, we&apos;ll feature them here — with their permission. Choose &ldquo;Thank Me Publicly&rdquo; when you donate to be included.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
