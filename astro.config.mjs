import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import { SITE } from './src/utils/config.ts';
import node from '@astrojs/node';

import partytown from '@astrojs/partytown'

import react from '@astrojs/react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    ssr: {
      noExternal: ["solid-use", "@xstate/svelte", 'whatwg-url']
    }
  },
  integrations: [tailwind(), partytown({
          config: {
            forward: ["dataLayer.push"],
          },
      }), react()],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});