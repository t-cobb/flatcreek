/**
 * Small uppercase label used to tag program areas or content categories.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default 'water' */
  tone?: 'water' | 'land' | 'neutral';
}
