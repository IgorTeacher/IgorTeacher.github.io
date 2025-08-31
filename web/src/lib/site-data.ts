// Site metadata and content configuration
// This centralizes all website content for easy maintenance

import type { 
  SiteConfig, 
  Testimonial, 
  HowItWorksStep, 
  OfferItem, 
  FAQItem, 
  SiteContent, 
  CTAs 
} from './types';

export const siteConfig: SiteConfig = {
  // Basic site info
  title: "Learn English & German with Ihar",
  description: "CELTA-certified teacher. Book a free 20-minute trial.",
  author: "Ihar Ausiany",
  
  // Contact info
  contact: {
    email: "igorteacher@icloud.com",
    whatsapp: "https://wa.me/+48123456789", // Replace with real number
    telegram: "https://t.me/ihar_ausiany",
    linkedin: "https://www.linkedin.com/in/ihar-ausiany/",
    zrzutka: "https://zrzutka.pl/en/ghr8d9"
  },

  // Teaching info
  teaching: {
    languages: ["English", "German"],
    levels: "A2–C1",
    formats: ["1:1", "pair lessons"],
    delivery: ["Online (Zoom/Meet)", "in person"],
    experience: {
      yearsTeaching: "10+",
      lessonsDelivered: "500+"
    }
  },

  // Pricing
  pricing: {
    individual: {
      price: 45,
      currency: "€",
      duration: "60-min",
      unit: "lesson"
    },
    package: {
      lessons: 5,
      price: 200,
      currency: "€",
      savings: "11%"
    },
    trial: {
      price: 0,
      duration: "20-min",
      description: "Free trial lesson"
    }
  }
} as const;

// Content data
export const testimonials: readonly Testimonial[] = [
  {
    quote: "Ihar helped me feel confident at work meetings.",
    name: "Anna",
    location: "Berlin",
    avatar: "/avatars/anna.svg",
    profileUrl: "https://www.linkedin.com/in/anna-testimonial",
    platform: "linkedin",
  },
  {
    quote: "Clear plan + friendly feedback. My fluency jumped.",
    name: "Mark",
    location: "Warsaw",
    avatar: "/avatars/mark.svg",
    profileUrl: "https://www.instagram.com/mark_speaks_english",
    platform: "instagram",
  },
  {
    quote: "Lessons are practical and motivating.",
    name: "Olga",
    location: "Kraków",
    avatar: "/avatars/olga.svg",
  },
  {
    quote: "Great structure. Speaking feels natural now.",
    name: "Max",
    location: "Munich",
    avatar: "/avatars/max.svg",
    profileUrl: "https://www.linkedin.com/in/max-engineer",
    platform: "linkedin",
  },
  {
    quote: "Perfect for business German. Presentations went smoothly!",
    name: "Sophie",
    location: "Vienna",
    avatar: "/avatars/sophie.svg",
    profileUrl: "https://www.linkedin.com/in/sophie-business",
    platform: "linkedin",
  },
  {
    quote: "From zero to conversational in 6 months. Amazing results!",
    name: "Lucas",
    location: "Amsterdam",
    avatar: "/avatars/lucas.svg",
  },
  {
    quote: "Flexible scheduling made it possible to fit lessons into my busy life.",
    name: "Maria",
    location: "Barcelona",
    avatar: "/avatars/maria.svg",
    profileUrl: "https://www.instagram.com/maria_learning",
    platform: "instagram",
  },
  {
    quote: "Technical English for my engineering career. Highly recommend!",
    name: "Pavel",
    location: "Prague",
    avatar: "/avatars/pavel.svg",
    profileUrl: "https://www.linkedin.com/in/pavel-tech",
    platform: "linkedin",
  }
] as const;

export const howItWorksSteps: readonly HowItWorksStep[] = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We discuss your goals, assess your current level, and create a personalized learning plan.",
    icon: "💬"
  },
  {
    step: "02", 
    title: "Tailored Lessons",
    description: "Engage in interactive lessons designed for your learning style, pace, and objectives.",
    icon: "🎯"
  },
  {
    step: "03",
    title: "Track Progress",
    description: "Regular assessments and feedback help you see improvement and stay motivated.",
    icon: "📈"
  },
  {
    step: "04",
    title: "Achieve Fluency",
    description: "Reach your language goals through consistent practice and expert guidance.",
    icon: "🎉"
  }
] as const;

export const offerItems: readonly OfferItem[] = [
  {
    title: "Languages & levels",
    body: `${siteConfig.teaching.languages.join(" & ")}, ${siteConfig.teaching.levels}`,
    iconName: "Languages" as const,
  },
  {
    title: "Formats",
    body: `${siteConfig.teaching.formats.join(" or ")} • ${siteConfig.teaching.delivery.join(" or ")}`,
    iconName: "Video" as const,
  },
  {
    title: "Who I help",
    body: "Professionals, interview prep, confident speaking",
    iconName: "Users" as const,
  }
] as const;

export const faqItems: readonly FAQItem[] = [
  {
    question: "What levels do you teach?",
    answer: `I teach all levels from complete beginners (A1) to advanced learners (${siteConfig.teaching.levels}). Each lesson is tailored to your current proficiency and learning goals.`
  },
  {
    question: "How are lessons conducted?",
    answer: "All lessons are conducted online via Zoom, making it convenient for students worldwide. You'll receive a meeting link before each session."
  },
  {
    question: "What languages do you teach?",
    answer: `I specialize in teaching ${siteConfig.teaching.languages.join(" and ")}. I also speak some French, which helps when working with French-speaking students.`
  },
  {
    question: "How long are the lessons?",
    answer: `Regular lessons are ${siteConfig.pricing.individual.duration} long. The free trial lesson is ${siteConfig.pricing.trial.duration}, perfect for getting to know my teaching style and assessing your needs.`
  },
  {
    question: "Do you provide learning materials?",
    answer: "Yes! I provide all necessary learning materials tailored to your level and goals. This includes worksheets, exercises, and recommended resources."
  },
  {
    question: "Can you help with exam preparation?",
    answer: "Absolutely! I offer specialized preparation for various English and German proficiency exams, drawing from my extensive certification background."
  },
  {
    question: "What makes your teaching different?",
    answer: "I focus on making challenging subjects like grammar engaging through innovative methods. My corporate IT background also helps with business language needs."
  },
  {
    question: "How flexible is the scheduling?",
    answer: "Very flexible! I work with students across different time zones and can accommodate various schedules. We'll find times that work for both of us."
  }
] as const;

// Content snippets used across components
export const content: SiteContent = {
  hero: {
    headline: "English & German lessons, made personal.",
    subheadline: "CELTA-certified teacher. Practical speaking, clear structure, friendly guidance.",
    availabilityBadge: "Available for lessons"
  },
  
  socialProof: {
    heading: "What students say"
  },
  
  howItWorks: {
    heading: "How It Works",
    subheading: "A proven approach that has helped students achieve fluency in English and German, from complete beginners to advanced learners."
  },
  
  offer: {
    heading: "Your lessons at a glance"
  },
  
  about: {
    heading: "Meet Your Teacher",
    philosophy: {
      heading: "My Teaching Philosophy",
      quote: "I seek the most effective ways to inspire and teach students, making challenging subjects like grammar come alive through innovative methods."
    }
  },
  
  pricing: {
    heading: "Simple, Transparent Pricing",
    subheading: "Flexible lesson options that fit your schedule and budget. All lessons are conducted online via Zoom for maximum convenience."
  },
  
  faq: {
    heading: "Frequently Asked Questions",
    subheading: "Got questions? I've got answers. Here are the most common questions about my teaching approach and lesson structure."
  },
  
  finalCTA: {
    heading: "Ready to Start Your Language Journey?",
    subheading: "Join students worldwide who are achieving their language goals through personalized, engaging instruction. Your journey to fluency starts with one conversation.",
    highlights: [
      { value: "Free", label: "Trial Lesson" },
      { value: "Flexible", label: "Scheduling" },
      { value: "Certified", label: "Expert Teacher" }
    ],
    noObligationText: "No obligation after the trial"
  }
} as const;

// Common CTAs
export const ctas: CTAs = {
  primary: {
    text: "Book free trial",
    href: "https://calendly.com/igorteacher/30min-trial-class"
  },
  secondary: {
    text: "Email me",
    href: `mailto:${siteConfig.contact.email}`
  },
  whatsapp: {
    text: "WhatsApp",
    href: siteConfig.contact.whatsapp
  },
  support: {
    text: "Support My Teaching",
    href: siteConfig.contact.zrzutka
  }
} as const;
