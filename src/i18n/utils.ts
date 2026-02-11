import { ui, defaultLang, type Lang } from './ui';

/**
 * Extract language from a URL pathname.
 * Returns 'cs' for /cs/... paths, 'en' otherwise.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Return a translation function bound to the given language.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Build a localized path. For default locale (en), returns path as-is.
 * For cs, prefixes with /cs.
 */
export function getLocalizedPath(lang: Lang, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return cleanPath;
  return `/${lang}${cleanPath}`;
}

/**
 * Get the equivalent page URL in the other language.
 */
export function getAlternateLocaleUrl(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  let pathname = url.pathname;

  // Strip current locale prefix if present
  if (currentLang !== defaultLang) {
    pathname = pathname.replace(`/${currentLang}`, '') || '/';
  }

  // Add target locale prefix if not default
  if (targetLang === defaultLang) return pathname;
  return `/${targetLang}${pathname}`;
}

/**
 * Build the localized menu items array for Navigation.
 */
export function getMenuItems(lang: Lang) {
  const t = useTranslations(lang);
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return [
    { path: `${prefix}/`, title: t('nav.home') },
    { path: `${prefix}/blog`, title: t('nav.blog') },
    { path: `${prefix}/publications`, title: t('nav.publications') },
    { path: `${prefix}/team`, title: t('nav.team') },
    { path: `${prefix}/contact`, title: t('nav.contact') },
  ];
}
