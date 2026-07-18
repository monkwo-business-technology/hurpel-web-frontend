import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Dictionary, Lang } from "@/i18n";

export default function DonateBand({
  lang,
  dict,
  cta,
}: {
  lang: Lang;
  dict: Dictionary["donateBand"];
  cta: string;
}) {
  return (
    <section
      aria-labelledby="donate-band-heading"
      className="relative overflow-hidden bg-gradient-to-br from-accent via-accent to-accent-dark"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2
              id="donate-band-heading"
              className="text-3xl sm:text-4xl font-extrabold text-primary-dark"
            >
              {dict.heading}
            </h2>
            <p className="mt-4 text-primary-dark/80 text-lg max-w-xl">{dict.subheading}</p>
            <Link
              href={`/${lang}/donate-now`}
              className="mt-8 inline-block px-10 py-4 rounded-2xl font-bold text-white bg-primary-solid hover:bg-primary-solid-hover transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-primary-solid/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
            >
              {cta}
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {dict.amounts.map((a) => (
              <li key={a.value} className="bg-white/85 rounded-2xl p-5 shadow-md">
                <p className="text-2xl font-extrabold text-primary-dark">{a.value}</p>
                <p className="mt-1 text-sm text-slate-600 leading-snug">
                  {dict.provides} {a.impact}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
