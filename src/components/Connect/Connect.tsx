import {
  connectContent,
  getConnectLinksByGroup,
} from '../../data/connect';
import { getHomeSection } from '../../data/home';
import type { ConnectGroupId, ConnectIdentity, ConnectLink } from '../../types';
import { Section } from '../Section/Section';
import styles from './Connect.module.css';

const IDENTITY_LABEL: Record<ConnectIdentity, string> = {
  'y-gaming': 'Y-Gaming',
  simon: 'Simon',
};

/** Quieter visual weight within Creator — X and Facebook */
const CREATOR_QUIET_IDS = new Set(['x', 'facebook']);

function accessibleName(link: ConnectLink): string {
  return `${link.label} — ${IDENTITY_LABEL[link.identity]}`;
}

function linkClassName(link: ConnectLink): string {
  if (link.group === 'creator' && CREATOR_QUIET_IDS.has(link.id)) {
    return `${styles.link} ${styles.linkQuiet}`;
  }
  if (link.group === 'creator') {
    return `${styles.link} ${styles.linkPrimary}`;
  }
  return styles.link;
}

/**
 * Opens http(s) in a new tab, except WhatsApp (same-window is acceptable)
 * and mailto (same-window).
 */
function linkTargetProps(link: ConnectLink): {
  target?: '_blank';
  rel?: string;
} {
  if (!link.external || link.id === 'whatsapp') {
    return {};
  }
  return { target: '_blank', rel: 'noopener noreferrer' };
}

function ConnectGroup({
  groupId,
  label,
}: {
  groupId: ConnectGroupId;
  label: string;
}) {
  const headingId = `connect-${groupId}-heading`;
  const links = getConnectLinksByGroup(groupId);

  return (
    <div className={styles.group}>
      <h3 id={headingId} className={styles.groupLabel}>
        {label}
      </h3>
      <ul className={styles.list} aria-labelledby={headingId}>
        {links.map((link) => (
          <li key={link.id} className={styles.item}>
            <a
              href={link.url}
              className={linkClassName(link)}
              aria-label={accessibleName(link)}
              {...linkTargetProps(link)}
            >
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Quiet Directory — final doorway into Simon's online presence.
 * Typographic, low-density; not a Linktree or icon grid.
 */
export function Connect() {
  const section = getHomeSection('connect');
  const { supportingLine, groups } = connectContent;
  const creator = groups.find((group) => group.id === 'creator');
  const personal = groups.find((group) => group.id === 'personal');
  const direct = groups.find((group) => group.id === 'direct');

  if (!creator || !personal || !direct) {
    throw new Error('Connect groups incomplete');
  }

  return (
    <Section id={section.id} title={section.title} className={styles.section}>
      <p className={styles.supporting}>{supportingLine}</p>

      <div className={styles.directory}>
        <div className={styles.zonePrimary}>
          <ConnectGroup groupId={creator.id} label={creator.label} />
        </div>

        <div className={styles.zoneSecondary}>
          <ConnectGroup groupId={personal.id} label={personal.label} />
          <ConnectGroup groupId={direct.id} label={direct.label} />
        </div>
      </div>
    </Section>
  );
}
