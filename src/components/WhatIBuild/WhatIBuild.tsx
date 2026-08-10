import { getHomeSection } from '../../data/home';
import { featuredProject, otherBuilds } from '../../data/projects';
import { ProjectFeature } from '../ProjectFeature/ProjectFeature';
import { Section } from '../Section/Section';
import styles from './WhatIBuild.module.css';

export function WhatIBuild() {
  const section = getHomeSection('build');

  return (
    <Section id={section.id} title={section.title}>
      <div className={styles.content}>
        {featuredProject ? <ProjectFeature project={featuredProject} /> : null}

        <aside className={styles.other} aria-labelledby="other-builds-heading">
          <h3 id="other-builds-heading" className={styles.otherHeading}>
            {otherBuilds.heading}
          </h3>
          {otherBuilds.note ? (
            <p className={styles.otherNote}>{otherBuilds.note}</p>
          ) : null}
        </aside>
      </div>
    </Section>
  );
}
