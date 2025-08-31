"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials, content } from "@/lib/site-data";

export default function SocialProof() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // mild auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-xl font-semibold">{content.socialProof.heading}</h2>

        <div className="mt-6 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="min-w-[85%] md:min-w-[48%] lg:min-w-[32%] rounded-2xl border p-5 shadow-sm
                           transition will-change-transform data-[active=true]:scale-[1.01]"
                data-active={i === selectedIndex}
              >
                                    <blockquote className="text-neutral-800">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                <figcaption className="mt-3 text-sm text-neutral-600">— {t.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-4 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition
                ${i === selectedIndex ? "bg-neutral-800" : "bg-neutral-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
