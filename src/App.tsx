import { useEffect, useState } from 'react';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { aboutMeta, homeMeta } from './data/siteMeta';
import { applyPageMeta } from './lib/applyPageMeta';

function normalizePathname(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

function getPathname(): string {
  return normalizePathname(window.location.pathname);
}

function App() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const onPopState = () => {
      setPathname(getPathname());
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (pathname === '/about') {
      applyPageMeta(aboutMeta);
      return;
    }
    applyPageMeta(homeMeta);
  }, [pathname]);

  if (pathname === '/about') {
    return <AboutPage />;
  }

  return <HomePage />;
}

export default App;
