import { workPage } from '../../data/workPage';
import { Section } from '../Section/Section';
import styles from './WorkRole.module.css';

export function WorkRole() {
  const { title, role, context, paragraphs } = workPage.role;

  return (
    <Section id="work-role" title={title}>
      <article className={styles.layout}>
        <div className={styles.identity}>
          <h3 className={styles.role}>{role}</h3>
          <p className={styles.context}>{context}</p>
        </div>
        <div className={styles.copy}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Section>
  );
}
