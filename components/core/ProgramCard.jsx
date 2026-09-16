import React from 'react';

export function ProgramCard({ title, description, tag, href = '#' }) {
  return (
    <a href={href} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        background: 'var(--color-surface-raised)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          height: '120px',
          backgroundImage: 'repeating-linear-gradient(135deg, var(--water-100), var(--water-100) 10px, var(--water-50) 10px, var(--water-50) 20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--water-700)',
        }}>
          program photo
        </div>
        <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', flex: 1 }}>
          {tag ? (
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--color-primary)' }}>{tag}</span>
          ) : null}
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)' }}>{title}</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-normal)' }}>{description}</p>
        </div>
      </div>
    </a>
  );
}
