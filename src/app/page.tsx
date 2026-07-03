'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Heart, Shield, BookOpen, Scale, ArrowRight,
  ChevronDown, Quote, Star, Users, GraduationCap, Handshake,
  Phone, Calendar, CheckCircle, ThumbsUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─── animated counter ─── */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setCount(Math.round(p * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { count, ref };
}

/* ─── fade-up wrapper ─── */
function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── data ─── */
const UNSPLASH = 'https://images.unsplash.com';

const services = [
  {
    icon: BookOpen,
    title: 'Awareness & Prevention',
    desc: 'School programmes that teach children about good, bad, and uncomfortable touch, consent, and who a trusted adult is.',
    href: '/services#awareness',
    img: `${UNSPLASH}/photo-1526413232644-8a40f03cc03b?auto=format&fit=crop&w=600&q=75`,
    color: 'from-blue-900/80',
  },
  {
    icon: GraduationCap,
    title: 'Capacity Building',
    desc: 'Training pastors, church leaders, teachers, and community leaders in trauma-informed care and response.',
    href: '/services#capacity',
    img: `${UNSPLASH}/photo-1659174280011-0b9ec848c2d7?auto=format&fit=crop&w=600&q=75`,
    color: 'from-teal-900/80',
  },
  {
    icon: Heart,
    title: 'Survivor Support & Response',
    desc: 'Helping survivors report cases, escorting them through the process, and protecting whistleblowers who speak up.',
    href: '/services#response',
    img: `${UNSPLASH}/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=75`,
    color: 'from-rose-900/80',
  },
  {
    icon: Scale,
    title: 'Justice, Advocacy & Research',
    desc: 'Escorting survivors to court, holding the police accountable, and driving policy change through research.',
    href: '/services#justice',
    img: `${UNSPLASH}/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=75`,
    color: 'from-amber-900/80',
  },
];

const stats = [
  { target: 60, suffix: '+', label: 'Pastors & Leaders Trained', icon: GraduationCap },
  { target: 10, suffix: '+', label: 'Years of Service', icon: Shield },
  { target: 500, suffix: '+', label: 'Children Reached Through School Programmes', icon: Users },
  { target: 3000, suffix: '+', label: 'Community Members Reached', icon: Heart },
];

const testimonials = [
  {
    quote: 'The trauma-informed care training changed how our whole congregation responds. We finally know how to listen, and how to help, without causing more harm.',
    name: 'Pastor, Trained Church Leader', location: 'Lusaka', stars: 5,
  },
  {
    quote: 'Our learners now know what a bad touch is, and who they can trust to tell. That knowledge alone has already made a difference in our school.',
    name: 'Teacher, Partner School', location: 'Copperbelt', stars: 5,
  },
  {
    quote: 'I was scared to report what I knew. Home-Ikhaya protected my identity and made sure the child was safe. I would do it again.',
    name: 'Community Whistleblower', location: 'Lusaka', stars: 5,
  },
];

const partners = ['UNICEF', 'WHO', 'UN Women', 'USAID', 'GIZ', 'Zambia MOH'];

const pillars = [
  {
    icon: Shield,
    title: 'Survivor Support',
    desc: 'Supporting survivors of sexual violence through protection, escort, and advocacy — never victims, always survivors.',
    bg: 'bg-[#C41E3A]',
    href: '/services#response',
  },
  {
    icon: GraduationCap,
    title: 'Training & Capacity Building',
    desc: 'Equipping pastors, teachers, and community leaders with trauma-informed care and response skills.',
    bg: 'bg-[#2056AE]',
    href: '/services#capacity',
  },
  {
    icon: Handshake,
    title: 'Community Action',
    desc: 'Donate, endorse our advocacy campaigns, or help create safer communities for children across Zambia.',
    bg: 'bg-[#1B3A8A]',
    href: '/support',
  },
];

const donationSteps = [
  {
    num: '1',
    title: 'Training & Capacity Building',
    desc: 'Funds trauma-informed care training for pastors, teachers, and community leaders who are often the first responders.',
  },
  {
    num: '2',
    title: 'Survivor Support & Justice',
    desc: 'Helps survivors report cases, escorts them through police and court processes, and holds systems accountable.',
  },
  {
    num: '3',
    title: 'Prevention & Education',
    desc: 'Funds school-based awareness programmes that teach children about safety, consent, and who to trust.',
  },
];

const upcomingEvents = [
  { date: 'Tue, 15 Jul 2026', title: 'Child Safety Awareness Workshop', location: 'Lusaka' },
  { date: 'Sat, 2 Aug 2026', title: 'Trauma-Informed Care Training for Church Leaders', location: 'Copperbelt' },
  { date: 'Fri, 19 Sep 2026', title: 'Safeguarding in Schools: Teacher Training', location: 'Lusaka' },
];

function StatCard({ target, suffix, label, icon: Icon }: { target: number; suffix: string; label: string; icon: React.ElementType }) {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="text-center group">
      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
        <Icon className="w-7 h-7 text-[#e8a838]" />
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">{count.toLocaleString()}{suffix}</div>
      <div className="text-teal-200 text-sm mt-2 font-medium">{label}</div>
    </div>
  );
}

/* ─── floating orb ─── */
function Orb({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn('absolute rounded-full blur-3xl opacity-20 pointer-events-none', className)}
      animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

/* ─── advocacy endorsement ─── */
const VOTE_BASELINE = 1284;

function VoteSection() {
  const [endorsed, setEndorsed] = useState(false);
  const [count, setCount] = useState(VOTE_BASELINE);

  useEffect(() => {
    const stored = localStorage.getItem('registry-endorsed');
    if (stored === '1') {
      setEndorsed(true);
      setCount(VOTE_BASELINE + 1);
    }
  }, []);

  const handleEndorse = () => {
    if (endorsed) return;
    setEndorsed(true);
    setCount((c) => c + 1);
    localStorage.setItem('registry-endorsed', '1');
  };

  return (
    <section className="py-20 px-4 bg-[#f0f9fb]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#2056AE] mb-3">Take a Stand</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1b2a] mb-4">We&apos;re Calling for a Sex Offender Registry</h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Add your voice to our advocacy work. Every endorsement helps us make the case to policymakers
            for a public sex offender register in Zambia.
          </p>
          <button
            onClick={handleEndorse}
            disabled={endorsed}
            className={cn(
              'inline-flex items-center gap-2 font-bold px-9 py-4 rounded-xl transition-all shadow-lg text-base',
              endorsed
                ? 'bg-teal-600 text-white cursor-default'
                : 'bg-[#2056AE] hover:bg-[#1B3A8A] text-white hover:-translate-y-0.5'
            )}
          >
            {endorsed ? <CheckCircle className="w-4 h-4" /> : <ThumbsUp className="w-4 h-4" />}
            {endorsed ? 'Thank You for Endorsing' : 'I Endorse a Sex Offender Registry'}
          </button>
          <p className="text-sm text-gray-400 mt-5">{count.toLocaleString()} people have endorsed this campaign</p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── page ─── */
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image
            src={`${UNSPLASH}/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1920&q=85`}
            alt="A survivor finding strength — A Place Called Home-Ikhaya, Zambia"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#041e24]/92 via-[#0a3d47]/82 to-[#146a82]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf8] via-transparent to-transparent" />
        </motion.div>

        <Orb className="w-96 h-96 bg-teal-400 top-10 -left-32" />
        <Orb className="w-64 h-64 bg-amber-400 bottom-32 right-10" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-teal-100 text-xs font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
          >
            <Shield className="w-3.5 h-3.5 text-[#e8a838]" />
            Serving Zambia since 2014
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            A Place Called{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8a838] to-[#f5d095]">
              Home-Ikhaya
            </span>{' '}
            <br className="hidden sm:block" />
            for Every Child&apos;s Safety
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-teal-100/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            A Place Called Home-Ikhaya works across Zambia on awareness, prevention, and response
            to sexual violence against children — training communities, supporting survivors, and
            driving policy change. We are not a shelter or accommodation provider.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/support" className="flex items-center gap-2 bg-[#e8a838] hover:bg-[#f0be68] text-[#0a3d47] font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 shadow-xl text-base">
              <Heart className="w-4 h-4" /> Donate Now
            </Link>
            <Link href="/book" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 text-base backdrop-blur-sm">
              Get Help Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-8 flex items-center justify-center gap-6 text-xs text-teal-200/70"
          >
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Confidential</span>
            <span className="w-px h-3 bg-teal-600" />
            <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5" /> Free Services</span>
            <span className="w-px h-3 bg-teal-600" />
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 24/7 Support</span>
          </motion.div>
        </motion.div>

        <a href="#pillars" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-teal-300" aria-label="Scroll down">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </section>

      {/* ── THREE PILLARS STRIP ── */}
      <section id="pillars" className="grid grid-cols-1 sm:grid-cols-3">
        {pillars.map(({ icon: Icon, title, desc, bg, href }, i) => (
          <Link
            key={title}
            href={href}
            className={cn(
              'group flex flex-col gap-3 px-8 py-9 text-white transition-all hover:brightness-110',
              bg
            )}
          >
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg leading-snug">{title}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
            <span className="flex items-center gap-1 text-white/60 text-xs font-semibold mt-1 group-hover:gap-2 transition-all">
              Learn more <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </section>

      {/* ── NEED HELP NOW ── */}
      <section className="py-20 px-4 bg-[#fdfbf8] text-center">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-[#C41E3A]/10 text-[#C41E3A] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              <Phone className="w-3.5 h-3.5" /> Report a Concern
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1b2a] mb-4 leading-tight">
              Need to Report or Get Help?
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              If a child is at risk, or you know of sexual violence that needs to be reported,
              confidential support is available — 24 hours a day. Your identity is protected.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-8">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Call or WhatsApp</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+260966841631"
                  className="text-2xl sm:text-3xl font-bold text-[#0a3d47] hover:text-[#e8a838] transition-colors tracking-tight"
                >
                  +260 966 841 631
                </a>
                <span className="hidden sm:block text-gray-300 text-2xl">·</span>
                <a
                  href="tel:+260979268260"
                  className="text-2xl sm:text-3xl font-bold text-[#0a3d47] hover:text-[#e8a838] transition-colors tracking-tight"
                >
                  +260 979 268 260
                </a>
              </div>
            </div>
            <a
              href="tel:+260966841631"
              className="inline-flex items-center gap-2 bg-[#C41E3A] hover:bg-[#a51732] text-white font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg text-base"
            >
              <Phone className="w-4 h-4" /> Call Now — It&apos;s Free &amp; Confidential
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-3">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1b2a]">Comprehensive Support for Survivors</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">Four interconnected pillars designed to meet survivors wherever they are in their journey.</p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, href, img, color }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
                <Link href={href} className="group relative overflow-hidden rounded-2xl h-72 flex flex-col justify-end block shadow-md hover:shadow-xl transition-shadow">
                  <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 25vw" />
                  <div className={cn('absolute inset-0 bg-gradient-to-t to-transparent', color)} />
                  <div className="relative z-10 p-5 text-white">
                    <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base mb-1">{title}</h3>
                    <p className="text-xs text-white/75 leading-relaxed line-clamp-2">{desc}</p>
                    <div className="flex items-center gap-1 text-[#e8a838] text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <Image
          src={`${UNSPLASH}/photo-1511355823905-f042687908eb?auto=format&fit=crop&w=1920&q=70`}
          alt="Community gathering"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a3d47]/88" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-3">Our Impact</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Numbers That Tell a Story of Hope</h2>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s) => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20 px-4 bg-[#fdfbf8]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-3">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1b2a] leading-tight mb-5">
              Preventing violence. Protecting children. Restoring dignity.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Founded by Moomba Thornicroft with over a decade of public health expertise, A Place Called Home-Ikhaya was built on the belief that every child in Zambia deserves to live free from sexual violence and silence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We combine awareness, training, and survivor-centred response because ending sexual violence against children takes a whole community, and we walk every step of it alongside those we serve.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#0a3d47] hover:bg-[#146a82] text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>

          <FadeUp delay={0.15} className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, label: 'Confidential & Safe', desc: 'All services delivered with complete privacy protection' },
              { icon: Heart, label: 'Trauma-Informed', desc: 'Every interaction guided by compassion and clinical best practice' },
              { icon: Users, label: 'Community-Led', desc: 'Programmes co-designed with the communities we serve' },
              { icon: Handshake, label: 'Long-Term Support', desc: 'We stay with survivors through every stage of recovery' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#0a3d47]/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#0a3d47]" />
                </div>
                <h4 className="font-semibold text-[#0d1b2a] text-sm mb-1">{label}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3 h-52 sm:h-72">
          {[
            { src: `${UNSPLASH}/photo-1610883144013-7a76f77250b6?auto=format&fit=crop&w=800&q=75`, alt: 'Women in community' },
            { src: `${UNSPLASH}/photo-1594824388863-547afea8b9b2?auto=format&fit=crop&w=800&q=75`, alt: 'Support and healing' },
            { src: `${UNSPLASH}/photo-1632427511436-7a95c93ba64c?auto=format&fit=crop&w=800&q=75`, alt: 'Community empowerment' },
          ].map(({ src, alt }, i) => (
            <FadeUp key={i} delay={i * 0.1} className="relative overflow-hidden rounded-2xl">
              <Image src={src} alt={alt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 33vw, 25vw" />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── DONATE SPLIT ── */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[480px]">
          {/* Left: text */}
          <div className="bg-[#2056AE] flex items-center px-10 py-16">
            <FadeUp className="max-w-md">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-200 mb-4">Make a Difference</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">Donate</h2>
              <p className="text-blue-100 leading-relaxed mb-4">
                Your support helps survivors of sexual violence find protection, response, and justice.
              </p>
              <p className="text-blue-100 leading-relaxed mb-8">
                Every contribution directly strengthens our ability to train pastors and teachers, support survivors, and run prevention programmes for children across Zambia.
              </p>
              <Link href="/support" className="inline-flex items-center gap-2 bg-[#C41E3A] hover:bg-[#a51732] text-white font-bold px-9 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg">
                <Heart className="w-4 h-4" /> DONATE NOW
              </Link>
            </FadeUp>
          </div>
          {/* Right: photo */}
          <div className="relative min-h-[320px]">
            <Image
              src={`${UNSPLASH}/photo-1511355823905-f042687908eb?auto=format&fit=crop&w=900&q=80`}
              alt="Children smiling — A Place Called Home-Ikhaya, Zambia"
              fill
              className="object-cover object-center"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── WHY YOUR SUPPORT MATTERS ── */}
      <section className="py-24 px-4 bg-[#0d1b2a]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Why Your Support Matters
            </h2>
            <div className="w-12 h-1 bg-[#e8a838] mb-6" />
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Children who experience sexual violence often face silence, stigma, and systems that are not
              equipped to respond. Your donation helps Home-Ikhaya respond with dignity, compassion, and
              survivor-centred care.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Together, we can protect children, restore hope, and help prevent violence before it happens.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── HOW YOUR DONATION HELPS ── */}
      <section className="py-24 px-4 bg-[#EEF6FD]">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#2056AE] mb-3">Transparency</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1b2a]">How Your Donation Helps</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-6">
            {donationSteps.map(({ num, title, desc }, i) => (
              <FadeUp key={num} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-[#0a3d47] text-white flex items-center justify-center text-2xl font-bold mb-5 shrink-0">
                    {num}
                  </div>
                  <h3 className="font-bold text-[#0d1b2a] text-lg mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
                  <Link href="/support" className="inline-flex items-center gap-1 text-[#2056AE] text-xs font-semibold mt-5 hover:gap-2 transition-all">
                    More Info <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3} className="mt-10 bg-[#0a3d47] rounded-2xl p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Transparency &amp; Accountability</h3>
                <p className="text-teal-200 text-sm leading-relaxed">
                  Home-Ikhaya is committed to responsible, transparent use of all funds. When you donate, you can choose to be publicly thanked or to give anonymously — either way, donations directly support survivor response, training, and prevention programmes. If you would like more information about how funds are used, please <Link href="/contact" className="underline hover:text-[#e8a838] transition-colors">contact us</Link>.
                </p>
              </div>
              <CheckCircle className="w-12 h-12 text-[#e8a838] shrink-0" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── TAKE A STAND / ADVOCACY VOTE ── */}
      <VoteSection />

      {/* ── LEADERSHIP ── */}
      <section className="py-0 bg-[#f5f5f5] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[480px]">
          {/* Left: text */}
          <div className="flex flex-col justify-center px-10 py-16 bg-white">
            <FadeUp>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-4">Our Leadership</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1b2a] mb-1 leading-tight">Moomba Thornicroft</h2>
              <p className="text-[#e8a838] font-semibold italic mb-6">Founder &amp; Executive Director</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Moomba Mbolongwe Thornicroft is the Founder and Executive Director of A Place Called Home-Ikhaya, a woman-led organisation responding to sexual violence against children in Zambia. A trained public health specialist with over 10 years of experience, she has worked extensively with adolescents, communities, and health systems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Growing up in Zambia, Moomba saw how violence against children thrives in silence. That reality shaped her commitment to building Home-Ikhaya as a place of safety, awareness, and justice for children and survivors. She has been nominated for a humanitarian award in recognition of this work.
              </p>
              <div className="flex items-center gap-3">
                {(['Facebook', 'LinkedIn', 'Instagram'] as const).map((label) => (
                  <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[#0a3d47] hover:text-white text-gray-500 flex items-center justify-center transition-all text-xs font-bold">
                    {label[0]}
                  </a>
                ))}
              </div>
              <Link href="/about#team" className="inline-flex items-center gap-2 mt-7 text-[#0a3d47] font-semibold text-sm hover:text-[#e8a838] transition-colors">
                Meet the full team <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeUp>
          </div>
          {/* Right: photo */}
          <div className="relative min-h-[380px]">
            <Image
              src={`${UNSPLASH}/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&w=900&q=85&crop=faces`}
              alt="Moomba Thornicroft — Executive Director, A Place Called Home-Ikhaya"
              fill
              className="object-cover object-top"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a3d47]/10" />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-4 bg-[#f0f9fb]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-3">Voices of Hope</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1b2a]">Voices from Our Community</h2>
            <p className="mt-3 text-gray-500 max-w-md mx-auto text-sm">Shared with permission. Identifying details withheld for safety.</p>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, location, stars }, i) => (
              <FadeUp key={name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                  <Quote className="w-8 h-8 text-[#e8a838] mb-4 shrink-0" />
                  <p className="text-gray-700 leading-relaxed text-sm flex-1">&ldquo;{quote}&rdquo;</p>
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: stars }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-[#e8a838] text-[#e8a838]" />
                      ))}
                    </div>
                    <span className="font-semibold text-[#0d1b2a] text-sm">{name}</span>
                    <span className="text-gray-400 text-xs ml-2">{location}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-3">Get Involved</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1b2a]">Upcoming Workshops &amp; Awareness Events</h2>
          </FadeUp>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {upcomingEvents.map(({ date, title, location }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-7 py-6 bg-white hover:bg-[#fdfbf8] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0a3d47]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="w-5 h-5 text-[#0a3d47]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">{date} · {location}</p>
                      <p className="font-semibold text-[#0d1b2a]">{title}</p>
                    </div>
                  </div>
                  <Link
                    href="/events"
                    className="shrink-0 bg-[#C41E3A] hover:bg-[#a51732] text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-sm"
                  >
                    Register Now
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.25} className="text-center mt-7">
            <Link href="/events" className="inline-flex items-center gap-2 text-[#0a3d47] font-semibold hover:text-[#e8a838] transition-colors">
              View all events <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── SHARED RESPONSIBILITY BANNER ── */}
      <section className="py-20 px-4 bg-[#2056AE] text-center">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="text-xl sm:text-2xl font-semibold text-white italic leading-relaxed mb-3">
              &ldquo;Supporting survivors is a shared responsibility. Your generosity helps create safer communities and stronger futures.&rdquo;
            </p>
            <p className="text-blue-200 text-sm mb-8">Empowering Women — Together We Can Make a Difference</p>
            <Link href="/support" className="inline-flex items-center gap-2 bg-[#C41E3A] hover:bg-[#a51732] text-white font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl">
              <Heart className="w-4 h-4" /> DONATE NOW
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-8">Partners &amp; Funders</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((p) => (
              <span key={p} className="text-gray-400 font-bold text-lg hover:text-[#0a3d47] transition-colors cursor-default">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONATE CTA with photo bg ── */}
      <section className="relative py-28 px-4 overflow-hidden">
        <Image
          src={`${UNSPLASH}/photo-1727510936691-3fa8e0104a14?auto=format&fit=crop&w=1920&q=75`}
          alt="Community support"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a3d47]/88" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/10"
              style={{ width: `${i * 200}px`, height: `${i * 200}px` }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeUp>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-4">Make a Difference</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Your donation funds awareness, training, and justice
            </h2>
            <p className="text-teal-200 mb-8 text-lg max-w-xl mx-auto">
              K50 funds a school awareness session. K200 trains a pastor in trauma-informed care. Every kwacha counts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/support" className="flex items-center gap-2 bg-[#e8a838] hover:bg-[#f0be68] text-[#0a3d47] font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-1 shadow-xl text-base">
                <Heart className="w-4 h-4" /> Donate Now
              </Link>
              <Link href="/support#volunteer" className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all text-base">
                Volunteer With Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

