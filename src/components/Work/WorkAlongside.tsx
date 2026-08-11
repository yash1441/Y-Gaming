import { featuredProject } from '../../data/projects';
import { workPage } from '../../data/workPage';
import { Section } from '../Section/Section';
import { Stat } from '../Stat/Stat';
import styles from './WorkAlongside.module.css';

export function WorkAlongside() {
  const { title, framing } = workPage.alongside;
  const project = featuredProject;

  if (!project) {
    return null;
  }

  const primaryStat = project.stats?.[0];

  return (
    <Section id="work-alongside" title={title} className={styles.section}>
      <p className={styles.framing}>{framing}</p>

      <article className={styles.feature}>
        <div className={styles.copy}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>
        {primaryStat ? (
          <div className={styles.stat}>
            <Stat stat={primaryStat} alignEnd />
          </div>
        ) : null}
      </article>
    </Section>
  );
}
