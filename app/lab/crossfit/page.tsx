"use client";

import { useState } from "react";

const PASSWORD = "bink36";

export default function CrossFitPlanPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0B1426] flex items-center justify-center px-4">
        <div className="w-full max-w-xs text-center">
          <h1 className="text-2xl font-black text-white mb-6">WOD Tracker Plan</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (pw === PASSWORD) {
                setAuthed(true);
                setError(false);
              } else {
                setError(true);
              }
            }}
            className="space-y-3"
          >
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Wachtwoord"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#1773a4] text-center"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#1773a4] text-white font-bold rounded-xl hover:bg-[#1d92d1] transition-colors"
            >
              Open
            </button>
            {error && <p className="text-red-400 text-sm">Verkeerd wachtwoord</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1426] text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1773a4] uppercase tracking-[0.3em] text-xs mb-3">Vibes Europe — Confidential</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">WOD Tracker</h1>
          <p className="text-white/40 text-lg">Platform Plan &amp; Roadmap</p>
        </div>

        {/* Vision */}
        <Section title="Vision">
          <p>Een white-label CrossFit WOD tracking platform dat elke box met één druk op de knop kan activeren. Gratis of zeer laag geprijsd om maximale adoptie te bereiken. De community die we bouwen wordt de funnel voor Sweat &amp; Soil harvest trips.</p>
        </Section>

        {/* White Label */}
        <Section title="1. White Label Architectuur">
          <h4 className="font-bold text-white mb-2">Setup voor een nieuwe box</h4>
          <Steps steps={[
            "Box eigenaar gaat naar onze landing page",
            'Klikt "Start je box" → vult in: boxnaam, stad, email',
            "Kiest kleuren (color picker) + upload logo",
            "Krijgt direct een werkende app: boxnaam.wodtracker.app",
            "Ontvangt invite link om leden uit te nodigen",
            "Klaar. Hele setup < 2 minuten.",
          ]} />

          <h4 className="font-bold text-white mt-6 mb-2">Branding per box</h4>
          <ul className="space-y-1">
            <Li>Logo in header, PWA icon, splash screen, emails</Li>
            <Li>Kleuren doorgetrokken in hele UI via CSS variables</Li>
            <Li>Naam overal zichtbaar, metadata, OG images</Li>
            <Li>Custom domain (optioneel) via CNAME</Li>
            <Li>Dynamisch PWA manifest per box</Li>
            <Li>Box-branded email templates</Li>
          </ul>
        </Section>

        {/* Rollen */}
        <Section title="2. Rollen &amp; Permissies">
          <div className="bg-white/5 rounded-xl p-5 mb-6 font-mono text-sm">
            <p className="text-[#1773a4]">Super Admin <span className="text-white/30">(jij)</span></p>
            <p className="ml-4 text-white/70">└── Box Owner</p>
            <p className="ml-12 text-white/50">└── Coach</p>
            <p className="ml-20 text-white/40">└── Member</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RoleCard title="Super Admin" items={["Alle boxen zien + beheren", "Platform analytics", "Sweat & Soil lead export", "Impersonatie (support)"]} color="#1773a4" />
            <RoleCard title="Box Owner" items={["Branding instellen", "Coaches + leden beheren", "WODs posten", "Box analytics"]} color="#1d92d1" />
            <RoleCard title="Coach" items={["WODs posten/bewerken", "Alle scores zien", "Leden uitnodigen", "Retention dashboard"]} color="#0f4d6e" />
            <RoleCard title="Member" items={["Score loggen", "PR's bijhouden", "Leaderboard", "Social reacties"]} color="#292a31" />
          </div>
        </Section>

        {/* Leden Administratie */}
        <Section title="3. Leden Administratie">
          <h4 className="font-bold text-white mb-2">Proefles Flow</h4>
          <div className="bg-white/5 rounded-xl p-4 text-sm text-white/60 mb-4">
            Bezoeker → Proefles formulier → Admin notificatie → Na proefles: &quot;Maak lid&quot; knop (pre-filled)
          </div>

          <h4 className="font-bold text-white mb-2">Auth: Email + Wachtwoord</h4>
          <ul className="space-y-1 mb-4">
            <Li>Wachtwoord opslaan in telefoon (iCloud/Google)</Li>
            <Li>Sessie 30+ dagen actief</Li>
            <Li>Wachtwoord vergeten flow</Li>
            <Li>Admin kan resetten</Li>
          </ul>

          <h4 className="font-bold text-white mb-2">Batch Import</h4>
          <ul className="space-y-1">
            <Li>CSV upload: naam, email, geslacht, telefoon</Li>
            <Li>Preview met validatie</Li>
            <Li>Welkomstmail naar alle leden</Li>
            <Li>Migratie vanuit SugarWOD / Wodify / BTWB</Li>
          </ul>
        </Section>

        {/* Roadmap */}
        <Section title="4. Feature Roadmap">
          <div className="space-y-3">
            <Phase n="1" title="Foundation" status="done" items={["Multi-tenant database", "Auth + onboarding", "70 movements, 32 WOD templates"]} />
            <Phase n="2" title="Core WOD" status="done" items={["Coach WOD composer", "Score logging", "Leaderboard", "Bink36 branding"]} />
            <Phase n="3" title="Tools" status="done" items={["% Calculator", "Movements lijst", "Timer (Tabata/EMOM/AMRAP/For Time)"]} />
            <Phase n="3.5" title="Leden Administratie" status="next" items={["Email + wachtwoord auth", "Lid aanmaken door admin", "CSV import", "Proefles formulier"]} />
            <Phase n="4" title="Social & Engagement" status="planned" items={["Fist bumps, comments", "Activity feed", "Push notificaties"]} />
            <Phase n="5" title="Analytics & Gamification" status="planned" items={["Fitness Level (1-100)", "Percentiel ranking", "Streaks & badges"]} />
            <Phase n="6" title="Coach & Retention" status="planned" items={["Retention dashboard", "Participation heatmap", "WOD planning kalender"]} />
            <Phase n="7" title="Smart Features (AI)" status="planned" items={["Smart scaling suggesties", "PR detectie", "AI weekrapport"]} />
            <Phase n="7.5" title="AI Coach (Premium)" status="planned" items={["Persoonlijk trainingsadvies", "Zwakke punten analyse", "Custom splits", "Chat met AI Coach"]} />
            <Phase n="8" title="White Label Onboarding" status="planned" items={["Zelfservice wizard", "Branding wizard", "Subdomain provisioning"]} />
            <Phase n="9" title="Platform Growth" status="planned" items={["Cross-box leaderboards", "Multi-box support", "Data export", "API"]} />
            <Phase n="10" title="Sweat & Soil Integratie" status="planned" items={["Events tab", "Opt-in interesse", "Box challenges", "Coach affiliate model"]} />
            <Phase n="11" title="Stabiliteit & Schaal" status="planned" items={["Edge caching", "Error monitoring", "Offline-first", "Load testing"]} />
            <Phase n="12" title="Competition & Video" status="planned" items={["Video recording", "QR verificatie", "Competition mode", "Open integratie"]} />
          </div>
        </Section>

        {/* Pricing */}
        <Section title="5. Pricing Model">
          <p className="text-white/50 text-sm mb-6">Strategie: Volume &gt; Revenue per box. Community = Sweat &amp; Soil leads.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PricingCard tier="Free" price="€0" features={["WOD posting + score logging", "Leaderboard + timer", "PR tracking", "Max 50 leden"]} />
            <PricingCard tier="Pro" price="€19/mnd" highlight features={["Alles van Free", "Onbeperkt leden", "Custom domain", "Coach retention tools", "Analytics + branded emails"]} />
            <PricingCard tier="AI" price="€29/mnd" features={["Alles van Pro", "Smart scaling", "Fitness Level score", "AI Coach", "Video recording"]} />
          </div>
          <p className="text-center text-white/30 text-xs mt-4">Atleten: altijd gratis. Geen uitzonderingen.</p>
        </Section>

        {/* Sweat & Soil */}
        <Section title="6. Sweat &amp; Soil Synergie">
          <div className="bg-white/5 rounded-xl p-5 text-sm text-white/60 mb-4 font-mono">
            Box adopteert app → 100 leden loggen → In-app events → 5-10% interesse → S&amp;S leads
          </div>
          <ul className="space-y-1">
            <Li>Events tab met Sweat &amp; Soil trips</Li>
            <Li>Opt-in interesse toggle in profiel</Li>
            <Li>Box-brede challenges met S&amp;S als sponsor</Li>
            <Li>Coach affiliate model</Li>
            <Li>Privacy: nooit data delen zonder opt-in</Li>
          </ul>
        </Section>

        {/* Concurrentie */}
        <Section title="7. Concurrentie vs SugarWOD">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 text-white/50 font-medium">Feature</th>
                  <th className="text-left py-2 text-white/50 font-medium">SugarWOD</th>
                  <th className="text-left py-2 text-[#1773a4] font-bold">Wij</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <Tr cells={["Prijs box", "$37-47+/mnd (stijgend)", "€0-19/mnd (transparant)"]} />
                <Tr cells={["Multi-gym", "Nee", "Ja"]} />
                <Tr cells={["AI features", "Nee", "Smart scaling, AI Coach"]} />
                <Tr cells={["Timer", "Nee (apart)", "Ingebouwd"]} />
                <Tr cells={["Custom branding", "Beperkt", "Volledig white-label"]} />
                <Tr cells={["Data export", "Nee", "Ja"]} />
                <Tr cells={["Setup tijd", "Complex", "< 2 minuten"]} />
              </tbody>
            </table>
          </div>
        </Section>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-white/5">
          <p className="text-white/20 text-xs">Vibes Europe BV — Confidential — April 2026</p>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-black text-white mb-6 pb-2 border-b border-white/10">{title}</h2>
      <div className="text-white/60 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="text-[#1773a4] shrink-0">•</span>
      <span>{children}</span>
    </li>
  );
}

function Steps({ steps }: { steps: string[] }) {
  return (
    <div className="space-y-2">
      {steps.map((s, i) => (
        <div key={i} className="flex gap-3">
          <span className="shrink-0 w-6 h-6 rounded-full bg-[#1773a4]/20 text-[#1773a4] flex items-center justify-center text-xs font-bold">{i + 1}</span>
          <span className="text-white/60 text-sm">{s}</span>
        </div>
      ))}
    </div>
  );
}

function RoleCard({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div className="bg-white/5 rounded-xl p-4 border-l-4" style={{ borderColor: color }}>
      <h4 className="font-bold text-white text-sm mb-2">{title}</h4>
      <ul className="space-y-1 text-xs text-white/50">
        {items.map((item, i) => <li key={i}>• {item}</li>)}
      </ul>
    </div>
  );
}

function Phase({ n, title, status, items }: { n: string; title: string; status: "done" | "next" | "planned"; items: string[] }) {
  const statusColors = {
    done: "bg-green-500/20 text-green-400 border-green-500/30",
    next: "bg-[#1773a4]/20 text-[#1773a4] border-[#1773a4]/30",
    planned: "bg-white/5 text-white/40 border-white/10",
  };
  const statusLabels = { done: "Done", next: "Volgende", planned: "Gepland" };
  return (
    <div className={`rounded-xl p-4 border ${statusColors[status]}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-sm text-white">
          <span className="text-white/30 mr-1">Fase {n}:</span> {title}
        </h4>
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/5">{statusLabels[status]}</span>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/40">
        {items.map((item, i) => <span key={i}>• {item}</span>)}
      </div>
    </div>
  );
}

function PricingCard({ tier, price, features, highlight }: { tier: string; price: string; features: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-5 border ${highlight ? "border-[#1773a4] bg-[#1773a4]/10" : "border-white/10 bg-white/5"}`}>
      <h4 className={`font-bold text-lg ${highlight ? "text-[#1773a4]" : "text-white"}`}>{tier}</h4>
      <p className="text-2xl font-black text-white mt-1">{price}</p>
      <ul className="mt-4 space-y-1.5 text-xs text-white/50">
        {features.map((f, i) => <li key={i} className="flex gap-1.5"><span className="text-[#1773a4]">✓</span> {f}</li>)}
      </ul>
    </div>
  );
}

function Tr({ cells }: { cells: string[] }) {
  return (
    <tr className="border-b border-white/5">
      {cells.map((c, i) => (
        <td key={i} className={`py-2 ${i === 2 ? "text-[#1773a4] font-medium" : ""}`}>{c}</td>
      ))}
    </tr>
  );
}
