import React from 'react';

/**
 * Primary call-to-action control used across the site (Donate, Apply, Learn more).
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}
