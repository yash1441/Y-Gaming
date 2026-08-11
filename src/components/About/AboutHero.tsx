import { about } from '../../data/about';
import styles from './AboutHero.module.css';

export function AboutHero() {
  const { title, opening } = about.hero;

  return (
    <header id="top" className={styles.hero}>
      <div className={styles.inner}>
        <h1 id="about-heading" className={styles.title}>
          {title}
        </h1>
        <p className={styles.opening}>{opening}</p>
      </div>
    </header>
  );
}
