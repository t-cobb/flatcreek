import React from 'react';

export function Footer({ orgName = 'Flat Creek Watershed Improvement District', tagline = 'A special district in Teton County, Wyoming.' }) {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--ink-900)', color: 'var(--paper-100)', fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-10) var(--space-6) var(--space-6)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 'var(--space-3)', rowGap: 'var(--space-2)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: '#fff', lineHeight: 1 }}>FCWID</div>
            <svg width="70" height="8" viewBox="0 0 150 14" style={{ display: 'block', marginTop: '3px' }}>
              <path d="M0,7 Q18,0 37,7 T75,7 T113,7 T150,7" fill="none" stroke="var(--water-300)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)' }}>{'- ' + orgName}</div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-2) var(--space-6)', marginTop: 'var(--space-6)', paddingTop: 'var(--space-4)', borderTop: '1px solid oklch(35% 0.01 240)', fontSize: 'var(--text-xs)', color: 'var(--ink-300)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--water-300)', flexShrink: 0 }} />
            <span>{tagline}</span>
          </div>
          <div>{'© ' + year + ' ' + orgName + '.'}</div>
        </div>
      </div>
    </footer>
  );
}
