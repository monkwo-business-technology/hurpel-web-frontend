import Link from "next/link";

// not-found.tsx cannot read route params, so this page is bilingual by design.
export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center bg-surface px-4 py-24">
      <div className="text-center max-w-lg">
        <p className="text-7xl font-extrabold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink">
          Page not found · Page introuvable
        </h1>
        <p className="mt-3 text-ink-muted">
          The page you are looking for does not exist or has moved. · La page que
          vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/en"
            className="px-6 py-3.5 rounded-2xl font-bold text-white bg-primary-solid hover:bg-primary-solid-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Home
          </Link>
          <Link
            href="/fr"
            className="px-6 py-3.5 rounded-2xl font-semibold text-primary border-2 border-primary hover:bg-primary/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
