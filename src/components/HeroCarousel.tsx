"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import Greeting from "@/components/Greeting";
import type { Dictionary, Lang } from "@/i18n";

const AUTOPLAY_MS = 6000;

export default function HeroCarousel({
  lang,
  dict,
}: {
  lang: Lang;
  dict: Dictionary["hero"];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedRef = useRef(false);

  const slides = [
    {
      ...dict.slides.belong,
      image: images.hero.belong,
      primaryHref: `/${lang}/donate-now`,
      secondaryHref: `/${lang}/services`,
    },
    {
      ...dict.slides.services,
      image: images.hero.services,
      primaryHref: `/${lang}/services`,
      secondaryHref: `/${lang}/contact`,
    },
    {
      ...dict.slides.events,
      image: images.hero.events,
      primaryHref: `/${lang}/events`,
      secondaryHref: `/${lang}/get-involved`,
    },
  ];

  const chips = [dict.chips.charity, dict.chips.local, dict.chips.open];

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length]
  );

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
      aria-label={dict.highlights}
      className="relative overflow-hidden bg-primary-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.eyebrow}
          aria-hidden="true"
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/55 to-primary-dark/15" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary-dark/80 to-transparent" />
        </div>
      ))}

      {/* Ambient floating shapes */}
      <div
        className="float-slow absolute top-24 right-[12%] w-24 h-24 rounded-full bg-accent/20 blur-xl hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="float-slower absolute bottom-32 right-[28%] w-16 h-16 rounded-full bg-white/15 blur-lg hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <Greeting dict={dict.greeting} />
        <div className="relative mt-4 min-h-[420px] sm:min-h-[380px] max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={slide.eyebrow}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${slides.length}: ${slide.eyebrow}`}
              aria-hidden={index !== i}
              className={`transition-opacity duration-700 ${
                index === i
                  ? "opacity-100 relative"
                  : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <p className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary-dark font-bold text-sm mb-6">
                {slide.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                {slide.title}
                <span className="block text-accent">{slide.titleAccent}</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 max-w-xl">{slide.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={slide.primaryHref}
                  className="px-8 py-4 rounded-2xl font-bold text-primary-dark bg-accent hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                >
                  {slide.primary}
                </Link>
                <Link
                  href={slide.secondaryHref}
                  className="px-8 py-4 rounded-2xl font-semibold text-white border-2 border-white/70 hover:bg-white hover:text-primary-dark transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {slide.secondary}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {chips.map((c) => (
            <p
              key={c.label}
              className="glass rounded-2xl px-5 py-3 text-sm font-semibold text-ink"
            >
              <span className="text-lg font-extrabold text-primary">{c.value}</span> {c.label}
            </p>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label={dict.prevSlide}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full glass text-primary hover:bg-white hover:text-primary-dark transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label={dict.chooseSlide}>
            {slides.map((s, i) => (
              <button
                key={s.eyebrow}
                type="button"
                role="tab"
                aria-selected={index === i}
                aria-label={`${dict.goToSlide} ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  index === i ? "w-8 bg-accent" : "w-3 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label={dict.nextSlide}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full glass text-primary hover:bg-white hover:text-primary-dark transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
