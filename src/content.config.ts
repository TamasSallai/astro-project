import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const author = z.object({
  firstName: z.string(),
  lastName: z.string(),
  avatar: z.string(),
  github: z.string(),
})

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: 'src/content/projects',
  }),
  schema: z.object({
    image: z.string(),
    title: z.string(),
    description: z.string(),
    demoUrl: z.string(),
    githubUrl: z.string(),
    pubDate: z.coerce.date(),
    author: author,
    tags: z.array(z.string()),
  }),
})

export const collections = {
  projects,
}
