import { Artwork } from '../components/Artwork/Artwork';
import { Connect } from '../components/Connect/Connect';
import { CurrentlyExploring } from '../components/CurrentlyExploring/CurrentlyExploring';
import { Hero } from '../components/Hero/Hero';
import { WhatIBuild } from '../components/WhatIBuild/WhatIBuild';
import { WhatIDo } from '../components/WhatIDo/WhatIDo';
import { WhatIEnjoy } from '../components/WhatIEnjoy/WhatIEnjoy';
import { WhoIAm } from '../components/WhoIAm/WhoIAm';
import { YGaming } from '../components/YGaming/YGaming';
import { PageLayout } from '../layouts/PageLayout';

export function HomePage() {
  return (
    <PageLayout>
      <main id="main">
        <Hero />
        <WhoIAm />
        <WhatIBuild />
        <WhatIDo />
        <CurrentlyExploring />
        <WhatIEnjoy />
        <YGaming />
        <Artwork />
        <Connect />
      </main>
    </PageLayout>
  );
}
