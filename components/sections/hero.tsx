import { VibesLogoMark } from "@/components/icons/vibes-logo";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";

interface HeroProps {
  lang: Locale;
  dict: Dictionary;
}

export function Hero({ lang, dict }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-midnight overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <VibesLogoMark size={600} className="text-white" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-transparent to-navy-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
          {dict.hero.titleLine1}
          <br />
          <span className="text-coral-400">{dict.hero.titleLine2}</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
          {dict.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`/${lang}/projects`}
            className="inline-flex items-center justify-center px-8 py-4 bg-coral-500 text-white font-medium rounded-xl hover:bg-coral-600 active:bg-coral-700 transition-colors text-base"
          >
            {dict.hero.cta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-400 text-navy-200 font-medium rounded-xl hover:bg-white/5 transition-colors text-base"
          >
            {dict.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/30"
        >
          <path
            d="M12 5V19M7 14L12 19L17 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
