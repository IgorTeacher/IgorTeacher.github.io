"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ctas } from "@/lib/site-data";
import { useTranslation } from "@/hooks/useTranslation";

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="pt-16 pb-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight"
            >
              {t('hero.headline')}
            </motion.h1>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              {t('hero.subheadline')}
            </p>
            
            {/* Qualifications Section */}
            <div className="mb-6 max-w-3xl">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
                Internationally Recognized Teaching Qualifications
              </h3>
              
              {/* Certification Badges - Professional Pill Design */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {/* CELTA Certificate - Primary Badge */}
                <div className="group relative">
                <div className="flex items-center gap-2 px-3 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900 dark:text-white text-sm tracking-wide">CELTA</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">Cambridge</div>
                    </div>
                    <div className="text-green-500 text-lg" title="Verified">✓</div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    Certificate in Teaching English to Speakers of Other Languages by Cambridge
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
                  </div>
                </div>

                {/* German Certificate */}
                <div className="group relative">
                  <div className="flex items-center gap-2 px-3 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900 dark:text-white text-sm tracking-wide">Goethe Cert.</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">Goethe Institute</div>
                    </div>
                    <div className="text-green-500 text-lg" title="Verified">✓</div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom by Goethe Institute
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
                  </div>
                </div>

                {/* TESOL Certificate - Primary Badge */}
                <div className="group relative">
                <div className="flex items-center gap-2 px-3 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900 dark:text-white text-sm tracking-wide">TESOL</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">ASU</div>
                    </div>
                    <div className="text-green-500 text-lg" title="Verified">✓</div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    Teaching English to Speakers of Other Languages by Arizona State University
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
                  </div>
                </div>


                {/* SWPS University */}
                <div className="group relative">
                  <div className="flex items-center gap-2 px-3 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900 dark:text-white text-sm tracking-wide">English Studies</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">SWPS Poland</div>
                    </div>
                    <div className="text-green-500 text-lg" title="Verified">✓</div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    MA Degree in English Studies, Teaching Track by SWPS University Poland
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
                  </div>
                </div>

                {/* TKT 1-3 Teaching Knowledge Tests - Primary Badge */}
                <div className="group relative">
                <div className="flex items-center gap-2 px-3 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900 dark:text-white text-sm tracking-wide">TKT 1-3</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">Cambridge</div>
                    </div>
                    <div className="text-green-500 text-lg" title="Verified">✓</div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    Teaching Knowledge Test modules 1-3 by Cambridge
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
                  </div>
                </div>


                {/* Educational Technology */}
                <div className="group relative">
                <div className="flex items-center gap-2 px-3 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900 dark:text-white text-sm tracking-wide">Edu. Technology</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">ISU</div>
                    </div>
                    <div className="text-green-500 text-lg" title="Verified">✓</div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    Educational Technology by Iowa State University
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="flex gap-3">
              <a 
                href={ctas.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl px-4 py-2 bg-igor-blue text-white font-medium hover:opacity-90 transform hover:scale-105"
              >
                {t('ctas.bookFreeTrial')}
              </a>
              <a 
                href={ctas.secondary.href}
                className="rounded-2xl px-4 py-2 border border-neutral-300 dark:border-neutral-600 hover:border-igor-blue dark:hover:border-igor-blue text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
              >
                {t('ctas.emailMe')}
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <div className="relative inline-block">
              <Image
                src="/igor-eating-face-close-up-square.png"
                alt="Igor Ausiany - Professional Language Teacher"
                width={400}
                height={400}
                className="rounded-3xl shadow-2xl mx-auto"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-white dark:bg-neutral-800 rounded-xl px-3 py-2 shadow-lg border border-neutral-200 dark:border-neutral-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-neutral-800 dark:text-white">{t('hero.availabilityBadge')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
