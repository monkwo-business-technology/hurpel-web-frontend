import { NextResponse, type NextRequest } from "next/server";

const locales = ["en", "fr"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && locales.includes(cookie)) return cookie;
  const accept = request.headers.get("accept-language") ?? "";
  if (/^fr\b|,\s*fr\b/i.test(accept)) return "fr";
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip internals, API routes, and static files (anything with a dot)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
