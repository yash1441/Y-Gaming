/**
 * GitHub Pages SPA fallback
 *
 * GitHub Pages is static hosting: a direct request to /about (or any
 * client-side route) has no matching file, so Pages serves 404.html.
 * Copying the Vite index.html to 404.html lets the React app boot with
 * the original URL intact (pathname stays /about), which is how clean
 * URLs work without a server-side rewrite.
 *
 * This is deliberate for y-gaming.in client-side pathname routing.
 * Future routes (/work, /projects, /explore, /connect) use the same
 * fallback — no per-route HTML files required.
 */
import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = resolve(process.cwd(), 'dist');
const indexHtml = resolve(distDir, 'index.html');
const fallbackHtml = resolve(distDir, '404.html');

if (!existsSync(indexHtml)) {
  console.error('spa-github-pages-fallback: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

copyFileSync(indexHtml, fallbackHtml);
console.log('spa-github-pages-fallback: wrote dist/404.html (GitHub Pages SPA fallback)');
