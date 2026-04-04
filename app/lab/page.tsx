import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Lab — Vibes Europe",
  description:
    "Kleine tools en experimenten, gebouwd met AI. Gratis te gebruiken, direct in je browser.",
};

const tools = [
  {
    slug: "tabata",
    title: "WOD Timer",
    description:
      "CrossFit timer met Tabata, EMOM, AMRAP en For Time modes. Volledig configureerbaar met geluidssignalen.",
    emoji: "⏱️",
    accent: "from-orange-500 to-red-500",
    status: "Live",
  },
  {
    slug: "crossfit",
    title: "For CrossFit",
    description:
      "Er komt iets groots aan voor de CrossFit community. We bouwen achter de schermen aan iets waanzinnigs. Stay tuned.",
    emoji: "🔥",
    accent: "from-cyan-500 to-blue-600",
    status: "Coming soon",
  },
];

export default function LabPage() {
  return (
    <div className="min-h-screen bg-[#0B1426] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/nl"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            &larr; Vibes Europe
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-coral-400 uppercase tracking-[0.3em] text-xs mb-4">
            Vibes Europe
          </p>
          <h1 className="font-display text-5xl md:text-6xl mb-4">The Lab</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Kleine tools en experimenten, gebouwd met AI. Gratis te gebruiken,
            direct in je browser.
          </p>
        </div>
      </section>

      {/* Tools grid */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/lab/${tool.slug}`}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.accent} flex items-center justify-center text-2xl mb-4`}
              >
                {tool.emoji}
              </div>
              <h3 className="font-display text-lg text-white mb-2">
                {tool.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {tool.description}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-xs text-white/30">{tool.status}</span>
              </div>
            </Link>
          ))}

          {/* Coming soon placeholder */}
          <div className="relative bg-white/[0.02] border border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
            <span className="text-3xl mb-3 opacity-30">🧪</span>
            <p className="text-white/20 text-sm">Meer tools binnenkort</p>
          </div>
        </div>
      </section>
    </div>
  );
}
