# FCWID Website — design preview

Live at **https://t-cobb.github.io/flatcreek/**

Static preview of the Flat Creek Watershed Improvement District website, for team
review. See [HANDOFF.md](HANDOFF.md) for the original design brief — design tokens,
recurring layout patterns, content notes, and which pages are still placeholder.

These are **design prototypes, not production code**: each page is plain HTML that
loads React + Babel from a CDN and transpiles the components in `components/` at
runtime. There is no build step.

Bank Restoration, Scott Lane, and Ongoing Projects are intentionally placeholders —
real copy is pending from the client. Thaw Wells is the canonical long-form page;
treat its structure and voice as the template for the other three.

## Layout

```
index.html, about.html, projects.html,     top-level pages
  research-archive.html, contact.html
projects/                                  four project subpages
components/                                .jsx source + .prompt.md notes + .d.ts
tokens/                                    colors, typography, spacing, effects,
                                             base, responsive
assets/                                    maps/, photography/
styles.css                                 imports all tokens + global rules
```

## Notes

- Images are web re-encodes (max 1800px, JPEG q68, 49MB → 16MB). Full-resolution
  originals are not in git.
- `tokens/responsive.css` plus the `fc-*` class hooks carry all the phone/tablet
  adaptation; it was added on top of the handoff bundle, which had none.
- Marked `noindex` via meta tag and `robots.txt` — not intended for search engines.
