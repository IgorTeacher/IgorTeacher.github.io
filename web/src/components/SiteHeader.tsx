"use client";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, ctas } from "@/lib/site-data";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslation";

export default function SiteHeader() {
  const { t, locale } = useTranslation();
  
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-700">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center">
                      <Image
              src="/logos/rectangle_logo-6-nobg.png"
              alt={`${siteConfig.author.split(' ')[0]} — ${siteConfig.teaching.languages.join(' & ')}`}
              width={208} // 1792/8.6 to fit in header (maintaining aspect ratio)
              height={32}  // 276/8.6 to fit in header (maintaining aspect ratio)
              className="h-8 w-auto dark:invert" // invert for dark mode since logo has white background
              priority
            />
        </Link>
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <LanguageSelector />
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href={`/${locale}#offer`} className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:underline">
              {t('nav.offer')}
            </Link>
            <Link href={`/${locale}#pricing`} className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:underline">
              {t('nav.pricing')}
            </Link>
            <Link href={`/${locale}#faq`} className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:underline">
              {t('nav.faq')}
            </Link>
            <Link href={`/${locale}/cv`} className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:underline">
              {t('nav.cv')}
            </Link>
            <a
              href={ctas.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl px-4 py-2 bg-igor-blue text-white font-medium hover:opacity-90 transform hover:scale-105"
            >
              {t('ctas.bookFreeTrial')}
            </a>
          </nav>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-neutral-600 dark:text-neutral-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
