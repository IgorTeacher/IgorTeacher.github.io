"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { content, ctas } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight"
            >
                                {content.hero.headline}
            </motion.h1>
                            <p className="text-lg text-neutral-700 mb-6">
                  {content.hero.subheadline}
                </p>
                            <div className="flex gap-3">
                  <a 
                    href={ctas.primary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl px-4 py-2 bg-igor-blue text-white font-medium hover:opacity-90 transform hover:scale-105"
                  >
                    {ctas.primary.text}
                  </a>
                  <a 
                    href={ctas.secondary.href}
                    className="rounded-2xl px-4 py-2 border border-neutral-300 hover:border-igor-blue"
                  >
                    {ctas.secondary.text}
                  </a>
                </div>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <div className="relative inline-block">
              <Image
                src="/igor-profile.jpeg"
                alt="Igor Ausiany - Professional Language Teacher"
                width={400}
                height={400}
                className="rounded-3xl shadow-2xl mx-auto"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl px-3 py-2 shadow-lg border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-neutral-800">{content.hero.availabilityBadge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
