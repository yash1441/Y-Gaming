import { about } from '../../data/about';
import { Section } from '../Section/Section';
import styles from './AboutIntro.module.css';

export function AboutIntro() {
  const { title, paragraphs } = about.intro;

  return (
    <Section id="about-intro" title={title}>
      <div className={styles.column}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className={styles.copy}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
