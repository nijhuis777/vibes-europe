"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { VibesLogo } from "@/components/icons/vibes-logo";
import { cn } from "@/lib/utils";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";

interface NavbarProps {
  lang: Locale;
  dict: Dictionary;
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLang = lang === "nl" ? "en" : "nl";

  const navLinks = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/projects`, label: dict.nav.projects },
    { href: `/${lang}/#contact`, label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="text-white">
          <VibesLogo size={36} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={`/${otherLang}`}
              className="text-white/50 hover:text-white text-xs font-medium uppercase tracking-wider border border-white/20 rounded-md px-2 py-1 transition-colors"
            >
              {otherLang.toUpperCase()}
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-md border-t border-white/10">
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-white/80 hover:text-white text-base font-medium py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`/${otherLang}`}
                className="block text-white/50 hover:text-white text-base font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {otherLang === "nl" ? "Nederlands" : "English"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
