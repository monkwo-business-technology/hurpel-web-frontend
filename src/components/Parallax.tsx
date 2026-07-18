"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Gentle scroll parallax: children drift a few pixels as the element moves
 * through the viewport. No-op under prefers-reduced-motion.
 */
export default function Parallax({
  children,
  className = "",
  strength = 18,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    function update() {
      raf = 0;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      // -1 (below viewport) .. 1 (above viewport)
      const progress = 1 - (2 * (rect.top + rect.height / 2)) / (viewport + rect.height);
      el.style.transform = `translateY(${(progress * strength).toFixed(1)}px)`;
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
