"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ label, fallbackHref }: { label: string; fallbackHref: string }) {
  const router = useRouter();

  function goBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  }

  return (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-primary hover:bg-primary/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
      {label}
    </button>
  );
}
