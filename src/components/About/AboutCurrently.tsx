import { about } from '../../data/about';
import { Section } from '../Section/Section';
import styles from './AboutCurrently.module.css';

export function AboutCurrently() {
  const { title, topic, description } = about.currently;

  return (
    <Section id="about-currently" title={title} className={styles.section}>
      <article className={styles.featured}>
        <h3 className={styles.topic}>{topic}</h3>
        <p className={styles.description}>{description}</p>
      </article>
    </Section>
  );
}
