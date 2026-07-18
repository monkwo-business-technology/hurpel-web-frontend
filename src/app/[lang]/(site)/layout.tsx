import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary, type Lang } from "@/i18n";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);

  return (
    <>
      <Navbar lang={lang as Lang} dict={dict} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer lang={lang as Lang} dict={dict} />
    </>
  );
}
