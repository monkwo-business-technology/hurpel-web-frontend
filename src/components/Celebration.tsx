"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const COLORS = ["#ffb81c", "#0f4c81", "#d99500", "#7ab3e0", "#ffffff"];
const PIECES = 42;

const noopSubscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

// Deterministic layout (no Math.random) keeps renders pure
const pieces = Array.from({ length: PIECES }, (_, i) => ({
  left: (i * 97) % 100,
  delay: ((i * 53) % 40) / 40,
  duration: 2.4 + ((i * 31) % 30) / 20,
  color: COLORS[i % COLORS.length],
  size: 8 + ((i * 13) % 8),
}));

/** One-shot confetti burst, rendered on mount. Skipped under reduced motion. */
export default function Celebration() {
  const mounted = useSyncExternalStore(noopSubscribe, clientSnapshot, serverSnapshot);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setExpired(true), 4200);
    return () => clearTimeout(t);
  }, []);

  if (!mounted || expired) return null;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;

  return (
    <div aria-hidden="true">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.4,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
