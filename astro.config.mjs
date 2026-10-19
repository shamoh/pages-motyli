import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://motyli.kramolis.cz',
  output: 'static',
  // the compression drops the space at a line break between inline elements ("stránce <a>…")
  compressHTML: false,
  // keeps the addresses of the old Jekyll site: attacus/imperator.html, attacus/index.html
  build: { format: 'preserve' },
  integrations: [sitemap()],
});
