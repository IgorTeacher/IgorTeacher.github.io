"use client";
import { siteConfig, ctas } from "@/lib/site-data";
import { useTranslation } from "@/hooks/useTranslation";

export default function SiteFooter() {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-neutral-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.author}. {t('footer.allRightsReserved')}.</p>
          <div className="flex gap-6">
            <a 
              href={siteConfig.contact.email} 
              className="hover:text-neutral-900 hover:underline"
            >
              {t('contact.email')}
            </a>
            <a 
              href={siteConfig.contact.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 hover:underline"
            >
              LinkedIn
            </a>
            <a 
              href={ctas.support.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 hover:underline"
            >
              Support
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-100 text-center text-xs text-neutral-500">
          <p>&ldquo;{t('footer.quote')}&rdquo; — Marie Curie</p>
        </div>
      </div>
    </footer>
  );
}
