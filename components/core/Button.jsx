import React, { useState } from 'react';

export function Button({ children, variant = 'primary', size = 'md', href, onClick, type = 'button', disabled = false }) {
  const [hover, setHover] = useState(false);

  const sizes = {
    sm: { padding: '0.4rem 0.9rem', fontSize: 'var(--text-sm)' },
    md: { padding: '0.65rem 1.4rem', fontSize: 'var(--text-base)' },
    lg: { padding: '0.85rem 1.8rem', fontSize: 'var(--text-lg)' },
  };

  const variants = {
    primary: {
      background: hover ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: '1px solid ' + (hover ? 'var(--color-primary-hover)' : 'var(--color-primary)'),
    },
    secondary: {
      background: hover ? 'var(--color-primary-soft)' : 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-primary)',
    },
    ghost: {
      background: hover ? 'var(--color-surface)' : 'transparent',
      color: 'var(--color-text)',
      border: '1px solid transparent',
    },
    accent: {
      background: hover ? 'var(--color-accent-hover)' : 'var(--color-accent)',
      color: 'var(--color-on-primary)',
      border: '1px solid ' + (hover ? 'var(--color-accent-hover)' : 'var(--color-accent)'),
    },
  };

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
    ...sizes[size],
    ...variants[variant],
  };

  const Tag = href && !disabled ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      type={Tag === 'button' ? type : undefined}
      disabled={Tag === 'button' ? disabled : undefined}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Tag>
  );
}
