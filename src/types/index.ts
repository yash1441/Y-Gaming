/**
 * Content types for structured site data.
 * See docs/CONTENT_GUIDE.md and docs/TECHNICAL_ARCHITECTURE.md.
 * Do not invent personal facts when filling these shapes.
 */

export interface Profile {
  displayName: string;
  formalName: string;
  tagline?: string;
  shortBio?: string;
  /** Short personal introduction paragraphs for homepage "Who I am" */
  introduction?: string[];
}

/** Restrained note for secondary builds when full project entries do not exist yet */
export interface OtherBuilds {
  heading: string;
  note?: string;
}

export interface Experience {
  organization: string;
  role: string;
  /** Team or group within the organization (e.g. BotLabs) */
  team?: string;
  summary?: string;
  startDate?: string;
  endDate?: string;
  links?: {
    website?: string;
  };
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  featured?: boolean;
  stats?: ProjectStat[];
  links?: {
    website?: string;
    github?: string;
  };
  status?: string;
}

export interface Interest {
  name: string;
  note?: string;
}

export interface Artwork {
  title: string;
  imageSrc: string;
  alt: string;
  medium?: string;
  year?: string;
  note?: string;
}

/** A Y-Gaming platform destination. Omit `url` until a confirmed link exists. */
export interface CreatorPlatform {
  id: string;
  label: string;
  activity: string;
  url?: string;
}

/** Y-Gaming creator brand — distinct from Simon's personal identity */
export interface CreatorBrand {
  name: string;
  tagline: string;
  description: string;
  attribution: string;
  platforms: CreatorPlatform[];
}

/** A single living “currently exploring” interest */
export interface CurrentInterest {
  title: string;
  description?: string;
}

/**
 * Homepage “Currently exploring” content.
 * Featured carries visual weight; secondary holds quieter future interests.
 */
export interface CurrentExploring {
  featured: CurrentInterest;
  secondary: CurrentInterest[];
}

export interface SocialLink {
  platform: string;
  url: string;
  note?: string;
}

/** Connect section group identifiers — Quiet Directory */
export type ConnectGroupId = 'creator' | 'personal' | 'direct';

/** Whose presence the destination represents */
export type ConnectIdentity = 'y-gaming' | 'simon';

export interface ConnectLink {
  id: string;
  label: string;
  url: string;
  group: ConnectGroupId;
  identity: ConnectIdentity;
  /** true for http(s); false for mailto */
  external: boolean;
}

export interface ConnectGroup {
  id: ConnectGroupId;
  label: string;
}

export interface ConnectContent {
  supportingLine: string;
  groups: ConnectGroup[];
  /** Display order within each group follows array order */
  links: ConnectLink[];
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  /** Brand/home link shown as site identity in the nav */
  isBrand?: boolean;
  /** When true, renders aria-current="page" on the nav link */
  current?: boolean;
}

export interface HomeSection {
  id: string;
  title: string;
}

/** Page metadata for document head (title, description, social) */
export interface PageMeta {
  title: string;
  description: string;
  /** Absolute canonical URL */
  canonicalUrl: string;
  ogImage?: string;
}

/** Continue / closing link on the About page */
export interface AboutContinueLink {
  id: string;
  label: string;
  href: string;
}

/** Structured About page content — presentation stays in components */
export interface AboutContent {
  hero: {
    title: string;
    opening: string;
  };
  intro: {
    title: string;
    paragraphs: string[];
  };
  work: {
    title: string;
    paragraphs: string[];
  };
  making: {
    title: string;
    paragraphs: string[];
  };
  currently: {
    title: string;
    topic: string;
    description: string;
  };
  closing: {
    line: string;
    links: AboutContinueLink[];
  };
  meta: PageMeta;
}

/** Continue / closing link on the Work page */
export interface WorkContinueLink {
  id: string;
  label: string;
  href: string;
}

/** Structured Work page content — presentation stays in components */
export interface WorkPageContent {
  hero: {
    eyebrow: string;
    title: string;
    opening: string;
  };
  role: {
    title: string;
    role: string;
    context: string;
    paragraphs: string[];
  };
  overlap: {
    title: string;
    paragraphs: string[];
  };
  alongside: {
    title: string;
    framing: string;
    projectId: string;
  };
  closing: {
    line: string;
    links: WorkContinueLink[];
  };
  meta: PageMeta;
}
