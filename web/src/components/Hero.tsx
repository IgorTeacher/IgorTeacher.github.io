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
            <div className="mb-8 max-w-3xl">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                Internationally Recognized Teaching Qualifications
              </h3>
              
              {/* Predefined Bookmark Classes */}
              <style jsx>{`
                .bookmark-cambridge {
                  position: absolute;
                  top: -3px;
                  left: -3px;
                  width: 28px;
                  height: 36px;
                  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%);
                  transform: rotate(15deg);
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  clip-path: polygon(0 0, 100% 0, 85% 100%, 50% 85%, 15% 100%);
                }
                .bookmark-cambridge::after {
                  content: '';
                  position: absolute;
                  top: 2px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 6px;
                  height: 6px;
                  background: #fca5a5;
                  border-radius: 50%;
                  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                }
                
                .bookmark-goethe {
                  position: absolute;
                  top: -3px;
                  left: -3px;
                  width: 28px;
                  height: 36px;
                  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #dc2626 50%, #7c2d12 75%, #1f2937 100%);
                  transform: rotate(15deg);
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  clip-path: polygon(0 0, 100% 0, 85% 100%, 50% 85%, 15% 100%);
                }
                .bookmark-goethe::after {
                  content: '';
                  position: absolute;
                  top: 2px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 6px;
                  height: 6px;
                  background: #fef3c7;
                  border-radius: 50%;
                  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                }
                
                .bookmark-swps {
                  position: absolute;
                  top: -3px;
                  left: -3px;
                  width: 28px;
                  height: 36px;
                  background: linear-gradient(135deg, #d1d5db 0%, #9ca3af 50%, #374151 100%);
                  transform: rotate(15deg);
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  clip-path: polygon(0 0, 100% 0, 85% 100%, 50% 85%, 15% 100%);
                }
                .bookmark-swps::after {
                  content: '';
                  position: absolute;
                  top: 2px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 6px;
                  height: 6px;
                  background: #f3f4f6;
                  border-radius: 50%;
                  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                }
                
                .bookmark-iowa {
                  position: absolute;
                  top: -3px;
                  left: -3px;
                  width: 28px;
                  height: 36px;
                  background: linear-gradient(135deg, #f87171 0%, #dc2626 50%, #b91c1c 100%);
                  transform: rotate(15deg);
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  clip-path: polygon(0 0, 100% 0, 85% 100%, 50% 85%, 15% 100%);
                }
                .bookmark-iowa::after {
                  content: '';
                  position: absolute;
                  top: 2px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 6px;
                  height: 6px;
                  background: #fecaca;
                  border-radius: 50%;
                  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                }
                
                .bookmark-arizona {
                  position: absolute;
                  top: -3px;
                  left: -3px;
                  width: 28px;
                  height: 36px;
                  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #ea580c 100%);
                  transform: rotate(15deg);
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  clip-path: polygon(0 0, 100% 0, 85% 100%, 50% 85%, 15% 100%);
                }
                .bookmark-arizona::after {
                  content: '';
                  position: absolute;
                  top: 2px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 6px;
                  height: 6px;
                  background: #fef3c7;
                  border-radius: 50%;
                  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                }
              `}</style>
              
              {/* Certification Badges - 3+3 Grid Layout */}
              <div className="grid grid-cols-3 gap-3 mb-3">
                {/* CELTA Certificate */}
                <div className="border border-neutral-200 dark:border-neutral-600 rounded-xl p-3 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 text-center relative overflow-hidden">
                  <div className="bookmark-cambridge"></div>
                  <div className="font-bold text-neutral-900 dark:text-white text-sm">CELTA</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Cambridge</div>
                </div>

                {/* German Certificate */}
                <div className="border border-neutral-200 dark:border-neutral-600 rounded-xl p-3 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 text-center relative overflow-hidden">
                  <div className="bookmark-goethe"></div>
                  <div className="font-bold text-neutral-900 dark:text-white text-sm">German Certificate</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Goethe Institute</div>
                </div>

                {/* SWPS University */}
                <div className="border border-neutral-200 dark:border-neutral-600 rounded-xl p-3 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 text-center relative overflow-hidden">
                  <div className="bookmark-swps"></div>
                  <div className="font-bold text-neutral-900 dark:text-white text-sm">English Studies</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">SWPS Poland</div>
                </div>
              </div>

              {/* Bottom Row - 3 Badges */}
              <div className="flex justify-center gap-3">
                {/* TKT 1-3 Teaching Knowledge Tests */}
                <div className="border border-neutral-200 dark:border-neutral-600 rounded-xl p-3 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 text-center relative overflow-hidden">
                  <div className="bookmark-cambridge"></div>
                  <div className="font-bold text-neutral-900 dark:text-white text-sm">Teaching Knowledge Test 1-3</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Cambridge</div>
                </div>

                {/* Educational Technology */}
                <div className="border border-neutral-200 dark:border-neutral-600 rounded-xl p-3 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 text-center relative overflow-hidden">
                  <div className="bookmark-iowa"></div>
                  <div className="font-bold text-neutral-900 dark:text-white text-sm">Educational Technology</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Iowa State University</div>
                </div>

                {/* TESOL Certificate */}
                <div className="border border-neutral-200 dark:border-neutral-600 rounded-xl p-3 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 text-center relative overflow-hidden">
                  <div className="bookmark-arizona"></div>
                  <div className="font-bold text-neutral-900 dark:text-white text-sm">TESOL</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Arizona State University</div>
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
