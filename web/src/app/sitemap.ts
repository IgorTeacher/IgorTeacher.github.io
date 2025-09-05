import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://learnwithihar.com';
  const currentDate = new Date();
  
  const locales = ['en', 'de', 'ru', 'it', 'pl'];
  
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Add homepage for each locale
  locales.forEach(locale => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    });
    
    // Add CV page for each locale
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/cv`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
    
    // Add anchor sections for better sitelink potential
    sitemapEntries.push({
      url: `${baseUrl}/${locale}#offer`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
    
    sitemapEntries.push({
      url: `${baseUrl}/${locale}#testimonials`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
    
    sitemapEntries.push({
      url: `${baseUrl}/${locale}#faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });
  
  // Add root domain (redirects to /en)
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 1,
  });
  
  return sitemapEntries;
}
