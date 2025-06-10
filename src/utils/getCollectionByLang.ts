import { getCollection, type CollectionEntry } from 'astro:content'
import type { LangKey } from '@i18n/utils'

export const getCollectionByLang = async <T extends 'projects' | 'blog'>(
  collectionName: T,
  lang: LangKey,
): Promise<CollectionEntry<T>[]> => {
  const collection = await getCollection(collectionName)
  return collection.filter((data) => data.id.includes(`${lang}/`))
}
