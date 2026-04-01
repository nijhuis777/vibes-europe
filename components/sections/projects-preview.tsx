import Link from "next/link";
import {
  IconHarvest,
  IconIntervisie,
  IconInitiative,
} from "@/components/icons/icons";
import { cn } from "@/lib/utils";

const projects = [
  {
    icon: IconHarvest,
    title: "Sweat & Soil",
    description:
      "Harvest trips that connect sports communities with Mediterranean farmers — combining nature, exercise, and meaningful work.",
    status: "Active" as const,
    accent: "bg-green-500/10 text-green-400",
    iconBg: "bg-green-900/30 text-green-300",
  },
  {
    icon: IconIntervisie,
    title: "GGZ Intervisie",
    description:
      "A platform for mental health professionals to organize peer consultation sessions — strengthening specialist networks in the GGZ sector.",
    status: "In development" as const,
    accent: "bg-blue-500/10 text-blue-400",
    iconBg: "bg-blue-900/30 text-blue-300",
  },
  {
    icon: IconInitiative,
    title: "What's next?",
    description:
      "We're always exploring new initiatives where we can make a difference. Have an idea or a community that needs support?",
    status: "Exploring" as const,
    accent: "bg-coral-500/10 text-coral-400",
    iconBg: "bg-coral-900/30 text-coral-300",
  },
];

export function ProjectsPreview() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-white">
            Our initiatives
          </h2>
          <p className="mt-3 text-lg text-navy-300 max-w-2xl mx-auto">
            Each project is built with dedicated specialists who bring passion
            and expertise to their domain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-navy-800/50 rounded-2xl p-8 border border-navy-700/50 hover:border-navy-600/50 transition-colors"
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                  project.iconBg
                )}
              >
                <project.icon size={28} />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-xl text-white">
                  {project.title}
                </h3>
                <span
                  className={cn(
                    "text-xs font-medium px-2.5 py-0.5 rounded-full",
                    project.accent
                  )}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-navy-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-coral-400 hover:text-coral-300 font-medium text-sm transition-colors"
          >
            View all projects
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
        </div>
      </div>
    </section>
  );
}
