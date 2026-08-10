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
}

export interface Experience {
  organization: string;
  role: string;
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

export interface CreatorLink {
  label: string;
  url: string;
  note?: string;
}

export interface CurrentInterest {
  topic: string;
  note?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  note?: string;
}
