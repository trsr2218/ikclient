import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Home as HomeIcon, Heart, Scale, ArrowRight, CheckCircle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Ikhaya Home provides prevention education, safe shelter, trauma counselling, and legal advocacy for survivors of gender-based violence in Zambia.',
};

const services = [
  {
    id: 'prevention',
    icon: BookOpen,
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    title: 'Prevention & Education',
    subtitle: 'Stopping violence before it starts',
    description:
      'Our prevention programmes work at school and community level to build a culture of respect, safety, and equality. We train teachers, community leaders, and young people to recognise, report, and respond to gender-based violence.',
    features: [
      'School-based awareness workshops',
      'Community leader training and sensitisation',
      'Safe reporting pathways for young people',
      'Age-appropriate curriculum on consent and safety',
      'Male engagement and bystander programmes',
      'Parent and caregiver support groups',
    ],
    who: 'Schools, youth groups, community organisations, and local leaders across Zambia.',
  },
  {
    id: 'shelter',
    icon: HomeIcon,
    color: 'bg-teal-600',
    lightColor: 'bg-teal-50',
    textColor: 'text-teal-700',
    title: 'Safe Shelter & Protection',
    subtitle: 'Safety and dignity in moments of crisis',
    description:
      'When a survivor is in immediate danger, we act fast. Our emergency shelter provides a safe, confidential space where survivors can rest, recover, and plan their next steps: free from fear and with full support around them.',
    features: [
      '24/7 emergency intake and hotline',
      'Confidential emergency housing',
      'Safe relocation assistance',
      'Basic needs: food, clothing, hygiene',
      'Child-friendly safe spaces',
      'Security and safety planning',
    ],
    who: 'Survivors of sexual and gender-based violence in immediate danger, including children and adolescents.',
  },
  {
    id: 'healing',
    icon: Heart,
    color: 'bg-rose-600',
    lightColor: 'bg-rose-50',
    textColor: 'text-rose-700',
    title: 'Healing & Mental Health',
    subtitle: 'Trauma-informed care for the whole person',
    description:
      'Healing from gender-based violence is a complex, non-linear process. Our clinical team provides evidence-based, trauma-informed counselling and psychosocial support that meets each survivor where they are.',
    features: [
      'Individual trauma counselling',
      'Group therapy and peer support circles',
      'Child and adolescent psychosocial support',
      'Crisis intervention services',
      'Family counselling and mediation',
      'Referral to specialist psychiatric care',
    ],
    who: 'All survivors of SGBV: including children, adolescents, and adult women and men.',
  },
  {
    id: 'justice',
    icon: Scale,
    color: 'bg-amber-600',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    title: 'Justice & Advocacy',
    subtitle: 'Legal power for those who need it most',
    description:
      'Navigating the justice system after trauma is overwhelming. Our legal team provides hands-on case management, court accompaniment, and policy advocacy so that survivors can access the justice they deserve.',
    features: [
      'Free legal consultation and representation',
      'Police station and court accompaniment',
      'Case management and documentation',
      'Protection order assistance',
      'Policy advocacy and law reform engagement',
      'Coordination with Zambia Police GBV unit',
    ],
    who: 'Survivors seeking legal redress or protection, particularly those unable to afford private legal counsel.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden min-h-[50vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1673530703485-f04a5af6ab1a?auto=format&fit=crop&w=1920&q=80"
          alt="Support and healing"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#041e24]/90 via-[#0a3d47]/82 to-[#146a82]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf8] via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-4">Services</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Holistic support, every step of the way
          </h1>
          <p className="text-teal-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Four interconnected service pillars designed to meet survivors wherever they are: in crisis, in recovery, and in pursuit of justice.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;
        return (
          <section key={service.id} id={service.id} className={`py-20 px-4 ${isEven ? 'bg-[#fdfbf8]' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
              <div className={isEven ? '' : 'lg:order-2'}>
                <div className={`inline-flex items-center gap-2 ${service.lightColor} ${service.textColor} text-xs font-semibold px-3 py-1.5 rounded-full mb-5`}>
                  <Icon className="w-3.5 h-3.5" />
                  {service.subtitle}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1b2a] mb-4">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{service.description}</p>
                <p className="text-sm text-gray-500 mb-6">
                  <span className="font-semibold text-[#0a3d47]">Who this is for:</span> {service.who}
                </p>
                <Link href="/book" className="inline-flex items-center gap-2 bg-[#0a3d47] hover:bg-[#146a82] text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm">
                  Access This Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={isEven ? '' : 'lg:order-1'}>
                <div className={`${service.color} rounded-3xl p-8 text-white`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg">What&apos;s Included</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 opacity-80" />
                        <span className="text-sm opacity-90">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Emergency CTA */}
      <section className="py-16 px-4 bg-[#e8a838]">
        <div className="max-w-3xl mx-auto text-center">
          <Phone className="w-10 h-10 text-[#0a3d47] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a3d47] mb-3">Need help right now?</h2>
          <p className="text-[#0a3d47]/80 mb-6">Our emergency line is open 24 hours a day, 7 days a week. You don&apos;t have to face this alone.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+260966841631" className="bg-[#0a3d47] hover:bg-[#041e24] text-white font-bold px-8 py-3.5 rounded-xl transition-all">
              Call +260 966 841 631
            </a>
            <a href="tel:+260979268260" className="bg-[#0a3d47]/20 hover:bg-[#0a3d47]/30 text-[#0a3d47] font-bold px-8 py-3.5 rounded-xl transition-all border border-[#0a3d47]/20">
              Call +260 979 268 260
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
