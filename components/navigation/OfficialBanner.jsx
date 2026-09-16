import React from 'react';

export function OfficialBanner({ text = 'Board meetings are the second Thursday of every month, 9 a.m.', zoomHref = 'https://us02web.zoom.us/j/88387342641?pwd=NW85aHkvYlJERkRxVGtscGhXakMrZz09' }) {
  return (
    <div style={{ background: 'var(--ink-900)', color: 'var(--paper-0)', fontFamily: 'var(--font-body)' }}>
      <div className="fc-banner" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-2)', padding: '0.5rem var(--space-6)', fontSize: 'var(--text-xs)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--water-300)', flexShrink: 0 }} />
        <span>{text}</span>
        <a href={zoomHref} style={{ color: 'var(--water-300)', fontWeight: 600, textDecoration: 'underline' }}>Join via Zoom</a>
      </div>
    </div>
  );
}
