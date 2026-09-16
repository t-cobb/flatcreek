import React, { useState, useRef } from 'react';
import { Button } from '../core/Button.jsx';

export function Header({ orgName = 'Flat Creek Watershed Improvement District', links = [
  { label: 'About', href: 'about.html' },
  { label: 'Projects', href: 'projects.html', subLinks: [
    { label: 'Thaw wells', href: 'projects/thaw-wells.html' },
    { label: 'Bank restoration', href: 'projects/bank-restoration.html' },
    { label: 'Scott Lane', href: 'projects/scott-lane.html' },
    { label: 'Ongoing projects', href: 'projects/ongoing-projects.html' },
  ] },
  { label: 'Research Archive', href: 'research-archive.html' },
  { label: 'Contact', href: 'contact.html' },
], homeHref = 'index.html', cta, ctaHref = '#' }) {
  const [hoverIdx, setHoverIdx] = useState(-1);
  const closeTimer = useRef(null);

  function openMenu(i) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoverIdx(i);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setHoverIdx(-1), 120);
  }

  return (
    <header className="fc-header" style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-8)',
      padding: 'var(--space-4) var(--space-6)', maxWidth: 'var(--container-max)', margin: '0 auto',
      fontFamily: 'var(--font-body)', flexWrap: 'wrap', position: 'relative', zIndex: 30,
    }}>
      <a href={homeHref} aria-label={orgName} style={{ display: 'flex', flexDirection: 'column', color: 'var(--color-text)', textDecoration: 'none' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-2xl)', letterSpacing: '0.01em', lineHeight: 1 }}>FCWID</span>
        <svg width="84" height="9" viewBox="0 0 150 14" style={{ marginTop: '3px' }}>
          <path d="M0,7 Q18,0 37,7 T75,7 T113,7 T150,7" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </a>
      <nav className="fc-nav" style={{ display: 'flex', gap: 'var(--space-6)', marginLeft: 'auto', flexWrap: 'wrap' }}>
        {links.map((l, i) => (
          <div key={l.label} className="fc-nav-item" style={{ position: 'relative' }} onMouseEnter={() => openMenu(i)} onMouseLeave={scheduleClose}>
            <a href={l.href} style={{
              fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)',
              color: hoverIdx === i ? 'var(--color-primary)' : 'var(--color-text)', textDecoration: 'none',
              display: 'inline-block', padding: 'var(--space-2) 0',
            }}>{l.label}</a>
            {l.subLinks ? (
              <div className="fc-nav-dropdown" style={{
                position: 'absolute', top: '100%', left: '50%', transform: hoverIdx === i ? 'translate(-50%, 0)' : 'translate(-50%, -6px)',
                opacity: hoverIdx === i ? 1 : 0, visibility: hoverIdx === i ? 'visible' : 'hidden',
                transition: 'opacity 160ms ease, transform 160ms ease',
                background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)', padding: 'var(--space-2)', minWidth: '180px', marginTop: 'var(--space-1)',
                display: 'flex', flexDirection: 'column', gap: '2px',
              }}>
                {l.subLinks.map(sl => (
                  <a key={sl.label} href={sl.href} className="nav-sublink" style={{
                    fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', textDecoration: 'none',
                    padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-sm)',
                    transition: 'background 120ms ease, color 120ms ease', whiteSpace: 'nowrap',
                  }}>{sl.label}</a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </nav>
      {cta ? <Button size="sm" href={ctaHref}>{cta}</Button> : null}
    </header>
  );
}
