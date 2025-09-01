"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useConsent } from "@/contexts/ConsentContext";

export default function AnalyticsRouteTracker() {
  const pathname = usePathname();
  const { consentGiven } = useConsent();

  useEffect(() => {
    if (window.gtag && consentGiven) {
      window.gtag("config", "G-5REG4P4H91", {
        page_path: pathname,
      });
    }
  }, [pathname, consentGiven]);

  return null;
}
