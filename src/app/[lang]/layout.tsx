import type { Metadata } from "next";
import { Baloo_2, Nunito_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { site } from "@/lib/site";
import { getDictionary, hasLocale, locales, type Lang } from "@/i18n";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = hasLocale(lang) ? getDictionary(lang) : getDictionary("en");
  return {
    metadataBase: new URL("https://hurpelsupport.com"),
    title: dict.pages.home.title,
    description: dict.pages.home.description,
    icons: { icon: "/logo.jpg" },
    openGraph: {
      title: site.name,
      description: dict.pages.home.description,
      images: ["/logo.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang as Lang);

  return (
    <html
      lang={lang}
      className={`${baloo.variable} ${nunito.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-xl"
        >
          {dict.common.skipToMain}
        </a>
        {children}
      </body>
    </html>
  );
}
