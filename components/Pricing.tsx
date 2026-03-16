"use client";

const plans = [
  {
    name: "Route Saver",
    tag: "Most Popular",
    price: 89,
    originalPrice: 120,
    description: "Perfect for standard residential solar setups. Matches you to the nearest active route.",
    features: [
      "Up to 20 panels",
      "Deionized water rinse",
      "Soft brush scrub",
      "Performance report",
      "Route efficiency discount applied",
      "Satisfaction guarantee",
    ],
    cta: "Book Route Saver",
    highlighted: true,
  },
  {
    name: "Standard Clean",
    tag: null,
    price: 120,
    originalPrice: null,
    description: "On-demand scheduling for when you need flexibility over savings.",
    features: [
      "Up to 20 panels",
      "Deionized water rinse",
      "Soft brush scrub",
      "Performance report",
      "Priority scheduling",
      "Satisfaction guarantee",
    ],
    cta: "Book Standard",
    highlighted: false,
  },
  {
    name: "Premium Detail",
    tag: "Best Value",
    price: 159,
    originalPrice: 200,
    description: "Full detail service for larger or heavily soiled systems. Deep clean guaranteed.",
    features: [
      "Up to 40 panels",
      "Deionized water rinse",
      "Soft brush + squeegee",
      "Bird proofing inspection",
      "Detailed before/after report",
      "Route efficiency discount",
      "Priority support",
      "Satisfaction guarantee",
    ],
    cta: "Book Premium",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-orange-600 text-xs font-semibold tracking-widest uppercase">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0d1b2a] mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-[#0d1b2a]/50 text-lg max-w-xl mx-auto">
            No hidden fees. Route savings shown upfront. Pick the plan that fits your panels.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-[#0d1b2a] border-2 border-orange-500 shadow-2xl shadow-orange-500/20 lg:-mt-4 lg:pb-12"
                  : "bg-white border border-gray-100 hover:border-orange-200 hover:shadow-xl"
              }`}
            >
              {/* Tag */}
              {plan.tag && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {plan.tag}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-[#0d1b2a]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-white/50" : "text-[#0d1b2a]/50"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span className={`text-5xl font-black ${plan.highlighted ? "text-white" : "text-[#0d1b2a]"}`}>
                    ${plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className={`text-lg line-through mb-1.5 ${plan.highlighted ? "text-white/30" : "text-gray-300"}`}>
                      ${plan.originalPrice}
                    </span>
                  )}
                </div>
                <p className={`text-sm mt-1 ${plan.highlighted ? "text-orange-400" : "text-[#0d1b2a]/40"}`}>
                  per visit
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-orange-400 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? "text-white/70" : "text-[#0d1b2a]/60"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center font-bold text-sm py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30"
                    : "bg-[#0d1b2a] hover:bg-[#132336] text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          {[
            { icon: "🔒", text: "Secure booking" },
            { icon: "✅", text: "No credit card required to check availability" },
            { icon: "↩️", text: "Free re-clean if not satisfied" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-[#0d1b2a]/50 text-sm">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
