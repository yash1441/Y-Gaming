import type { NavigationItem } from '../types';
import { profile } from './profile';

/**
 * Primary navigation destinations.
 * Anchors target homepage section shells until routing exists.
 */
export const navigationItems: NavigationItem[] = [
  { id: 'home', label: profile.displayName, href: '#top', isBrand: true },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'build', label: 'Build', href: '#build' },
  { id: 'create', label: 'Create', href: '#y-gaming' },
  { id: 'explore', label: 'Explore', href: '#exploring' },
  { id: 'connect', label: 'Connect', href: '#connect' },
];
