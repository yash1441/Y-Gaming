import type { AboutContent } from '../types';

const SITE_ORIGIN = 'https://y-gaming.in';
const OG_IMAGE = `${SITE_ORIGIN}/og/og-default.png`;

/**
 * Approved About page content.
 * Do not rewrite, shorten, embellish, or invent biography.
 */
export const about: AboutContent = {
  hero: {
    title: 'About',
    opening:
      "I'm interested in the space between having an idea and figuring out what to do with it.",
  },
  intro: {
    title: 'A little more about me',
    paragraphs: [
      "I'm Simon — a Community Manager, creator, and builder. A lot of what I do sits somewhere around the internet, communities, games, and the things I get curious enough to make.",
      "My work has largely grown around communities and the people in them. I've worked with communities across Discord and gaming, including my work with BlueStacks and BotLabs, and spent a lot of time building and working with tools that make those communities a little better. It's a part of what I enjoy about community management: there's always something to understand, something to improve, or something new to try.",
      "Outside of the work itself, I like making things. Sometimes that means building a website or a Discord bot; sometimes it means starting an idea just to see where it goes. ValorantRank.Chat is one example of that — something I built that grew far beyond what I initially expected. I enjoy that process of taking something from an idea in my head to something that other people can actually use.",
      "Lately, that curiosity has taken me toward 3D printing — learning how to turn digital ideas into physical things. It's another version of the same thing I've always enjoyed: taking something that doesn't exist yet and figuring out how to make it real.",
    ],
  },
  work: {
    title: 'Work, in context',
    paragraphs: [
      'Community management and building things might seem like separate parts of what I do, but they tend to overlap. Working with communities gives me a close look at what people need, what frustrates them, and what makes a tool or experience genuinely useful. Building lets me do something about it.',
      'That combination is probably what keeps me interested. I like being close enough to a problem to understand it, but curious enough to wonder if I can build a better way of solving it.',
    ],
  },
  making: {
    title: 'Making things',
    paragraphs: [
      "I don't really have a single category for the things I build. Discord bots, websites, tools, experiments — the common thread is usually just curiosity. If I have an idea that seems useful, interesting, or simply worth trying, I tend to want to see where it goes.",
    ],
  },
  currently: {
    title: 'Currently',
    topic: '3D Printing',
    description: 'Learning how to turn digital ideas into physical things.',
  },
  closing: {
    line: "There's more to explore.",
    links: [
      { id: 'work', label: 'Work', href: '/work' },
      { id: 'projects', label: 'Projects', href: '/projects' },
      { id: 'explore', label: 'Explore', href: '/explore' },
      { id: 'connect', label: 'Connect', href: '/connect' },
    ],
  },
  meta: {
    title: 'Simon — About',
    description:
      "I'm interested in the space between having an idea and figuring out what to do with it. More about Simon — Community Manager, creator, and builder.",
    canonicalUrl: `${SITE_ORIGIN}/about`,
    ogImage: OG_IMAGE,
  },
};
