// middleware.ts
import {NextRequest, NextResponse} from 'next/server';
import createMiddleware from 'next-intl/middleware';

const SUPPORTED = ['en','fr','ar'] as const;
type Locale = (typeof SUPPORTED)[number];

function mapCountryToLocale(country?: string | null): Locale | null {
  const c = (country || '').toUpperCase();
  const AR = new Set(['DZ','MA','TN','EG','SA','AE','QA','KW','BH','OM','JO','IQ','LB','LY','SD','YE','PS']);
  const FR = new Set(['FR','BE','CH','CA','LU','MC','GP','MQ','RE','YT','NC','PF','PM','WF','BL','MF']);
  if (AR.has(c)) return 'ar';
  if (FR.has(c)) return 'fr';
  return null;
}

function mapAcceptLanguageToLocale(al?: string | null): Locale | null {
  const s = (al || '').toLowerCase();
  if (s.includes('ar')) return 'ar';
  if (s.includes('fr')) return 'fr';
  if (s.includes('en')) return 'en';
  return null;
}

const hasLocale = (p: string) => /^\/(en|fr|ar)(\/|$)/.test(p);

const intlMiddleware = createMiddleware({
  locales: SUPPORTED as unknown as string[],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export default function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl;

  // Si pas de locale dans l’URL -> décider & rediriger
  if (!hasLocale(pathname)) {
    // 1) cookie utilisateur
    let target = req.cookies.get('NEXT_LOCALE')?.value as Locale | undefined;

    // 2) pays via IP (prod: req.geo.country ; local: x-vercel-ip-country si fourni)
    if (!target) {
      const country = req.geo?.country || req.headers.get('x-vercel-ip-country');
      target = mapCountryToLocale(country) ?? undefined;
    }

    // 3) Accept-Language (utile en local)
    if (!target) {
      target = mapAcceptLanguageToLocale(req.headers.get('accept-language')) ?? undefined;
    }

    const locale: Locale = SUPPORTED.includes(target as any) ? (target as Locale) : 'en';

    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;

    const res = NextResponse.redirect(url);
    res.cookies.set('NEXT_LOCALE', locale, {path: '/', maxAge: 60 * 60 * 24 * 365});
    return res;
  }

  // Si locale déjà dans l’URL -> laisser next-intl gérer + mémoriser la locale
  const current = pathname.split('/')[1] as Locale;
  const res = intlMiddleware(req);
  res.headers.set('Vary', 'Accept-Language');
  res.cookies.set('NEXT_LOCALE', current, {path: '/', maxAge: 60 * 60 * 24 * 365});
  return res;
}

export const config = {
  matcher: ['/((?!_next|.*\\..*|api).*)']
};
