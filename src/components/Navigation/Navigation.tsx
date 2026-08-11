import { useEffect, useId, useRef, useState } from 'react';
import { navigationItems, resolveNavigationHref } from '../../data/navigation';
import { MobileNav } from '../MobileNav/MobileNav';
import styles from './Navigation.module.css';

function getVisibleFocusable(root: HTMLElement): HTMLElement[] {
  return Array.from(
    root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
  ).filter((element) => {
    if (element.closest('[hidden]')) {
      return false;
    }

    return element.getClientRects().length > 0;
  });
}

function getPathname(): string {
  const trimmed = window.location.pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState(getPathname);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const brandItem = navigationItems.find((item) => item.isBrand);
  const linkItems = navigationItems.filter((item) => !item.isBrand).map((item) => ({
    ...item,
    href: resolveNavigationHref(item.href, pathname),
  }));
  const brandHref = brandItem
    ? resolveNavigationHref(brandItem.href, pathname)
    : undefined;

  useEffect(() => {
    const onPopState = () => {
      setPathname(getPathname());
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !navRef.current) {
        return;
      }

      const focusable = getVisibleFocusable(navRef.current);
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || !navRef.current.contains(active)) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (active === last || !navRef.current.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    const onPrimaryNavigate = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      // Close after homepage anchors (#work) and cross-route home anchors (/#work).
      const anchor = target.closest('a[href^="#"], a[href^="/#"]');
      if (!anchor) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onPrimaryNavigate);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onPrimaryNavigate);
    };
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const onViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener('change', onViewportChange);
    return () => mediaQuery.removeEventListener('change', onViewportChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className={styles.header}>
      <nav ref={navRef} className={styles.nav} aria-label="Primary">
        <div className={styles.inner}>
          {brandItem && brandHref ? (
            <a className={styles.brand} href={brandHref}>
              {brandItem.label}
            </a>
          ) : null}

          <ul className={styles.desktopList}>
            {linkItems.map((item) => (
              <li key={item.id}>
                <a className={styles.link} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span className={isOpen ? styles.barOpenTop : styles.bar} />
              <span className={isOpen ? styles.barOpenMid : styles.bar} />
              <span className={isOpen ? styles.barOpenBottom : styles.bar} />
            </span>
          </button>
        </div>

        <MobileNav
          id={menuId}
          isOpen={isOpen}
          items={linkItems}
          onNavigate={closeMenu}
        />
      </nav>
    </header>
  );
}
