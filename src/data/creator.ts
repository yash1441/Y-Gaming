import type { CreatorBrand } from '../types';

/**
 * Y-Gaming creator brand.
 * Platform URLs are omitted until confirmed — do not invent handles or links.
 * Discord belongs in Connect, not here.
 */
export const creatorBrand: CreatorBrand = {
  name: 'Y-Gaming',
  tagline: 'Gaming, streamed and shared.',
  description:
    "Y-Gaming is my streaming and content brand — where I play, create, and share what I'm into.",
  attribution: 'Created by Simon.',
  platforms: [
    {
      id: 'youtube',
      label: 'YouTube',
      activity: 'Livestreams & videos',
    },
    {
      id: 'twitch',
      label: 'Twitch',
      activity: 'Livestreams',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      activity: 'Reels',
    },
  ],
};
