"use client";

import { useState } from "react";
import Link from "next/link";
import type { Dictionary, Lang } from "@/i18n";

type Path = "volunteer" | "donate" | "partner";

export default function HelpQuiz({
  lang,
  dict,
}: {
  lang: Lang;
  dict: Dictionary["quiz"];
}) {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<Path, number>>({
    volunteer: 0,
    donate: 0,
    partner: 0,
  });

  const total = dict.questions.length;
  const finished = step >= total;

  function pick(path: string) {
    setScores((s) => ({ ...s, [path as Path]: s[path as Path] + 1 }));
    setStep((v) => v + 1);
  }

  function restart() {
    setStep(0);
    setScores({ volunteer: 0, donate: 0, partner: 0 });
  }

  const winner: Path = (Object.entries(scores) as [Path, number][]).reduce(
    (best, cur) => (cur[1] > best[1] ? cur : best),
    ["volunteer", -1] as [Path, number]
  )[0];

  const resultHref: Record<Path, string> = {
    volunteer: `/${lang}/get-involved#volunteer`,
    donate: `/${lang}/donate-now`,
    partner: `/${lang}/contact`,
  };

  return (
    <section aria-labelledby="quiz-heading" className="bg-cream overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-dark font-bold text-sm mb-4">
          {dict.eyebrow}
        </p>
        <h2 id="quiz-heading" className="text-3xl sm:text-4xl font-extrabold text-primary">
          {dict.heading}
        </h2>
        <p className="mt-4 text-ink-muted">{dict.subheading}</p>

        <div className="mt-10 card-soft rounded-2xl p-8 sm:p-10 text-left min-h-[300px]">
          {!finished ? (
            <div key={step}>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm font-bold uppercase tracking-wider text-ink-muted">
                  {dict.stepLabel} {step + 1} / {total}
                </p>
                <div className="flex gap-1.5" aria-hidden="true">
                  {Array.from({ length: total }, (_, i) => (
                    <span
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i <= step ? "w-6 bg-primary" : "w-2 bg-primary/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink">
                {dict.questions[step].question}
              </h3>
              <div className="mt-6 grid gap-3">
                {dict.questions[step].options.map((o) => (
                  <button
                    key={o.label}
                    type="button"
                    onClick={() => pick(o.path)}
                    className="w-full text-left px-5 py-4 rounded-2xl border-2 border-primary/15 font-semibold text-ink hover:border-primary hover:bg-primary/5 hover:translate-x-1 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center" role="status">
              <p className="text-5xl mb-4" aria-hidden="true">
                <svg className="w-14 h-14 mx-auto text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </p>
              <h3 className="text-2xl font-extrabold text-primary">
                {dict.results[winner].title}
              </h3>
              <p className="mt-4 text-ink-muted max-w-md mx-auto">
                {dict.results[winner].description}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={resultHref[winner]}
                  className="px-8 py-4 rounded-2xl font-bold text-primary-dark bg-accent hover:bg-accent-dark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {dict.results[winner].cta}
                </Link>
                <button
                  type="button"
                  onClick={restart}
                  className="px-6 py-4 rounded-2xl font-semibold text-primary hover:bg-primary/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {dict.restart}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
