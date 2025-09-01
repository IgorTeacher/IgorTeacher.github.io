"use client";

import Script from 'next/script';
import { useConsent } from '@/contexts/ConsentContext';

export default function GoogleAnalytics() {
  const { consentGiven } = useConsent();

  if (!consentGiven) {
    return null; // Don't load GA if consent not given
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5REG4P4H91"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            'analytics_storage': 'granted'
          });
          gtag('config', 'G-5REG4P4H91', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
