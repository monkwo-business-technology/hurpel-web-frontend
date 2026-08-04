import Link from "next/link";
import Reveal from "@/components/Reveal";
import DonateOptions from "@/components/DonateOptions";
import type { Dictionary, Lang } from "@/i18n";

export default function DonateBand({
  lang,
  dict,
  optionsDict,
  cta,
}: {
  lang: Lang;
  dict: Dictionary["donateBand"];
  optionsDict: Dictionary["donateOptions"];
  cta: string;
}) {
  return (
    <section
      aria-labelledby="donate-band-heading"
      className="relative overflow-hidden bg-gradient-to-br from-accent via-accent to-accent-dark"
    >
      <div
        className="float-slow absolute -top-8 right-[15%] w-32 h-32 rounded-full bg-white/15 blur-xl"
        aria-hidden="true"
      />
      <div
        className="float-slower absolute bottom-4 left-[8%] w-20 h-20 rounded-full bg-primary/10 blur-lg"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
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
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-primary-dark/80">
                {optionsDict.heading}
              </span>
              <DonateOptions dict={optionsDict} lang={lang} variant="compact" />
            </div>
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
