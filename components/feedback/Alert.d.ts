/**
 * Inline notice for advisories, meeting reminders, and status messages.
 */
export interface AlertProps {
  /** @default 'info' */
  variant?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  children: React.ReactNode;
  /** @default false */
  dismissible?: boolean;
}
