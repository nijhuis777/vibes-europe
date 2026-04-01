export function Approach() {
  const steps = [
    {
      number: "01",
      title: "Identify",
      description:
        "We spot opportunities where communities or industries need a better solution — whether it's a gap in services, an underserved group, or a broken process.",
    },
    {
      number: "02",
      title: "Connect",
      description:
        "We bring together the right specialists — people with hands-on experience and deep domain knowledge who share our drive to build something meaningful.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Together we develop the initiative from idea to reality, combining entrepreneurial speed with specialist expertise to create lasting impact.",
    },
  ];

  return (
    <section className="py-24 bg-navy-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              How we work
            </h2>
            <p className="text-navy-600 text-lg leading-relaxed mb-10">
              Vibes Europe is where initiative meets expertise. We don&apos;t just
              invest — we actively build alongside the specialists who make each
              project succeed.
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-coral-500 text-white flex items-center justify-center font-medium text-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-navy-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-navy-200 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border-2 border-dashed border-navy-200/60 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border-2 border-dashed border-navy-200/30 animate-[spin_30s_linear_infinite]" />

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-navy-900 text-coral-400 flex items-center justify-center shadow-xl">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M10 8C12 16 16 24 20 32Q22 36 24 40"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M38 8C36 16 32 24 28 32Q26 36 24 40"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <circle cx="24" cy="42" r="2.5" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Orbiting dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-coral-400" />
              <div className="absolute bottom-6 right-0 w-3 h-3 rounded-full bg-navy-400" />
              <div className="absolute bottom-0 left-8 w-3.5 h-3.5 rounded-full bg-coral-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
