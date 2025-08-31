"use client";

import Image from "next/image";
import { ExternalLink, Instagram, Linkedin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { testimonials } from "@/lib/site-data";
import { useTranslation } from "@/hooks/useTranslation";

export default function SocialProof() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

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

  return (
            <section className="mt-24">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-xl font-semibold">{t('socialProof.heading')}</h2>

        <div className="mt-10 overflow-hidden px-4" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                data-active={i === selected}
                className="relative min-w-[80%] md:min-w-[45%] lg:min-w-[30%]
                           rounded-2xl border bg-white p-5 shadow-sm transition
                           will-change-transform data-[active=true]:scale-[1.01] mt-4"
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
                <blockquote className="text-neutral-800">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* name / location / link */}
                <figcaption className="mt-4 flex items-center justify-between text-sm text-neutral-600">
                  <div>
                    <span className="font-medium text-neutral-800">{t.name}</span>
                    {t.location ? <span>, {t.location}</span> : null}
                  </div>
                  {t.profileUrl && (
                    <a
                      href={t.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-800 transition-colors"
                      aria-label={`${t.name} profile`}
                    >
                      {t.platform === "linkedin" ? (
                        <Linkedin className="h-4 w-4" />
                      ) : t.platform === "instagram" ? (
                        <Instagram className="h-4 w-4" />
                      ) : (
                        <ExternalLink className="h-4 w-4" />
                      )}
                    </a>
                  )}
                </figcaption>
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
    </section>
  );
}