"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsRouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-5REG4P4H91", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
