import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
  /** Override default section title styles (e.g. brand display headings) */
  titleClassName?: string;
  /** Development shell only — no visual section design yet */
  shell?: boolean;
}

export function Section({
  id,
  title,
  children,
  className,
  titleClassName,
  shell = false,
}: SectionProps) {
  const headingId = `${id}-heading`;
  const baseClass = shell ? styles.shell : styles.section;
  const headingClass = shell
    ? 'sr-only'
    : (titleClassName ?? styles.title);

  return (
    <section
      id={id}
      className={className ? `${baseClass} ${className}` : baseClass}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className={headingClass}>
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
