"use client";

import Image from "next/image";
import { ExternalLink, Instagram, Linkedin, Facebook } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import TestimonialModal from "./TestimonialModal";
import type { Testimonial } from "@/lib/types";

export default function SocialProof() {
  const { t, locale } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", slidesToScroll: 1 });
  const [selected, setSelected] = useState(0);
  const [modalTestimonial, setModalTestimonial] = useState<Testimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get testimonials from locale
  const testimonials: Testimonial[] = t('testimonials') || [];

  // gentle autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 4800);
    return () => clearInterval(id);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Modal handlers
  const openModal = (testimonial: Testimonial) => {
    setModalTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTestimonial(null);
  };

  return (
            <section className="py-20 bg-gradient-to-b from-neutral-50/30 via-transparent to-transparent dark:from-neutral-800/30">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">{t('socialProof.heading')}</h2>

        <div className="mt-10 overflow-hidden px-8" ref={emblaRef}>
          <div className="flex gap-8">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                data-active={i === selected}
                className="relative min-w-[80%] md:min-w-[45%] lg:min-w-[30%]
                           rounded-2xl border bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-600 p-5 shadow-sm transition
                           will-change-transform data-[active=true]:scale-[1.01] mt-8 mb-3"
              >
                {/* avatar */}
                {t.avatar && (
                  <div className="absolute -top-6 -left-4 h-12 w-12 rounded-full ring-4 ring-white overflow-hidden shadow">
                    <Image 
                      src={t.avatar} 
                      alt={t.name} 
                      width={48} 
                      height={48} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}

                {/* quote */}
                <blockquote className="text-neutral-800 dark:text-neutral-200">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* name / location / link */}
                <figcaption className="mt-4 flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
                  <div>
                    <span className="font-medium text-neutral-800 dark:text-white">{t.name}</span>
                    {t.age && <span className="text-neutral-600 dark:text-neutral-400">, {t.age}</span>}
                    {t.location ? <span className="text-neutral-600 dark:text-neutral-400">, {t.location}</span> : null}
                  </div>
                  {t.profileUrl && (
                    <a
                      href={t.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
                      aria-label={`${t.name} profile`}
                    >
                      {t.platform === "linkedin" ? (
                        <Linkedin className="h-4 w-4" />
                      ) : t.platform === "instagram" ? (
                        <Instagram className="h-4 w-4" />
                      ) : t.platform === "facebook" ? (
                        <Facebook className="h-4 w-4" />
                      ) : (
                        <ExternalLink className="h-4 w-4" />
                      )}
                    </a>
                  )}
                </figcaption>

                {/* Read More button - right aligned */}
                {t.fullReview && (
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => openModal(t)}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      Read more...
                    </button>
                  </div>
                )}
              </figure>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="mt-4 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === selected ? "bg-neutral-800" : "bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Testimonial Modal */}
      <TestimonialModal
        testimonial={modalTestimonial}
        isOpen={isModalOpen}
        onClose={closeModal}
        locale={locale}
      />
    </section>
  );
}