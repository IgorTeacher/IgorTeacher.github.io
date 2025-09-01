import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

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
      changeFrequency: 'monthly',
      priority: 1,
    });
    
    // Add CV page for each locale
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/cv`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    });
  });
  
  // Add root domain (redirects to /en)
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 1,
  });
  
  return sitemapEntries;
}
