"use client";
import Image from "next/image";

import { useTranslation } from "@/hooks/useTranslation";
import AnimatedCounter, { calculateYearsFromDate, calculateTeachingHours } from "@/components/AnimatedCounter";

export default function About() {
  const { t } = useTranslation();

  // Calculate values for dynamic text
  const yearsTeaching = calculateYearsFromDate('2013-01-01');
  const teachingHours = calculateTeachingHours('2013-01-01', 22.5);
  
  // Debug: Log calculated values
  console.log('Years from 2013:', yearsTeaching);
  console.log('Hours from 2013:', teachingHours);
  
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">
            {t('about.heading')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Left: Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/igor-teaching.png"
                alt="Igor teaching online"
                width={500}
                height={400}
                className="rounded-3xl shadow-xl mx-auto lg:mx-0"
              />
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Available for lessons
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('about.introduction.greeting')
                .replace('[YEARS]', yearsTeaching.toString())
                .replace('Ihar (Igor) Ausiany', '<strong class="text-neutral-900">Ihar (Igor) Ausiany</strong>')
                .replace(`${yearsTeaching} years`, `<strong class="text-neutral-900">${yearsTeaching} years</strong>`)
                .replace('Farsi, Polish, French, and even a bit of Chinese', '<strong class="text-neutral-900">Farsi, Polish, French, and even a bit of Chinese</strong>')
              }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.introduction.certifications')
                .replace('CELTA-certified', '<strong class="text-neutral-900">CELTA-certified</strong>')
                .replace('DELTA Cambridge exams', '<strong class="text-neutral-900">DELTA Cambridge exams</strong>')
                .replace('three language-focused university diplomas', '<strong class="text-neutral-900">three language-focused university diplomas</strong>')
                
              }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.introduction.experience')
                .replace('50 countries', '<strong class="text-neutral-900">50 countries</strong>')
                .replace('practical, friendly, and tailored to you', '<strong class="text-neutral-900">practical, friendly, and tailored to you</strong>')
                .replace('your personal goals', '<strong class="text-neutral-900">your personal goals</strong>')
              }} />
            </div>

            {/* Teaching Philosophy */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-3xl border border-blue-200 shadow-sm">
              <h3 className="font-semibold text-neutral-900 mb-4 text-xl">{t('about.philosophy.heading')}</h3>
              <blockquote className="text-neutral-700 italic text-lg leading-relaxed">
                &ldquo;{t('about.philosophy.quote')}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-neutral-900 mb-4">
            {t('about.stats.heading')}
          </h3>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
            {t('about.stats.subtitle')}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-blue-600 mb-3">
                <AnimatedCounter 
                  startValue={0} 
                  endValue={yearsTeaching} 
                  suffix="+" 
                  duration={1500}
                />
              </div>
              <div className="text-sm text-neutral-600 font-medium">{t('about.stats.yearsTeaching')}</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-blue-600 mb-3">
                <AnimatedCounter 
                  startValue={0} 
                  endValue={teachingHours} 
                  suffix="+" 
                  duration={2000}
                />
              </div>
              <div className="text-sm text-neutral-600 font-medium">{t('about.stats.teachingHours')}</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-blue-600 mb-3">
                <AnimatedCounter 
                  startValue={0} 
                  endValue={50} 
                  suffix="+" 
                  duration={1800}
                />
              </div>
              <div className="text-sm text-neutral-600 font-medium">{t('about.stats.students')}</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-blue-600 mb-3">
                <AnimatedCounter 
                  startValue={0} 
                  endValue={18} 
                  suffix="" 
                  duration={1600}
                />
              </div>
              <div className="text-sm text-neutral-600 font-medium">{t('about.stats.certifications')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
