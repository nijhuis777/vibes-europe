import { VibesLogoMark } from "@/components/icons/vibes-logo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-midnight overflow-hidden">
      {/* Background decoration - large faded logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <VibesLogoMark size={600} className="text-white" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-transparent to-navy-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
          Initiatives that
          <br />
          <span className="text-coral-400">make life easier</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
          We partner with specialists to build meaningful projects — solving real
          problems, supporting communities, and creating impact across Europe.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-coral-500 text-white font-medium rounded-xl hover:bg-coral-600 active:bg-coral-700 transition-colors text-base"
          >
            See our projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-400 text-navy-200 font-medium rounded-xl hover:bg-white/5 transition-colors text-base"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
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
