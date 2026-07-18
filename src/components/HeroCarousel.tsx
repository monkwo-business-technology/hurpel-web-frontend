"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  image: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const slides: Slide[] = [
  {
    eyebrow: "Hurpel Support Services",
    title: "Valued People.",
    titleAccent: "Inclusive Community.",
    description:
      "We provide quality supports for people with developmental disabilities to live fulfilled lives, in collaboration with families and the community.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
    primary: { label: "Donate Today", href: "/donate" },
    secondary: { label: "Explore Services", href: "/services" },
  },
  {
    eyebrow: "Our Services Ecosystem",
    title: "Support Built",
    titleAccent: "Around You.",
    description:
      "Employment, accommodation and respite, child and youth programs, and community access — person-centered supports for every stage of life.",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1600&q=80",
    primary: { label: "View All Services", href: "/services" },
    secondary: { label: "Access Support", href: "/contact" },
  },
  {
    eyebrow: "Community in Motion",
    title: "The Serious(ly)",
    titleAccent: "Fun Run 2026.",
    description:
      "Save the date: Saturday, September 26th, 2026. Walk, roll, or run — everyone belongs at the start line.",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1600&q=80",
    primary: { label: "See Upcoming Events", href: "/events" },
    secondary: { label: "Get Involved", href: "/get-involved" },
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedRef = useRef(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedRef.current) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative overflow-hidden bg-gradient-to-b from-primary-light via-white to-surface"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Ambient blobs */}
      <div className="blob w-96 h-96 bg-primary/40 -top-20 -left-20" aria-hidden="true" />
      <div className="blob w-80 h-80 bg-accent/50 top-40 right-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="relative min-h-[520px] sm:min-h-[460px]">
          {slides.map((slide, i) => (
            <div
              key={slide.eyebrow}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${slides.length}: ${slide.eyebrow}`}
              aria-hidden={index !== i}
              className={`transition-opacity duration-700 ${
                index === i
                  ? "opacity-100 relative"
                  : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="glass rounded-2xl p-8 sm:p-10">
                  <p className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                    {slide.eyebrow}
                  </p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-tight tracking-tight">
                    {slide.title}
                    <span className="block text-ink">{slide.titleAccent}</span>
                  </h1>
                  <p className="mt-6 text-lg text-ink-muted max-w-xl">{slide.description}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={slide.primary.href}
                      className="px-8 py-4 rounded-2xl font-bold text-ink bg-accent hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {slide.primary.label}
                    </Link>
                    <Link
                      href={slide.secondary.href}
                      className="px-8 py-4 rounded-2xl font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {slide.secondary.label}
                    </Link>
                  </div>
                </div>

                <div className="relative hidden lg:block">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={slide.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                    <div className="absolute inset-x-6 bottom-6 glass rounded-2xl px-6 py-4">
                      <p className="font-bold text-primary">{slide.eyebrow}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full glass text-primary hover:bg-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {slides.map((s, i) => (
              <button
                key={s.eyebrow}
                type="button"
                role="tab"
                aria-selected={index === i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  index === i ? "w-8 bg-primary" : "w-3 bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full glass text-primary hover:bg-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
