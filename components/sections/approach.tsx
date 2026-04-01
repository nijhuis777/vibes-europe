import { VibesLogoMark } from "@/components/icons/vibes-logo";
import type { Dictionary } from "@/app/[lang]/dictionaries";

interface ApproachProps {
  dict: Dictionary;
}

export function Approach({ dict }: ApproachProps) {
  return (
    <section className="py-24 bg-navy-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              {dict.approach.title}
            </h2>
            <p className="text-navy-600 text-lg leading-relaxed mb-10">
              {dict.approach.subtitle}
            </p>

            <div className="space-y-8">
              {dict.approach.steps.map((step) => (
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

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-navy-200 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border-2 border-dashed border-navy-200/60 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border-2 border-dashed border-navy-200/30 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-navy-900 text-coral-400 flex items-center justify-center shadow-xl">
                  <VibesLogoMark size={36} className="text-coral-400" />
                </div>
              </div>
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
