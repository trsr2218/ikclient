'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Calendar, Clock, Shield, CheckCircle, Phone } from 'lucide-react';

const serviceTypes = [
  { value: 'counselling', label: 'Counselling / Mental Health Support' },
  { value: 'shelter', label: 'Emergency Shelter Enquiry' },
  { value: 'legal', label: 'Legal Consultation' },
  { value: 'prevention', label: 'Prevention / Education Programme' },
  { value: 'general', label: 'General Support Enquiry' },
];

const timeSlots = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    serviceType: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: '',
    contactMethod: 'phone',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#041e24] to-[#0a3d47] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-4">Book an Appointment</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">Take the first step</h1>
          <p className="text-teal-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Booking is free, confidential, and easy. We&apos;ll connect you with the right support as quickly as possible.
          </p>
        </div>
      </section>

      {/* Emergency notice */}
      <div className="bg-red-50 border-b border-red-100 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3 text-red-700 text-sm">
          <Phone className="w-4 h-4 shrink-0" />
          <p><span className="font-bold">In immediate danger?</span> Do not book: call us now: <a href="tel:+260966841631" className="font-bold underline">+260 966 841 631</a></p>
        </div>
      </div>

      <section className="py-16 px-4 bg-[#fdfbf8]">
        <div className="max-w-2xl mx-auto">
          {/* Privacy notice */}
          <div className="bg-[#0a3d47]/5 border border-[#0a3d47]/10 rounded-xl p-4 flex gap-3 mb-8">
            <Shield className="w-5 h-5 text-[#0a3d47] shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-[#0a3d47]">Your privacy is protected.</span> All information you share is completely confidential and is only used to connect you with the appropriate support.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center">
              <CheckCircle className="w-14 h-14 text-teal-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#0d1b2a] mb-3">Appointment Requested</h2>
              <p className="text-gray-500 max-w-sm mx-auto mb-3">
                Thank you, <span className="font-semibold text-[#0d1b2a]">{form.firstName}</span>. We&apos;ve received your request and will confirm your appointment within 4 business hours.
              </p>
              {form.date && form.time && (
                <div className="inline-flex items-center gap-3 bg-[#f0f9fb] rounded-xl px-5 py-3 text-sm text-[#0a3d47] font-medium my-3">
                  <Calendar className="w-4 h-4" /> {new Date(form.date).toLocaleDateString('en-ZM', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  <Clock className="w-4 h-4 ml-2" /> {form.time}
                </div>
              )}
              <p className="text-xs text-gray-400 mt-4">
                We&apos;ll contact you via {form.contactMethod}. If you need to reach us urgently, call <a href="tel:+260966841631" className="underline">+260 966 841 631</a>.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              {/* Step indicators */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      step >= s ? 'bg-[#0a3d47] text-white' : 'bg-gray-100 text-gray-400'
                    }`}>{s}</div>
                    <span className={`text-xs font-medium hidden sm:block ${step >= s ? 'text-[#0a3d47]' : 'text-gray-400'}`}>
                      {s === 1 ? 'Service' : s === 2 ? 'Schedule' : 'Details'}
                    </span>
                    {s < 3 && <div className={`flex-1 h-px ${step > s ? 'bg-[#0a3d47]' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1 */}
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-bold text-[#0d1b2a] mb-5">What kind of support do you need?</h2>
                    <div className="space-y-3 mb-8">
                      {serviceTypes.map(({ value, label }) => (
                        <label key={value} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          form.serviceType === value ? 'border-[#0a3d47] bg-[#0a3d47]/5' : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <input
                            type="radio"
                            name="serviceType"
                            value={value}
                            checked={form.serviceType === value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                            form.serviceType === value ? 'border-[#0a3d47]' : 'border-gray-300'
                          }`}>
                            {form.serviceType === value && <div className="w-2 h-2 rounded-full bg-[#0a3d47]" />}
                          </div>
                          <span className="text-sm font-medium text-gray-700">{label}</span>
                        </label>
                      ))}
                    </div>
                    <button
                      type="button"
                      disabled={!form.serviceType}
                      onClick={() => setStep(2)}
                      className="w-full bg-[#0a3d47] hover:bg-[#146a82] disabled:opacity-40 text-white font-semibold py-3.5 rounded-xl transition-all"
                    >
                      Continue
                    </button>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div>
                    <h2 className="text-xl font-bold text-[#0d1b2a] mb-5">Choose a date and time</h2>
                    <div className="space-y-5 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          <Calendar className="w-4 h-4 inline mr-1.5 text-[#e8a838]" />
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          min={minDate}
                          value={form.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0a3d47] outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Clock className="w-4 h-4 inline mr-1.5 text-[#e8a838]" />
                          Preferred Time *
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setForm((f) => ({ ...f, time: slot }))}
                              className={`py-2.5 rounded-lg text-sm font-medium border-2 transition-all ${
                                form.time === slot ? 'border-[#0a3d47] bg-[#0a3d47] text-white' : 'border-gray-200 text-gray-600 hover:border-[#0a3d47]/50'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(1)} className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3.5 rounded-xl hover:bg-gray-50 transition-all">Back</button>
                      <button
                        type="button"
                        disabled={!form.date || !form.time}
                        onClick={() => setStep(3)}
                        className="flex-1 bg-[#0a3d47] hover:bg-[#146a82] disabled:opacity-40 text-white font-semibold py-3.5 rounded-xl transition-all"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-bold text-[#0d1b2a] mb-5">Your contact details</h2>
                    <div className="space-y-4 mb-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { id: 'firstName', label: 'First Name', placeholder: 'Mwila' },
                          { id: 'lastName', label: 'Last Name', placeholder: 'Banda' },
                        ].map(({ id, label, placeholder }) => (
                          <div key={id}>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">{label} *</label>
                            <input
                              type="text"
                              name={id}
                              required
                              placeholder={placeholder}
                              value={form[id as keyof typeof form]}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0a3d47] outline-none transition-all"
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+260 9XX XXX XXX"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0a3d47] outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address (optional)</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0a3d47] outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">How should we contact you to confirm?</label>
                        <div className="flex gap-3">
                          {['phone', 'whatsapp', 'email'].map((m) => (
                            <label key={m} className={`flex-1 text-center py-2.5 rounded-lg border-2 cursor-pointer text-sm font-medium transition-all capitalize ${
                              form.contactMethod === m ? 'border-[#0a3d47] bg-[#0a3d47]/5 text-[#0a3d47]' : 'border-gray-200 text-gray-500'
                            }`}>
                              <input type="radio" name="contactMethod" value={m} checked={form.contactMethod === m} onChange={handleChange} className="sr-only" />
                              {m}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional notes (optional)</label>
                        <textarea
                          name="notes"
                          rows={3}
                          placeholder="Any information that may help us prepare…"
                          value={form.notes}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-[#0a3d47] outline-none transition-all resize-none"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mb-5">All details are confidential and only used to confirm your appointment.</p>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(2)} className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3.5 rounded-xl hover:bg-gray-50 transition-all">Back</button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 bg-[#0a3d47] hover:bg-[#146a82] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all"
                      >
                        {loading ? 'Submitting…' : 'Request Appointment'}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
