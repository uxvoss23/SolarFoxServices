"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Booked through Solar Fox and couldn't believe how smooth it was. My panels were cleaned within 48 hours and my energy output jumped 22% the very next billing cycle. The route pricing saved me $40 vs other quotes.",
    initials: "SM",
    color: "#7c3aed",
    panelCount: "18 panels",
  },
  {
    name: "James R.",
    location: "San Diego, CA",
    rating: 5,
    text: "I've used two other solar cleaning services before. Solar Fox is on another level — professional, fast, and the app showed exactly where my job fit in the route. Transparency I didn't expect. Will use every quarter.",
    initials: "JR",
    color: "#0891b2",
    panelCount: "24 panels",
  },
  {
    name: "Fernanda L.",
    location: "Tucson, AZ",
    rating: 5,
    text: "My husband was skeptical about the route pricing model, but we saved $55 and the technician was incredibly thorough. The team arrived on time, used no harsh chemicals, and left everything spotless.",
    initials: "FL",
    color: "#059669",
    panelCount: "12 panels",
  },
  {
    name: "David K.",
    location: "Las Vegas, NV",
    rating: 5,
    text: "Quick, efficient, and the pricing makes sense. I love that they explain how the route savings work upfront. No hidden fees, no upsells. Just clean panels and a better power bill.",
    initials: "DK",
    color: "#d97706",
    panelCount: "30 panels",
  },
  {
    name: "Priya S.",
    location: "Riverside, CA",
    rating: 5,
    text: "Absolutely excellent service. The technician was respectful, thorough, and done in under an hour. My panels hadn't been cleaned in 18 months — the difference in production was immediately noticeable.",
    initials: "PS",
    color: "#be185d",
    panelCount: "20 panels",
  },
  {
    name: "Tom W.",
    location: "Sacramento, CA",
    rating: 5,
    text: "Solar Fox is doing something genuinely clever here. Route-based scheduling just makes sense — lower cost, less waste, same great service. I've already referred three neighbors.",
    initials: "TW",
    color: "#0369a1",
    panelCount: "16 panels",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-orange-400 fill-current" : "text-gray-200 fill-current"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase">Customer Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Loved by Homeowners
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Over 2,000 satisfied customers and counting. Here's what they say.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-[#132336] border border-white/8 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="text-white/70 text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location} · {t.panelCount}</p>
                </div>
                <div className="ml-auto">
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-full px-2.5 py-1 text-orange-400 text-xs font-semibold">
                    Verified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 bg-[#132336] border border-white/8 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-6xl font-black text-white">4.9</div>
            <StarRating rating={5} />
            <p className="text-white/40 text-sm mt-1">out of 5 stars</p>
          </div>
          <div className="hidden sm:block w-px h-20 bg-white/10" />
          <div className="space-y-2 w-full max-w-xs">
            {[5, 4, 3, 2, 1].map((star) => {
              const widths = ["94%", "4%", "1%", "0.5%", "0.5%"];
              return (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-white/40 text-xs w-3">{star}</span>
                  <svg className="w-3 h-3 text-orange-400 fill-current shrink-0" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="flex-1 bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-full bg-orange-400 rounded-full"
                      style={{ width: widths[5 - star] }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden sm:block w-px h-20 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-black text-white">2,000+</div>
            <p className="text-white/40 text-sm">Verified Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
