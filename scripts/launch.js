#!/usr/bin/env node
// One-step switch from the review preview to a live domain.
//
//   node scripts/launch.js https://www.fcwid.org
//
// Does, in order:
//   1. Rewrites the preview URL (https://t-cobb.github.io/flatcreek/) to the new domain
//      in og:url, og:image and the 404 page.
//   2. Removes the noindex tag from every page.
//   3. Adds a canonical link to every page.
//   4. Replaces robots.txt (allow all) and writes sitemap.xml.
//   5. Writes CNAME for GitHub Pages.
//
// Run once, review `git diff`, then commit and push.

const fs = require('fs');
const path = require('path');

const PREVIEW = 'https://t-cobb.github.io/flatcreek/';
const arg = process.argv[2];
if (!arg || !/^https:\/\/[a-z0-9.-]+$/i.test(arg.replace(/\/$/, ''))) {
  console.error('Usage: node scripts/launch.js https://www.example.org');
  process.exit(1);
}
const origin = arg.replace(/\/$/, '');
const base = origin + '/';
const host = origin.replace(/^https:\/\//, '');

const root = path.join(__dirname, '..');
// Only the real site pages: top-level and projects/. Design-system card files under
// components/ are not part of the public site.
const pages = [];
for (const dir of [root, path.join(root, "projects")]) {
  for (const name of fs.readdirSync(dir)) {
    if (name.endsWith(".html")) pages.push(path.join(dir, name));
  }
}

const urls = [];
for (const p of pages) {
  const rel = path.relative(root, p).split(path.sep).join('/');
  let t = fs.readFileSync(p, 'utf8');
  t = t.split(PREVIEW).join(base);
  t = t.replace(/<meta name="robots" content="noindex, nofollow">\n?/g, rel === '404.html' ? '<meta name="robots" content="noindex, nofollow">\n' : '');
  if (rel !== '404.html') {
    const url = base + (rel === 'index.html' ? '' : rel);
    if (!t.includes('rel="canonical"')) {
      t = t.replace(/(<title>[^<]*<\/title>)/, `$1\n<link rel="canonical" href="${url}">`);
    }
    urls.push(url);
  }
  fs.writeFileSync(p, t);
}

fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /components/\nDisallow: /tokens/\n\nSitemap: ${base}sitemap.xml\n`);
fs.writeFileSync(
  path.join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n') +
    `\n</urlset>\n`
);
fs.writeFileSync(path.join(root, 'CNAME'), host + '\n');

console.log(`Launched for ${origin}: ${urls.length} pages, robots.txt, sitemap.xml, CNAME written.`);
