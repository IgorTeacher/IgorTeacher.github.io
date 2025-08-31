"use client";
import Image from "next/image";

import { useTranslation } from "@/hooks/useTranslation";
import AnimatedCounter, { calculateYearsFromDate, calculateTeachingHours } from "@/components/AnimatedCounter";

export default function About() {
  const { t } = useTranslation();

  // Calculate values for dynamic text
  const yearsTeaching = calculateYearsFromDate('2013-01-01');
  const teachingHours = calculateTeachingHours('2013-01-01', 20);
  
  // Debug: Log calculated values
  console.log('Years from 2013:', yearsTeaching);
  console.log('Hours from 2013:', teachingHours);
  
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xl font-semibold mb-6">
              {t('about.heading')}
            </h2>
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
            
            <div className="mt-8 grid grid-cols-4 gap-6">
              <div className="bg-blue-50 p-4 rounded-2xl border border-neutral-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  <AnimatedCounter 
                    startValue={0} 
                    endValue={calculateYearsFromDate('2013-01-01')} 
                    suffix="+" 
                    duration={1500}
                  />
                </div>
                <div className="text-sm text-neutral-600">{t('about.stats.yearsTeaching')}</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl border border-neutral-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                                     <AnimatedCounter 
                     startValue={0} 
                     endValue={teachingHours} 
                     suffix="+" 
                     duration={2000}
                   />
                </div>
                <div className="text-sm text-neutral-600">{t('about.stats.teachingHours')}</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl border border-neutral-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  <AnimatedCounter 
                    startValue={0} 
                    endValue={50} 
                    suffix="+" 
                    duration={1800}
                  />
                </div>
                <div className="text-sm text-neutral-600">{t('about.stats.students')}</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl border border-neutral-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  <AnimatedCounter 
                    startValue={0} 
                    endValue={18} 
                    suffix="" 
                    duration={1600}
                  />
                </div>
                <div className="text-sm text-neutral-600">{t('about.stats.certifications')}</div>
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
