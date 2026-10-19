import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../images/*.jpg', { eager: true });

/** A photo from src/images by its file name without the extension, e.g. `attacus-imperator-male`. */
export function photo(name: string): ImageMetadata {
  const file = files[`../images/${name}.jpg`];
  if (!file) throw new Error(`Fotka src/images/${name}.jpg neexistuje.`);
  return file.default;
}
