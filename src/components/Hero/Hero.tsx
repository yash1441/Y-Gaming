import { hero } from '../../data/hero';
import { ScrollCue } from '../ScrollCue/ScrollCue';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-name">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="hero-name" className={styles.name}>
            {hero.name}
          </h1>
          <p className={styles.tagline}>{hero.tagline}</p>
          <p className={styles.role}>{hero.roleLine}</p>
        </div>

        <ScrollCue
          href={hero.scrollCue.href}
          label={hero.scrollCue.label}
          accessibleName="Explore, scroll to Who I Am"
        />
      </div>
    </section>
  );
}
