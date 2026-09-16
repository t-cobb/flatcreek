import React, { useState } from 'react';

export function Alert({ variant = 'info', title, children, dismissible = false }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  const tones = {
    info: { bg: 'var(--water-50)', border: 'var(--water-300)', title: 'var(--water-900)' },
    success: { bg: 'var(--status-success-bg)', border: 'var(--status-success)', title: 'var(--status-success)' },
    warning: { bg: 'var(--status-warning-bg)', border: 'var(--status-warning)', title: 'var(--status-warning)' },
    danger: { bg: 'var(--status-danger-bg)', border: 'var(--status-danger)', title: 'var(--status-danger)' },
  };
  const t = tones[variant];
  return (
    <div style={{
      display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start',
      background: t.bg, borderLeft: '3px solid ' + t.border,
      borderRadius: 'var(--radius-sm)', padding: 'var(--space-4) var(--space-5)',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ flex: 1 }}>
        {title ? <div style={{ fontWeight: 'var(--weight-semibold)', color: t.title, marginBottom: '2px' }}>{title}</div> : null}
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>{children}</div>
      </div>
      {dismissible ? (
        <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1 }}>&times;</button>
      ) : null}
    </div>
  );
}
