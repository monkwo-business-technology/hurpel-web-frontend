import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n";

/**
 * Full pre-licensing disclaimer. Carries `id="licensing"` so the site-wide
 * banner and any other copy can link straight to it.
 */
export default function LicensingNotice({
  dict,
  className = "bg-surface-alt",
}: {
  dict: Dictionary["licensing"];
  className?: string;
}) {
  return (
    <section id="licensing" aria-labelledby="licensing-heading" className={`scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal className="rounded-2xl border-2 border-amber-400 bg-amber-50 dark:bg-amber-950/30 p-8">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold uppercase tracking-wide">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2 1 21h22L12 2zm1 15h-2v-2h2v2zm0-4h-2V9h2v4z" />
            </svg>
            {dict.noticeBadge}
          </p>
          <h2
            id="licensing-heading"
            className="mt-4 text-2xl font-extrabold text-amber-950 dark:text-amber-100"
          >
            {dict.noticeHeading}
          </h2>
          <p className="mt-4 text-amber-950/90 dark:text-amber-100/90 leading-relaxed">
            {dict.cleared}
          </p>
          <p className="mt-3 text-amber-950/90 dark:text-amber-100/90 leading-relaxed">
            {dict.pending}
          </p>
          <p className="mt-3 font-semibold text-amber-950 dark:text-amber-100 leading-relaxed">
            {dict.noOperations}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
