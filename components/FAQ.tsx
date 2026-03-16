"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does route-based pricing work?",
    answer:
      "We map out where our technicians are already scheduled to work each day. When your home falls near an existing route, we can add your job without significant extra travel — which means lower fuel costs and overhead for us. We pass those savings directly to you in the form of a reduced service price.",
  },
  {
    question: "How much can I save compared to standard pricing?",
    answer:
      "Customers on active routes typically save between 15–20% compared to on-demand scheduling. The exact discount depends on how well your home fits the current route. You'll see your specific price before booking — no surprises.",
  },
  {
    question: "How often should I clean my solar panels?",
    answer:
      "Most homeowners in the Southwest (Arizona, California, Nevada) benefit from cleaning 2–4 times per year. In dusty or high-pollen areas, quarterly cleaning is recommended. Dirty panels can lose 15–30% of their energy output, so regular cleaning pays for itself quickly.",
  },
  {
    question: "Is your team licensed and insured?",
    answer:
      "Yes — every Solar Fox Services technician is fully licensed, background-checked, and insured. We carry full liability insurance so your property is protected throughout the service.",
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use only purified, deionized water and soft brushes specifically designed for solar panels. No harsh chemicals or abrasives. This approach is safe for your panels, won't void warranties, and leaves no residue behind.",
  },
  {
    question: "How long does a cleaning appointment take?",
    answer:
      "Most standard residential jobs (10–20 panels) take 45–75 minutes. Larger systems or heavily soiled panels may take a bit longer. You'll receive a time estimate when you book.",
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "Not necessarily. As long as we have access to the panels (usually from the roof or a gate to the backyard), you don't need to be present. We'll send you a confirmation when the job is complete along with your performance report.",
  },
  {
    question: "What's your satisfaction guarantee?",
    answer:
      "If you're not 100% satisfied with your cleaning, contact us within 7 days and we'll return to re-clean at no charge. Simple as that.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden hover:border-orange-200 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-semibold text-[#0d1b2a] text-base">{question}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border border-orange-200 bg-orange-50 flex items-center justify-center text-orange-500 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-[#0d1b2a]/60 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-orange-600 text-xs font-semibold tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0d1b2a] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#0d1b2a]/50 text-lg">
            Everything you need to know before booking.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#0d1b2a]/40 text-sm mb-3">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors"
          >
            Contact us directly
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
