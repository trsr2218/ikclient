'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

// Messages are delivered over WhatsApp to the 24/7 support line; there is no
// server-side inbox, so the wa.me handoff (with a mailto fallback) IS the submission.
const ORG_WHATSAPP = '260966841631';
const ORG_EMAIL = 'ikhayahome@outlook.com';

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const buildMessage = () =>
    [
      'NEW MESSAGE (ikhayahome.com)',
      '',
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      form.subject ? `Subject: ${form.subject}` : null,
      '',
      form.message,
    ]
      .filter((line) => line !== null)
      .join('\n');

  const whatsappHref = () => `https://wa.me/${ORG_WHATSAPP}?text=${encodeURIComponent(buildMessage())}`;
  const mailtoHref = () =>
    `mailto:${ORG_EMAIL}?subject=${encodeURIComponent(form.subject || 'Website message')}&body=${encodeURIComponent(buildMessage())}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(whatsappHref(), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#041e24] to-[#0a3d47] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-4">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">We&apos;re here for you</h1>
          <p className="text-teal-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need help, want to volunteer, or have a question: reach out. Every message is read and responded to.
          </p>
        </div>
      </section>

      {/* Support banner */}
      <div className="bg-[#C41E3A] py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
          <Phone className="w-5 h-5 shrink-0" />
          <p className="font-semibold text-center">
            Need to report a concern urgently? Call our 24/7 support line:{' '}
            <a href="tel:+260966841631" className="underline font-bold">+260 966 841 631</a>
            {' '}or{' '}
            <a href="tel:+260979268260" className="underline font-bold">+260 979 268 260</a>
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 px-4 bg-[#fdfbf8]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-[#0d1b2a]">Contact Information</h2>

            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                lines: ['No. 994 Chipilepile Rd, Avondale', 'Lusaka, Zambia'],
              },
              {
                icon: Phone,
                title: 'Call Us',
                lines: ['+260 966 841 631', '+260 979 268 260'],
                links: ['tel:+260966841631', 'tel:+260979268260'],
              },
              {
                icon: Mail,
                title: 'Email Us',
                lines: ['ikhayahome@outlook.com', 'info@ikhayahome.org'],
                links: ['mailto:ikhayahome@outlook.com', 'mailto:info@ikhayahome.org'],
              },
              {
                icon: Clock,
                title: 'Office Hours',
                lines: ['Mon – Fri: 08:00 – 17:00', 'Emergency line: 24/7'],
              },
            ].map(({ icon: Icon, title, lines, links }) => (
              <div key={title} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0a3d47]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#0a3d47]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0d1b2a] text-sm mb-1">{title}</h3>
                  {lines.map((line, i) => (
                    links ? (
                      <a key={i} href={links[i]} className="block text-sm text-gray-600 hover:text-[#0a3d47] transition-colors">{line}</a>
                    ) : (
                      <p key={i} className="text-sm text-gray-600">{line}</p>
                    )
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-48 bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center mt-4">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-[#0a3d47] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#0a3d47]">No. 994 Chipilepile Rd</p>
                <p className="text-xs text-gray-500">Avondale, Lusaka</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-14 h-14 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#0d1b2a] mb-2">One more step</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    WhatsApp has opened with your message. Press <span className="font-semibold text-[#0d1b2a]">Send</span> in WhatsApp to deliver it to us. We read every message and will respond within 1 business day of receiving it.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center mt-5">
                    <a
                      href={whatsappHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#0a3d47] hover:bg-[#146a82] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
                    >
                      Reopen WhatsApp
                    </a>
                    <a
                      href={mailtoHref()}
                      className="inline-block border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
                    >
                      Send by email instead
                    </a>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' }); }}
                    className="mt-6 text-[#0a3d47] font-semibold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#0d1b2a] mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {[
                        { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Mwila' },
                        { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Banda' },
                      ].map(({ id, label, type, placeholder }) => (
                        <div key={id}>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{label} *</label>
                          <input
                            type={type}
                            name={id}
                            required
                            placeholder={placeholder}
                            value={form[id as keyof typeof form]}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0a3d47] focus:ring-1 focus:ring-[#0a3d47] outline-none transition-all"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0a3d47] focus:ring-1 focus:ring-[#0a3d47] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0a3d47] focus:ring-1 focus:ring-[#0a3d47] outline-none transition-all bg-white"
                      >
                        <option value="">Select a subject…</option>
                        <option value="Report a concern">Report a concern</option>
                        <option value="I need help">I need help</option>
                        <option value="Training">Request church/school/community training</option>
                        <option value="Volunteer">I want to volunteer</option>
                        <option value="Donation">Donation enquiry</option>
                        <option value="Partnership">Partnership opportunity</option>
                        <option value="Research">Research collaboration</option>
                        <option value="Media">Media enquiry</option>
                        <option value="General">General enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us how we can help…"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0a3d47] focus:ring-1 focus:ring-[#0a3d47] outline-none transition-all resize-none"
                      />
                    </div>

                    <p className="text-xs text-gray-400">All messages are treated with complete confidentiality.</p>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#0a3d47] hover:bg-[#146a82] text-white font-semibold py-4 rounded-xl transition-all"
                    >
                      <Send className="w-4 h-4" /> Send via WhatsApp
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
