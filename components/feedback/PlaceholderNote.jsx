import React from 'react';

export function PlaceholderNote({ children }) {
  return (
    <div style={{
      border: '1px dashed var(--color-border-strong)', borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-4) var(--space-5)', background: 'var(--color-surface)',
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)',
      lineHeight: 'var(--leading-normal)',
    }}>{children}</div>
  );
}
