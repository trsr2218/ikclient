import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events & Workshops',
  description: 'Join A Place Called Home for community workshops, awareness events, and fundraising activities across Zambia.',
};

const events = [
  {
    id: 1,
    title: 'Community Safety Workshop',
    date: 'July 15, 2026',
    time: '09:00 – 13:00',
    location: 'Avondale Community Hall, Lusaka',
    type: 'Workshop',
    typeColor: 'bg-blue-100 text-blue-700',
    desc: 'A hands-on workshop for community members on recognising signs of sexual violence against children, safe reporting pathways, and how to support survivors, including whistleblower protection.',
    capacity: '40 participants',
    free: true,
  },
  {
    id: 2,
    title: 'Trauma-Informed Care: Church Leader Training',
    date: 'July 22, 2026',
    time: '14:00 – 17:00',
    location: 'Ikhaya Centre, No. 994 Chipilepile Rd',
    type: 'Training',
    typeColor: 'bg-rose-100 text-rose-700',
    desc: 'Certified training for pastors and church leaders on trauma-informed care and response, equipping the community\'s first responders to support survivors without causing further harm.',
    capacity: '20 participants',
    free: true,
  },
  {
    id: 3,
    title: 'Know Your Rights: Reporting & Justice Information Session',
    date: 'August 5, 2026',
    time: '10:00 – 12:00',
    location: 'Lusaka Civic Centre',
    type: 'Justice',
    typeColor: 'bg-amber-100 text-amber-700',
    desc: 'A free public session covering survivors\' rights under Zambian law, how reporting and court escort works, and how to safely and anonymously blow the whistle.',
    capacity: '60 participants',
    free: true,
  },
  {
    id: 4,
    title: 'Walk for Safety: Fundraising Walk',
    date: 'August 23, 2026',
    time: '07:00 – 10:00',
    location: 'Independence Avenue, Lusaka',
    type: 'Fundraiser',
    typeColor: 'bg-teal-100 text-teal-700',
    desc: 'Join hundreds of Zambians walking together to raise funds and awareness for the prevention of sexual violence against children. Registration required. All fitness levels welcome.',
    capacity: 'Open',
    free: false,
    price: 'K50 registration (fundraising)',
  },
  {
    id: 5,
    title: 'Training for Teachers: Safeguarding in Schools',
    date: 'September 10, 2026',
    time: '08:30 – 15:30',
    location: 'Mulungushi Conference Centre, Lusaka',
    type: 'Training',
    typeColor: 'bg-purple-100 text-purple-700',
    desc: 'A full-day certified training for educators on child safeguarding, mandatory reporting, and creating safe environments. CPD points available.',
    capacity: '80 teachers',
    free: true,
  },
  {
    id: 6,
    title: 'Annual Fundraising Gala: Building Futures',
    date: 'October 18, 2026',
    time: '18:30 – 22:00',
    location: 'Taj Pamodzi Hotel, Lusaka',
    type: 'Gala',
    typeColor: 'bg-indigo-100 text-indigo-700',
    desc: 'Our flagship annual event bringing together supporters, partners, and the community for an evening of music, stories, and fundraising for Ikhaya\'s programmes.',
    capacity: '200 guests',
    free: false,
    price: 'K500 per person / K4,500 table of 10',
  },
];

export default function EventsPage() {
  const upcoming = events.slice(0, 3);
  const later = events.slice(3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#041e24] to-[#0a3d47] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-4">Events & Workshops</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">Get involved. Show up. Make a difference.</h1>
          <p className="text-teal-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
            From community workshops to fundraising galas, there are many ways to stand with survivors of sexual violence against children.
          </p>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-20 px-4 bg-[#fdfbf8]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-2">Coming Up</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b2a]">Upcoming Events</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {upcoming.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="bg-gradient-to-br from-[#0a3d47] to-[#146a82] p-5 text-white">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${event.typeColor}`}>
                    {event.type}
                  </span>
                  <h3 className="font-bold text-lg leading-snug">{event.title}</h3>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-[#e8a838] shrink-0" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4 text-[#e8a838] shrink-0" />
                      {event.time}
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-[#e8a838] shrink-0 mt-0.5" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4 text-[#e8a838] shrink-0" />
                      {event.capacity}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">{event.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${event.free ? 'text-teal-600' : 'text-amber-700'}`}>
                      {event.free ? 'FREE' : event.price}
                    </span>
                    <Link href="/contact" className="flex items-center gap-1.5 bg-[#0a3d47] hover:bg-[#146a82] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all">
                      Register <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Later events: list view */}
          <div>
            <h2 className="text-2xl font-bold text-[#0d1b2a] mb-6">More Events</h2>
            <div className="space-y-4">
              {later.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#0a3d47]/20 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="sm:w-32 shrink-0 text-center sm:text-left">
                    <div className="text-sm font-bold text-[#0a3d47]">{event.date.split(',')[0]}</div>
                    <div className="text-xs text-gray-400">{event.date.split(', ')[1]}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${event.typeColor}`}>{event.type}</span>
                    </div>
                    <h3 className="font-bold text-[#0d1b2a] mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {event.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`text-xs font-bold ${event.free ? 'text-teal-600' : 'text-amber-700'}`}>
                      {event.free ? 'FREE' : event.price}
                    </span>
                    <Link href="/contact" className="flex items-center gap-1.5 bg-[#0a3d47] hover:bg-[#146a82] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all whitespace-nowrap">
                      Register <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Host an event CTA */}
      <section className="py-16 px-4 bg-[#0a3d47]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Want to host an event for Ikhaya?</h2>
          <p className="text-teal-200 mb-6">We partner with schools, businesses, and community organisations to run awareness and fundraising events across Zambia.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#e8a838] hover:bg-[#f0be68] text-[#0a3d47] font-bold px-7 py-3 rounded-xl transition-all">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
