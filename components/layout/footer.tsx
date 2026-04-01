import Link from "next/link";
import { VibesLogoStacked } from "@/components/icons/vibes-logo";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";

interface FooterProps {
  lang: Locale;
  dict: Dictionary;
}

export function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-white">
            <VibesLogoStacked size={44} />
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              {dict.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              {dict.footer.navigate}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/projects`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {dict.nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/#contact`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              {dict.footer.projects}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://sweatandsoil.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Sweat &amp; Soil</a>
              </li>
              <li>
                <a href="https://intervisio.nl" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Intervisio</a>
              </li>
              <li>
                <span className="text-sm opacity-50">{dict.footer.moreComingSoon}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Vibes Europe BV. All rights
            reserved.
          </p>
          <p className="text-xs text-white/30">
            KVK: 34225855 &middot; Den Haag, The Netherlands
          </p>
        </div>
      </div>
    </footer>
  );
}
