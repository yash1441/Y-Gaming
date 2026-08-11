import { workPage } from '../../data/workPage';
import { Section } from '../Section/Section';
import styles from './WorkContinue.module.css';

export function WorkContinue() {
  const { line, links } = workPage.closing;

  return (
    <Section id="work-continue" title="Continue" className={styles.section}>
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
