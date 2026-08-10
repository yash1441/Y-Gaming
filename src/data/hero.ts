import { profile } from './profile';

/**
 * Approved homepage hero copy.
 * Do not invent additional biography here.
 */
export const hero = {
  name: profile.displayName,
  tagline: 'I like making things.',
  roleLine: 'Community Manager · Creator · Builder',
  scrollCue: {
    label: 'Explore',
    href: '#who',
  },
} as const;
