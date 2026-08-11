import type { WorkPageContent } from '../types';
import { featuredProject } from './projects';
import { primaryWork } from './work';

const SITE_ORIGIN = 'https://y-gaming.in';
const OG_IMAGE = `${SITE_ORIGIN}/og/og-default.png`;

if (!primaryWork) {
  throw new Error('Work page requires a primary experience entry in work.ts');
}

if (!featuredProject) {
  throw new Error('Work page requires a featured project in projects.ts');
}

/**
 * Approved Work page content.
 * Facts only from work.ts / projects.ts / established site copy — do not invent.
 */
export const workPage: WorkPageContent = {
  hero: {
    eyebrow: 'Work',
    title: 'Work',
    opening:
      'I work around communities, Discord, and the tools that support them.',
  },
  role: {
    title: 'Community management',
    role: primaryWork.role,
    context: primaryWork.team
      ? `${primaryWork.organization} · ${primaryWork.team}`
      : primaryWork.organization,
    paragraphs: [
      "I'm a Community Manager at BlueStacks, part of the BotLabs team. BotLabs works on Discord bots including Carl-bot and YAGPDB — tools communities actually use.",
      'The work sits around communities, Discord, and the tools people rely on to keep those spaces running.',
    ],
  },
  overlap: {
    title: 'Where it overlaps',
    paragraphs: [
      'Community management and building tend to overlap. Working with communities makes it clearer what people need — and building is how those needs can become tools.',
    ],
  },
  alongside: {
    title: 'Built alongside the work',
    framing:
      'Alongside the professional work, I also build independently. ValorantRank.Chat is one of those projects — not a BlueStacks or BotLabs product.',
    projectId: featuredProject.title,
  },
  closing: {
    line: 'More of the picture.',
    links: [
      { id: 'about', label: 'About', href: '/about' },
      { id: 'connect', label: 'Connect', href: '/#connect' },
    ],
  },
  meta: {
    title: 'Simon — Work',
    description:
      'Community Manager at BlueStacks (BotLabs), working around communities, Discord, and tools including Carl-bot and YAGPDB.',
    canonicalUrl: `${SITE_ORIGIN}/work`,
    ogImage: OG_IMAGE,
  },
};
