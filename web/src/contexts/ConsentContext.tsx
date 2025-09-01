"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import ConsentBanner from "@/components/ConsentBanner";

interface ConsentContextType {
  consentGiven: boolean;
  setConsentGiven: (consent: boolean) => void;
  showConsentBanner: () => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consentGiven, setConsentGivenState] = useState<boolean>(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only runs in the browser
    const saved = localStorage.getItem("analytics-consent");
    if (saved === null) {
      // First visit → open the banner
      setShowBanner(true);
    } else {
      setConsentGivenState(saved === "true");
    }
  }, []);

  const setConsentGiven = (consent: boolean) => {
    setConsentGivenState(consent);
    localStorage.setItem("analytics-consent", String(consent));

    // Update Consent Mode
    window.gtag?.("consent", "update", {
      analytics_storage: consent ? "granted" : "denied",
      ad_storage: consent ? "granted" : "denied",
      security_storage: "granted",
      functionality_storage: "granted",
    });

    setShowBanner(false);
  };

  const showConsentBanner = () => setShowBanner(true);

  return (
    <ConsentContext.Provider value={{ consentGiven, setConsentGiven, showConsentBanner }}>
      {children}
      {showBanner && (
        <ConsentBanner
          onAccept={() => setConsentGiven(true)}
          onDecline={() => setConsentGiven(false)}
          onClose={() => setShowBanner(false)}
        />
      )}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within a ConsentProvider");
  return ctx;
}
