import { getHomeSection } from '../../data/home';
import { primaryWork } from '../../data/work';
import { Section } from '../Section/Section';
import styles from './WhatIDo.module.css';

export function WhatIDo() {
  if (!primaryWork) {
    return null;
  }

  const section = getHomeSection('work');
  const { role, organization, team, summary } = primaryWork;
  const context = team ? `${organization} · ${team}` : organization;

  return (
    <Section id={section.id} title={section.title}>
      <article className={styles.snapshot}>
        <div className={styles.roleBlock}>
          <h3 className={styles.role}>{role}</h3>
          <p className={styles.context}>{context}</p>
        </div>
        {summary ? <p className={styles.summary}>{summary}</p> : null}
      </article>
    </Section>
  );
}
