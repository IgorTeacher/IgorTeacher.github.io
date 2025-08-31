# 🌍 Multilingual SEO Setup

## Environment Variables

Create a `.env.local` file in the `web/` directory with:

```bash
# Base URL for the website (update this with your actual domain)
NEXT_PUBLIC_BASE_URL=https://igorteacher.com

# For development, you can use:
# NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## SEO Features Implemented

### ✅ Hreflang Tags
- Automatic generation for all 5 languages
- Proper canonical URLs
- Language alternates for search engines

### ✅ Metadata
- Language-specific titles and descriptions
- Open Graph tags for social media
- Twitter Card support
- Keywords for each language

### ✅ Sitemap
- XML sitemap with all language versions
- Proper priority and change frequency
- Includes CV pages for each locale

### ✅ Robots.txt
- Search engine crawling rules
- Sitemap reference
- Proper disallow rules

### ✅ Structured Data (JSON-LD)
- EducationalService schema
- Teacher information
- Service offerings
- Contact details

## Search Engine Benefits

1. **Google**: Will understand your multilingual content and serve the right language
2. **Bing**: Proper hreflang support for international search
3. **Social Media**: Rich previews when shared on Facebook, Twitter, LinkedIn
4. **Local SEO**: Better visibility in different countries

## Next Steps

1. Update `NEXT_PUBLIC_BASE_URL` with your actual domain
2. Submit sitemap to Google Search Console
3. Set up Google Analytics for each language
4. Monitor search performance in different regions

## Testing

- Visit `/sitemap.xml` to see your sitemap
- Visit `/robots.txt` to see crawling rules
- Check page source for structured data
- Test social media sharing previews
