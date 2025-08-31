"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function StructuredData() {
  const { t, locale } = useTranslation();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://igorteacher.com';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalService",
    "name": t('structuredData.serviceName'),
    "description": t('hero.subheadline'),
    "url": `${baseUrl}/${locale}`,
    "telephone": "+48123456789", // Replace with actual phone
    "email": "igorteacher@icloud.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL"
    },
    "provider": {
      "@type": "Person",
      "name": t('structuredData.providerName'),
      "jobTitle": t('structuredData.jobTitle'),
      "description": t('structuredData.providerDescription'),
      "knowsAbout": t('structuredData.knowsAbout')
    },
    "serviceType": t('structuredData.serviceTypes'),
    "areaServed": ["Worldwide"],
    "availableLanguage": ["en", "de", "ru", "it", "pl"],
    "priceRange": "€€",
    "paymentAccepted": t('structuredData.paymentMethods'),
    "currenciesAccepted": "EUR",
    "openingHours": t('structuredData.openingHours'),
    "sameAs": [
      "https://www.linkedin.com/in/ihar-ausiany/"
    ],
    "offers": {
      "@type": "Offer",
      "name": t('structuredData.freeTrialName'),
      "description": t('structuredData.freeTrialDescription'),
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
