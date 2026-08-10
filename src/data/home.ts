import type { HomeSection } from '../types';

/**
 * Homepage section order after the hero.
 * `who`, `build`, `work`, and `exploring` are implemented; remaining entries are shells.
 */
export const homeSections: HomeSection[] = [
  { id: 'who', title: 'Who I am' },
  { id: 'build', title: 'What I build' },
  { id: 'work', title: 'What I do' },
  { id: 'exploring', title: 'Currently exploring' },
  { id: 'enjoy', title: 'What I enjoy' },
  { id: 'y-gaming', title: 'Y-Gaming' },
  { id: 'artwork', title: 'Artwork' },
  { id: 'connect', title: 'Connect' },
];

export function getHomeSection(id: string): HomeSection {
  const section = homeSections.find((entry) => entry.id === id);
  if (!section) {
    throw new Error(`Unknown home section: ${id}`);
  }
  return section;
}
