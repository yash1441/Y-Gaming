import { creatorBrand } from '../../data/creator';
import { getHomeSection } from '../../data/home';
import type { CreatorPlatform } from '../../types';
import { Section } from '../Section/Section';
import styles from './YGaming.module.css';

function platformAccessibleName(platform: CreatorPlatform): string {
  const activity = platform.activity.replace(/\s*&\s*/g, ' and ');
  return `${platform.label} — ${activity}`;
}

function PlatformDestination({ platform }: { platform: CreatorPlatform }) {
  const label = (
    <>
      <span className={styles.platformLabel}>{platform.label}</span>
      <span className={styles.platformActivity}>{platform.activity}</span>
    </>
  );

  if (platform.url) {
    return (
      <a
        href={platform.url}
        className={styles.destinationLink}
        aria-label={platformAccessibleName(platform)}
      >
        {label}
      </a>
    );
  }

  return <div className={styles.destination}>{label}</div>;
}

export function YGaming() {
  const section = getHomeSection('y-gaming');
  const { name, tagline, description, attribution, platforms } = creatorBrand;

  return (
    <Section
      id={section.id}
      title={name}
      titleClassName={styles.brand}
      className={styles.section}
    >
      <div className={styles.stack}>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.attribution}>{attribution}</p>
      </div>

      <ul className={styles.strip} aria-label="Y-Gaming destinations">
        {platforms.map((platform) => (
          <li key={platform.id} className={styles.stripItem}>
            <PlatformDestination platform={platform} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
