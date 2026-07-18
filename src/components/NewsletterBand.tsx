"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";

export default function NewsletterBand({ dict }: { dict: Dictionary["newsletter"] }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const done = status === "done";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section aria-labelledby="newsletter-heading" className="bg-primary-solid text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-extrabold">
              {dict.heading}
            </h2>
            <p className="mt-3 text-white/80 max-w-xl">{dict.subheading}</p>
          </div>
          {done ? (
            <p
              role="status"
              className="glass rounded-2xl px-6 py-5 text-ink font-semibold lg:justify-self-end"
            >
              {dict.thanks}
            </p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 lg:justify-self-end w-full lg:max-w-md">
              <label htmlFor="newsletter-email" className="sr-only">
                {dict.emailLabel}
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={dict.placeholder}
                className="flex-1 px-5 py-4 rounded-2xl text-ink bg-surface-alt placeholder:text-ink-muted/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-7 py-4 rounded-2xl font-bold text-primary-dark bg-accent hover:bg-accent-dark transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-wait focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {status === "sending" ? dict.signingUp : dict.signUp}
              </button>
            </form>
          )}
        </div>
        {status === "error" && (
          <p role="alert" className="mt-4 text-sm font-medium text-red-200 lg:text-right">
            {dict.error}
          </p>
        )}
      </div>
    </section>
  );
}
