import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, GraduationCap, Heart, Scale, ArrowRight, CheckCircle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'A Place Called Home provides awareness and prevention education, capacity building for church and community leaders, survivor support, and justice advocacy for children in Zambia.',
};

const services = [
  {
    id: 'awareness',
    icon: BookOpen,
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    title: 'Awareness & Prevention',
    subtitle: 'Stopping violence before it starts',
    description:
      'Our prevention programmes go into schools and communities to build awareness before violence happens. Children learn what is bad touch, good touch, and uncomfortable touch, when it is okay to say no, and who a trusted adult is.',
    features: [
      'School-based awareness workshops',
      'Age-appropriate lessons on consent and safety',
      'Teaching children how and where to report',
      'Identifying a trusted adult',
      'Community sensitisation sessions',
      'Parent and caregiver awareness support',
    ],
    who: 'Schools, children, and communities across Zambia.',
  },
  {
    id: 'capacity',
    icon: GraduationCap,
    color: 'bg-teal-600',
    lightColor: 'bg-teal-50',
    textColor: 'text-teal-700',
    title: 'Capacity Building',
    subtitle: 'Equipping the first responders',
    description:
      'The church is a key responder to issues in the community, but is often not equipped to handle matters of a sexual nature. We train pastors, church leaders, teachers, and other community leaders in trauma-informed care and response, with over 60 pastors trained to date.',
    features: [
      'Trauma-informed care and response training',
      'Training for pastors and church leaders',
      'Training for teachers and school staff',
      'Training for other community leaders',
      'Guidance on responding to disclosures',
      'Ongoing mentorship and refresher sessions',
    ],
    who: 'Pastors, church leaders, teachers, and community leaders.',
  },
  {
    id: 'response',
    icon: Heart,
    color: 'bg-rose-600',
    lightColor: 'bg-rose-50',
    textColor: 'text-rose-700',
    title: 'Survivor Support & Response',
    subtitle: 'Standing with survivors, protecting whistleblowers',
    description:
      'We support survivors, never victims, in reporting cases to the police, and escort them through the process when they are unable to do it on their own. We also receive whistleblower reports and protect the identity of anyone who comes forward.',
    features: [
      'Help reporting cases to the police',
      'Escorting survivors through the reporting process',
      'Protected, anonymous whistleblower reporting',
      'Rescue and placement into a place of safety',
      'Coordination to ensure survivor safety comes first',
      'Ongoing follow-up and support',
    ],
    who: 'Survivors of sexual violence against children, and anyone reporting on their behalf.',
  },
  {
    id: 'justice',
    icon: Scale,
    color: 'bg-amber-600',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    title: 'Justice, Advocacy & Research',
    subtitle: 'Following through until justice is served',
    description:
      'Our priority is the safety of the survivor first, and then justice. We escort survivors to court, follow up on lost police dockets, and hold the police accountable. Our research arm conducts implementation science and policy-influence research within our field. We helped influence the policy that made sexual offences non-bailable in Zambia.',
    features: [
      'Court accompaniment for survivors',
      'Follow-up on police dockets and case progress',
      'Holding the police accountable',
      'Policy advocacy and law reform engagement',
      'Implementation science research within our field',
      'Advocacy for a public sex offender registry',
    ],
    who: 'Survivors seeking justice, and policymakers we work with on reform.',
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
            Holistic protection, every step of the way
          </h1>
          <p className="text-teal-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Four interconnected pillars designed to prevent violence, equip responders, support survivors, and pursue justice. We are not a shelter or accommodation provider.
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
                  Request This Service <ArrowRight className="w-4 h-4" />
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
      <section className="py-16 px-4 bg-[#C41E3A]">
        <div className="max-w-3xl mx-auto text-center">
          <Phone className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Need to report a concern right now?</h2>
          <p className="text-white/80 mb-6">Our support line is open 24 hours a day, 7 days a week. Your identity is protected.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+260966841631" className="bg-[#0a3d47] hover:bg-[#041e24] text-white font-bold px-8 py-3.5 rounded-xl transition-all">
              Call +260 966 841 631
            </a>
            <a href="tel:+260979268260" className="bg-white/15 hover:bg-white/25 text-white font-bold px-8 py-3.5 rounded-xl transition-all border border-white/30">
              Call +260 979 268 260
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
