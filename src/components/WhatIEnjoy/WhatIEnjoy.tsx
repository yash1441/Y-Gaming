import { getHomeSection } from '../../data/home';
import { interests } from '../../data/interests';
import { Section } from '../Section/Section';
import styles from './WhatIEnjoy.module.css';

export function WhatIEnjoy() {
  const section = getHomeSection('enjoy');

  return (
    <Section
      id={section.id}
      title={section.title}
      className={styles.section}
    >
      <ul className={styles.constellation} aria-label="Things I enjoy">
        {interests.map((interest) => (
          <li key={interest.name} className={styles.item}>
            <span className={styles.name}>{interest.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
