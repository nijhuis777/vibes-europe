import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fleur wordt 25! 🎉",
  description: "Happy birthday Fleur!",
};

const photos = [
  { src: "/images/fleur/photo1.webp", alt: "Fleur" },
  { src: "/images/fleur/photo2.webp", alt: "Fleur met vrienden" },
  { src: "/images/fleur/photo4.webp", alt: "Fleur samen" },
  { src: "/images/fleur/photo5.jpg", alt: "Diner bij Lapsang" },
  { src: "/images/fleur/photo6.jpg", alt: "Verjaardag bij Lapsang" },
  { src: "/images/fleur/photo7.jpg", alt: "Samen bij Lapsang" },
];

export default function FleurPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-3xl" />
        </div>

        {/* Floating emojis */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
          <span className="absolute top-[10%] left-[15%] text-4xl animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }}>🥂</span>
          <span className="absolute top-[20%] right-[20%] text-3xl animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}>✨</span>
          <span className="absolute bottom-[30%] left-[10%] text-3xl animate-bounce" style={{ animationDelay: "1s", animationDuration: "3.5s" }}>🎂</span>
          <span className="absolute bottom-[20%] right-[15%] text-4xl animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "2.8s" }}>🎉</span>
          <span className="absolute top-[40%] left-[5%] text-2xl animate-bounce" style={{ animationDelay: "0.7s", animationDuration: "3.2s" }}>🍾</span>
          <span className="absolute top-[15%] right-[8%] text-2xl animate-bounce" style={{ animationDelay: "2s", animationDuration: "2.6s" }}>💫</span>
        </div>

        <div className="relative z-10">
          <p className="text-amber-400/80 uppercase tracking-[0.3em] text-sm mb-4">
            2 april 2026
          </p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6">
            <span className="text-rose-400">Fleur</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50" />
            <span className="text-5xl sm:text-6xl md:text-7xl font-display text-amber-300">25</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>
          <p className="text-xl sm:text-2xl text-white/60 max-w-lg mx-auto leading-relaxed">
            Een kwart eeuw fabuleus.<br />
            Vanavond vieren we dat bij <span className="text-amber-300 font-medium">Lapsang</span>.
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/20">
            <path d="M12 5V19M7 14L12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-display text-rose-300 mb-16">
            Momentjes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative group last:odd:sm:col-span-2 last:odd:sm:max-w-[50%]"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-rose-500/20 to-amber-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all" />
                <div className="relative rounded-2xl overflow-hidden bg-white/5">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={500}
                    className="object-cover w-full max-h-[500px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lapsang section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-amber-950/20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-amber-400/60 uppercase tracking-[0.25em] text-xs mb-3">Vanavond</p>
          <h2 className="font-display text-3xl sm:text-4xl text-amber-200 mb-4">
            Lapsang
          </h2>
          <p className="text-white/50 text-sm mb-2">Restaurant &amp; Theesalon &middot; Den Haag</p>
          <p className="text-white/40 text-lg leading-relaxed mt-6 max-w-md mx-auto">
            Thee, lekker eten, en samen zijn — de perfecte manier om 25 te vieren.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 px-6 text-center">
        <p className="text-6xl mb-6">🥳</p>
        <h2 className="font-display text-4xl sm:text-5xl text-rose-300 mb-4">
          Happy birthday, Fleur!
        </h2>
        <p className="text-white/40 text-lg">Op de volgende 25 jaar 🥂</p>
      </section>
    </div>
  );
}
