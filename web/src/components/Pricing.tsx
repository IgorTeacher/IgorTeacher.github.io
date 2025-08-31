"use client";
import { ctas, siteConfig } from "@/lib/site-data";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Pricing() {
  const { t } = useTranslation();
  
  return (
    <section id="pricing" className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold mb-6">
            {t('pricing.heading')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t('pricing.subheading')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Individual Lessons */}
          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{t('pricing.individual.title')}</h3>
              <p className="text-neutral-600">{t('pricing.individual.subtitle')}</p>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-neutral-900 mb-2">from €45</div>
              <div className="text-neutral-600">per 60-min lesson</div>
            </div>

            <ul className="space-y-4 mb-8">
              {(Array.isArray(t('pricing.individual.features')) ? t('pricing.individual.features') : [
                "60-minute lessons",
                "Completely personalized curriculum", 
                "Flexible scheduling",
                "Learning materials included",
                "Progress tracking"
              ]).map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="w-full">
              <p className="text-center font-semibold text-neutral-700 mb-3">{t('pricing.contactInfo')}</p>
              <div className="flex flex-wrap justify-center gap-2">
                <a 
                  href={ctas.secondary.href}
                  className="flex items-center justify-center gap-1.5 bg-neutral-200 text-neutral-700 px-3 py-2 rounded-xl text-sm font-medium hover:bg-neutral-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t('contact.email')}
                </a>
                <a 
                  href={siteConfig.contact.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-neutral-200 text-neutral-700 px-3 py-2 rounded-xl text-sm font-medium hover:bg-neutral-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('contact.telegram')}
                </a>
                <a 
                  href={ctas.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-neutral-200 text-neutral-700 px-3 py-2 rounded-xl text-sm font-medium hover:bg-neutral-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {t('contact.whatsapp')}
                </a>
              </div>
            </div>
          </div>

          {/* 5-Lesson Package */}
          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{t('pricing.package.title')}</h3>
              <p className="text-neutral-600">{t('pricing.package.subtitle')}</p>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-neutral-900 mb-2">€200</div>
              <div className="text-neutral-600">save 11% vs individual</div>
            </div>

            <ul className="space-y-4 mb-8">
              {(Array.isArray(t('pricing.package.features')) ? t('pricing.package.features') : [
                "5 × 60-minute lessons",
                "Flexible scheduling", 
                "Better value"
              ]).map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="w-full">
              <p className="text-center font-semibold text-neutral-700 mb-3">{t('pricing.contactInfo')}</p>
              <div className="flex flex-wrap justify-center gap-2">
                <a 
                  href={ctas.secondary.href}
                  className="flex items-center justify-center gap-1.5 bg-neutral-200 text-neutral-700 px-3 py-2 rounded-xl text-sm font-medium hover:bg-neutral-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t('contact.email')}
                </a>
                <a 
                  href={siteConfig.contact.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-neutral-200 text-neutral-700 px-3 py-2 rounded-xl text-sm font-medium hover:bg-neutral-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('contact.telegram')}
                </a>
                <a 
                  href={ctas.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-neutral-200 text-neutral-700 px-3 py-2 rounded-xl text-sm font-medium hover:bg-neutral-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {t('contact.whatsapp')}
                </a>
              </div>
            </div>
          </div>

          {/* Trial Lesson */}
          <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{t('pricing.trial.title')}</h3>
              <p className="text-neutral-600">{t('pricing.trial.subtitle')}</p>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">Free</div>
              <div className="text-neutral-600">20-minute session</div>
            </div>

            <ul className="space-y-4 mb-8">
              {(Array.isArray(t('pricing.trial.features')) ? t('pricing.trial.features') : [
                "Level assessment",
                "Goal discussion",
                "Sample lesson",
                "Personalized learning plan", 
                "No commitment required"
              ]).map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href={ctas.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              {t('ctas.bookFreeTrial')}
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-600 mb-4">
            {t('pricing.bottomText')}
          </p>
          <div className="inline-flex items-center gap-2 text-blue-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{t('finalCTA.noObligationText')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
