import type { NavigationItem } from '../types';
import { profile } from './profile';

/**
 * Primary navigation destinations.
 * Anchors target homepage section shells. On non-home routes, resolve
 * with `resolveNavigationHref` so hashes point at `/#…` on the homepage.
 */
export const navigationItems: NavigationItem[] = [
  { id: 'home', label: profile.displayName, href: '#top', isBrand: true },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'build', label: 'Build', href: '#build' },
  { id: 'create', label: 'Create', href: '#y-gaming' },
  { id: 'explore', label: 'Explore', href: '#exploring' },
  { id: 'connect', label: 'Connect', href: '#connect' },
];

function normalizePathname(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/** Keep bare `#section` on `/`; prefix `/` on other routes (`/#section`). */
export function resolveNavigationHref(href: string, pathname: string): string {
  if (!href.startsWith('#')) {
    return href;
  }

  if (normalizePathname(pathname) === '/') {
    return href;
  }

  return `/${href}`;
}
