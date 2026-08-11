import { useEffect, useRef } from 'react';
import type { NavigationItem } from '../../types';
import styles from './MobileNav.module.css';

interface MobileNavProps {
  id: string;
  isOpen: boolean;
  items: NavigationItem[];
  onNavigate: () => void;
}

export function MobileNav({ id, isOpen, items, onNavigate }: MobileNavProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div id={id} className={styles.panel} hidden={!isOpen}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              ref={index === 0 ? firstLinkRef : undefined}
              className={styles.link}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
