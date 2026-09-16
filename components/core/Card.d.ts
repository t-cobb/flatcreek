/**
 * Generic content container — the base surface for grouped information (documents, notices, summaries).
 */
export interface CardProps {
  children: React.ReactNode;
  /** @default true */
  padded?: boolean;
  /** Adds a raised white surface + subtle shadow instead of the flat tinted surface. @default false */
  raised?: boolean;
}
