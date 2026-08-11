import { about } from '../../data/about';
import { Section } from '../Section/Section';
import styles from './AboutWork.module.css';

export function AboutWork() {
  const { title, paragraphs } = about.work;
  const [lead, ...rest] = paragraphs;

  return (
    <Section id="about-work" title={title} className={styles.section}>
      <div className={styles.layout}>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
        <div className={styles.aside}>
          {rest.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className={styles.copy}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
