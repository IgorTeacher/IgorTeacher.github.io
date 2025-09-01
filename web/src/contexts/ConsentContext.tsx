"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
    // Check localStorage on mount
    const savedConsent = localStorage.getItem('analytics-consent');
    if (savedConsent !== null) {
      setConsentGivenState(savedConsent === 'true');
    }
  }, []);

  const setConsentGiven = (consent: boolean) => {
    setConsentGivenState(consent);
    localStorage.setItem('analytics-consent', consent.toString());
    
    // Update GA consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': consent ? 'granted' : 'denied'
      });
    }
  };

  const showConsentBanner = () => {
    setShowBanner(true);
  };

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
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
}

// Import the ConsentBanner component
import ConsentBanner from '@/components/ConsentBanner';
