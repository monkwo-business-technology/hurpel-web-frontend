"use client";

import { useEffect, useRef, useState } from "react";
import DonateProviderIcon from "@/components/DonateProviderIcon";
import StripeCheckout from "@/components/StripeCheckout";
import type { DonateProvider } from "@/lib/donate";
import type { Dictionary, Lang } from "@/i18n";

/**
 * Opens a donation provider inside the site instead of a new tab.
 *
 * Stripe runs as embedded checkout in our own page. Providers that allow framing
 * (Zeffy) render in an iframe. PayPal sends framing headers that make a
 * cross-site iframe refuse to load, so it gets an in-modal handoff step that
 * navigates the current tab to its secure page.
 */
export default function DonateModal({
  provider,
  dict,
  lang,
  onClose,
}: {
  provider: DonateProvider;
  dict: Dictionary["donateOptions"];
  lang: Lang;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [loaded, setLoaded] = useState(false);
  const title = dict.modalTitle.replace("{provider}", provider.name);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();

    // Escape and the native close button both fire "close" — unmount on either.
    dialog.addEventListener("close", onClose);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.removeEventListener("close", onClose);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  function close() {
    ref.current?.close();
  }

  return (
    <dialog
      ref={ref}
      aria-labelledby="donate-modal-title"
      onClick={(e) => {
        // Clicking the backdrop lands on the dialog element itself.
        if (e.target === ref.current) close();
      }}
      className="m-auto w-[min(44rem,calc(100vw-2rem))] max-h-[90vh] p-0 rounded-3xl bg-surface-alt text-ink shadow-2xl overflow-hidden backdrop:bg-slate-900/60 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-slate-200 dark:border-slate-700">
        <h2 id="donate-modal-title" className="flex items-center gap-2 font-bold text-ink">
          <span style={{ color: provider.color }}>
            <DonateProviderIcon id={provider.id} className="w-5 h-5" />
          </span>
          {title}
        </h2>
        <button
          type="button"
          onClick={close}
          aria-label={dict.close}
          className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-ink-muted hover:bg-surface hover:text-ink transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {provider.kind === "stripe" ? (
        <StripeCheckout dict={dict} lang={lang} />
      ) : provider.kind === "iframe" ? (
        <div className="relative h-[72vh] bg-surface">
          {!loaded && (
            <p className="absolute inset-0 flex items-center justify-center text-sm text-ink-muted">
              {dict.loading}
            </p>
          )}
          <iframe
            src={provider.href}
            title={title}
            allow="payment"
            onLoad={() => setLoaded(true)}
            className="w-full h-full border-0"
          />
        </div>
      ) : (
        <div className="px-6 py-8 text-center">
          <span
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface"
            style={{ color: provider.color }}
          >
            <DonateProviderIcon id={provider.id} className="w-7 h-7" />
          </span>
          <p className="mt-4 text-ink-muted max-w-md mx-auto">
            {dict.handoffBody.replace("{provider}", provider.name)}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={provider.href}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-primary-dark bg-accent hover:bg-accent-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {dict.continueTo.replace("{provider}", provider.name)}
            </a>
            <button
              type="button"
              onClick={close}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl font-semibold text-ink-muted hover:text-ink transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {dict.cancel}
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
