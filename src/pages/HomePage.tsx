import { useEffect } from 'react';
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

/** After a cross-route visit (`/about` → `/#work`), scroll once sections exist. */
function scrollToHashTarget() {
  const raw = window.location.hash.slice(1);
  if (!raw) {
    return;
  }

  const id = decodeURIComponent(raw);
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView();
  }
}

export function HomePage() {
  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    scrollToHashTarget();
    const frame = window.requestAnimationFrame(scrollToHashTarget);
    const timer = window.setTimeout(scrollToHashTarget, 50);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

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
