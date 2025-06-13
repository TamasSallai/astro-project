// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config'

import icon from 'astro-icon'
import sectionize from '@hbsnow/rehype-sectionize'

import react from '@astrojs/react'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react()],
  site: 'https://example.com',

  output: 'server',

  image: {
    service: passthroughImageService(),
  },

  adapter: cloudflare({
    imageService: 'passthrough',
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

  vite: {
    resolve: {
      // @ts-ignore
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD && {
        'react-dom/server': 'react-dom/server.edge',
      },
    },
  },
})
