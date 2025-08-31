import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'de', 'ru', 'it', 'pl'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};

export default nextConfig;
