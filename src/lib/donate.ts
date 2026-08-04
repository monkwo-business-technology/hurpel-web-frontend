/**
 * External donation destinations (PayPal, Stripe, Zeffy).
 *
 * URLs come from NEXT_PUBLIC_* variables so they can be changed without a code
 * edit. Next.js inlines these at build time, so changing a value requires a
 * rebuild/redeploy. A provider with nothing configured renders as a disabled
 * button rather than a dead link.
 */
export type DonateProviderId = "paypal" | "stripe" | "zeffy";

/**
 * How the provider is opened from our modal:
 * - `stripe`  — Stripe's embedded checkout renders inside our own page.
 * - `iframe`  — the provider allows framing, so its page renders in the modal.
 *               Verified: Zeffy responds with `X-Frame-Options: ALLOWALL`.
 * - `handoff` — the provider refuses framing, so the modal explains the jump and
 *               navigates the current tab. Verified: PayPal responds with
 *               `x-frame-options: SAMEORIGIN`, and Stripe Payment Links refuse
 *               framing too (which is why the embedded path above exists).
 */
export type DonateProviderKind = "stripe" | "iframe" | "handoff";

export type DonateProvider = {
  id: DonateProviderId;
  name: string;
  kind: DonateProviderKind;
  /** Destination for `iframe` and `handoff`; empty for the `stripe` kind. */
  href: string;
  /** Brand colour used for the icon mark. */
  color: string;
};

// Read each variable directly — Next.js does not inline dynamic lookups
// such as process.env[name].
const paypalUrl =
  process.env.NEXT_PUBLIC_PAYPAL_DONATE_URL || "https://www.paypal.com/ncp/payment/GRYTC8TZ98YUJ";
const stripeUrl = process.env.NEXT_PUBLIC_STRIPE_DONATE_URL || "";
const zeffyUrl = process.env.NEXT_PUBLIC_ZEFFY_DONATE_URL || "";
const stripeEmbedded = Boolean(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export const donateProviders: readonly DonateProvider[] = [
  { id: "paypal", name: "PayPal", kind: "handoff", href: paypalUrl, color: "#003087" },
  {
    id: "stripe",
    name: "Stripe",
    // Prefer our own embedded checkout; fall back to a payment link if only that
    // is configured.
    kind: stripeEmbedded ? "stripe" : "handoff",
    href: stripeEmbedded ? "" : stripeUrl,
    color: "#635bff",
  },
  { id: "zeffy", name: "Zeffy", kind: "iframe", href: zeffyUrl, color: "#ff5a5f" },
];

/** A provider is clickable when it has somewhere to send the donor. */
export function isDonateProviderReady(provider: DonateProvider): boolean {
  return provider.kind === "stripe" || provider.href !== "";
}
