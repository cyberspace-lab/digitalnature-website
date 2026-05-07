export const languages = {
  en: 'English',
  cs: 'Česky',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;
