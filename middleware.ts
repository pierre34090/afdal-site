// middleware.ts

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en','fr','ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false
});

export const config = { matcher: ['/((?!_next|.*\\..*).*)'] };

};
