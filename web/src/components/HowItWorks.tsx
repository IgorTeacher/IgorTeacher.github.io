"use client";
import { howItWorksSteps, ctas } from "@/lib/site-data";
import { useTranslation } from "@/hooks/useTranslation";

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="offer" className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            {t('howItWorks.heading')}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {t('howItWorks.subheading')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {(Array.isArray(t('howItWorks.steps')) ? t('howItWorks.steps') : howItWorksSteps).map((step: any, index: number) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{howItWorksSteps[index].icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {howItWorksSteps[index].step}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-6 text-center">
          <a 
            href={ctas.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-igor-blue text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transform hover:scale-105"
          >
            {t('ctas.bookFreeTrial')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
