import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  IconSweatAndSoil,
  IconIntervisio,
  IconInitiative,
} from "@/components/icons/icons";
import { cn } from "@/lib/utils";
import { getDictionary, hasLocale, type Locale, type Dictionary } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.metadata.projectsTitle,
    description: dict.metadata.projectsDescription,
  };
}

const projectIcons = [IconSweatAndSoil, IconIntervisio, IconInitiative];
const projectKeys = ["sweatAndSoil", "intervisio", "comingSoon"] as const;
const projectLinks = [
  "https://sweatandsoil.com",
  "https://intervisio.nl",
  "/#contact",
];
const statusColors = [
  "bg-green-100 text-green-700",
  "bg-blue-100 text-blue-700",
  "bg-coral-100 text-coral-700",
];
const accentBorders = [
  "border-l-green-500",
  "border-l-blue-500",
  "border-l-coral-500",
];

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <section className="bg-navy-900 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl text-white">
            {dict.projectsPage.title}
          </h1>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl">
            {dict.projectsPage.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {projectKeys.map((key, i) => {
            const project = dict.projects[key];
            const Icon = projectIcons[i];
            const link = projectLinks[i];

            return (
              <div
                key={key}
                className={cn(
                  "bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden",
                  "border-l-4",
                  accentBorders[i]
                )}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-navy-50 text-navy-700 flex items-center justify-center">
                      <Icon size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h2 className="font-display text-2xl text-navy-900">
                          {project.title}
                        </h2>
                        <span
                          className={cn(
                            "text-xs font-medium px-3 py-1 rounded-full",
                            statusColors[i]
                          )}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-navy-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {project.highlights.map((highlight: string) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-navy-600"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              className="shrink-0 mt-0.5 text-coral-500"
                            >
                              <path
                                d="M4 8L7 11L12 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      {link && (
                        <Link
                          href={link.startsWith("http") ? link : `/${lang}${link}`}
                          className="inline-flex items-center gap-2 text-coral-600 hover:text-coral-700 font-medium text-sm transition-colors"
                          {...(link.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {project.linkLabel}
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M3 8H13M10 5L13 8L10 11"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-navy-900 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
            {dict.projectsPage.ctaTitle}
          </h2>
          <p className="text-navy-300 mb-8">
            {dict.projectsPage.ctaSubtitle}
          </p>
          <Link
            href={`/${lang}/#contact`}
            className="inline-flex items-center justify-center px-8 py-4 bg-coral-500 text-white font-medium rounded-xl hover:bg-coral-600 transition-colors"
          >
            {dict.projectsPage.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
