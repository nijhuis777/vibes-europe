import Link from "next/link";
import { VibesLogoStacked } from "@/components/icons/vibes-logo";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and description */}
          <div className="text-white">
            <VibesLogoStacked size={44} />
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Building initiatives with specialists to make life easier, solve
              problems, and support communities across Europe.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              Projects
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://sweatandsoil.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Sweat &amp; Soil</a>
              </li>
              <li>
                <a href="https://intervisio.nl" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Intervisio</a>
              </li>
              <li>
                <span className="text-sm opacity-50">More coming soon</span>
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
            KVK: [to be added] &middot; Amsterdam, The Netherlands
          </p>
        </div>
      </div>
    </footer>
  );
}
