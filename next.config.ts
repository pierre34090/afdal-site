// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// Wrap your Next config with the next-intl plugin (App Router friendly)
const withNextIntl = createNextIntlPlugin(); // pas d’options ici

// Your Next.js config object (laisse vide pour l’instant)
const nextConfig: NextConfig = {};

// Export the wrapped config
export default withNextIntl(nextConfig);
