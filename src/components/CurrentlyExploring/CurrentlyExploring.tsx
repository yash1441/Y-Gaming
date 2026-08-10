import { currentExploring } from '../../data/current';
import { getHomeSection } from '../../data/home';
import { Section } from '../Section/Section';
import styles from './CurrentlyExploring.module.css';

export function CurrentlyExploring() {
  const section = getHomeSection('exploring');
  const { featured, secondary } = currentExploring;
  const hasSecondary = secondary.length > 0;

  return (
    <Section id={section.id} title={section.title}>
      <div className={styles.content}>
        <article className={styles.featured}>
          <h3 className={styles.title}>{featured.title}</h3>
          {featured.description ? (
            <p className={styles.description}>{featured.description}</p>
          ) : null}
        </article>

        {hasSecondary ? (
          <ul className={styles.secondary} aria-label="Other current interests">
            {secondary.map((interest) => (
              <li key={interest.title} className={styles.secondaryItem}>
                <h4 className={styles.secondaryTitle}>{interest.title}</h4>
                {interest.description ? (
                  <p className={styles.secondaryDescription}>
                    {interest.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Section>
  );
}
