import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Shield, Users, Target, Eye, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about A Place Called Home-Ikhaya: our mission, history, team, and values guiding our work on awareness, prevention, and response to sexual violence against children in Zambia.',
};

const values = [
  { icon: Heart, title: 'Compassion', desc: 'Every person who reaches out to us is met with unconditional warmth and empathy.' },
  { icon: Shield, title: 'Dignity', desc: 'We affirm the inherent worth of every survivor and centre their agency in all decisions.' },
  { icon: Users, title: 'Community', desc: 'Lasting change is built with communities, not for them.' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest ethical and research standards in everything we do.' },
];

const team = [
  {
    name: 'Moomba Thornicroft',
    role: 'Founder & Executive Director',
    bio: 'With over 10 years of public health expertise in adolescent health, Moomba founded A Place Called Home-Ikhaya to fill a critical gap in the prevention of and response to sexual violence against children in Zambia.',
    initials: 'MT',
  },
  {
    name: 'Programme Director',
    role: 'Prevention & Capacity Building',
    bio: 'Leads our school awareness programmes and our training of pastors, teachers, and community leaders in trauma-informed care and response.',
    initials: 'PD',
  },
  {
    name: 'Response Coordinator',
    role: 'Survivor Support & Justice',
    bio: 'Coordinates survivor escorts to police and court, whistleblower protection, and follow-up with police to ensure cases are not lost.',
    initials: 'RC',
  },
  {
    name: 'Director of Research',
    role: 'Research & Policy',
    bio: 'A university-based research partner supporting our implementation science and policy-influence work within the field of child protection.',
    initials: 'DR',
  },
];

const milestones = [
  { year: '2014', event: 'A Place Called Home-Ikhaya founded by Moomba Thornicroft in Lusaka' },
  { year: '2016', event: 'Launched school-based awareness programme on child safety and consent' },
  { year: '2018', event: 'Began training church leaders and pastors in trauma-informed care and response' },
  { year: '2020', event: 'Played a leading role in the policy advocacy that made sexual offences non-bailable in Zambia' },
  { year: '2022', event: 'Reached 60+ pastors and community leaders trained in trauma-informed care' },
  { year: '2024', event: 'Launched a dedicated research arm for implementation science and policy influence' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden min-h-[50vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1659174280011-0b9ec848c2d7?auto=format&fit=crop&w=1920&q=80"
          alt="Women in community"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#041e24]/90 via-[#0a3d47]/80 to-[#146a82]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf8] via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-4">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Built on belief. Driven by purpose.
          </h1>
          <p className="text-teal-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
            A Place Called Home-Ikhaya was born from a simple conviction: that every child in Zambia deserves to live free from sexual violence, fear, and silence. We are not a shelter or accommodation provider.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-[#fdfbf8]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#0a3d47]/10 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-[#0a3d47]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0d1b2a] mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To focus on awareness, prevention, and response to sexual violence against children in Zambia: training church and community leaders, supporting survivors through reporting and justice, and driving policy change that protects children.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#e8a838]/20 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-[#d4892a]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0d1b2a] mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              A Zambia where every child lives free from sexual violence: where survivors are heard, believed, and supported to rebuild their lives with dignity, safety, and justice.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-3">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1b2a] mb-6">From one person&apos;s conviction to a movement</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                A Place Called Home-Ikhaya began in 2014 when Moomba Thornicroft, working in adolescent public health, saw firsthand how survivors of sexual violence against children were falling through the cracks of existing systems. There was no integrated support, and often no voice for those who needed it most — including neighbours who suspected abuse but were afraid to come forward.
              </p>
              <p>
                Starting with a single phone number, Moomba began connecting survivors to reporting support, and training the community leaders who were already trusted first responders — pastors, teachers, and community leaders — through goodwill and determination. Word spread. The need was undeniable.
              </p>
              <p>
                Today, Home-Ikhaya runs school awareness programmes, trains church and community leaders in trauma-informed care, escorts survivors through reporting and justice, and conducts research to influence policy. We have trained over 60 pastors and leaders, and helped influence the policy that made sexual offences non-bailable in Zambia.
              </p>
              <p className="font-medium text-[#0a3d47]">
                The work is far from over. Every day, survivors and whistleblowers reach out. Every day, we answer.
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1610883144013-7a76f77250b6?auto=format&fit=crop&w=800&q=80"
              alt="Women in community support"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d47]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-[#f0f9fb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-3">What Guides Us</span>
            <h2 className="text-3xl font-bold text-[#0d1b2a]">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 rounded-full bg-[#0a3d47]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#0a3d47]" />
                </div>
                <h3 className="font-bold text-[#0d1b2a] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-[#fdfbf8]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-3">Our Journey</span>
            <h2 className="text-3xl font-bold text-[#0d1b2a]">A Decade of Impact</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#0a3d47]/20" />
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#0a3d47] text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
                    {year.slice(2)}
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex-1 mt-1">
                    <span className="text-xs font-bold text-[#e8a838] block mb-1">{year}</span>
                    <p className="text-sm text-gray-700">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-3">Our People</span>
            <h2 className="text-3xl font-bold text-[#0d1b2a]">The Team Behind the Mission</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio, initials }) => (
              <div key={name} className="bg-[#fdfbf8] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0a3d47] to-[#146a82] flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {initials}
                </div>
                <h3 className="font-bold text-[#0d1b2a] text-center mb-0.5">{name}</h3>
                <p className="text-[#e8a838] text-xs font-semibold text-center mb-3">{role}</p>
                <p className="text-xs text-gray-500 leading-relaxed text-center">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#0a3d47]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Join us in building a safer Zambia</h2>
          <p className="text-teal-200 mb-7">Whether you donate, volunteer, or simply share our work: you are part of the change.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/support" className="flex items-center gap-2 bg-[#e8a838] hover:bg-[#f0be68] text-[#0a3d47] font-bold px-7 py-3 rounded-xl transition-all">
              <Heart className="w-4 h-4" /> Support Us
            </Link>
            <Link href="/contact" className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-7 py-3 rounded-xl transition-all">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
