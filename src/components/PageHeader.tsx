import Image from "next/image";
import Link from "next/link";

export default function PageHeader({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-light via-white to-surface">
      <div className="blob w-80 h-80 bg-primary/40 -top-24 -left-16" aria-hidden="true" />
      <div className="blob w-72 h-72 bg-accent/50 top-10 right-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
        <div className="glass rounded-2xl p-8 sm:p-10">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted mb-4">
            <Link
              href="/"
              className="hover:text-primary transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Home
            </Link>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            <span className="text-primary font-semibold">{title}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-ink-muted max-w-2xl">{description}</p>
        </div>
        <div className="relative hidden lg:block h-56 rounded-2xl overflow-hidden shadow-xl">
          <Image src={image} alt="" fill sizes="320px" className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}
