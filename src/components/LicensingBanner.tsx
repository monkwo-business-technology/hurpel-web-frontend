import Link from "next/link";
import type { Dictionary, Lang } from "@/i18n";

/**
 * Persistent pre-licensing notice. Rendered above everything in the [lang]
 * layout so it appears on every page, including the standalone donation pages
 * that sit outside the (site) layout.
 */
export default function LicensingBanner({
  lang,
  dict,
}: {
  lang: Lang;
  dict: Dictionary["licensing"];
}) {
  return (
    <div role="note" className="bg-amber-100 text-amber-950 border-b border-amber-300">
      <p className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 text-center text-xs sm:text-sm leading-relaxed">
        <span className="font-bold uppercase tracking-wide">{dict.bannerLabel}</span>{" "}
        {dict.bannerBody}{" "}
        <Link
          href={`/${lang}/services#licensing`}
          className="font-semibold underline decoration-2 underline-offset-2 hover:no-underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
        >
          {dict.bannerLink}
        </Link>
      </p>
    </div>
  );
}
