// src/i18n/request.tsx
import {getRequestConfig} from 'next-intl/server';

const SUPPORTED = ['en', 'fr', 'ar'] as const;

export default getRequestConfig(async ({locale}) => {
  const loc = typeof locale === 'string' ? locale : 'en';
  const safeLocale: string = (SUPPORTED as readonly string[]).includes(loc) ? loc : 'en';

  // ✅ chemin local, simple et robuste
  const messages = (await import(`./messages/${safeLocale}.json`)).default;

  return { locale: safeLocale, messages };
});
