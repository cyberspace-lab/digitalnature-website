import { defaultLang, languages, type Lang } from './ui';
import en from './locales/en.json';
import cs from './locales/cs.json';

type Dict = Record<string, unknown>;

const dictionaries: Record<Lang, Dict> = { en, cs };

/**
 * Walk a dot-delimited key path through a nested dictionary.
 */
function lookup(dict: Dict, key: string): string | undefined {
  const value = key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in (acc as Dict)) {
      return (acc as Dict)[part];
    }
    return undefined;
  }, dict);
  return typeof value === 'string' ? value : undefined;
}

/**
 * Extract language from a URL pathname. Falls back to default locale.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment && segment in languages) return segment as Lang;
  return defaultLang;
}

/**
 * Return a translation function bound to the given language.
 * Falls back to the default locale, then to the key itself.
 */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return lookup(dictionaries[lang], key)
      ?? lookup(dictionaries[defaultLang], key)
      ?? key;
  };
}

/**
 * Build a localized path. Default locale has no prefix.
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

  if (currentLang !== defaultLang) {
    pathname = pathname.replace(`/${currentLang}`, '') || '/';
  }

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
