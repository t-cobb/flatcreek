import React from 'react';

export function Footer({ orgName = 'Flat Creek Watershed Improvement District', address = 'P.O. Box 2037, Jackson, WY 83001', phone, email = 'flatcreek@fcwid.org' }) {
  return (
    <footer style={{ background: 'var(--ink-900)', color: 'var(--paper-100)', fontFamily: 'var(--font-body)' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-12) var(--space-6)',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-8)',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: '#fff', lineHeight: 1 }}>FCWID</div>
          <svg width="70" height="8" viewBox="0 0 150 14" style={{ marginTop: '3px', marginBottom: 'var(--space-3)' }}>
            <path d="M0,7 Q18,0 37,7 T75,7 T113,7 T150,7" fill="none" stroke="var(--water-300)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', marginBottom: 'var(--space-3)' }}>{orgName}</div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-300)', lineHeight: 'var(--leading-normal)' }}>{address}</div>
        </div>
        {(phone || email) ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
            <div style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>Contact</div>
            {phone ? <a href={'tel:' + phone} style={{ color: 'var(--paper-100)' }}>{phone}</a> : null}
            {email ? <a href={'mailto:' + email} style={{ color: 'var(--paper-100)' }}>{email}</a> : null}
          </div>
        ) : null}
      </div>
      <div style={{ borderTop: '1px solid oklch(35% 0.01 240)', padding: 'var(--space-4) var(--space-6)', textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--ink-300)' }}>
        A special district in Teton County, Wyoming.
      </div>
    </footer>
  );
}
