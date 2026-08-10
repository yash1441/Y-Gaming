import type { Experience } from '../types';

/**
 * Professional experience from confirmed facts only.
 * Do not invent responsibilities, dates, metrics, or titles.
 */
export const work: Experience[] = [
  {
    organization: 'BlueStacks',
    role: 'Community Manager',
    team: 'BotLabs',
    summary:
      'Part of the BotLabs team at BlueStacks, which works on Discord bots including Carl-bot and YAGPDB.',
  },
];

/** Primary professional snapshot for the homepage */
export const primaryWork = work[0] ?? null;
