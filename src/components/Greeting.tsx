"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { Dictionary } from "@/i18n";

const noopSubscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

function hasVisited(): boolean {
  try {
    return localStorage.getItem("visited") === "1";
  } catch {
    return false;
  }
}

export default function Greeting({ dict }: { dict: Dictionary["hero"]["greeting"] }) {
  const mounted = useSyncExternalStore(noopSubscribe, clientSnapshot, serverSnapshot);

  // Mark the visit after first paint so the read above stays stable this render
  useEffect(() => {
    try {
      localStorage.setItem("visited", "1");
    } catch {
      /* private mode */
    }
  }, []);

  let text: string | null = null;
  if (mounted) {
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? dict.morning : hour < 18 ? dict.afternoon : dict.evening;
    text = `${timeOfDay} — ${hasVisited() ? dict.welcomeBack : dict.welcome}`;
  }

  // Fixed height reserves the line and avoids layout shift before hydration
  return (
    <p className="h-6 text-accent font-semibold text-sm tracking-wide uppercase" aria-live="polite">
      {text}
    </p>
  );
}
