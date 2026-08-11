import { workPage } from '../../data/workPage';
import { Section } from '../Section/Section';
import styles from './WorkOverlap.module.css';

export function WorkOverlap() {
  const { title, paragraphs } = workPage.overlap;

  return (
    <Section id="work-overlap" title={title} className={styles.section}>
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
