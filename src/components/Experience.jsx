'use client'

import { EXPERIENCE } from '@/data/portfolio'
import useInView from '@/hooks/useInView'
import SectionHeading from './SectionHeading'

function ExperienceCard({ exp, index }) {
  const [ref, inView] = useInView(0.1)

  return (
    <div ref={ref} style={{ position: 'relative', paddingLeft: '3rem', paddingBottom: index < EXPERIENCE.length - 1 ? '2rem' : 0 }}>
      <div
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px',
          background: index < EXPERIENCE.length - 1
            ? `linear-gradient(${inView ? 'var(--accent)' : 'var(--border)'}, var(--border))`
            : 'transparent',
          transition: 'background 0.8s var(--ease)',
        }}
      />
      <div
        style={{
          position: 'absolute', left: '-5px', top: '8px',
          width: '11px', height: '11px', borderRadius: '50%',
          background: inView ? 'var(--accent)' : 'var(--border)',
          border: '2px solid var(--bg)',
          boxShadow: inView ? '0 0 12px var(--accent-glow)' : 'none',
          transition: 'all 0.5s var(--ease)',
          zIndex: 1,
        }}
      />

      <div
        className="glass-hover"
        style={{
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem 2rem',
          background: 'var(--surface)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid var(--border)',
          transition: 'all 0.5s var(--ease)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.25rem' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                {exp.role}
              </span>
              {exp.current && (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
                    padding: '3px 8px',
                    background: 'var(--accent-dim)',
                    border: '1px solid rgba(194,255,61,0.12)',
                    color: 'var(--accent)', borderRadius: '20px',
                    letterSpacing: '0.06em',
                    animation: 'pulseGlow 2s ease-in-out infinite',
                  }}
                >
                  CURRENT
                </span>
              )}
            </div>
            <div style={{ fontSize: '0.83rem', color: 'var(--text-tertiary)', marginBottom: '0.75rem', fontWeight: 400 }}>
              {exp.company}
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.63rem', color: 'var(--text-tertiary)', whiteSpace: 'nowrap', paddingTop: '4px' }}>
            {exp.period}
          </div>
        </div>

        <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', lineHeight: 1.75, marginBottom: '1rem' }}>
          {exp.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {exp.tags.map((t, j) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                padding: '3px 10px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border)',
                color: 'var(--text-tertiary)', borderRadius: '6px',
                transition: 'all 0.2s',
                animation: inView ? `fadeInUp 0.4s var(--ease) ${0.3 + j * 0.05}s both` : 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(194,255,61,0.2)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-tertiary)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView(0.05)

  return (
    <section
      id="experience"
      style={{
        maxWidth: '900px', margin: '0 auto',
        padding: '6rem clamp(1.5rem, 6vw, 6rem)',
      }}
    >
      <SectionHeading label="Work Experience" />
      <div ref={ref}>
        {EXPERIENCE.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
