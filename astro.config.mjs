// @ts-check
import { defineConfig } from 'astro/config'

import icon from 'astro-icon'
import sectionize from '@hbsnow/rehype-sectionize'

import react from '@astrojs/react'
import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react()],
  site: 'https://example.com',

  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),

  i18n: {
    locales: ['hu', 'en'],
    defaultLocale: 'hu',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  markdown: {
    rehypePlugins: [sectionize],
  },
})
