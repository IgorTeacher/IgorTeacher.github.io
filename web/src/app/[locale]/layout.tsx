import "../globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
    { locale: 'ru' },
    { locale: 'it' },
    { locale: 'pl' },
  ];
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}

// Generate metadata for each locale
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://learnwithihar.com';
  
  // Language-specific metadata
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const metadata: Record<string, any> = {
    en: {
      title: "Learn English & German with Ihar - CELTA Certified Teacher",
      description: "CELTA-certified teacher offering personalized English and German lessons. Book a free 30-minute trial class.",
      keywords: "English lessons, German lessons, CELTA teacher, online language learning, personalized tutoring",
    },
    de: {
      title: "Englisch & Deutsch lernen mit Ihar - CELTA-zertifizierter Lehrer",
      description: "CELTA-zertifizierter Lehrer für personalisierten Englisch- und Deutschunterricht. Kostenlose 30-minütige Probestunde buchen.",
      keywords: "Englischunterricht, Deutschunterricht, CELTA Lehrer, Online-Sprachunterricht, personalisierte Nachhilfe",
    },
    ru: {
      title: "Изучайте английский и немецкий с Игаром - Сертифицированный преподаватель CELTA",
      description: "Сертифицированный преподаватель CELTA предлагает персонализированные уроки английского и немецкого. Забронируйте бесплатную 30-минутную пробную сессию.",
      keywords: "уроки английского, уроки немецкого, преподаватель CELTA, онлайн изучение языков, персональное обучение",
    },
    it: {
      title: "Impara inglese e tedesco con Ihar - Insegnante certificato CELTA",
      description: "Insegnante certificato CELTA offre lezioni personalizzate di inglese e tedesco. Prenota una lezione di prova gratuita di 30 minuti.",
      keywords: "lezioni di inglese, lezioni di tedesco, insegnante CELTA, apprendimento linguistico online, tutoraggio personalizzato",
    },
    pl: {
      title: "Ucz się angielskiego i niemieckiego z Iharem - Certyfikowany nauczyciel CELTA",
      description: "Certyfikowany nauczyciel CELTA oferuje spersonalizowane lekcje angielskiego i niemieckiego. Zarezerwuj bezpłatną 30-minutową lekcję próbną.",
      keywords: "lekcje angielskiego, lekcje niemieckiego, nauczyciel CELTA, nauka języków online, korepetycje indywidualne",
    }
  };

  const currentMeta = metadata[locale] || metadata.en;
  
  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: currentMeta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'de': `${baseUrl}/de`, 
        'ru': `${baseUrl}/ru`,
        'it': `${baseUrl}/it`,
        'pl': `${baseUrl}/pl`,
      },
    },
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `${baseUrl}/${locale}`,
      siteName: "Ihar Teacher",
      locale: locale,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og.jpg`,
          width: 1200,
          height: 630,
          alt: currentMeta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [`${baseUrl}/og.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
