"use client";
import { useState } from "react";
import { ctas } from "@/lib/site-data";
import { useTranslation } from "@/hooks/useTranslation";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
            {t('faq.heading')}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">
            {t('faq.subheading')}
          </p>
        </div>

        <div className="space-y-4">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {(Array.isArray(t('faq.items')) ? t('faq.items') : []).map((faq: any, index: number) => (
            <div key={index} className="bg-white dark:bg-neutral-700 rounded-2xl border border-neutral-300 dark:border-neutral-600 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-600 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-neutral-900 dark:text-white">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-neutral-500 dark:text-neutral-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            {t('faq.stillHaveQuestions')}
          </p>
          <a 
            href={ctas.secondary.href}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
          >
              {t('faq.contactDirectly')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
        </div>
      </div>
    </section>
  );
}
