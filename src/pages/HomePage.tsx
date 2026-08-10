import { CurrentlyExploring } from '../components/CurrentlyExploring/CurrentlyExploring';
import { Hero } from '../components/Hero/Hero';
import { Section } from '../components/Section/Section';
import { WhatIBuild } from '../components/WhatIBuild/WhatIBuild';
import { WhatIDo } from '../components/WhatIDo/WhatIDo';
import { WhoIAm } from '../components/WhoIAm/WhoIAm';
import { homeSections } from '../data/home';
import { PageLayout } from '../layouts/PageLayout';

const implementedSectionIds = new Set(['who', 'work', 'build', 'exploring']);

export function HomePage() {
  const remainingSections = homeSections.filter(
    (section) => !implementedSectionIds.has(section.id),
  );

  return (
    <PageLayout>
      <main id="main">
        <Hero />
        <WhoIAm />
        <WhatIBuild />
        <WhatIDo />
        <CurrentlyExploring />
        {remainingSections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            shell
          />
        ))}
      </main>
    </PageLayout>
  );
}
