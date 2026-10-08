# FCWID Website — design preview

Live at **https://t-cobb.github.io/flatcreek/**

Static preview of the Flat Creek Watershed Improvement District website, for team
review. See [HANDOFF.md](HANDOFF.md) for the original design brief — design tokens,
recurring layout patterns, content notes, and content notes.

These are **design prototypes, not production code**: each page is plain HTML that
loads React + Babel from a CDN and transpiles the components in `components/` at
runtime. There is no build step.

Thaw Wells is the canonical long-form page; treat its structure and voice as the
template for the other project pages (Camenzind Bank Restoration, Willow Park Access).

## Layout

```
index.html, about.html, projects.html,     top-level pages
  research-archive.html, contact.html
projects/                                  three project subpages
components/                                .jsx source + .prompt.md notes + .d.ts
tokens/                                    colors, typography, spacing, effects,
                                             base, responsive
assets/                                    maps/, photography/, studies/ (PDFs + thumbs)
styles.css                                 imports all tokens + global rules
```

## Notes

- Images are web re-encodes (max 1800px, JPEG q68, 49MB → 16MB). Full-resolution
  originals are not in git.
- `tokens/responsive.css` plus the `fc-*` class hooks carry all the phone/tablet
  adaptation; it was added on top of the handoff bundle, which had none.
- Marked `noindex` via meta tag and `robots.txt` while the site is in team review, so it is
  not indexed by search engines.
- React, ReactDOM and Babel load from jsDelivr at pinned versions with integrity hashes.
  Bump the version and the `integrity` value together if you ever update them.

## Launching on the domain

After the final review, from the repo root:

```bash
node scripts/launch.js https://www.fcwid.org
```

That rewrites the preview URL to the domain in the share-link metadata, removes `noindex`,
adds canonical links, replaces `robots.txt`, writes `sitemap.xml` and `CNAME`. Then commit
and push, and point the domain at GitHub Pages in the registrar's DNS (and set the custom
domain in the repo's Pages settings). Old fcwid.org (Wix) URLs will need redirects.

Also before launch: decide whether the Zoom meeting ID and passcode stay public on the
Contact page, and add photo credits to the About, Projects and Contact header photos if wanted.
