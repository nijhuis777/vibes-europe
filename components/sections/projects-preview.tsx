import Link from "next/link";
import {
  IconSweatAndSoil,
  IconIntervisio,
  IconInitiative,
} from "@/components/icons/icons";
import { cn } from "@/lib/utils";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";

const projectIcons = [IconSweatAndSoil, IconIntervisio, IconInitiative];
const projectKeys = ["sweatAndSoil", "intervisio", "comingSoon"] as const;
const accents = [
  "bg-green-500/10 text-green-400",
  "bg-blue-500/10 text-blue-400",
  "bg-coral-500/10 text-coral-400",
];
const iconBgs = [
  "bg-green-900/30 text-green-300",
  "bg-blue-900/30 text-blue-300",
  "bg-coral-900/30 text-coral-300",
];

interface ProjectsPreviewProps {
  lang: Locale;
  dict: Dictionary;
}

export function ProjectsPreview({ lang, dict }: ProjectsPreviewProps) {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-white">
            {dict.projectsSection.title}
          </h2>
          <p className="mt-3 text-lg text-navy-300 max-w-2xl mx-auto">
            {dict.projectsSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectKeys.map((key, i) => {
            const project = dict.projects[key];
            const Icon = projectIcons[i];
            return (
              <div
                key={key}
                className="bg-navy-800/50 rounded-2xl p-8 border border-navy-700/50 hover:border-navy-600/50 transition-colors"
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                    iconBgs[i]
                  )}
                >
                  <Icon size={28} />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display text-xl text-white">
                    {project.title}
                  </h3>
                  <span
                    className={cn(
                      "text-xs font-medium px-2.5 py-0.5 rounded-full",
                      accents[i]
                    )}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/${lang}/projects`}
            className="inline-flex items-center gap-2 text-coral-400 hover:text-coral-300 font-medium text-sm transition-colors"
          >
            {dict.projectsSection.viewAll}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M10 5L13 8L10 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
