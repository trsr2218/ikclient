import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using the A Place Called Home-Ikhaya website and services.',
};

export default function TermsPage() {
  return (
    <section className="py-20 px-4 bg-[#fdfbf8]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#e8a838] mb-3">Legal</span>
          <h1 className="text-4xl font-bold text-[#0d1b2a]">Terms & Conditions</h1>
          <p className="text-gray-500 mt-3 text-sm">Last updated: June 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          {[
            {
              title: '1. Acceptance of Terms',
              body: 'By accessing or using the A Place Called Home-Ikhaya website (www.ikhayahome.com), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.',
            },
            {
              title: '2. About A Place Called Home-Ikhaya',
              body: 'A Place Called Home-Ikhaya is a registered nonprofit organisation in Zambia focused on awareness, prevention, and response to sexual violence against children. We are not a shelter or accommodation provider. Our services are free of charge to all clients.',
            },
            {
              title: '3. Use of This Website',
              body: 'This website is intended for informational purposes and to facilitate contact with our services. You may not use this website for any unlawful purpose or in any way that could harm Home-Ikhaya or the people we serve.',
            },
            {
              title: '4. Confidentiality',
              body: 'Any information you submit through our contact or booking forms is treated as strictly confidential. Whistleblower reports are protected and anonymised. We will not share your personal information with any third party except as required by law or to provide the services you have requested.',
            },
            {
              title: '5. Donations',
              body: 'All donations made through this website are voluntary and non-refundable. Home-Ikhaya is committed to using donations exclusively for its stated programmes. Donors may choose to be publicly acknowledged or to remain anonymous. Financial reports are available on request.',
            },
            {
              title: '6. Disclaimer',
              body: 'The content on this website is provided for general information only. It does not constitute legal, medical, or psychological advice. In an emergency, please call our 24/7 support line or the Zambia Police Service.',
            },
            {
              title: '7. Intellectual Property',
              body: 'All content, logos, and materials on this website are the property of A Place Called Home-Ikhaya and may not be reproduced without prior written permission.',
            },
            {
              title: '8. Changes to These Terms',
              body: 'Home-Ikhaya reserves the right to update these Terms at any time. Continued use of the website following any changes constitutes your acceptance of the revised Terms.',
            },
            {
              title: '9. Contact',
              body: 'For questions about these Terms, contact us at: ikhayahome@outlook.com or write to No. 994 Chipilepile Rd, Avondale, Lusaka, Zambia.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-[#0d1b2a] mb-3">{title}</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
