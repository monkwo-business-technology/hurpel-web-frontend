"use client";

import { useState } from "react";

const amounts = [
  { value: 25, context: "$25 funds an hour of one-on-one support" },
  { value: 50, context: "$50 provides community recreation support" },
  { value: 100, context: "$100 supplies a family workshop session" },
  { value: 250, context: "$250 sponsors a week of respite care" },
];

type Status = "idle" | "sending" | "success" | "error";

export default function DonateForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [amount, setAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState("");
  const [dedicate, setDedicate] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const selectedContext =
    amount !== "custom" ? amounts.find((a) => a.value === amount)?.context : undefined;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const finalAmount = amount === "custom" ? Number(customAmount) : amount;

    if (!finalAmount || finalAmount <= 0) {
      setStatus("error");
      setError("Please choose or enter a donation amount.");
      return;
    }

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          frequency,
          amount: finalAmount,
          name: form.get("name"),
          email: form.get("email"),
          dedicate,
          dedication: dedicate ? form.get("dedication") : "",
          website: form.get("website"), // honeypot
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="bg-surface-alt rounded-2xl shadow-xl p-10 text-center max-w-xl mx-auto"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-ink">Thank you for your generosity!</h3>
        <p className="mt-3 text-ink-muted">
          We&apos;ve received your {frequency === "monthly" ? "monthly" : "one-time"} pledge. Our
          team will email you a secure payment link shortly to complete your donation safely.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-alt rounded-2xl shadow-xl p-6 sm:p-10 max-w-xl mx-auto"
      aria-labelledby="donate-form-heading"
    >
      <h3 id="donate-form-heading" className="sr-only">
        Donation form
      </h3>

      {/* Step 1: frequency */}
      <fieldset>
        <legend className="font-semibold text-ink mb-3">Donation frequency</legend>
        <div className="grid grid-cols-2 gap-2 p-1.5 bg-surface rounded-2xl" role="group">
          {(["one-time", "monthly"] as const).map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={frequency === f}
              onClick={() => setFrequency(f)}
              className={`px-4 py-3 rounded-xl font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                frequency === f
                  ? "bg-primary-solid text-white shadow"
                  : "text-ink-muted hover:text-primary"
              }`}
            >
              {f === "one-time" ? "One-Time" : "Monthly ♥"}
            </button>
          ))}
        </div>
        {frequency === "monthly" && (
          <p className="mt-2 text-xs text-primary font-medium">
            Monthly gifts provide steady, reliable support all year long.
          </p>
        )}
      </fieldset>

      {/* Step 2: amount */}
      <fieldset className="mt-8">
        <legend className="font-semibold text-ink mb-3">Choose an amount</legend>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {amounts.map((a) => (
            <button
              key={a.value}
              type="button"
              aria-pressed={amount === a.value}
              onClick={() => setAmount(a.value)}
              className={`px-3 py-3 rounded-2xl font-bold transition-all duration-200 cursor-pointer border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                amount === a.value
                  ? "border-accent bg-accent/10 text-primary"
                  : "border-slate-200 dark:border-slate-600 text-ink-muted hover:border-primary/40"
              }`}
            >
              ${a.value}
            </button>
          ))}
        </div>
        <div className="mt-2">
          <label htmlFor="custom-amount" className="sr-only">
            Custom amount in dollars
          </label>
          <input
            id="custom-amount"
            type="number"
            min="1"
            inputMode="numeric"
            placeholder="Custom amount ($)"
            value={customAmount}
            onFocus={() => setAmount("custom")}
            onChange={(e) => {
              setAmount("custom");
              setCustomAmount(e.target.value);
            }}
            className={`w-full px-4 py-3 rounded-2xl border-2 bg-surface-alt transition-colors focus:outline-none focus:border-primary ${
              amount === "custom" ? "border-accent" : "border-slate-200 dark:border-slate-600"
            }`}
          />
        </div>
        <p className="mt-2 text-sm text-ink-muted min-h-[1.5rem]" aria-live="polite">
          {selectedContext}
        </p>
      </fieldset>

      {/* Step 3: details */}
      <div className="mt-6 space-y-5">
        <div className="float-field">
          <input
            id="donor-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder=" "
            className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-surface-alt focus:outline-none focus:border-primary transition-colors"
          />
          <label htmlFor="donor-name">Full Name</label>
        </div>
        <div className="float-field">
          <input
            id="donor-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder=" "
            className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-surface-alt focus:outline-none focus:border-primary transition-colors"
          />
          <label htmlFor="donor-email">Email Address</label>
        </div>

        {/* Honeypot — hidden from real users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="donate-website">Website</label>
          <input id="donate-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={dedicate}
            onChange={(e) => setDedicate(e.target.checked)}
            className="mt-1 w-5 h-5 rounded accent-primary-solid"
          />
          <span className="text-sm text-ink-muted">
            Dedicate this gift (in honor / in memory of someone)
          </span>
        </label>

        {dedicate && (
          <div className="float-field">
            <input
              id="dedication"
              name="dedication"
              type="text"
              placeholder=" "
              className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-surface-alt focus:outline-none focus:border-primary transition-colors"
            />
            <label htmlFor="dedication">In honor / memory of…</label>
          </div>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-950/40 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full px-6 py-4 rounded-2xl font-bold text-primary-dark bg-accent hover:bg-accent-dark transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-wait focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {status === "sending" ? "Sending…" : "Complete Safe Donation 🔒"}
      </button>

      <p className="mt-4 text-xs text-center text-ink-muted">
        No card details are collected here. After you pledge, we email you a secure Stripe/PayPal
        payment link — your payment details never touch our inbox.
      </p>
      <div className="mt-3 flex items-center justify-center gap-4 text-ink-muted" aria-label="Accepted payment partners">
        <span className="text-xs font-semibold tracking-wide">Powered by</span>
        <span className="text-sm font-bold text-[#635bff]">Stripe</span>
        <span className="text-sm font-bold text-[#00457C]">PayPal</span>
      </div>
    </form>
  );
}
