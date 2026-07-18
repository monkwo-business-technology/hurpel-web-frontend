"use client";

import { useState } from "react";

export type Faq = { question: string; answer: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="space-y-3">
      {faqs.map((f, i) => (
        <li key={f.question} className="card-soft rounded-2xl overflow-hidden">
          <button
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold text-ink hover:text-primary transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {f.question}
            <svg
              className={`w-5 h-5 shrink-0 text-primary transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {open === i && (
            <p className="px-6 pb-6 text-ink-muted leading-relaxed">{f.answer}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
