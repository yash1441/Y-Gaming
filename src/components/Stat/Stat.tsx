import type { ProjectStat } from '../../types';
import styles from './Stat.module.css';

interface StatProps {
  stat: ProjectStat;
  /** Larger display for featured project metrics */
  featured?: boolean;
  /** Right-align the stack on wider layouts (featured compositions) */
  alignEnd?: boolean;
}

export function Stat({
  stat,
  featured = false,
  alignEnd = false,
}: StatProps) {
  const classes = [
    featured ? styles.featured : styles.stat,
    alignEnd ? styles.featuredAlignEnd : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <p className={classes}>
      <span className={styles.value}>{stat.value}</span>
      <span className={styles.label}>{stat.label}</span>
    </p>
  );
}
