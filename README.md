# Motýli

Stránky amatérských chovatelů motýlů, https://motyli.kramolis.cz.

Statický web v [Astru](https://astro.build), nasazovaný přes GitHub Actions na GitHub Pages.

## Lokálně

Potřebuje Node.js 24 nebo novější.

```shell
npm install
npm run dev       # vývojový server na http://localhost:4321
npm run build     # hotový web do dist/
npm run preview   # náhled hotového webu z dist/
```

## Struktura

```
src/pages/index.astro   jediná stránka: Attacus Imperator (úvod, druh, životní cyklus, galerie)
src/pages/attacus/      staré adresy (/attacus/, imperator.html, imperator-gallery.html), přesměrují na úvod
src/data/gallery.ts     fotky galerie podle stádií
src/components/         prohlížeč fotek (Lightbox), přesměrování (Redirect)
src/layouts/Base.astro  hlavička stránky
src/styles/global.css   barvy, písma (Fraunces, Inter; z npm, bez Google Fonts), světlý i tmavý režim
src/images/             originály fotek; náhledy a zmenšené verze vyrobí Astro při buildu
src/site.ts             název webu, popis a e-mail
public/           soubory beze změny (CNAME, favicon)
```

Nová fotka do galerie: soubor do `src/images/` a jeho jméno (bez `.jpg`) do skupiny v `src/data/gallery.ts`.

## Nasazení

Každý push do `master` web postaví a nasadí (`.github/workflows/deploy.yml`). Pull request web jen postaví.
Když build nebo nasazení selže, otevře se issue přiřazené vlastníkovi repa (přijde e-mail).

V nastavení repa musí být **Settings → Pages → Build and deployment → Source: GitHub Actions**
a **Custom domain: motyli.kramolis.cz**.
