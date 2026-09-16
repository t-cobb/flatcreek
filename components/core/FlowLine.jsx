import React, { useRef, useEffect } from 'react';

export function FlowLine({ tone = 'water', static: isStatic = false }) {
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const lengthRef = useRef(0);

  useEffect(() => {
    if (isStatic) return;
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg) return;
    lengthRef.current = path.getTotalLength();
    path.style.strokeDasharray = String(lengthRef.current);

    let ticking = false;
    function update() {
      ticking = false;
      const rect = svg.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const start = vh; // element's top just entering viewport from below
      const end = vh * 0.35; // fully drawn once scrolled this far up
      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      path.style.strokeDashoffset = String(lengthRef.current * (1 - progress));
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isStatic]);

  const color = tone === 'land' ? 'var(--land-500)' : 'var(--color-primary)';
  return (
    <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
      <svg ref={svgRef} width="100%" height="16" viewBox="0 0 640 16" preserveAspectRatio="none" style={{ display: 'block' }}>
        <path
          ref={pathRef}
          d="M0,8 Q40,0 80,8 T160,8 T240,8 T320,8 T400,8 T480,8 T560,8 T640,8"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
