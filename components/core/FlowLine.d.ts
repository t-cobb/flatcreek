/**
 * The brand's signature flowline: the same curve used in the FCWID wordmark, stretched full-width as a section divider.
 * A solid line whose draw progress is scrubbed directly by scroll position: rolls out as it enters the viewport scrolling down, retracts scrolling back up.
 */
export interface FlowLineProps {
  /** @default 'water' */
  tone?: 'water' | 'land';
  /** Skips scroll tracking and renders a plain solid line. Use everywhere except the homepage. @default false */
  static?: boolean;
}
