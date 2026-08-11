import { useEffect } from 'react';
import { AboutContinue } from '../components/About/AboutContinue';
import { AboutCurrently } from '../components/About/AboutCurrently';
import { AboutHero } from '../components/About/AboutHero';
import { AboutIntro } from '../components/About/AboutIntro';
import { AboutMaking } from '../components/About/AboutMaking';
import { AboutWork } from '../components/About/AboutWork';
import { aboutMeta } from '../data/siteMeta';
import { PageLayout } from '../layouts/PageLayout';
import { applyPageMeta } from '../lib/applyPageMeta';

export function AboutPage() {
  useEffect(() => {
    applyPageMeta(aboutMeta);
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <main id="main" aria-labelledby="about-heading">
        <AboutHero />
        <AboutIntro />
        <AboutWork />
        <AboutMaking />
        <AboutCurrently />
        <AboutContinue />
      </main>
    </PageLayout>
  );
}
