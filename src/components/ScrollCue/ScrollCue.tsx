import styles from './ScrollCue.module.css';

interface ScrollCueProps {
  href: string;
  label: string;
  /** Overrides the accessible name when the visible label includes decorative characters. */
  accessibleName?: string;
}

export function ScrollCue({ href, label, accessibleName }: ScrollCueProps) {
  return (
    <a className={styles.cue} href={href} aria-label={accessibleName ?? label}>
      <span className={styles.label} aria-hidden={accessibleName ? true : undefined}>
        {label}
      </span>
      <span className={styles.arrow} aria-hidden="true">
        ↓
      </span>
    </a>
  );
}
