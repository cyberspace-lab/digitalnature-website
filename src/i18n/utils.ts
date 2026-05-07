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
 *
 * Menu items only appear for a language if `nav.<key>` is present in that
 * locale's dictionary. Drop the key from the locale JSON to hide an item
 * from that language's nav (used to keep the EN site simpler than CS).
 */
export function getMenuItems(lang: Lang) {
  const t = useTranslations(lang);
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const dict = dictionaries[lang] as Dict;
  const navDict = (dict.nav ?? {}) as Record<string, string>;

  const all = [
    { key: 'home', path: `${prefix}/` },
    { key: 'theory', path: `${prefix}/theory` },
    { key: 'practices', path: `${prefix}/practices` },
    { key: 'forest-management', path: `${prefix}/forest-management` },
    { key: 'research', path: `${prefix}/research` },
    { key: 'publications', path: `${prefix}/publications` },
    { key: 'team', path: `${prefix}/team` },
    { key: 'news', path: `${prefix}/news` },
    { key: 'contact', path: `${prefix}/contact` },
  ];

  return all
    .filter((item) => item.key in navDict)
    .map((item) => ({ path: item.path, title: t(`nav.${item.key}`) }));
}
