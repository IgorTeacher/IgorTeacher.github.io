"use client";
import { Languages, Video, Users } from "lucide-react";
import { offerItems } from "@/lib/site-data";
import { useTranslation } from "@/hooks/useTranslation";

// Map icon names to actual icon components
const iconMap = {
  Languages,
  Video, 
  Users
} as const;

export default function Offer() {
  const { t } = useTranslation();
  
  return (
    <section className="mt-24 relative">
      {/* gentle backdrop to separate sections */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/40 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-xl font-semibold">{t('offer.heading')}</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {(Array.isArray(t('offer.items')) ? t('offer.items') : offerItems).map((item: any, index: number) => {
            const Icon = iconMap[offerItems[index].iconName];
            return (
            <div
              key={index}
              className="rounded-2xl border bg-white p-5 shadow-sm transition
                         hover:-translate-y-0.5 hover:shadow-md hover:border-neutral-300"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-100">
                  <Icon className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="mt-3 text-neutral-700">{item.body}</p>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
