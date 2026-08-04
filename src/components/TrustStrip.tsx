import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n";

// One icon per entry in dict.trust.points, in the same order.
const pointIcons = [
  // Map pin — based in London, Ontario
  "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z",
  // Single person — person-centered support
  "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  // Group — family and community led
  "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  // Open eye — open about what we can and cannot do yet
  "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
];

export default function TrustStrip({ dict }: { dict: Dictionary["trust"] }) {
  return (
    <section aria-label={dict.ariaLabel} className="bg-surface-alt border-y border-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Reveal className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <p className="inline-flex items-center gap-2.5 shrink-0 px-5 py-2.5 rounded-full bg-primary-light text-primary font-bold text-sm">
            <svg className="w-5 h-5 text-accent-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            {dict.badge}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {dict.points.map((p, i) => (
              <li
                key={p}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-surface text-ink-muted font-semibold text-sm"
              >
                <svg
                  className="w-5 h-5 shrink-0 text-accent-dark"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={pointIcons[i % pointIcons.length]} />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
