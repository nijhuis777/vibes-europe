import type { Dictionary } from "@/app/[lang]/dictionaries";

interface ContactProps {
  dict: Dictionary;
}

export function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-navy-900">
          {dict.contact.title}
        </h2>
        <p className="mt-4 text-lg text-navy-600 max-w-xl mx-auto leading-relaxed">
          {dict.contact.subtitle}
        </p>

        <div className="mt-10">
          <a
            href="mailto:info@vibeseurope.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-medium rounded-xl hover:bg-navy-800 transition-colors text-base"
          >
            {dict.contact.cta}
          </a>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-navy-500">
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-navy-400"
            >
              <path
                d="M4 4H20V18H6L4 20V4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            info@vibeseurope.com
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-navy-400"
            >
              <path
                d="M12 2C8 2 5 5 5 9C5 14 12 22 12 22C12 22 19 14 19 9C19 5 16 2 12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="12"
                cy="9"
                r="2.5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            {dict.contact.location}
          </div>
        </div>
      </div>
    </section>
  );
}
