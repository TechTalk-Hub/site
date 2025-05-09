// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import { remarkReadingTime } from './src/plugins/remark/readingTime.mjs';
import { remarkWords } from './src/plugins/remark/readingWords.mjs';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      remarkWords
    ]
  },
});