import type { Metadata } from "next";
import Link from "next/link";
import {
  IconSweatAndSoil,
  IconIntervisio,
  IconInitiative,
} from "@/components/icons/icons";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the initiatives built by Vibes Europe — from harvest trips to mental health platforms.",
};

const projects = [
  {
    icon: IconSweatAndSoil,
    title: "Sweat & Soil",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    accentBorder: "border-l-green-500",
    description:
      "Harvest trips that connect sports communities with Mediterranean farmers. Participants combine physical activity with meaningful agricultural work — picking olives, harvesting grapes, and building connections with local producers.",
    highlights: [
      "Multi-day harvest experiences in the Mediterranean",
      "Designed for sports teams, clubs, and active communities",
      "Supporting local farmers and sustainable agriculture",
    ],
    link: "https://sweatandsoil.com",
    linkLabel: "Visit Sweat & Soil",
  },
  {
    icon: IconIntervisio,
    title: "Intervisio",
    status: "In development",
    statusColor: "bg-blue-100 text-blue-700",
    accentBorder: "border-l-blue-500",
    description:
      "A platform for multidisciplinary peer consultation (intervisie) — connecting healthcare professionals across disciplines to learn from each other and improve the quality of care together.",
    highlights: [
      "Multidisciplinary peer consultation matching",
      "Structured intervisie formats and scheduling",
      "Building stronger cross-discipline networks in healthcare",
    ],
    link: "https://intervisio.nl",
    linkLabel: "Visit Intervisio",
  },
  {
    icon: IconInitiative,
    title: "Coming soon",
    status: "Exploring",
    statusColor: "bg-coral-100 text-coral-700",
    accentBorder: "border-l-coral-500",
    description:
      "We're always looking for the next meaningful initiative — places where we can partner with specialists to solve real problems and support communities that need it. Our pipeline is active and growing.",
    highlights: [
      "Focused on making life easier for real people",
      "Always looking for passionate specialist partners",
      "Open to ideas — reach out if you see an opportunity",
    ],
    link: "/#contact",
    linkLabel: "Share your idea",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-900 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl text-white">
            Our projects
          </h1>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl">
            Each initiative is a collaboration between Vibes Europe and
            dedicated specialists who bring deep domain expertise to solve
            meaningful problems.
          </p>
        </div>
      </section>

      {/* Projects list */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className={cn(
                "bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden",
                "border-l-4",
                project.accentBorder
              )}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-navy-50 text-navy-700 flex items-center justify-center">
                    <project.icon size={32} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="font-display text-2xl text-navy-900">
                        {project.title}
                      </h2>
                      <span
                        className={cn(
                          "text-xs font-medium px-3 py-1 rounded-full",
                          project.statusColor
                        )}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-navy-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight) => (
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

                    {project.link && (
                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-2 text-coral-600 hover:text-coral-700 font-medium text-sm transition-colors"
                        {...(project.link.startsWith("http")
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
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
            Want to build something together?
          </h2>
          <p className="text-navy-300 mb-8">
            We&apos;re always open to new partnerships and ideas that make a real
            difference.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-coral-500 text-white font-medium rounded-xl hover:bg-coral-600 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
