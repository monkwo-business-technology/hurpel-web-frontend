"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Lang } from "@/i18n";

function persistLocaleCookie(next: Lang) {
  document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000`;
}

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Lang) {
    if (next === lang) return;
    persistLocaleCookie(next);
    const rest = pathname.replace(/^\/(en|fr)(?=\/|$)/, "");
    router.push(`/${next}${rest || ""}`);
  }

  return (
    <div
      className="inline-flex items-center rounded-xl border border-primary/20 overflow-hidden"
      role="group"
      aria-label="Language / Langue"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={lang === l}
          aria-label={l === "en" ? "English" : "Français"}
          className={`px-2.5 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            lang === l
              ? "bg-primary-solid text-white"
              : "text-primary hover:bg-primary/10"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
