"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b2a]">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase">
                Smart Route-Based Scheduling
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
              The Most Efficient Way to Clean{" "}
              <span className="gradient-text">Your Solar Panels</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
              We analyze where service professionals are already scheduled and match
              your job to the most efficient route — reducing travel time, lowering
              costs, and passing the savings directly to you.
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                Check Route Availability
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold text-base px-2 py-4 transition-colors"
              >
                See how it works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["F", "M", "S", "J"].map((initial, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-[#0d1b2a] flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: ["#7c3aed", "#0891b2", "#059669", "#d97706"][i] }}
                    >
                      {initial}
                    </div>
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-[#0d1b2a] bg-orange-500 flex items-center justify-center text-xs font-bold text-white">
                    +2k
                  </div>
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-orange-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/50 text-xs mt-0.5">Trusted by 2,000+ homeowners</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-white/70 text-xs font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <span className="text-white/70 text-xs font-medium">100% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Route efficiency card */}
          <div className="lg:flex justify-center hidden">
            <div className="relative w-full max-w-md">
              <div className="bg-[#132336] border border-white/10 rounded-2xl p-6 shadow-2xl">
                <p className="text-xs font-semibold tracking-widest uppercase text-orange-400 mb-1">
                  How Your Job Fits the Route
                </p>
                <p className="text-white/50 text-sm mb-6">
                  Your job gets placed where it fits most efficiently — saving you money
                </p>

                {/* Animated route map */}
                <div className="relative h-48 mb-4">
                  <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
                    {/* Route path */}
                    <path
                      d="M30 130 Q80 60 120 90 Q160 120 200 70 Q230 40 260 80 Q280 100 290 100"
                      stroke="#f97316"
                      strokeWidth="2"
                      strokeOpacity="0.4"
                      className="route-line"
                      fill="none"
                    />
                    {/* Stop circles */}
                    {[
                      { cx: 30, cy: 130, label: "1" },
                      { cx: 120, cy: 90, label: "2" },
                      { cx: 200, cy: 70, label: "3" },
                      { cx: 260, cy: 80, label: "4" },
                      { cx: 290, cy: 100, label: "5" },
                    ].map((stop) => (
                      <g key={stop.label}>
                        <circle cx={stop.cx} cy={stop.cy} r="12" fill="#0d1b2a" stroke="#f97316" strokeWidth="2" />
                        <text x={stop.cx} y={stop.cy + 4} textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="bold">
                          {stop.label}
                        </text>
                      </g>
                    ))}
                    {/* "Your job" marker */}
                    <g>
                      <circle cx="200" cy="70" r="18" fill="#f97316" fillOpacity="0.2" />
                      <rect x="210" y="42" rx="6" width="68" height="22" fill="#f97316" />
                      <text x="244" y="57" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                        20% reduced
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Savings badge */}
                <div className="flex items-start gap-3 bg-orange-500/10 border border-orange-500/25 rounded-xl p-4">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                  <p className="text-sm text-white/80 leading-relaxed">
                    <span className="text-orange-400 font-semibold">Your job fits the route</span> — 20% reduced cost
                    from route efficiency
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Save up to 20%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
