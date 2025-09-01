"use client";
import { useTranslation } from "@/hooks/useTranslation";
import AnimatedCounter, { calculateYearsFromDate } from "@/components/AnimatedCounter";

// Constants for easy modification
const BUSINESS_STATS = {
  companiesCollaborations: 20,
  studentsCertifications: 40
} as const;

export default function TeachingStats() {
  const { t } = useTranslation();

  // Calculate values for dynamic text
  const yearsTeaching = calculateYearsFromDate('2013-01-01');
  
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-neutral-800 dark:to-neutral-700">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('teachingStats.heading')}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {t('teachingStats.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              <AnimatedCounter 
                startValue={0} 
                endValue={yearsTeaching} 
                suffix="+" 
                duration={2500}
              />
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">{t('teachingStats.yearsOfExperience')}</div>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              <AnimatedCounter 
                startValue={0} 
                endValue={BUSINESS_STATS.companiesCollaborations} 
                suffix="+" 
                duration={3000}
              />
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">{t('teachingStats.collaborationsWithIndustry')}</div>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              <AnimatedCounter 
                startValue={0} 
                endValue={100} 
                suffix="+" 
                duration={3500}
              />
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">{t('teachingStats.learnersGuidedWorldwide')}</div>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              <AnimatedCounter 
                startValue={0} 
                endValue={BUSINESS_STATS.studentsCertifications} 
                suffix="+" 
                duration={2500}
              />
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">{t('teachingStats.studentsEarnedCertifications')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
