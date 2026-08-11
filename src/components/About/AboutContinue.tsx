import { about } from '../../data/about';
import { Section } from '../Section/Section';
import styles from './AboutContinue.module.css';

export function AboutContinue() {
  const { line, links } = about.closing;

  return (
    <Section id="about-continue" title="Continue" className={styles.section}>
      <p className={styles.line}>{line}</p>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.id} className={styles.item}>
            <a className={styles.link} href={link.href}>
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
