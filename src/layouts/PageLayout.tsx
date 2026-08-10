import type { ReactNode } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navigation } from '../components/Navigation/Navigation';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={styles.page}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
