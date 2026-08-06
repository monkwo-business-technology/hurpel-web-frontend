import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import type { Dictionary } from "@/i18n";

const icons = [
  "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm6-4H7v-2h10v2zm0-4H7V7h10v2z",
  "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z",
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
];

export default function ImpactTracker({ dict }: { dict: Dictionary["impact"] }) {
  return (
    <section aria-labelledby="impact-heading" className="bg-primary-solid text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 id="impact-heading" className="text-3xl sm:text-4xl font-extrabold">
            {dict.heading}
          </h2>
          <p className="mt-4 text-slate-200 leading-relaxed">{dict.subheading}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white/10 p-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={icons[i % icons.length]} />
                  </svg>
                </span>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200 leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-medium">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            {dict.charityNote.replace("{ocn}", site.ocn)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
