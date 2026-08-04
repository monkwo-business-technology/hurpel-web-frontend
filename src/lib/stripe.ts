import Stripe from "stripe";

/**
 * Server-side Stripe client.
 *
 * The secret key is deliberately NOT prefixed with NEXT_PUBLIC_ — it must never
 * reach the browser. Embedded checkout is simply switched off when it is absent,
 * so the site still builds and deploys without Stripe credentials.
 */
let client: Stripe | null = null;

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set.");
  if (!client) client = new Stripe(key);
  return client;
}

export const stripeServerConfigured = Boolean(process.env.STRIPE_SECRET_KEY);

/** Currency donations are charged in. Lowercase ISO 4217. */
export const donationCurrency = (
  process.env.NEXT_PUBLIC_DONATION_CURRENCY || "cad"
).toLowerCase();

/** Guard rails for the donor-entered amount, in whole currency units. */
export const MIN_DONATION = 5;
export const MAX_DONATION = 25_000;
