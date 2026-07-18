import Image from "next/image";
import Link from "next/link";

export default function PageHeader({
  title,
  description,
  image,
  homeHref = "/",
  homeLabel = "Home",
}: {
  title: string;
  description: string;
  image: string;
  homeHref?: string;
  homeLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-64 sm:h-80 lg:h-96">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/40 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
            <nav aria-label="Breadcrumb" className="text-sm text-white/80 mb-3">
              <Link
                href={homeHref}
                className="hover:text-white transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {homeLabel}
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span className="text-accent font-semibold">{title}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
              {title}
            </h1>
            <p className="mt-3 text-lg text-white/90 max-w-2xl">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
