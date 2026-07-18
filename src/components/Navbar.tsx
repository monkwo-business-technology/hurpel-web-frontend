"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { buildNavSections } from "@/lib/nav";
import { site } from "@/lib/site";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Dictionary, Lang } from "@/i18n";

export default function Navbar({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileSection, setMobileSection] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navSections = buildNavSections(dict, lang);

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function closeAll() {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b-0 transition-colors duration-200 ${
        scrolled ? "bg-surface-alt shadow-lg" : "glass-strong"
      }`}
    >
      {/* Contact strip */}
      <div className="hidden md:block bg-primary-dark text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <p className="text-white/85 hidden lg:block">
            {dict.common.charityLine} {site.charityNumber} · {dict.common.focusLine}
          </p>
          <span className="lg:hidden" aria-hidden="true" />
          <div className="flex items-center gap-6">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 hover:text-accent transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 hover:text-accent transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              {site.email}
            </a>
            <span className="h-4 w-px bg-white/25" aria-hidden="true" />
            <LanguageSwitcher lang={lang} tone="onDark" />
            <ThemeToggle
              tone="onDark"
              darkLabel={dict.common.switchToDark}
              lightLabel={dict.common.switchToLight}
            />
          </div>
        </div>
      </div>
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
      >
        <Link
          href={`/${lang}`}
          className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={closeAll}
        >
          <Image
            src="/logo.png"
            alt=""
            width={48}
            height={48}
            priority
          />
          <span className="font-bold text-primary text-lg leading-tight hidden sm:block">
            Hurpel
            <span className="block text-xs font-medium text-ink-muted tracking-wide uppercase">
              Support Services
            </span>
          </span>
        </Link>

        {/* Desktop: mega menu triggers + plain links */}
        <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navSections.map((section, i) =>
            section.items.length === 0 && !section.groups ? (
              <li key={section.label}>
                <Link
                  href={section.href}
                  onClick={closeAll}
                  className="inline-flex items-center whitespace-nowrap px-2.5 xl:px-3.5 py-3 rounded-xl text-sm xl:text-base font-semibold text-ink-muted hover:text-primary hover:bg-primary/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {section.label}
                </Link>
              </li>
            ) : (
              <li
                key={section.label}
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(i);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={openMenu === i}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(openMenu === i ? null : i)}
                  className={`inline-flex items-center gap-1 whitespace-nowrap px-2.5 xl:px-3.5 py-3 rounded-xl text-sm xl:text-base font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    openMenu === i
                      ? "text-primary bg-primary/10"
                      : "text-ink-muted hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {section.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${openMenu === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Link
            href={`/${lang}/donate-now`}
            onClick={closeAll}
            className="px-4 py-2.5 rounded-2xl text-sm xl:text-base whitespace-nowrap font-bold text-primary-dark bg-accent hover:bg-accent-dark transition-colors duration-200 animate-pulse-ring focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {dict.common.donateNow}
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <span className="md:hidden flex items-center gap-1">
            <LanguageSwitcher lang={lang} />
            <ThemeToggle
              darkLabel={dict.common.switchToDark}
              lightLabel={dict.common.switchToLight}
            />
          </span>
          <button
            type="button"
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-primary hover:bg-primary/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Desktop mega menu panel */}
      {openMenu !== null &&
        (navSections[openMenu].items.length > 0 || navSections[openMenu].groups) && (
        <div
          className="hidden lg:block absolute inset-x-0 top-full"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
            <div className="glass-strong rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm font-bold uppercase tracking-wider text-ink-muted">
                  {navSections[openMenu].label}
                </p>
                <Link
                  href={navSections[openMenu].href}
                  onClick={closeAll}
                  className="text-sm font-semibold text-primary hover:text-primary-dark inline-flex items-center gap-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {dict.nav.viewAll}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
              {navSections[openMenu].groups ? (
                <div className="grid grid-cols-3 gap-8">
                  {navSections[openMenu].groups!.map((group) => (
                    <div key={group.label}>
                      <Link
                        href={group.href}
                        onClick={closeAll}
                        className="inline-block text-sm font-bold uppercase tracking-wider text-primary hover:text-primary-dark mb-4 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {group.label}
                      </Link>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={closeAll}
                              className="group flex items-center gap-3 rounded-2xl p-2.5 bg-surface-alt/60 border border-primary/5 hover:border-primary/20 hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                              <Image
                                src={item.image}
                                alt=""
                                width={52}
                                height={52}
                                className="rounded-xl object-cover w-13 h-13 shrink-0"
                              />
                              <span>
                                <span className="block font-bold text-sm text-ink group-hover:text-primary transition-colors">
                                  {item.label}
                                </span>
                                <span className="block text-xs text-ink-muted leading-snug mt-0.5">
                                  {item.description}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul
                  className={`grid gap-4 ${
                    navSections[openMenu].items.length === 4 ? "grid-cols-4" : "grid-cols-3"
                  }`}
                >
                  {navSections[openMenu].items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        className="group block rounded-2xl overflow-hidden bg-surface-alt/80 border border-primary/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <div className="relative h-28 overflow-hidden">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            sizes="300px"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <p className="font-bold text-ink group-hover:text-primary transition-colors">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu with accordions */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-y-auto transition-[max-height] duration-300 ease-out ${
          mobileOpen ? "max-h-[80vh] border-t border-primary/10" : "max-h-0"
        }`}
      >
        <ul className="px-4 py-4 space-y-1">
          {navSections.map((section, i) => (
            <li key={section.label}>
              {section.items.length === 0 && !section.groups ? (
                <Link
                  href={section.href}
                  onClick={closeAll}
                  className="block px-4 py-4 rounded-xl text-lg font-medium text-ink hover:bg-primary/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {section.label}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    aria-expanded={mobileSection === i}
                    onClick={() => setMobileSection(mobileSection === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium text-ink hover:bg-primary/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {section.label}
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${mobileSection === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {mobileSection === i && (
                    <ul className="pl-3 pb-2 space-y-1">
                      {section.groups?.map((group) => (
                        <li key={group.label}>
                          <Link
                            href={group.href}
                            onClick={closeAll}
                            className="block px-4 pt-3 pb-1 text-xs font-bold uppercase tracking-wider text-primary"
                          >
                            {group.label}
                          </Link>
                          <ul className="space-y-1">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={closeAll}
                                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-ink-muted hover:bg-primary/10 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                  <Image
                                    src={item.image}
                                    alt=""
                                    width={44}
                                    height={44}
                                    className="rounded-lg object-cover w-11 h-11"
                                  />
                                  <span className="text-sm font-medium">{item.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeAll}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-ink-muted hover:bg-primary/10 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          >
                            <Image
                              src={item.image}
                              alt=""
                              width={44}
                              height={44}
                              className="rounded-lg object-cover w-11 h-11"
                            />
                            <span className="text-sm font-medium">{item.label}</span>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href={section.href}
                          onClick={closeAll}
                          className="block px-4 py-3 text-sm font-semibold text-primary"
                        >
                          {dict.nav.viewAll} — {section.label} →
                        </Link>
                      </li>
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
          <li className="pt-2 flex flex-col gap-2">
            <Link
              href={`/${lang}/donate-now`}
              className="block text-center px-4 py-4 rounded-2xl font-bold text-primary-dark bg-accent"
              onClick={closeAll}
            >
              {dict.common.donateNow}
            </Link>
            <a
              href={site.phoneHref}
              className="block text-center px-4 py-3 text-sm font-semibold text-ink-muted"
            >
              {dict.common.callUs}: {site.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
