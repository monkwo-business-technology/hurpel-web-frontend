"use client";

import { useState } from "react";

export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  }

  return (
    <section aria-labelledby="newsletter-heading" className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-extrabold">
              See Community Impact, Monthly
            </h2>
            <p className="mt-3 text-white/80 max-w-xl">
              Stories, events, and how your support changes lives — one email a month, no noise.
            </p>
          </div>
          {done ? (
            <p
              role="status"
              className="glass rounded-2xl px-6 py-5 text-primary-dark font-semibold lg:justify-self-end"
            >
              Thank you for joining! Watch your inbox for community stories.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 lg:justify-self-end w-full lg:max-w-md">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-5 py-4 rounded-2xl text-ink bg-white placeholder:text-ink-muted/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
              <button
                type="submit"
                className="px-7 py-4 rounded-2xl font-bold text-primary-dark bg-accent hover:bg-accent-dark transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
