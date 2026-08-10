import { artwork } from '../../data/artwork';
import { getHomeSection } from '../../data/home';
import type { Artwork as ArtworkEntry } from '../../types';
import { Section } from '../Section/Section';
import styles from './Artwork.module.css';

/** Homepage teaser: one featured piece plus up to two supporting works. */
const TEASER_LIMIT = 3;

function ArtworkFigure({
  entry,
  featured = false,
}: {
  entry: ArtworkEntry;
  featured?: boolean;
}) {
  const meta = [entry.medium, entry.year].filter(Boolean).join(' · ');

  return (
    <figure className={featured ? styles.featured : styles.support}>
      <img
        className={styles.image}
        src={entry.imageSrc}
        alt={entry.alt}
        loading={featured ? 'eager' : 'lazy'}
        decoding="async"
      />
      <figcaption className={styles.caption}>
        <span className={styles.pieceTitle}>{entry.title}</span>
        {meta ? <span className={styles.meta}>{meta}</span> : null}
      </figcaption>
    </figure>
  );
}

/**
 * Personal creative teaser. Renders nothing until real artwork entries exist.
 * Do not invent images, titles, or metadata to fill this section.
 */
export function Artwork() {
  const pieces = artwork.slice(0, TEASER_LIMIT);

  if (pieces.length === 0) {
    return null;
  }

  const section = getHomeSection('artwork');
  const [featured, ...supporting] = pieces;

  return (
    <Section id={section.id} title={section.title} className={styles.section}>
      <div className={styles.gallery}>
        <ArtworkFigure entry={featured} featured />
        {supporting.length > 0 ? (
          <div className={styles.supporting}>
            {supporting.map((entry) => (
              <ArtworkFigure key={entry.imageSrc} entry={entry} />
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
