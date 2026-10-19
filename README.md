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
src/pages/        stránky; adresa = cesta k souboru (attacus/imperator.astro -> /attacus/imperator.html)
src/layouts/      společný vzhled (Base.astro) a galerie (Gallery.astro)
src/images/       originály fotek; náhledy a zmenšené verze vyrobí Astro při buildu
src/site.ts       název webu, e-mail a menu
public/           soubory beze změny (CNAME, favicon)
```

Nová fotka do galerie: soubor do `src/images/` a řádek do seznamu `images`
v `src/pages/attacus/imperator-gallery.astro`.

## Nasazení

Každý push do `master` web postaví a nasadí (`.github/workflows/deploy.yml`). Pull request web jen postaví.
Když build nebo nasazení selže, otevře se issue přiřazené vlastníkovi repa (přijde e-mail).

V nastavení repa musí být **Settings → Pages → Build and deployment → Source: GitHub Actions**
a **Custom domain: motyli.kramolis.cz**.
