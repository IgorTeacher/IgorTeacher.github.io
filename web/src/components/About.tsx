"use client";
import Image from "next/image";
import { siteConfig } from "@/lib/site-data";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();
  
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xl font-semibold mb-6">
              {t('about.heading')}
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('about.introduction.greeting').replace('Igor Ausiany', '<strong class="text-neutral-900">Igor Ausiany</strong>') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.introduction.certifications').replace('TESOL', '<strong class="text-neutral-900">TESOL</strong>').replace('TKT', '<strong class="text-neutral-900">TKT</strong>').replace('CELTA', '<strong class="text-neutral-900">CELTA</strong>') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.introduction.experience').replace('10 regular students', '<strong class="text-neutral-900">10 regular students</strong>') }} />
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-2xl border border-neutral-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">{siteConfig.teaching.experience.yearsTeaching}</div>
                <div className="text-sm text-neutral-600">{t('about.stats.yearsTeaching')}</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl border border-neutral-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">{siteConfig.teaching.experience.lessonsDelivered}</div>
                <div className="text-sm text-neutral-600">{t('about.stats.lessonsDelivered')}</div>
              </div>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <Image
              src="/igor-teaching.png"
              alt="Igor teaching online"
              width={500}
              height={400}
              className="rounded-2xl shadow-sm mx-auto lg:mx-0"
            />
            
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border-neutral-200 border max-w-md mx-auto lg:mx-0">
              <h3 className="font-semibold text-neutral-900 mb-4">{t('about.philosophy.heading')}</h3>
              <blockquote className="text-neutral-600 italic">
                &ldquo;{t('about.philosophy.quote')}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
