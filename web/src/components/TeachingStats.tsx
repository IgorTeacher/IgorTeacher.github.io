"use client";
import { useTranslation } from "@/hooks/useTranslation";
import AnimatedCounter, { calculateYearsFromDate, calculateTeachingHours } from "@/components/AnimatedCounter";

export default function TeachingStats() {
  const { t } = useTranslation();

  // Calculate values for dynamic text
  const yearsTeaching = calculateYearsFromDate('2013-01-01');
  const teachingHours = calculateTeachingHours('2013-01-01', 22.5);
  
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            {t('teachingStats.heading')}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('teachingStats.subtitle')}
          </p>
        </div>
        
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
            <div className="text-sm text-neutral-600 font-medium">{t('teachingStats.yearsOfExperience')}</div>
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
            <div className="text-sm text-neutral-600 font-medium">{t('teachingStats.hoursOfLessonsDelivered')}</div>
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
            <div className="text-sm text-neutral-600 font-medium">{t('teachingStats.learnersGuidedWorldwide')}</div>
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
            <div className="text-sm text-neutral-600 font-medium">{t('teachingStats.studentsEarnedCertifications')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
