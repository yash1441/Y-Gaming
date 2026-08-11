import { useEffect } from 'react';
import { WorkAlongside } from '../components/Work/WorkAlongside';
import { WorkContinue } from '../components/Work/WorkContinue';
import { WorkHero } from '../components/Work/WorkHero';
import { WorkOverlap } from '../components/Work/WorkOverlap';
import { WorkRole } from '../components/Work/WorkRole';
import { workMeta } from '../data/siteMeta';
import { PageLayout } from '../layouts/PageLayout';
import { applyPageMeta } from '../lib/applyPageMeta';

export function WorkPage() {
  useEffect(() => {
    applyPageMeta(workMeta);
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <main id="main" aria-labelledby="work-heading">
        <WorkHero />
        <WorkRole />
        <WorkOverlap />
        <WorkAlongside />
        <WorkContinue />
      </main>
    </PageLayout>
  );
}
