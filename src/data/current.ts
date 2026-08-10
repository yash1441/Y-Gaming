import type { CurrentExploring } from '../types';

/**
 * Living “currently exploring” content.
 * Replace or extend as interests change — no component changes required.
 * Do not invent experience, projects, ownership, or skills.
 */
export const currentExploring: CurrentExploring = {
  featured: {
    title: '3D Printing',
    description: 'Learning how to turn digital ideas into physical things.',
  },
  /** Quieter interests — add up to ~2–3 without inventing content */
  secondary: [],
};
