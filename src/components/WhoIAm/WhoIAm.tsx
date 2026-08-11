import { getHomeSection } from '../../data/home';
import { profile } from '../../data/profile';
import { Section } from '../Section/Section';
import styles from './WhoIAm.module.css';

export function WhoIAm() {
  const section = getHomeSection('who');
  const paragraphs = profile.introduction ?? [];

  return (
    <Section id={section.id} title={section.title}>
      <div className={styles.content}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.copy}>
            {paragraph}
          </p>
        ))}
        <p className={styles.more}>
          <a className={styles.aboutLink} href="/about">
            <span className={styles.aboutLinkLabel}>Read more about me</span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </a>
        </p>
      </div>
    </Section>
  );
}
