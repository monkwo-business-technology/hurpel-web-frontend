import Reveal from "@/components/Reveal";

const partners = [
  "Ontario Trillium Foundation",
  "United Way Elgin Middlesex",
  "City of London",
  "Community Living Ontario",
];

export default function TrustStrip() {
  return (
    <section aria-label="Accreditation and partners" className="bg-white border-y border-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Reveal className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <p className="inline-flex items-center gap-2.5 shrink-0 px-5 py-2.5 rounded-full bg-primary-light text-primary font-bold text-sm">
            <svg className="w-5 h-5 text-accent-dark" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            FOCUS Accredited — maximum accountability
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {partners.map((p) => (
              <li key={p} className="text-ink-muted/70 font-semibold text-sm tracking-wide uppercase">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
