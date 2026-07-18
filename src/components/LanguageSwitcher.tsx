"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Lang } from "@/i18n";

function persistLocaleCookie(next: Lang) {
  document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000`;
}

export default function LanguageSwitcher({
  lang,
  tone = "default",
}: {
  lang: Lang;
  tone?: "default" | "onDark";
}) {
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
      className={`inline-flex items-center rounded-xl border overflow-hidden ${
        tone === "onDark" ? "border-white/25" : "border-primary/20"
      }`}
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
          className={`px-2.5 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 ${
            tone === "onDark"
              ? lang === l
                ? "bg-accent text-primary-dark focus-visible:ring-white"
                : "text-white/85 hover:bg-white/10 focus-visible:ring-accent"
              : lang === l
                ? "bg-primary-solid text-white focus-visible:ring-primary"
                : "text-primary hover:bg-primary/10 focus-visible:ring-primary"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
