import { NextResponse } from "next/server";
import { getStripe, donationCurrency, MIN_DONATION, MAX_DONATION } from "@/lib/stripe";
import { locales, defaultLocale } from "@/i18n";

/**
 * Creates an embedded Checkout Session and hands its client secret back to the
 * browser. One-time gifts only (`mode: "payment"`), with an inline price so the
 * donor picks the amount rather than us pre-defining Stripe Prices.
 */
export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Card donations are not configured." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const amount = Number(body.amount);
  if (!Number.isFinite(amount) || amount < MIN_DONATION || amount > MAX_DONATION) {
    return NextResponse.json(
      { error: `Please enter an amount between ${MIN_DONATION} and ${MAX_DONATION}.` },
      { status: 400 }
    );
  }

  const lang =
    typeof body.lang === "string" && (locales as readonly string[]).includes(body.lang)
      ? body.lang
      : defaultLocale;

  // Stripe works in the smallest currency unit; round to avoid float drift.
  const unitAmount = Math.round(amount * 100);
  const origin =
    request.headers.get("origin") ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    new URL(request.url).origin;

  try {
    const session = await getStripe().checkout.sessions.create({
      ui_mode: "embedded_page",
      mode: "payment",
      submit_type: "donate",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: donationCurrency,
            unit_amount: unitAmount,
            product_data: { name: "One-time donation" },
          },
        },
      ],
      return_url: `${origin}/${lang}/donate/complete?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err) {
    console.error("[api/stripe/checkout] session create failed:", err);
    return NextResponse.json(
      { error: "We couldn't start the payment. Please try again." },
      { status: 502 }
    );
  }
}
