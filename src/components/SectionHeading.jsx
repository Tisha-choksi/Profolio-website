'use client'

export default function SectionHeading({ label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '14px',
      marginBottom: '3rem',
    }}>
      <div style={{ width: '3px', height: '24px', background: 'var(--accent)', borderRadius: '2px' }} />
      <h2 style={{
        fontFamily: 'var(--font-sans)', fontWeight: 600,
        fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
      }}>
        {label}
      </h2>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)' }} />
    </div>
  )
}
