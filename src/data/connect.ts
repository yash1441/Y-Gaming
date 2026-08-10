import type { ConnectContent, ConnectGroupId, ConnectLink } from '../types';

/**
 * Quiet Directory — Connect section destinations.
 * Order within each group defines display order. Do not invent URLs.
 */
export const connectContent: ConnectContent = {
  supportingLine: 'Find me elsewhere.',
  groups: [
    { id: 'creator', label: 'Creator' },
    { id: 'personal', label: 'Personal & Professional' },
    { id: 'direct', label: 'Direct' },
  ],
  links: [
    {
      id: 'youtube',
      label: 'YouTube',
      url: 'https://youtube.com/@ygaming',
      group: 'creator',
      identity: 'y-gaming',
      external: true,
    },
    {
      id: 'twitch',
      label: 'Twitch',
      url: 'https://twitch.tv/ygamingplay',
      group: 'creator',
      identity: 'y-gaming',
      external: true,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://instagram.com/yash1441',
      group: 'creator',
      identity: 'simon',
      external: true,
    },
    {
      id: 'x',
      label: 'X',
      url: 'https://twitter.com/ygamingplay',
      group: 'creator',
      identity: 'y-gaming',
      external: true,
    },
    {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://facebook.com/ygaming.play',
      group: 'creator',
      identity: 'y-gaming',
      external: true,
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/yash1441',
      group: 'personal',
      identity: 'simon',
      external: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/yash1441',
      group: 'personal',
      identity: 'simon',
      external: true,
    },
    {
      id: 'discord',
      label: 'Discord',
      url: 'https://discord.gg/AJBfjfr',
      group: 'personal',
      identity: 'simon',
      external: true,
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:yash1441@yahoo.com',
      group: 'direct',
      identity: 'simon',
      external: false,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      url: 'https://wa.me/+919878444718',
      group: 'direct',
      identity: 'simon',
      external: true,
    },
  ],
};

export function getConnectLinksByGroup(groupId: ConnectGroupId): ConnectLink[] {
  return connectContent.links.filter((link) => link.group === groupId);
}
