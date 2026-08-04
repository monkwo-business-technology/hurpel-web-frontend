import type { Metadata } from "next";
import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import { site } from "@/lib/site";
import { getDictionary, type Lang } from "@/i18n";

export const metadata: Metadata = {
  title: `Donation complete — ${site.name}`,
  robots: { index: false, follow: false },
};

/**
 * Where Stripe returns the donor after embedded checkout. The session id is the
 * only thing on the URL, so the outcome is confirmed server-side rather than
 * trusted from the query string.
 */
export default async function DonateCompletePage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { lang } = await params;
  const { session_id: sessionId } = await searchParams;
  const dict = getDictionary(lang as Lang);
  const t = dict.pages.donateComplete;

  let paid = false;
  let email = "";

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(sessionId);
      paid = session.status === "complete" || session.payment_status === "paid";
      email = session.customer_details?.email ?? "";
    } catch (err) {
      console.error("[donate/complete] session lookup failed:", err);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface via-primary-light/40 to-surface">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
            paid ? "bg-green-100" : "bg-amber-100"
          }`}
        >
          {paid ? (
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          )}
        </div>

        <h1 className="mt-6 text-3xl font-extrabold text-primary">
          {paid ? t.successTitle : t.pendingTitle}
        </h1>
        <p className="mt-4 text-ink-muted leading-relaxed">
          {paid ? t.successBody : t.pendingBody}
        </p>
        {paid && email && (
          <p className="mt-3 text-sm text-ink-muted">{t.receiptTo.replace("{email}", email)}</p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={`/${lang}`}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-white bg-primary-solid hover:bg-primary-solid-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {t.backHome}
          </Link>
          {!paid && (
            <Link
              href={`/${lang}/donate-now`}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl font-semibold text-primary hover:text-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {t.tryAgain}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
