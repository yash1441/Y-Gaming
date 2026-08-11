import type { NavigationItem } from '../types';
import { profile } from './profile';

/**
 * Primary navigation destinations.
 * Hash anchors target homepage sections. Path links (e.g. /work) are pages.
 * On non-home routes, resolve hash hrefs with `resolveNavigationHref`.
 */
export const navigationItems: NavigationItem[] = [
  { id: 'home', label: profile.displayName, href: '#top', isBrand: true },
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'build', label: 'Build', href: '#build' },
  { id: 'create', label: 'Create', href: '#y-gaming' },
  { id: 'explore', label: 'Explore', href: '#exploring' },
  { id: 'connect', label: 'Connect', href: '#connect' },
];

function normalizePathname(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/** Keep bare `#section` on `/`; prefix `/` on other routes (`/#section`). Path hrefs pass through. */
export function resolveNavigationHref(href: string, pathname: string): string {
  if (!href.startsWith('#')) {
    return href;
  }

  if (normalizePathname(pathname) === '/') {
    return href;
  }

  return `/${href}`;
}

/** True when a path-based nav item matches the current pathname. */
export function isCurrentNavigationItem(href: string, pathname: string): boolean {
  if (href.startsWith('#')) {
    return false;
  }

  const pathOnly = href.split('#')[0] ?? href;
  return normalizePathname(pathOnly) === normalizePathname(pathname);
}
