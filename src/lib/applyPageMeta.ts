import type { PageMeta } from '../types';

function setMetaByName(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`,
  );
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

/**
 * Applies page-specific title, description, canonical, OG, and Twitter tags.
 */
export function applyPageMeta(meta: PageMeta) {
  const image = meta.ogImage ?? 'https://y-gaming.in/og/og-default.png';

  document.title = meta.title;
  setMetaByName('description', meta.description);
  setCanonical(meta.canonicalUrl);

  setMetaByProperty('og:title', meta.title);
  setMetaByProperty('og:description', meta.description);
  setMetaByProperty('og:url', meta.canonicalUrl);
  setMetaByProperty('og:type', 'website');
  setMetaByProperty('og:image', image);
  setMetaByProperty('og:image:width', '1200');
  setMetaByProperty('og:image:height', '630');

  setMetaByName('twitter:card', 'summary_large_image');
  setMetaByName('twitter:title', meta.title);
  setMetaByName('twitter:description', meta.description);
  setMetaByName('twitter:image', image);
}
