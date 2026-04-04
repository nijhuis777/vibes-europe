"use client";

import { useState } from "react";

const PASSWORD = "laurien2401";

interface Episode {
  id: number;
  title: string;
  date: string;
  location: string;
  vibe: string;
  description: string;
  photos: string[];
}

const episodes: Episode[] = [
  {
    id: 1,
    title: "DGTL Festival",
    date: "4 april 2026",
    location: "Amsterdam",
    vibe: "Electronic / Techno",
    description: "Episode 1. De eerste. DGTL Amsterdam — waar het allemaal begint.",
    photos: [],
  },
];

export default function FeestjesPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  if (!authed) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-xs text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-2xl font-black text-white mb-2 tracking-tight">FEESTJES</h1>
          <p className="text-white/30 text-sm mb-6">Alleen voor de inner circle</p>
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
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 text-center"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-all"
            >
              Let me in
            </button>
            {error && <p className="text-pink-400 text-sm">Nope, try again</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-pink-900/20 to-black" />
        <div className="relative max-w-2xl mx-auto px-6 pt-16 pb-12 text-center">
          <p className="text-pink-400 uppercase tracking-[0.4em] text-xs mb-3">Vibes Europe presents</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
            FEEST<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">JES</span>
          </h1>
          <p className="text-white/30 text-sm">De avonturen. De muziek. De mensen.</p>
        </div>
      </div>

      {/* Episodes */}
      <div className="max-w-2xl mx-auto px-6 pb-20">
        {episodes.map((ep) => (
          <div key={ep.id} className="mb-12">
            {/* Episode header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-sm font-black">
                {ep.id}
              </span>
              <div>
                <h2 className="text-xl font-black">{ep.title}</h2>
                <p className="text-white/40 text-xs">
                  {ep.date} &middot; {ep.location} &middot; {ep.vibe}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed mb-6 pl-[52px]">
              {ep.description}
            </p>

            {/* Photos */}
            {ep.photos.length > 0 ? (
              <div className="grid grid-cols-2 gap-2 pl-[52px]">
                {ep.photos.map((photo, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-white/5 rounded-xl overflow-hidden"
                  >
                    <img
                      src={photo}
                      alt={`${ep.title} foto ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="pl-[52px]">
                <div className="bg-white/5 border border-dashed border-white/10 rounded-xl p-8 text-center">
                  <span className="text-3xl">📸</span>
                  <p className="text-white/20 text-sm mt-2">Foto&apos;s komen eraan...</p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Coming soon */}
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-white/15 text-xs">More episodes coming soon...</p>
        </div>
      </div>
    </div>
  );
}
