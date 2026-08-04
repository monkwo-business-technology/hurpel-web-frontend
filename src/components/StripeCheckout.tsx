"use client";

import { useCallback, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import type { Dictionary, Lang } from "@/i18n";

// loadStripe is memoised outside the component so Stripe.js is fetched once.
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

const PRESETS = [25, 50, 100, 250];

/**
 * Amount picker followed by Stripe's embedded checkout, mounted inside our own
 * modal. One-time gifts only — recurring giving is handled by the pledge form,
 * not by a Stripe subscription. Card details are entered in Stripe's iframe, so
 * they never touch this app.
 */
export default function StripeCheckout({
  dict,
  lang,
}: {
  dict: Dictionary["donateOptions"];
  lang: Lang;
}) {
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [started, setStarted] = useState(false);
  const [error, setError] = useState("");

  const finalAmount = customAmount ? Number(customAmount) : amount;

  const fetchClientSecret = useCallback(async () => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: finalAmount, lang }),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.clientSecret) {
      throw new Error(data?.error ?? dict.stripeError);
    }
    return data.clientSecret as string;
  }, [finalAmount, lang, dict.stripeError]);

  if (!stripePromise) {
    return <p className="px-6 py-8 text-center text-ink-muted">{dict.comingSoon}</p>;
  }

  if (started) {
    return (
      <div className="px-2 py-3 max-h-[70vh] overflow-y-auto">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    );
  }

  function start() {
    if (!Number.isFinite(finalAmount) || finalAmount < 5) {
      setError(dict.stripeMinimum);
      return;
    }
    setError("");
    setStarted(true);
  }

  return (
    <div className="px-6 py-7">
      <fieldset>
        <legend className="font-semibold text-ink mb-3">{dict.stripeAmount}</legend>
        <div className="grid grid-cols-4 gap-2">
          {PRESETS.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={!customAmount && amount === value}
              onClick={() => {
                setAmount(value);
                setCustomAmount("");
              }}
              className={`px-3 py-3 rounded-2xl font-bold border-2 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                !customAmount && amount === value
                  ? "border-accent bg-accent/10 text-primary"
                  : "border-slate-200 dark:border-slate-600 text-ink-muted hover:border-primary/40"
              }`}
            >
              ${value}
            </button>
          ))}
        </div>
        <label htmlFor="stripe-custom-amount" className="sr-only">
          {dict.stripeCustom}
        </label>
        <input
          id="stripe-custom-amount"
          type="number"
          min={5}
          inputMode="numeric"
          placeholder={dict.stripeCustom}
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className={`mt-2 w-full px-4 py-3 rounded-2xl border-2 bg-surface-alt transition-colors focus:outline-none focus:border-primary ${
            customAmount ? "border-accent" : "border-slate-200 dark:border-slate-600"
          }`}
        />
      </fieldset>

      {error && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-700 dark:text-red-300">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={start}
        className="mt-6 w-full px-6 py-4 rounded-2xl font-bold text-primary-dark bg-accent hover:bg-accent-dark transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {dict.stripeContinue}
      </button>
      <p className="mt-3 text-xs text-center text-ink-muted">{dict.stripeSecureNote}</p>
    </div>
  );
}
