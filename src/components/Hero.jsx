'use client'

import { useState, useEffect, useRef } from 'react'
import { ROLES } from '@/data/portfolio'

function FloatingShape({ size, pos, delay, duration, opacity }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: pos.y,
        left: pos.x,
        width: size,
        height: size,
        borderRadius: size * 0.15,
        background: `rgba(194,255,61,${opacity})`,
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
        pointerEvents: 'none',
        opacity: 0.05,
      }}
    />
  )
}

function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const m = (e) => {
      if (!ref.current) return
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      ref.current.style.transform = `translate(${x}%, ${y}%)`
    }
    window.addEventListener('mousemove', m, { passive: true })
    return () => window.removeEventListener('mousemove', m)
  }, [])
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute', top: '-150px', left: '-150px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(194,255,61,0.04) 0%, transparent 70%)',
        pointerEvents: 'none', transition: 'transform 0.15s ease-out',
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [ri, setRi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const cur = ROLES[ri]
    const d = del ? 30 : ci === cur.length ? 2000 : 60
    const t = setTimeout(() => {
      if (!del && ci < cur.length) {
        setTyped(cur.slice(0, ci + 1))
        setCi(c => c + 1)
      } else if (!del) {
        setDel(true)
      } else if (del && ci > 0) {
        setTyped(cur.slice(0, ci - 1))
        setCi(c => c - 1)
      } else {
        setDel(false)
        setRi(r => (r + 1) % ROLES.length)
      }
    }, d)
    return () => clearTimeout(t)
  }, [ci, del, ri])

  useEffect(() => {
    const m = (e) => {
      const r = heroRef.current?.getBoundingClientRect()
      if (!r) return
      setMousePos({
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', m, { passive: true })
    return () => window.removeEventListener('mousemove', m)
  }, [])

  const shapes = [
    { size: 80, pos: { x: '75%', y: '20%' }, delay: 0, duration: 6, opacity: 0.06 },
    { size: 50, pos: { x: '15%', y: '60%' }, delay: 1.5, duration: 8, opacity: 0.04 },
    { size: 40, pos: { x: '85%', y: '70%' }, delay: 0.8, duration: 7, opacity: 0.05 },
    { size: 100, pos: { x: '50%', y: '80%' }, delay: 2.5, duration: 10, opacity: 0.03 },
    { size: 30, pos: { x: '10%', y: '30%' }, delay: 0.3, duration: 5, opacity: 0.06 },
  ]

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', position: 'relative', overflow: 'hidden',
        padding: '0 clamp(1.5rem, 6vw, 6rem)', paddingTop: '80px',
      }}
    >
      <CursorGlow />
      {shapes.map((s, i) => <FloatingShape key={i} {...s} />)}

      <div
        style={{
          position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute', top: '5%', right: '-5%',
            width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(194,255,61,0.025) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          style={{
            position: 'absolute', bottom: '5%', left: '-5%',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96,165,250,0.02) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />

        <div
          style={{
            position: 'absolute', top: '50%', left: '50%',
            width: '1px', height: '1px',
            boxShadow: '0 0 200px 100px rgba(194,255,61,0.015)',
            borderRadius: '50%',
          }}
        />
      </div>

      <div
        style={{
          position: 'relative', zIndex: 1, maxWidth: '880px',
          perspective: '1200px',
        }}
      >
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '2rem', padding: '5px 14px 5px 7px',
            background: 'rgba(194,255,61,0.04)', borderRadius: '100px',
            border: '1px solid rgba(194,255,61,0.08)',
            animation: 'fadeInUp 0.8s var(--ease) 0.1s both',
          }}
        >
          <div
            style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: 'var(--accent)',
              animation: 'pulseGlow 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              color: 'var(--accent)', letterSpacing: '0.06em',
            }}
          >
            AVAILABLE FOR HIRE · SURAT, INDIA
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800,
            fontSize: 'clamp(2.8rem, 9vw, 6rem)', lineHeight: 1.02,
            letterSpacing: '-0.04em', color: 'var(--text-primary)',
            marginBottom: '0.2rem',
            transform: `rotateX(${mousePos.y * -2}deg) rotateY(${mousePos.x * 2}deg)`,
            transition: 'transform 0.15s ease-out',
            animation: 'fadeInUp 0.8s var(--ease) 0.2s both',
          }}
        >
          Tisha Choksi
        </h1>

        <div
          style={{
            fontFamily: 'var(--font-sans)', fontWeight: 700,
            fontSize: 'clamp(2.8rem, 9vw, 6rem)', lineHeight: 1.02,
            letterSpacing: '-0.04em',
            marginBottom: '1.5rem',
            transform: `rotateX(${mousePos.y * -1.5}deg) rotateY(${mousePos.x * 1.5}deg)`,
            transition: 'transform 0.15s ease-out',
            animation: 'fadeInUp 0.8s var(--ease) 0.25s both',
          }}
        >
          <span className="gradient-text">AI/ML Engineer</span>
          <span style={{ color: 'var(--accent)' }}>.</span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
            color: 'var(--text-tertiary)',
            display: 'flex', alignItems: 'center', gap: '10px',
            marginBottom: '1.5rem',
            animation: 'fadeInUp 0.8s var(--ease) 0.35s both',
          }}
        >
          <span style={{ color: 'var(--accent)', opacity: 0.4 }}>$</span>
          <span>{typed}</span>
          <span
            style={{
              animation: 'blink 1s step-end infinite',
              color: 'var(--accent)', fontWeight: 500,
            }}
          >
            _
          </span>
        </div>

        <p
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.8,
            color: 'var(--text-tertiary)', maxWidth: '540px', fontWeight: 300,
            marginBottom: '2.5rem',
            animation: 'fadeInUp 0.8s var(--ease) 0.45s both',
          }}
        >
          Specializing in{' '}
          <span style={{ color: 'var(--text-secondary)' }}>GenAI, RAG architectures, and applied NLP</span>
          {' '}— building production-grade AI systems across e-commerce, blockchain, and customer automation.
        </p>

        <div
          style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s var(--ease) 0.55s both',
          }}
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              position: 'relative',
              fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.88rem',
              color: 'var(--bg)', background: 'var(--accent)',
              padding: '0.8rem 2rem', borderRadius: '10px', border: 'none',
              transition: 'all 0.25s var(--ease-spring)',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(194,255,61,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            See my work →
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '0.88rem',
              color: 'var(--text-tertiary)', background: 'transparent',
              padding: '0.8rem 2rem', borderRadius: '10px',
              border: '1px solid var(--border)',
              transition: 'all 0.25s var(--ease)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.color = 'var(--text-secondary)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-tertiary)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            Get in touch
          </button>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1px',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          marginTop: '4rem', position: 'relative', zIndex: 1,
          animation: 'fadeInUp 0.8s var(--ease) 0.75s both',
          background: 'var(--border)',
        }}
      >
        {[
          { n: '9.375', l: 'CGPA · AI & DS' },
          { n: '6+', l: 'AI Projects Shipped' },
          { n: '80%', l: 'Response Time Reduced' },
          { n: '1000+', l: 'Transactions Processed' },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              background: 'var(--bg-elevated)',
              padding: '1.5rem 1.5rem',
              textAlign: 'center',
              transition: 'background 0.3s var(--ease)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(194,255,61,0.03)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-elevated)' }}
          >
            <div
              style={{
                fontFamily: 'var(--font-sans)', fontWeight: 700,
                fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                color: 'var(--text-primary)', letterSpacing: '-0.02em',
                marginBottom: '4px',
              }}
            >
              {s.n.split('').map((c, j) => (
                <span key={j} style={{ animation: `fadeInUp 0.4s var(--ease) ${0.8 + i * 0.1 + j * 0.03}s both`, display: 'inline-block' }}>{c}</span>
              ))}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                color: 'var(--text-tertiary)', letterSpacing: '0.06em',
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          animation: 'fadeInUp 0.8s var(--ease) 1s both',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#2a2a2c', letterSpacing: '0.08em' }}>
          SCROLL
        </span>
        <div style={{ width: '1px', height: '32px', background: 'linear-gradient(var(--text-tertiary), transparent)' }} />
      </div>
    </section>
  )
}
