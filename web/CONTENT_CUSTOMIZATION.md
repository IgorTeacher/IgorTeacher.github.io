# 🎨 Content Customization Guide

## 📁 **File Structure Overview**

Your website content is organized in a clean, maintainable structure:

```
web/src/lib/
├── site-data.ts          # Core site configuration (pricing, contact, CTAs, testimonials)
├── types.ts              # TypeScript type definitions
├── translations.ts       # Central translation exports
└── locales/              # Language-specific content
    ├── en.ts             # English content
    ├── de.ts             # German content
    ├── ru.ts             # Russian content
    ├── it.ts             # Italian content
    └── pl.ts             # Polish content
```

## 🔧 **How to Customize Content**

### **1. Site Configuration (`site-data.ts`) - STATIC CONFIG**

**What you can change:**
- Contact information (email, phone, social media)
- Pricing (individual lessons, packages, trial)
- Teaching experience stats
- Languages and levels offered
- **Testimonials** (student quotes, names, locations)
- **CTAs** (button links, Calendly, support links)

**Example:**
```typescript
export const siteConfig: SiteConfig = {
  contact: {
    email: "hello@learnwithihar.com",        // ← Change this
    whatsapp: "https://wa.me/+YOURNUMBER",  // ← Change this
    telegram: "https://t.me/YOUR_USERNAME", // ← Change this
    linkedin: "https://linkedin.com/in/YOUR_PROFILE", // ← Change this
  },
  pricing: {
    individual: {
      price: 30,        // ← Change price
      currency: "€",    // ← Change currency
      duration: "60-min", // ← Change lesson duration
    },
    package: {
      lessons: 8,       // ← Change number of lessons
      price: 200,       // ← Change package price
      savings: "16%",   // ← Change savings percentage
    }
  }
}

// Testimonials - Change student feedback here
export const testimonials: readonly Testimonial[] = [
  {
    quote: "Your student's testimonial here",  // ← Change this
    name: "Student Name",                      // ← Change this
    location: "City, Country",                 // ← Change this
    avatar: "/avatars/student.jpg",            // ← Add avatar image
    profileUrl: "https://linkedin.com/...",   // ← Add profile link
  }
]

// CTAs - Change button links here
export const ctas: CTAs = {
  primary: {
    text: "Book free trial",
    href: "https://calendly.com/YOUR_CALENDLY" // ← Change Calendly link
  },
  support: {
    text: "Support My Teaching",
    href: "https://your-support-platform.com"  // ← Change support link
  }
}
```

### **2. Language Content (`locales/*.ts`) - ALL TEXT CONTENT**

**What you can change:**
- **All text content** for each language
- Headlines, descriptions, testimonials
- FAQ questions and answers
- About section personal information
- Pricing labels and descriptions
- Hero section content
- Teaching statistics text

**Example - English (`en.ts`):**
```typescript
export const en = {
  hero: {
    headline: "Your custom headline here",     // ← Change this
    subheadline: "Your custom subheadline",   // ← Change this
    availabilityBadge: "Available for lessons" // ← Change this
  },
  about: {
    introduction: {
      greeting: "Hi, I'm [Your Name]...",     // ← Personalize this
      certifications: "Your certifications...", // ← Update this
      experience: "Your experience...",       // ← Update this
    }
  },
  pricing: {
    heading: "Your pricing headline",         // ← Change this
    perLesson: "per 60-min lesson",          // ← Change this
    savePercentage: "save 16% vs individual", // ← Change this
    fromLabel: "from",                        // ← Change this
    freeLabel: "Free",                        // ← Change this
    mostPopular: "Most Popular"               // ← Change this
  },
  faq: {
    items: [
      {
        question: "Your question here?",      // ← Change this
        answer: "Your answer here"            // ← Change this
      }
    ]
  }
}
```

## 🎯 **Common Customization Tasks**

### **Change Your Name/Personal Info**
1. **In `site-data.ts`:**
   ```typescript
   author: "Your Name Here"
   ```

2. **In all `locales/*.ts` files:**
   ```typescript
   about: {
     introduction: {
       greeting: "Hi, I'm [Your Name]...",
     }
   }
   structuredData: {
     providerName: "Your Name Here",
   }
   ```

### **Update Pricing**
1. **In `site-data.ts` (for actual prices):**
   ```typescript
   pricing: {
     individual: {
       price: 55,        // New price
       currency: "$",    // Different currency
     },
     package: {
       lessons: 10,      // More lessons
       price: 500,       // New package price
       savings: "9%",    // Updated savings
     }
   }
   ```

2. **In `locales/*.ts` (for pricing text labels):**
   ```typescript
   pricing: {
     perLesson: "per 60-min lesson",          // ← Change this
     savePercentage: "save 9% vs individual", // ← Change this
     fromLabel: "from",                        // ← Change this
   }
   ```

### **Update Contact Information**
1. **In `site-data.ts`:**
   ```typescript
   contact: {
     email: "hello@learnwithihar.com",
     whatsapp: "https://wa.me/+NEWNUMBER",
     telegram: "https://t.me/NEW_USERNAME",
     linkedin: "https://linkedin.com/in/NEW_PROFILE",
   }
   ```

2. **In `locales/*.ts` (for contact button text):**
   ```typescript
   contact: {
     email: "Email",           // ← Change button text
     telegram: "Telegram",     // ← Change button text
     whatsapp: "WhatsApp"      // ← Change button text
   }
   ```

### **Update Teaching Statistics**
1. **In `locales/*.ts` (for text labels):**
   ```typescript
   teachingStats: {
     yearsOfExperience: "Years of Experience",           // ← Change this
     collaborationsWithIndustry: "Industry Collaborations", // ← Change this
     learnersGuidedWorldwide: "Learners Worldwide",      // ← Change this
     studentsEarnedCertifications: "Certifications Earned" // ← Change this
   }
   ```

2. **In `site-data.ts` (for actual numbers):**
   ```typescript
   teaching: {
     experience: {
       yearsTeaching: "15+",                       // ← Update experience
       lessonsDelivered: "1000+",                  // ← Update lessons
     }
   }
   ```

### **Add New Languages**
1. **Create new file:** `locales/es.ts` (for Spanish)
2. **Add to `translations.ts`:**
   ```typescript
   import { es } from './locales/es';
   export const translations = { en, de, ru, it, pl, es };
   ```
3. **Update `middleware.ts` and `layout.tsx` with new locale**

## 🖼️ **Images and Assets**

### **Profile Photos**
- **Hero image:** `public/igor-eating-face-close-up-square.png`
- **About image:** `public/igor-in-the-dessert.jpg`
- **Beyond classroom:** `public/igor-explorer-selfie-with-mountains-in-red-hat-rectangle.png`
- **OG image:** `public/og.jpg` (for social media sharing)

### **Testimonial Avatars**
- Place avatar images in `public/avatars/`
- Reference them in `site-data.ts`: `avatar: "/avatars/student.jpg"`

## 🌐 **Multilingual Content Tips**

### **Adding New Languages**
1. Copy an existing locale file (e.g., `en.ts`)
2. Translate all content
3. Update the language selector in `LanguageSelector.tsx`
4. Add locale to middleware and layout

### **Translation Best Practices**
- Keep sentence structure similar across languages
- Use consistent terminology
- Test with native speakers
- Consider cultural differences

## 🚀 **Deployment**

After making changes:
1. **Test locally:** `npm run dev`
2. **Build:** `npm run build`
3. **Commit:** `git add . && git commit -m "Update content"`
4. **Deploy:** `git push` (triggers Netlify rebuild)

## 📞 **Need Help?**

- **Content structure:** Check `types.ts` for data structure
- **Styling:** Look at component files in `src/components/`
- **SEO:** Check `SEO_SETUP.md` for optimization tips
- **Deployment:** Check `netlify.toml` for build configuration

## ✨ **Quick Reference**

| File | Purpose | What to Change |
|------|---------|----------------|
| `site-data.ts` | **Static config** | Pricing numbers, contact links, testimonials, CTAs |
| `locales/en.ts` | **English text** | All English text content |
| `locales/de.ts` | **German text** | All German text content |
| `locales/ru.ts` | **Russian text** | All Russian text content |
| `locales/it.ts` | **Italian text** | All Italian text content |
| `locales/pl.ts` | **Polish text** | All Polish text content |

## 🔑 **Key Points to Remember:**

- **`site-data.ts`** = Numbers, links, testimonials, CTAs
- **`locales/*.ts`** = All text content in each language
- **Most content** is now in locale files for easy translation
- **Configuration** (prices, links) stays in site-data.ts
- **Always test** your changes locally before deploying

**Remember:** Always test your changes locally before deploying! 🎯
