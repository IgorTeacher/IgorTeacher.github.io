import { useRouter, usePathname } from 'next/navigation';
import { translations } from '@/lib/translations';

export function useTranslation() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Extract locale from pathname (e.g., "/de/about" -> "de")
  const locale = pathname.split('/')[1] || 'en';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = (key: string): any => {
    const keys = key.split('.');
    let value: unknown = translations[locale as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Fallback to key if path not found
      }
    }
    
    return value !== undefined ? value : key;
  };

  const changeLanguage = (newLocale: string) => {
    // Replace current locale in pathname with new locale
    const segments = pathname.split('/');
    if (segments[1] && ['en', 'de', 'ru', 'it', 'pl'].includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return {
    t,
    locale,
    changeLanguage,
  };
}
