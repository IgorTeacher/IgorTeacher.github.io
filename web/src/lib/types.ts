// Type definitions for site data structure

export interface ContactInfo {
  email: string;
  whatsapp: string;
  telegram: string;
  zrzutka: string;
}

export interface TeachingInfo {
  languages: string[];
  levels: string;
  formats: string[];
  delivery: string[];
  experience: {
    yearsTeaching: string;
    lessonsDelivered: string;
  };
}

export interface PricingInfo {
  individual: {
    price: number;
    currency: string;
    duration: string;
    unit: string;
  };
  package: {
    lessons: number;
    price: number;
    currency: string;
    savings: string;
  };
  trial: {
    price: number;
    duration: string;
    description: string;
  };
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  contact: ContactInfo;
  teaching: TeachingInfo;
  pricing: PricingInfo;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface OfferItem {
  title: string;
  body: string;
  iconName: 'Languages' | 'Video' | 'Users';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentHighlight {
  value: string;
  label: string;
}

export interface ContentSection {
  heading: string;
  subheading?: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  availabilityBadge: string;
}

export interface AboutContent extends ContentSection {
  philosophy: {
    heading: string;
    quote: string;
  };
}

export interface FinalCTAContent extends ContentSection {
  highlights: ContentHighlight[];
  noObligationText: string;
}

export interface SiteContent {
  hero: HeroContent;
  socialProof: ContentSection;
  howItWorks: ContentSection;
  offer: ContentSection;
  about: AboutContent;
  pricing: ContentSection;
  faq: ContentSection;
  finalCTA: FinalCTAContent;
}

export interface CTALink {
  text: string;
  href: string;
}

export interface CTAs {
  primary: CTALink;
  whatsapp: CTALink;
  support: CTALink;
}
