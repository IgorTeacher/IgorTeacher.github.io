import { en } from './locales/en';
import { de } from './locales/de';
import { ru } from './locales/ru';
import { it } from './locales/it';
import { pl } from './locales/pl';

export const translations = {
  en,
  de,
  ru,
  it,
  pl,
} as const;

export type TranslationKey = keyof typeof en;
export type Locale = keyof typeof translations;
