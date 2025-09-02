# 🎨 Content Customization Guide

## 📁 **File Structure Overview**

Your website content is organized in a clean, maintainable structure:

```
web/src/lib/
├── site-data.ts          # Core site configuration (pricing, contact, etc.)
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

### **1. Site Configuration (`site-data.ts`)**

**What you can change:**
- Contact information (email, phone, social media)
- Pricing (individual lessons, packages, trial)
- Teaching experience stats
- Languages and levels offered

**Example:**
```typescript
export const siteConfig: SiteConfig = {
  contact: {
    email: "hello@learnwithihar.com",        // ← Change this
    whatsapp: "https://wa.me/+YOURNUMBER",  // ← Change this
    telegram: "https://t.me/YOUR_USERNAME", // ← Change this
  },
  pricing: {
    individual: {
      price: 30,        // ← Change price
      currency: "€",    // ← Change currency
    },
    package: {
      lessons: 8,       // ← Change number of lessons
      price: 220,       // ← Change package price
      savings: "12%",   // ← Change savings percentage
    }
  }
}
```

### **2. Language Content (`locales/*.ts`)**

**What you can change:**
- All text content for each language
- Headlines, descriptions, testimonials
- FAQ questions and answers
- About section personal information

**Example - English (`en.ts`):**
```typescript
export const en = {
  hero: {
    headline: "Your custom headline here",     // ← Change this
    subheadline: "Your custom subheadline",   // ← Change this
  },
  about: {
    introduction: {
      greeting: "Hi, I'm [Your Name]...",     // ← Personalize this
      certifications: "Your certifications...", // ← Update this
      experience: "Your experience...",       // ← Update this
    }
  }
}
```

### **3. Testimonials (`site-data.ts`)**

**What you can change:**
- Student testimonials
- Names, locations, quotes
- Profile URLs and avatars

**Example:**
```typescript
export const testimonials: readonly Testimonial[] = [
  {
    quote: "Your student's testimonial here",  // ← Change this
    name: "Student Name",                      // ← Change this
    location: "City, Country",                 // ← Change this
    avatar: "/avatars/student.jpg",            // ← Add avatar image
    profileUrl: "https://linkedin.com/...",   // ← Add profile link
  }
]
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
1. **In `site-data.ts`:**
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

### **Add New Languages**
1. **Create new file:** `locales/es.ts` (for Spanish)
2. **Add to `translations.ts`:**
   ```typescript
   import { es } from './locales/es';
   export const translations = { en, de, ru, it, pl, es };
   ```
3. **Update `middleware.ts` and `layout.tsx` with new locale**

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

### **Customize Teaching Information**
1. **In `site-data.ts`:**
   ```typescript
   teaching: {
     languages: ["English", "German", "Spanish"],  // Add languages
     levels: "A1–C2",                              // Change levels
     experience: {
       yearsTeaching: "15+",                       // Update experience
       lessonsDelivered: "1000+",                  // Update lessons
     }
   }
   ```

## 🖼️ **Images and Assets**

### **Profile Photos**
- **Hero image:** `public/igor-profile.jpeg`
- **Teaching image:** `public/igor-teaching.png`
- **OG image:** `public/og.jpg` (for social media sharing)

### **Testimonial Avatars**
- Place avatar images in `public/avatars/`
- Reference them in testimonials: `avatar: "/avatars/student.jpg"`

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
| `site-data.ts` | Core configuration | Pricing, contact, testimonials |
| `locales/en.ts` | English content | All English text |
| `locales/de.ts` | German content | All German text |
| `locales/ru.ts` | Russian content | All Russian text |
| `locales/it.ts` | Italian content | All Italian text |
| `locales/pl.ts` | Polish content | All Polish text |

**Remember:** Always test your changes locally before deploying! 🎯
