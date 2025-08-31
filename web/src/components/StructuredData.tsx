"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function StructuredData() {
  const { t, locale } = useTranslation();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://igorteacher.com';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalService",
    "name": "Ihar Teacher - Language Learning",
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
      "name": "Ihar Ausiany",
      "jobTitle": "CELTA Certified Language Teacher",
      "description": "Professional language teacher with CELTA certification",
      "knowsAbout": ["English Language Teaching", "German Language Teaching", "Online Education", "Language Assessment"]
    },
    "serviceType": ["English Language Lessons", "German Language Lessons", "Online Tutoring"],
    "areaServed": ["Worldwide"],
    "availableLanguage": ["en", "de", "ru", "it", "pl"],
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Bank Transfer", "Online Payment"],
    "currenciesAccepted": "EUR",
    "openingHours": "Mo-Su 09:00-21:00",
    "sameAs": [
      "https://www.linkedin.com/in/ihar-ausiany/"
    ],
    "offers": {
      "@type": "Offer",
      "name": "Free Trial Lesson",
      "description": "20-minute free trial lesson",
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
