import React from 'react';

export function Badge({ children, tone = 'water' }) {
  const tones = {
    water: { background: 'var(--color-primary-soft)', color: 'var(--water-900)' },
    land: { background: 'var(--land-100)', color: 'var(--land-900)' },
    neutral: { background: 'var(--color-surface)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' },
  };
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '0.25rem 0.6rem',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
    }}>
      {children}
    </span>
  );
}
