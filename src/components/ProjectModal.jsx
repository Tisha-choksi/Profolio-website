'use client'

import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', h)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.8)',
        zIndex: 200, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'modalOverlay 0.25s var(--ease)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#0b0b0e',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          width: '100%', maxWidth: '860px',
          maxHeight: '90vh', overflowY: 'auto',
          animation: 'modalIn 0.35s var(--ease-spring)',
          boxShadow: '0 32px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02) inset',
        }}
      >
        <div
          style={{
            height: '200px',
            background: `${project.bg}, linear-gradient(135deg, rgba(194,255,61,0.03), transparent)`,
            position: 'relative', overflow: 'hidden',
            borderRadius: '24px 24px 0 0',
          }}
        >
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '28px 28px',
            }}
          />
          <div
            style={{
              position: 'absolute', top: '35%', left: '25%',
              width: '160px', height: '160px', borderRadius: '50%',
              background: project.dot, opacity: 0.08,
              filter: 'blur(50px)',
            }}
          />
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(transparent 40%, #0b0b0e 100%)',
            }}
          />
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: 'var(--text-tertiary)',
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              padding: '6px 14px', borderRadius: '8px',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
          >
            ESC ✕
          </button>
          <div style={{ position: 'absolute', bottom: '1.25rem', left: '2rem' }}>
            <div style={{
              width: '10px', height: '10px', borderRadius: '50%',
              background: project.dot,
              boxShadow: `0 0 20px ${project.dot}`,
              marginBottom: '0.5rem',
            }} />
            <h3 style={{
              fontFamily: 'var(--font-sans)', fontWeight: 700,
              fontSize: '1.6rem', color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}>
              {project.title}
            </h3>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
              {project.sub}
            </div>
          </div>
        </div>

        <div style={{
          padding: '2.5rem 2.5rem 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
              color: '#333', letterSpacing: '0.18em',
              marginBottom: '0.75rem',
              borderLeft: '2px solid var(--accent)',
              paddingLeft: '10px',
            }}>
              THE PROBLEM
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: 'var(--text-tertiary)', marginBottom: '2rem' }}>
              {project.problem}
            </p>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
              color: '#333', letterSpacing: '0.18em',
              marginBottom: '0.75rem',
              borderLeft: '2px solid var(--accent)',
              paddingLeft: '10px',
            }}>
              THE SOLUTION
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: 'var(--text-tertiary)' }}>
              {project.solution}
            </p>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
              color: '#333', letterSpacing: '0.18em',
              marginBottom: '0.75rem',
              borderLeft: '2px solid var(--accent)',
              paddingLeft: '10px',
            }}>
              IMPACT & OUTCOMES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
              {project.impact.map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: project.dot, flexShrink: 0, fontSize: '0.65rem', marginTop: '4px' }}>
                    ▸
                  </span>
                  <span style={{ fontSize: '0.78rem', lineHeight: 1.7, color: '#505050' }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
              color: '#333', letterSpacing: '0.18em',
              marginBottom: '0.75rem',
              borderLeft: '2px solid var(--accent)',
              paddingLeft: '10px',
            }}>
              TECH STACK
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {project.stack.map((t, i) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    padding: '4px 11px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--text-tertiary)', borderRadius: '6px',
                    animation: `fadeInUp 0.3s var(--ease) ${i * 0.05}s both`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          padding: '1rem 2.5rem 1.75rem',
          borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'flex-end', gap: '0.75rem',
        }}>
          <button
            onClick={onClose}
            style={{
              fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.8rem',
              color: 'var(--text-tertiary)',
              padding: '8px 20px',
              border: '1px solid var(--border)',
              borderRadius: '8px', background: 'transparent',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-tertiary)' }}
          >
            Close
          </button>
          <a
            href={project.live}
            onClick={e => e.stopPropagation()}
            style={{
              fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.8rem',
              color: 'var(--bg)', background: 'var(--accent)',
              padding: '8px 20px', borderRadius: '8px',
              display: 'inline-block',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(194,255,61,0.25)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            ↗ Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
