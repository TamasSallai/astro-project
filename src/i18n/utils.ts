import { defaultLang, ui } from './ui'

export type LangKey = keyof typeof ui
export type UILangKey = keyof (typeof ui)[LangKey]

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export const useTranslations = (lang: LangKey) => {
  return function t(key: UILangKey) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export const formatDate = (date: Date, lang: string) => {
  return new Intl.DateTimeFormat(lang, { dateStyle: 'long' }).format(date)
}
