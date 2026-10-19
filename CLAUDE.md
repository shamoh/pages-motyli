# CLAUDE.md

Stránky amatérských chovatelů motýlů (česky), https://motyli.kramolis.cz.

- Jediná stránka o Attacus Imperator (`src/pages/index.astro`). Další druh = předělat na víc stránek.
- Astro (statický výstup), vlastní CSS bez frameworku, písma Fraunces + Inter přes `@fontsource-variable` (žádné
  Google Fonts), světlý i tmavý režim (`prefers-color-scheme`). JS jen v prohlížeči fotek (`Lightbox.astro`, `<dialog>`).
- Staré adresy (`/attacus/`, `/attacus/imperator.html`, `/attacus/imperator-gallery.html`) jsou přesměrování
  (`Redirect.astro`, mimo sitemap); `build.format: 'preserve'` je drží jako soubory `.html`. Nemazat, jsou zaindexované.
- `compressHTML: false`: komprese maže mezeru na zalomení řádku mezi inline prvky v textech.
- Fotky jsou originály v `src/images/`, náhledy a zmenšeniny dělá `astro:assets` (sharp) při buildu.
- Node.js ≥ 24 (`engines`), ve workflow `node-version: 24`.
- Deploy: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`), doména v `public/CNAME`.
