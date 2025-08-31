"use client";
import { useState } from "react";
import { faqItems, content, ctas } from "@/lib/site-data";
import { useTranslation } from "@/hooks/useTranslation";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mt-24 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold mb-6">
            {t('faq.heading')}
          </h2>
          <p className="text-xl text-neutral-600">
            {t('faq.subheading')}
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-neutral-300 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-neutral-900">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-neutral-500 transition-transform ${
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
                  <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">
            {t('faq.stillHaveQuestions')}
          </p>
                      <a 
              href={ctas.secondary.href}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
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
