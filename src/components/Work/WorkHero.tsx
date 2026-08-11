import { workPage } from '../../data/workPage';
import styles from './WorkHero.module.css';

export function WorkHero() {
  const { eyebrow, title, opening } = workPage.hero;

  return (
    <header id="top" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 id="work-heading" className={styles.title}>
          {title}
        </h1>
        <p className={styles.opening}>{opening}</p>
      </div>
    </header>
  );
}
