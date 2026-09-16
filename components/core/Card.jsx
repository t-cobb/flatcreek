import React from 'react';

export function Card({ children, padded = true, raised = false }) {
  return (
    <div style={{
      background: raised ? 'var(--color-surface-raised)' : 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: raised ? 'var(--shadow-sm)' : 'none',
      padding: padded ? 'var(--space-6)' : 0,
      overflow: 'hidden',
    }}>
      {children}
    </div>
  );
}
