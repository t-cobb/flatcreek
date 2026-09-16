import React from 'react';

export function StatCard({ value, label, tone = 'water' }) {
  const colors = { water: 'var(--water-700)', land: 'var(--land-700)' };
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-1)',
      padding: 'var(--space-5)', background: 'var(--color-surface-raised)',
      border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-4xl)', color: colors[tone] }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{label}</div>
    </div>
  );
}
