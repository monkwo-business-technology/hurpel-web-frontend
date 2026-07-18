"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ dict }: { dict: Dictionary["contactForm"] }) {
  const inquiryOptions = dict.inquiryOptions;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          inquiry: form.get("inquiry"),
          message: form.get("message"),
          newsletter: form.get("newsletter") === "on",
          website: form.get("website"), // honeypot
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? dict.genericError);
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : dict.genericError);
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="bg-surface-alt rounded-2xl shadow-lg p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-ink">{dict.successTitle}</h3>
        <p className="mt-3 text-ink-muted">{dict.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-alt rounded-2xl shadow-lg p-6 sm:p-8 space-y-6"
      aria-labelledby="contact-form-heading"
    >
      <h3 id="contact-form-heading" className="sr-only">
        {dict.heading}
      </h3>

      <div className="float-field">
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder=" "
          className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-surface-alt focus:outline-none focus:border-primary transition-colors"
        />
        <label htmlFor="contact-name">{dict.fullName}</label>
      </div>

      <div className="float-field">
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder=" "
          className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-surface-alt focus:outline-none focus:border-primary transition-colors"
        />
        <label htmlFor="contact-email">{dict.email}</label>
      </div>

      <div>
        <label htmlFor="contact-inquiry" className="block text-sm font-medium text-ink mb-1.5">
          {dict.inquiryLabel}
        </label>
        <select
          id="contact-inquiry"
          name="inquiry"
          required
          defaultValue=""
          className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-surface-alt focus:outline-none focus:border-primary transition-colors cursor-pointer"
        >
          <option value="" disabled>
            {dict.selectTopic}
          </option>
          {inquiryOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="float-field">
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder=" "
          className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-surface-alt focus:outline-none focus:border-primary transition-colors resize-y"
        />
        <label htmlFor="contact-message">{dict.messageLabel}</label>
      </div>

      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="newsletter"
          className="mt-1 w-5 h-5 rounded accent-primary-solid"
        />
        <span className="text-sm text-ink-muted">{dict.newsletterOptIn}</span>
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-950/40 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-4 rounded-2xl font-bold text-white bg-primary-solid hover:bg-primary-solid-hover transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-wait focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        {status === "sending" ? dict.sending : dict.send}
      </button>
    </form>
  );
}
