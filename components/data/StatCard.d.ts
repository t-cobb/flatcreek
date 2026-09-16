/**
 * A single large metric with a label — used in stat bands to show program impact (acres protected, miles restored).
 */
export interface StatCardProps {
  value: string;
  label: string;
  /** @default 'water' */
  tone?: 'water' | 'land';
}
