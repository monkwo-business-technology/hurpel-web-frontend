"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import DonateModal from "@/components/DonateModal";
import DonateProviderIcon from "@/components/DonateProviderIcon";
import { donateProviders, isDonateProviderReady, type DonateProvider } from "@/lib/donate";
import type { Dictionary, Lang } from "@/i18n";

export default function DonateOptions({
  dict,
  lang,
  variant = "cards",
  className = "",
}: {
  dict: Dictionary["donateOptions"];
  lang: Lang;
  /** `cards` = labelled tiles for donation pages, `compact` = icon-only row. */
  variant?: "cards" | "compact";
  className?: string;
}) {
  const [active, setActive] = useState<DonateProvider | null>(null);
  const close = useCallback(() => setActive(null), []);

  // Where a provider that is not live yet sends the donor instead.
  const pendingHref = `/${lang}/donate-now`;

  // Live providers stay real anchors so they keep their href affordances; the
  // click is intercepted to open the provider in a modal rather than leaving
  // the page.
  function openInModal(e: React.MouseEvent, provider: DonateProvider) {
    e.preventDefault();
    setActive(provider);
  }

  const modal = active ? (
    <DonateModal provider={active} dict={dict} lang={lang} onClose={close} />
  ) : null;

  if (variant === "compact") {
    return (
      <>
        <ul className={`flex items-center gap-3 ${className}`} aria-label={dict.heading}>
          {donateProviders.map((p) => {
            const label = dict.giveWith.replace("{provider}", p.name);
            const pendingLabel = `${p.name} — ${dict.comingSoon}`;
            return (
              <li key={p.id}>
                {isDonateProviderReady(p) ? (
                  <a
                    href={p.href || "#"}
                    onClick={(e) => openInModal(e, p)}
                    aria-label={label}
                    aria-haspopup="dialog"
                    title={label}
                    style={{ color: p.color }}
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2"
                  >
                    <DonateProviderIcon id={p.id} className="w-5 h-5" />
                    <span className="sr-only">{label}</span>
                  </a>
                ) : (
                  <Link
                    href={pendingHref}
                    title={pendingLabel}
                    className="relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2"
                  >
                    <span style={{ color: p.color }} className="opacity-70">
                      <DonateProviderIcon id={p.id} className="w-5 h-5" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-accent text-primary-dark text-[0.6rem] font-bold uppercase tracking-wide shadow"
                    >
                      {dict.comingSoonShort}
                    </span>
                    <span className="sr-only">{pendingLabel}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        {modal}
      </>
    );
  }

  return (
    <section aria-labelledby="donate-options-heading" className={className}>
      <h3 id="donate-options-heading" className="text-lg font-bold text-ink text-center">
        {dict.heading}
      </h3>
      <p className="mt-2 text-sm text-ink-muted text-center max-w-md mx-auto">{dict.subheading}</p>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {donateProviders.map((p) => {
          const label = dict.giveWith.replace("{provider}", p.name);
          const ready = isDonateProviderReady(p);
          const inner = (
            <>
              <span
                className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-surface ${
                  ready ? "" : "opacity-70"
                }`}
                style={{ color: p.color }}
              >
                <DonateProviderIcon id={p.id} className="w-6 h-6" />
              </span>
              <span className="mt-3 font-bold text-ink">{p.name}</span>
              {ready ? (
                <span className="mt-0.5 text-xs text-ink-muted">{label}</span>
              ) : (
                <span className="mt-2 inline-block px-2.5 py-1 rounded-full bg-accent text-primary-dark text-[0.65rem] font-bold uppercase tracking-wide">
                  {dict.comingSoon}
                </span>
              )}
            </>
          );
          return (
            <li key={p.id}>
              {ready ? (
                <a
                  href={p.href || "#"}
                  onClick={(e) => openInModal(e, p)}
                  aria-label={label}
                  aria-haspopup="dialog"
                  className="flex flex-col items-center text-center px-4 py-5 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-surface-alt hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {inner}
                </a>
              ) : (
                <Link
                  href={pendingHref}
                  className="flex flex-col items-center text-center px-4 py-5 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-600 bg-surface-alt hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {inner}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      {modal}
    </section>
  );
}
