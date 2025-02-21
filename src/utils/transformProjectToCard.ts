import type { CollectionEntry } from 'astro:content'
import { getRelativeLocaleUrl } from 'astro:i18n'
import { formatDate, useTranslations, type LangKey } from '@i18n/utils'
import type { IProjectCard } from '@custom-types/types'

export const transformProjectToCard = ({ id, data }: CollectionEntry<'projects'>): IProjectCard => {
  const [lang, ...slug] = id.split('/')

  const t = useTranslations(lang as LangKey)

  return {
    image: data.image,
    title: data.title,
    description: data.description,
    ctaText: t('project-card.cta'),
    projectUrl: getRelativeLocaleUrl(lang, `/projects/${slug.join('/')}`),
    githubUrl: data.githubUrl,
    demoUrl: data.demoUrl,
    pubDate: formatDate(data.pubDate, lang),
  }
}
