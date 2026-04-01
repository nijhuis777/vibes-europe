import {
  IconCommunity,
  IconSimplify,
  IconSpecialists,
} from "@/components/icons/icons";
import type { Dictionary } from "@/app/[lang]/dictionaries";

const pillarIcons = [IconCommunity, IconSimplify, IconSpecialists];

interface MissionProps {
  dict: Dictionary;
}

export function Mission({ dict }: MissionProps) {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-navy-900">
            {dict.mission.title}
          </h2>
          <p className="mt-3 text-lg text-navy-600 max-w-2xl mx-auto">
            {dict.mission.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {dict.mission.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <div key={pillar.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-100 text-navy-700 mb-5">
                  <Icon size={32} />
                </div>
                <h3 className="font-display text-xl text-navy-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-navy-600 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
