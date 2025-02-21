import { getCollection } from 'astro:content'
import type { LangKey } from '@i18n/utils'

type CollectionType = 'projects'

export const getCollectionByLang = async (collectionName: CollectionType, lang: LangKey) => {
  const collection = await getCollection(collectionName)
  return collection.filter((project) => project.id.includes(`${lang}/`))
}
