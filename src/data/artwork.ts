import type { Artwork } from '../types';

/**
 * Artwork entries for the homepage teaser (and future gallery).
 *
 * Populate only with real assets and known metadata.
 * Required: title, imageSrc, alt
 * Optional: medium, year, note — omit when unknown; do not invent.
 *
 * Homepage renders this section only when the array is non-empty.
 */
export const artwork: Artwork[] = [];
