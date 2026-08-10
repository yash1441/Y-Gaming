import type { Project } from '../../types';
import { Stat } from '../Stat/Stat';
import styles from './ProjectFeature.module.css';

interface ProjectFeatureProps {
  project: Project;
}

export function ProjectFeature({ project }: ProjectFeatureProps) {
  const primaryStat = project.stats?.[0];
  const website = project.links?.website;

  return (
    <article className={styles.feature}>
      <p className={styles.eyebrow}>Featured project</p>

      <div className={styles.layout}>
        <div className={styles.copy}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          {website ? (
            <a className={styles.cta} href={website}>
              Explore project
              <span aria-hidden="true"> →</span>
            </a>
          ) : null}
        </div>

        {primaryStat ? (
          <div className={styles.stat}>
            <Stat stat={primaryStat} featured alignEnd />
          </div>
        ) : null}
      </div>
    </article>
  );
}
