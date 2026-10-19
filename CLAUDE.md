# CLAUDE.md

Stránky amatérských chovatelů motýlů (česky), https://motyli.kramolis.cz.

- Astro (statický výstup), Bootstrap 5 z npm (CSS + jen plugin collapse pro menu), žádné jQuery.
- `build.format: 'preserve'` drží adresy původního Jekyll webu (`/attacus/imperator.html`); neměnit, jsou zaindexované.
- `compressHTML: false`: komprese maže mezeru na zalomení řádku mezi inline prvky v textech.
- Fotky jsou originály v `src/images/`, náhledy a zmenšeniny dělá `astro:assets` (sharp) při buildu.
- Node.js ≥ 24 (`engines`), ve workflow `node-version: 24`.
- Deploy: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`), doména v `public/CNAME`.
