> **Note:** this is the original design-handoff brief, preserved verbatim below.
> It describes the *bundle* it shipped in, so two things it says no longer match
> this repo:
>
> - **Layout.** The bundle nested pages under `ui_kits/website/`. Here they sit at
>   the repo root (`index.html`, `about.html`, …) with project pages in `projects/`,
>   and all relative paths were rewritten to match.
> - **Unused assets.** It lists `thaw-well-4-creek-valley.jpeg` as a safe-to-skip
>   leftover. It is not — it is the Scott Lane hero. Only `thaw-well-5-drilling.jpeg`
>   is genuinely unused, and it is the one file not carried into this repo.
>
> Also note the images here are web re-encodes (max 1800px, JPEG q68). The
> full-resolution originals are not in git.
>
> Mobile responsiveness was added on top of the bundle and is *not* described below —
> see `tokens/responsive.css` and the `fc-*` class hooks in `components/navigation/`.

---

# Handoff: FCWID Website (Flat Creek Watershed Improvement District)

## Overview
A public-facing municipal/special-district website: mission, board/governance, project documentation (thaw wells program, bank restoration, Scott Lane, ongoing projects), a research archive, and contact info. Content and tone are civic/governmental (USWDS-adjacent conventions — official meeting banner, plain factual copy).

## About the Design Files
The files in this bundle are **design references built in HTML** — static prototypes (plain HTML + React-via-Babel-in-browser, no build step) showing the intended look, layout, and copy. They are NOT production code to copy verbatim. The task is to **recreate these designs in the target codebase's real environment** (whatever framework/CMS the team uses — static site generator, React app, WordPress theme, etc.), using that environment's own component/routing conventions. If no environment exists yet, pick whatever's simplest for a small civic-org site with occasional content updates (a static site generator with Markdown content is a good fit, given how text-heavy and update-light this is).

## Fidelity
**High-fidelity.** Colors, type, spacing, and copy are final/near-final (a few content sections are explicitly marked as placeholder — see below). Recreate pixel-close using the values in Design Tokens.

## Explicit placeholders — do not treat as done
- **Bank Restoration, Scott Lane, Ongoing Projects** (`projects/bank-restoration.html`, `projects/scott-lane.html`, `projects/ongoing-projects.html`): body copy is a `PlaceholderNote` (dashed border, italic) — real write-ups from the client ("Sandy") are pending.
- Everything else (Home, About, Thaw Wells, Research Archive, Contact) has real, client-approved copy.

## Site Map / Screens

1. **Home** (`index.html`) — Hero (full-bleed photo, scroll-scrubbed `FlowLine` wave underline), mission statement, "Explore" card grid (About / Projects / Research Archive) with hover lift+arrow, board highlight, older-business/updates section.
2. **About** (`about.html`) — Hero overlay ("Who we are"), mission/why-it-matters copy, board list, meetings info (duplicated contextually — see OfficialBanner below), static `FlowLine` divider.
3. **Projects** (`projects.html`) — Hero overlay ("Recent work"), centered intro (eyebrow "FCWID Projects" + H1 "Explore our projects" + lede), 4-card grid (equal height, hover lift) linking to project subpages, two-column "Mapped across the district" section (context text + map image in a bordered card).
4. **Project subpages** (`projects/thaw-wells.html`, `projects/bank-restoration.html`, `projects/scott-lane.html`, `projects/ongoing-projects.html`) — Shared layout: hero overlay (eyebrow "FCWID Project" + title on photo), lede paragraph, then a two-column layout: sticky left rail (`ProjectRail`, 200px, "← All projects" + the 4 project links, current one bold/primary-colored) + article body (max 700px). Thaw Wells is the only fully written page — long-form history with `<h3>` subsections, bulleted recommendations/funding lists, and 6 photos with captions woven through the narrative at specific story beats (see Assets).
5. **Research Archive** (`research-archive.html`) — Hero overlay ("Technical studies"), intro, archive list content.
6. **Contact** (`contact.html`) — Hero overlay ("Get in touch"), general-inquiries email line, Board Meetings card (schedule + bordered Zoom-details box with meeting ID/passcode + courthouse-minutes footnote below a divider).

## Global Chrome (every page)
- **OfficialBanner** (top strip, dark, small text): meeting schedule line + "Join via Zoom" link. Always the very first element in `<body>`.
- **Header**: FCWID wordmark (Newsreader, bold, with the `FlowLine` SVG wave underline) linking home + nav (About / Projects / Research Archive / Contact). "Projects" has a hover dropdown (fade+slide, ~160ms, closes on a short delay to avoid flicker) listing the 4 project subpages. No standalone "Home" link — logo is home.
- **Footer**: dark (`--ink-900` bg), wordmark + org name + address (P.O. Box 2037, Jackson, WY 83001), contact column (phone/email), bottom strip "A special district in Teton County, Wyoming."

## Components (see `components/` folder in this bundle for full source + `.prompt.md` design notes for each)
- `core/Button.jsx`, `core/Card.jsx`, `core/Badge.jsx`, `core/ProgramCard.jsx`
- `core/FlowLine.jsx` — the wave-underline motif; on Home it scrubs (draws/retracts) with scroll position; everywhere else it renders as a static divider (`static` prop).
- `data/StatCard.jsx`
- `feedback/Alert.jsx`, `feedback/PlaceholderNote.jsx` — dashed-border placeholder box for pending content.
- `forms/Input.jsx`
- `navigation/Header.jsx`, `navigation/Footer.jsx`, `navigation/OfficialBanner.jsx`

Each component's `.prompt.md` describes intended usage/variants; `.d.ts` gives its prop shape.

## Recurring Patterns to Reproduce Exactly

**Hero overlay** (About/Projects/Research/Contact/all project subpages):
```
<section style="position:relative; width:100%; height:42vh; min-height:320px; overflow:hidden">
  <img ... style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover" />
  <div style="position:absolute; inset:0; background:linear-gradient(0deg, oklch(15% 0.02 235 / 0.75) 0%, oklch(16% 0.02 235 / 0.15) 55%, transparent 80%)" />
  <div style="position:absolute; left:0; right:0; bottom:0; padding:var(--space-8); max-width:900px">
    <div style="font-size:var(--text-sm); font-weight:600; color:var(--water-300); text-transform:uppercase; letter-spacing:0.06em">EYEBROW</div>
    <h1 style="color:#fff; font-size:var(--text-5xl)">Title</h1>
  </div>
</section>
```
Home's hero is taller (82vh) with the same gradient/overlay approach, title positioned top instead of bottom.

**Project card grid** (Home "Explore" + Projects tiles) — equal-height cards via CSS grid `repeat(auto-fit, minmax(220–240px, 1fr))` + `align-items:stretch`; each card: border `1px solid var(--color-border)`, `var(--radius-md)`, `var(--shadow-sm)`, `var(--color-surface-raised)` bg. Hover: `translateY(-4px)`, `box-shadow: var(--shadow-md)`, border turns `var(--color-primary)`, and a `→` arrow nudges right 4px — all ~180ms ease.

**Project subpage rail**: `position: sticky; top: var(--space-8); width: 200px`, left border `1px solid var(--color-border)`, `padding-left: var(--space-4)`. Current page link is bold + `var(--color-primary)`; others are `var(--color-text)`. "← All projects" link above the list.

**In-article figures**: `<figure>` + `<img style="border-radius:var(--radius-md)">` + `<figcaption>` in `var(--text-xs)`, `var(--color-text-muted)`. Photos are placed at specific narrative beats (see Thaw Wells page), not decoratively — don't drop them in generically.

**Nav dropdown** (Header "Projects"): absolutely positioned panel below the trigger, `opacity`/`translateY(-6px → 0)` transition ~160ms, small delay (~120ms) on mouseleave before closing so it doesn't flicker when moving the mouse toward the panel.

## Design Tokens

**Colors** (`tokens/colors.css` — all OKLCH):
- Neutrals: `--ink-900` #24242c-ish dark ink, `--ink-700`, `--ink-500`, `--ink-300`; `--paper-0/100/200`; `--line-100/300`
- Primary (water blue, hue 231): `--water-900/700/500/300/100/50`
- Accent (land green, hue 152): `--land-900/700/500/300/100`
- Status: success/warning/danger + `-bg` variants
- Semantic aliases: `--color-bg`, `--color-surface`, `--color-surface-raised` (#fff), `--color-border`, `--color-border-strong`, `--color-text`, `--color-text-muted`, `--color-text-faint`, `--color-primary` (= water-500), `--color-primary-hover` (water-700), `--color-primary-strong` (water-900), `--color-accent` (= land-500), `--color-on-primary`

**Typography** (`tokens/typography.css`):
- Display font: `'Newsreader', Georgia, 'Times New Roman', serif` (headings)
- Body font: `'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` (USWDS-standard governmental typeface)
- Scale: `--text-xs` .75rem → `--text-6xl` 3.75rem (xs/sm/base/lg/xl/2xl/3xl/4xl(2.375rem)/5xl(3rem)/6xl)
- Line-height: tight 1.15 / snug 1.35 / normal 1.6
- Weights: regular 400 / medium 500 / semibold 600 / bold 700

**Spacing** (`tokens/spacing.css`): 4px base scale, `--space-1` (.25rem) through `--space-32` (8rem); `--container-max: 1200px`; `--container-padding: clamp(1.25rem, 4vw, 3rem)`

**Effects** (`tokens/effects.css`): radii sm(2px)/md(4px)/lg(8px)/pill; shadows sm/md/lg (layered oklch black at low opacity); `--ease-standard: cubic-bezier(0.4,0,0.2,1)`; durations fast(120ms)/base(200ms)

## Assets
All in `assets/` — carry over as-is (or re-export at whatever resolution the new stack needs):
- `assets/maps/thaw-well-locations.jpg` — the district map, used on Projects overview and previously on Thaw Wells (now overview-only, per client request).
- `assets/photography/` — hero photos per page (aerial creek shots, ducks, winter ice, ice-removal equipment) plus a set of real site photos supplied by the client and placed into the Thaw Wells narrative at specific points: `thaw-well-2-outfall`, `thaw-well-3-telemetry`, `thaw-well-4-creek-valley` (superseded — see below), `thaw-well-5-drilling-2` (the "better" drilling shot the client sent, replacing `thaw-well-5-drilling`), `thaw-well-5-outfall-flowing` (used as both an in-article photo AND the Thaw Wells hero), `thaw-well-5-wellhead-summer`, `thaw-well-6-site`, `flat-creek-ice-phenomenon` (client-supplied, replaced the generic creek-valley shot in "The Phenomenon" section).
- Two files (`thaw-well-5-drilling.jpeg`, `thaw-well-4-creek-valley.jpeg`) are now unused leftovers from earlier iterations — safe to skip when porting.

## Content Notes
- OfficialBanner meeting line: "Board meetings are the second Thursday of every month, 9 a.m." + Zoom link. Contact page's Board Meetings card additionally shows Meeting ID (883 8734 2641) and Passcode (888921), plus "A complete record of meeting minutes are stored at the Teton county courthouse."
- Contact: P.O. Box 2037, Jackson, WY 83001; email flatcreek@fcwid.org.
- Thaw Wells is the canonical long-form copy — treat its structure/voice (plain, factual, dated, named sources) as the template for writing Bank Restoration / Scott Lane / Ongoing Projects once the client's real copy lands.

## Files in This Bundle
```
ui_kits/website/           — all 6 top-level pages + projects/ subfolder (4 project pages)
components/                 — all reusable components (.jsx source + .prompt.md notes + .d.ts)
tokens/                     — colors.css, typography.css, spacing.css, effects.css, base.css
assets/                     — maps/, photography/
styles.css                  — root stylesheet importing all tokens + global resets/hover rules
```
Open any `ui_kits/website/*.html` directly in a browser to preview (no build step required — React/Babel load from CDN, components fetch and transpile at runtime).
