import {
  IconCommunity,
  IconSimplify,
  IconSpecialists,
} from "@/components/icons/icons";

const pillars = [
  {
    icon: IconCommunity,
    title: "Help communities",
    description:
      "We identify communities that need support and build initiatives that create lasting, positive change.",
  },
  {
    icon: IconSimplify,
    title: "Make life easier",
    description:
      "From complex problems to simple solutions — we find the friction points and eliminate them.",
  },
  {
    icon: IconSpecialists,
    title: "Work with specialists",
    description:
      "We partner with experts from the market who bring deep domain knowledge to every initiative we launch.",
  },
];

export function Mission() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-navy-900">
            What drives us
          </h2>
          <p className="mt-3 text-lg text-navy-600 max-w-2xl mx-auto">
            Every initiative starts with the same question: how can we make
            this better?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-100 text-navy-700 mb-5">
                <pillar.icon size={32} />
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-navy-600 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
