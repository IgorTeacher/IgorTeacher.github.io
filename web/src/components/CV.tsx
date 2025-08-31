"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { ctas } from "@/lib/site-data";

export default function CV() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {t('cv.title')}
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {t('cv.subtitle')}
            </p>
          </div>
          
          {/* Professional Overview */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 mb-12">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              {t('cv.overview.title')}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {t('cv.overview.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                {t('cv.education.title')}
              </h2>
              <div className="space-y-6">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {(Array.isArray(t('cv.education.items')) ? t('cv.education.items') : []).map((item: any, index: number) => (
                  <div key={index} className="bg-neutral-50 rounded-xl p-6">
                    <h3 className="font-semibold text-neutral-900 mb-2">{item.degree}</h3>
                    <p className="text-neutral-600 mb-1">{item.institution}</p>
                    <p className="text-sm text-neutral-500 mb-3">{item.period}</p>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                {t('cv.experience.title')}
              </h2>
              <div className="space-y-6">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {(Array.isArray(t('cv.experience.items')) ? t('cv.experience.items') : []).map((item: any, index: number) => (
                  <div key={index} className="bg-neutral-50 rounded-xl p-6">
                    <h3 className="font-semibold text-neutral-900 mb-2">{item.role}</h3>
                    <p className="text-sm text-neutral-500 mb-3">{item.period}</p>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
              {t('cv.certifications.title')}
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              {t('cv.certifications.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {(Array.isArray(t('cv.certifications.items')) ? t('cv.certifications.items') : []).map((cert: any, index: number) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <h3 className="font-semibold text-neutral-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-neutral-600 mb-4">{cert.description}</p>
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-8 text-center">
            {t('cv.skills.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {(Array.isArray(t('cv.skills.items')) ? t('cv.skills.items') : []).map((skill: string, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-neutral-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Levels */}
      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
              {t('cv.levels.title')}
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              {t('cv.levels.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {(Array.isArray(t('cv.levels.items')) ? t('cv.levels.items') : []).map((level: any, index: number) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-3">{level.level}</h3>
                <p className="text-neutral-600">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            {t('cv.contact.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cv.contact.description')}
          </p>
          <a
            href={ctas.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-neutral-100 transition-colors transform hover:scale-105"
          >
            {t('cv.contact.cta')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
