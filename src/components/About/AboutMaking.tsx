import { about } from '../../data/about';
import { Section } from '../Section/Section';
import styles from './AboutMaking.module.css';

export function AboutMaking() {
  const { title, paragraphs } = about.making;

  return (
    <Section id="about-making" title={title}>
      <div className={styles.content}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className={styles.copy}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
