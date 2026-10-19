// The photos of the gallery by the stage of the life cycle, file names in src/images without .jpg.
const numbered = (prefix: string, numbers: number[]) =>
  numbers.map((n) => `attacus-imperator-${prefix}-${String(n).padStart(2, '0')}`);

export interface GalleryGroup {
  id: string;
  title: string;
  /** the alt text of every photo of the group */
  alt: string;
  photos: string[];
}

export const gallery: GalleryGroup[] = [
  {
    id: 'vajicka',
    title: 'Vajíčka',
    alt: 'Vajíčka Attacus Imperator',
    photos: ['attacus-imperator-eggs-1', 'attacus-imperator-eggs-2'],
  },
  {
    id: 'housenky',
    title: 'Housenky',
    alt: 'Housenka Attacus Imperator',
    photos: numbered('caterpillar', Array.from({ length: 26 }, (_, i) => i + 1)),
  },
  {
    id: 'lihnuti',
    title: 'Líhnutí',
    alt: 'Motýl Attacus Imperator čerstvě vylíhnutý z kukly',
    photos: numbered('butterfly', [1, 2]),
  },
  {
    id: 'motyli',
    title: 'Motýli',
    alt: 'Motýl Attacus Imperator',
    photos: [
      'attacus-imperator-male',
      'attacus-imperator-female',
      ...numbered('butterfly', [3, 4, 5, 6, 7, 11, 12, 13, 14, 21, 22, 23, 24, 25, 26, 27, 31]),
    ],
  },
];
