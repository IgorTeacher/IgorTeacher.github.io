"use client";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function BeyondClassroom() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            {t('beyondClassroom.heading')}
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('beyondClassroom.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Travel/Explorer Photo */}
          <div className="relative group">
            <Image
              src="/igor-explorer-selfie-with-mountains-in-red-hat-rectangle.png"
              alt="Igor exploring mountains and traveling"
              width={400}
              height={300}
              className="rounded-3xl shadow-lg w-full h-64 object-cover group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl">
              <p className="text-sm font-medium text-neutral-900">
                {t('beyondClassroom.travelLabel')}
              </p>
            </div>
          </div>

          {/* Portugal/Adventure Photo */}
          <div className="relative group">
            <Image
              src="/igor-front-standind-on-the-portugese-wall-looking-towards-left.jpg"
              alt="Igor in Portugal"
              width={400}
              height={300}
              className="rounded-3xl shadow-lg w-full h-64 object-cover group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl">
              <p className="text-sm font-medium text-neutral-900">
                {t('beyondClassroom.adventureLabel')}
              </p>
            </div>
          </div>

          {/* Academic/Intellectual Photo */}
          <div className="relative group">
            <Image
              src="/igor-at-the-cafe-with-book-smiling-with-stripes-square-2.jpg"
              alt="Igor reading and studying at a cafe"
              width={400}
              height={300}
              className="rounded-3xl shadow-lg w-full h-64 object-cover group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl">
              <p className="text-sm font-medium text-neutral-900">
                {t('beyondClassroom.academicLabel')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t('beyondClassroom.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
