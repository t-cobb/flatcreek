/**
 * Primary site header: wordmark + seal, nav links, optional CTA button. Pair with OfficialBanner above it.
 */
export interface HeaderProps {
  orgName?: string;
  links?: { label: string; href: string }[];
  /** Where the wordmark links to. @default 'index.html' */
  homeHref?: string;
  /** Omit for no button (most pages don't need one). */
  cta?: string;
  ctaHref?: string;
}
