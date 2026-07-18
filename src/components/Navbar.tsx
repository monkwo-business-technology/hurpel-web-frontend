"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navSections } from "@/lib/nav";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileSection, setMobileSection] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  function closeAll() {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-50 glass-strong border-b-0">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={closeAll}
        >
          <Image
            src="/logo.jpg"
            alt=""
            width={48}
            height={48}
            className="rounded-xl"
            priority
          />
          <span className="font-bold text-primary text-lg leading-tight hidden sm:block">
            Hurpel
            <span className="block text-xs font-medium text-ink-muted tracking-wide uppercase">
              Support Services
            </span>
          </span>
        </Link>

        {/* Desktop: mega menu triggers */}
        <ul className="hidden lg:flex items-center gap-2">
          {navSections.map((section, i) => (
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
                className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-xl font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  openMenu === i
                    ? "text-primary bg-white/70"
                    : "text-ink-muted hover:text-primary hover:bg-white/50"
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
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            onClick={closeAll}
            className="px-5 py-3 rounded-2xl font-semibold text-primary border-2 border-primary/60 hover:border-primary hover:bg-white/60 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Inquire / Contact
          </Link>
          <Link
            href="/donate"
            onClick={closeAll}
            className="px-5 py-3 rounded-2xl font-bold text-ink bg-accent hover:bg-accent-dark transition-colors duration-200 animate-pulse-ring focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Donate Now
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-xl text-primary hover:bg-white/60 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
      </nav>

      {/* Desktop mega menu panel */}
      {openMenu !== null && (
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
                  View all
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
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
                      className="group block rounded-2xl overflow-hidden bg-white/70 border border-white/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu with accordions */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-y-auto transition-[max-height] duration-300 ease-out ${
          mobileOpen ? "max-h-[80vh] border-t border-white/60" : "max-h-0"
        }`}
      >
        <ul className="px-4 py-4 space-y-1">
          {navSections.map((section, i) => (
            <li key={section.label}>
              <button
                type="button"
                aria-expanded={mobileSection === i}
                onClick={() => setMobileSection(mobileSection === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium text-ink hover:bg-white/60 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-ink-muted hover:bg-white/60 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
                      View all {section.label} →
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ))}
          <li className="pt-2 flex flex-col gap-2">
            <Link
              href="/contact"
              className="block text-center px-4 py-4 rounded-2xl font-semibold text-primary border-2 border-primary"
              onClick={closeAll}
            >
              Inquire / Contact
            </Link>
            <Link
              href="/donate"
              className="block text-center px-4 py-4 rounded-2xl font-bold text-ink bg-accent"
              onClick={closeAll}
            >
              Donate Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
