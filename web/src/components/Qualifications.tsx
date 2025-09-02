"use client";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function Qualifications() {

  return (
    <section className="py-16 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Internationally Recognized Teaching Qualifications
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Certified by leading institutions in language education and teaching methodology
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Cambridge English */}
          <div className="flex flex-col items-center group">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
                src="https://www.cambridgeenglish.org/images/cambridge-english-logo.png"
                alt="Cambridge English"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  // Fallback if external image fails
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">
                Cambridge English
              </div>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">CELTA Certificate</p>
          </div>

          {/* TESOL International */}
          <div className="flex flex-col items-center group">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
                src="https://www.tesol.org/images/tesol-logo.png"
                alt="TESOL International"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">
                TESOL International
              </div>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">TESOL Certificate</p>
          </div>

          {/* SWPS University */}
          <div className="flex flex-col items-center group">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
                src="https://www.swps.pl/images/swps-logo.png"
                alt="SWPS University"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">
                SWPS University
              </div>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">English Studies</p>
          </div>

          {/* Arizona State University */}
          <div className="flex flex-col items-center group">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
                src="https://www.asu.edu/images/asu-logo.png"
                alt="Arizona State University"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">
                Arizona State University
              </div>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">Educational Technology</p>
          </div>

          {/* Goethe Institute */}
          <div className="flex flex-col items-center group">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
                src="https://www.goethe.de/images/goethe-logo.png"
                alt="Goethe Institute"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">
                Goethe Institute
              </div>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">German Language</p>
          </div>
        </div>
      </div>
    </section>
  );
}
