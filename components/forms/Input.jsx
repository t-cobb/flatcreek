import React, { useState } from 'react';

export function Input({ label, placeholder, type = 'text', value, onChange, hint, name }) {
  const [focused, setFocused] = useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontFamily: 'var(--font-body)' }}>
      {label ? <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)' }}>{label}</span> : null}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          padding: '0.6rem 0.8rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid ' + (focused ? 'var(--color-primary)' : 'var(--color-border-strong)'),
          outline: focused ? '2px solid var(--color-primary-soft)' : 'none',
          background: 'var(--color-surface-raised)',
          color: 'var(--color-text)',
        }}
      />
      {hint ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{hint}</span> : null}
    </label>
  );
}
