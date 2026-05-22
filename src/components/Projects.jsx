'use client'

import { PROJECTS } from '@/data/portfolio'
import useInView from '@/hooks/useInView'
import TiltCard from './TiltCard'
import SectionHeading from './SectionHeading'

function ProjectCard({ project, index, onSelect }) {
  const [ref, inView] = useInView(0.05)
  const isFeatured = index === 0

  return (
    <div
      ref={ref}
      style={{
        gridColumn: isFeatured ? '1 / -1' : 'auto',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s var(--ease) ${index * 0.08}s`,
      }}
    >
      <TiltCard
        onClick={() => onSelect(project)}
        style={{
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          cursor: 'pointer', willChange: 'transform',
          background: 'var(--surface)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid var(--border)',
          transition: 'all 0.4s var(--ease)',
          position: 'relative',
        }}
        className="glass-hover"
      >
        <div
          style={{
            height: isFeatured ? '220px' : '160px',
            background: project.bg,
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: isFeatured ? '28px 28px' : '24px 24px',
            }}
          />
          <div
            style={{
              position: 'absolute', top: '25%', left: '20%',
              width: isFeatured ? '120px' : '80px',
              height: isFeatured ? '120px' : '80px',
              borderRadius: '50%',
              background: project.dot, opacity: 0.12, filter: 'blur(35px)',
            }}
          />
          <div
            style={{
              position: 'absolute', top: '50%', right: '15%',
              width: isFeatured ? '70px' : '50px',
              height: isFeatured ? '70px' : '50px',
              borderRadius: '50%',
              background: project.dot, opacity: 0.06, filter: 'blur(25px)',
            }}
          />
          <div
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '80px',
              background: 'linear-gradient(transparent, var(--surface))',
            }}
          />
          <div
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              color: 'rgba(255,255,255,0.1)', letterSpacing: '0.05em',
            }}
          >
            0{project.id}
          </div>
          <div
            style={{
              position: 'absolute', top: '1rem', left: '1rem',
              width: '8px', height: '8px', borderRadius: '50%',
              background: project.dot,
              boxShadow: `0 0 16px ${project.dot}`,
            }}
          />
          {isFeatured && (
            <div
              style={{
                position: 'absolute', bottom: '1.25rem', left: '1.5rem',
                display: 'flex', gap: '8px',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
                padding: '3px 8px', borderRadius: '20px',
                background: 'rgba(0,0,0,0.3)',
                backdropFilter: 'blur(8px)',
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.04em',
              }}>
                FEATURED
              </span>
            </div>
          )}
        </div>

        <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
          <div style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: isFeatured ? '1.15rem' : '1rem',
            color: 'var(--text-primary)',
            marginBottom: '0.25rem', letterSpacing: '-0.01em',
          }}>
            {project.title}
          </div>
          <div style={{
            fontSize: '0.72rem', color: 'var(--text-tertiary)',
            marginBottom: '0.85rem', fontWeight: 400,
          }}>
            {project.sub}
          </div>
          <p style={{
            fontSize: '0.78rem', color: 'var(--text-tertiary)',
            lineHeight: 1.75, marginBottom: '1rem',
          }}>
            {project.desc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
            {project.stack.map(t => (
              <span key={t} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                padding: '2px 9px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border)',
                color: 'var(--text-tertiary)', borderRadius: '5px',
              }}>
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '4px',
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
              color: 'var(--text-tertiary)',
            }}>
              <span style={{ transition: 'color 0.2s', color: 'inherit' }}>↗</span>
              <span>Preview</span>
            </div>
            <span style={{
              marginLeft: 'auto',
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              color: '#2a2a2c',
              display: 'flex', alignItems: 'center', gap: '4px',
            }}>
              Click to explore →
            </span>
          </div>
        </div>
      </TiltCard>
    </div>
  )
}

export default function Projects({ onSelect }) {
  const [ref, inView] = useInView(0.02)

  return (
    <section
      id="projects"
      style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '2rem clamp(1.5rem, 6vw, 6rem) 6rem',
      }}
    >
      <SectionHeading label="Projects" />
      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}
