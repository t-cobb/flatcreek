Header: wordmark/seal + horizontal nav, optional CTA button. Used on every page, typically below OfficialBanner.

```jsx
<Header links={[{label:'About',href:'about.html'},{label:'Projects',href:'projects.html'}]} />
<Header cta="Contact" ctaHref="/contact" />
```

No separate "Home" nav link; clicking the wordmark returns home. The CTA is optional; most pages show nav only, keeping the header plain.
