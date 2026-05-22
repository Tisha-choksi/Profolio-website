'use client'

import { CONTACT_INFO } from '@/data/portfolio'
import useInView from '@/hooks/useInView'
import SectionHeading from './SectionHeading'

function ContactCard({ item, index }) {
  const [ref, inView] = useInView(0.1)

  return (
    <div
      ref={ref}
      className="glass-hover"
      style={{
        padding: '1rem 1.5rem',
        background: 'var(--surface)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.4s var(--ease)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(15px)',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
        color: '#2d2d30', letterSpacing: '0.1em',
      }}>
        {item.label.toUpperCase()}
      </span>
      {item.href ? (
        <a
          href={item.href}
          style={{
            fontSize: '0.8rem', color: 'var(--text-tertiary)',
            transition: 'color 0.2s',
            display: 'flex', alignItems: 'center', gap: '4px',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-tertiary)' }}
        >
          {item.value}
          {item.label === 'Email' && <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>↗</span>}
        </a>
      ) : (
        <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
          {item.value}
        </span>
      )}
    </div>
  )
}

export default function Contact() {
  const [mainRef, mainInView] = useInView(0.05)

  return (
    <section
      id="contact"
      style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '2rem clamp(1.5rem, 6vw, 6rem) 8rem',
      }}
    >
      <SectionHeading label="Contact" />
      <div
        ref={mainRef}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.25rem',
        }}
      >
        <div
          style={{
            padding: '2.5rem',
            background: 'var(--surface)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            transition: 'all 0.5s var(--ease)',
            opacity: mainInView ? 1 : 0,
            transform: mainInView ? 'translateY(0)' : 'translateY(20px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '160px', height: '160px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(194,255,61,0.04), transparent)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }} />

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '1.5rem',
            padding: '4px 12px 4px 6px',
            background: 'rgba(194,255,61,0.04)',
            borderRadius: '100px',
            border: '1px solid rgba(194,255,61,0.06)',
          }}>
            <div style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: 'var(--accent)',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
              color: 'var(--accent)', letterSpacing: '0.04em',
            }}>
              OPEN TO WORK
            </span>
          </div>

          <div style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: '1.5rem', color: 'var(--text-primary)',
            lineHeight: 1.2, marginBottom: '1rem',
          }}>
            Let&apos;s build something<br />
            <span style={{ color: 'var(--accent)' }}>together.</span>
          </div>
          <p style={{
            fontSize: '0.85rem', color: 'var(--text-tertiary)',
            lineHeight: 1.75, marginBottom: '2rem',
          }}>
            Open to AI/ML backend roles, research positions, and freelance AI
            engineering projects. Currently based in Surat, India.
          </p>
          <a
            href="mailto:tishachoksi18@gmail.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontFamily: 'var(--font-sans)', fontWeight: 500,
              fontSize: '0.85rem',
              color: 'var(--bg)', background: 'var(--accent)',
              padding: '0.75rem 1.75rem', borderRadius: '10px',
              border: 'none',
              transition: 'all 0.25s var(--ease-spring)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(194,255,61,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            tishachoksi18@gmail.com →
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {CONTACT_INFO.map((item, i) => (
            <ContactCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
