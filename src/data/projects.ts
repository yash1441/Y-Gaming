import type { OtherBuilds, Project } from '../types';

/**
 * Project entries from confirmed facts only.
 * Do not invent metrics, tech stacks, URLs, or descriptions.
 */
export const projects: Project[] = [
  {
    title: 'ValorantRank.Chat',
    description:
      'A free tool built and operated by Simon, used by professional Valorant players on their streams.',
    featured: true,
    stats: [
      {
        value: '11M+',
        label: 'uses',
      },
    ],
    // Live site / case-study URLs: TBD until confirmed
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? null;

/**
 * Placeholder for future project rows.
 * Note uses established facts only — not detailed project cards.
 */
export const otherBuilds: OtherBuilds = {
  heading: "Other things I've built",
  note: 'Discord bots — including work with NetEase, Tencent, and ByteDance — along with websites and tools.',
};
