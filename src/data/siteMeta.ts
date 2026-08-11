import type { PageMeta } from '../types';
import { about } from './about';
import { workPage } from './workPage';

const SITE_ORIGIN = 'https://y-gaming.in';
const OG_IMAGE = `${SITE_ORIGIN}/og/og-default.png`;

/**
 * Homepage document metadata — mirrors index.html defaults.
 */
export const homeMeta: PageMeta = {
  title: 'Simon — Y-Gaming',
  description:
    "Simon’s personal corner of the internet — projects, work, creator activities, and interests.",
  canonicalUrl: `${SITE_ORIGIN}/`,
  ogImage: OG_IMAGE,
};

export const aboutMeta: PageMeta = about.meta;

export const workMeta: PageMeta = workPage.meta;
