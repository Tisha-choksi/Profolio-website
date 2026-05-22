'use client'

import useInView from '@/hooks/useInView'

export default function Footer() {
  const [ref, inView] = useInView(0.1)

  return (
    <footer
      ref={ref}
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem clamp(1.5rem, 6vw, 6rem)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1100px', margin: '0 auto',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s var(--ease)',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-sans)', fontWeight: 600,
        fontSize: '0.85rem', color: 'var(--text-tertiary)',
      }}>
        <span style={{ fontWeight: 300 }}>T</span>isha<span style={{ color: 'var(--accent)' }}>.</span>
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
          color: '#2a2a2c', letterSpacing: '0.04em',
        }}>
          AI/ML ENGINEER · SURAT
        </span>
        <div style={{ width: '1px', height: '12px', background: 'var(--border)' }} />
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
          color: '#2a2a2c', letterSpacing: '0.04em',
        }}>
          2025
        </span>
      </div>
    </footer>
  )
}
