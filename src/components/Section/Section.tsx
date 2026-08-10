import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  children?: ReactNode;
  /** Development shell only — no visual section design yet */
  shell?: boolean;
}

export function Section({ id, title, children, shell = false }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={shell ? styles.shell : styles.section}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className={shell ? 'sr-only' : styles.title}>
        {title}
      </h2>
      {shell ? (
        <p className={styles.marker} aria-hidden="true">
          {title}
        </p>
      ) : (
        children
      )}
    </section>
  );
}
