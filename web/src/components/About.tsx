"use client";
import Image from "next/image";

import { useTranslation } from "@/hooks/useTranslation";
import { calculateYearsFromDate, calculateTeachingHours } from "@/components/AnimatedCounter";

export default function About() {
  const { t } = useTranslation();

  // Calculate values for dynamic text
  const yearsTeaching = calculateYearsFromDate('2013-11-01');
  const teachingHours = calculateTeachingHours('2013-11-01', 22.5);
  
  // Debug: Log calculated values
  console.log('Years from 2013:', yearsTeaching);
  console.log('Hours from 2013:', teachingHours);
  
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50/20 via-transparent to-transparent dark:from-neutral-800/20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            {t('about.heading')}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle').replace('[YEARS]', yearsTeaching.toString())}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Left: Photo */}
          <div className="order-2 lg:order-1">

            
            <div className="relative">
              <Image
                src="/igor-in-the-dessert.jpg"
                alt="Igor teaching online"
                width={500}
                height={400}
                className="rounded-3xl shadow-xl mx-auto lg:mx-0"
              />
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                {t('hero.availabilityBadge')}
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('about.introduction.greeting')
                .replace('[YEARS]', yearsTeaching.toString())
                .replace('Ihar (Igor) Ausiany', '<strong class="text-neutral-900 dark:text-white">Ihar (Igor) Ausiany</strong>')
                .replace(`${yearsTeaching} years`, `<strong class="text-neutral-900 dark:text-white">${yearsTeaching} years</strong>`)
                .replace('Farsi, Polish, French, and even a bit of Chinese', '<strong class="text-neutral-900 dark:text-white">Farsi, Polish, French, and even a bit of Chinese</strong>')
              }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.introduction.certifications')
                .replace('CELTA-certified', '<strong class="text-neutral-900 dark:text-white">CELTA-certified</strong>')
                .replace('DELTA Cambridge exams', '<strong class="text-neutral-900 dark:text-white">DELTA Cambridge exams</strong>')
                .replace('three language-focused university diplomas', '<strong class="text-neutral-900 dark:text-white">three language-focused university diplomas</strong>')
                
              }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.introduction.experience')
                .replace('50 countries', '<strong class="text-neutral-900 dark:text-white">50 countries</strong>')
                .replace('practical, friendly, and tailored to you', '<strong class="text-neutral-900 dark:text-white">practical, friendly, and tailored to you</strong>')
                .replace('your personal goals', '<strong class="text-neutral-900 dark:text-white">your personal goals</strong>')
              }} />
            </div>

            {/* Teaching Philosophy */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 p-8 rounded-3xl border border-blue-200 dark:border-neutral-600 shadow-sm">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4 text-xl">{t('about.philosophy.heading')}</h3>
              <blockquote className="text-neutral-700 dark:text-neutral-300 italic text-lg leading-relaxed">
                &ldquo;{t('about.philosophy.quote')}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
