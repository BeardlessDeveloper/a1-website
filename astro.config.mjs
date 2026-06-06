import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://www.a1paralegal.com',
  output: 'static',

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/intake/'),
    }),
  ],

  adapter: cloudflare()
});