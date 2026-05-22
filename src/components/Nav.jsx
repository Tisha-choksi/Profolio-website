'use client'

import { useState, useEffect, useCallback } from 'react'

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i]
        const top = s.getBoundingClientRect().top
        if (top < 200) {
          setActiveSection(s.id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 2rem', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(6,6,8,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(28px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(1.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
        transition: 'all 0.5s var(--ease)',
      }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.2rem',
          color: 'var(--text-primary)', letterSpacing: '-0.03em',
          background: 'none', border: 'none',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
      >
        <span style={{ fontWeight: 300 }}>T</span>isha<span style={{ color: 'var(--accent)' }}>.</span>
      </button>

      <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeSection === id
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                position: 'relative',
                fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '0.8rem',
                color: isActive ? 'var(--text-secondary)' : '#333',
                padding: '6px 14px', borderRadius: '8px',
                background: isActive ? 'rgba(255,255,255,0.04)' : 'transparent',
                border: 'none',
                transition: 'all 0.25s var(--ease)',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.color = '#777'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.color = '#333'
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              {label}
              {isActive && (
                <div
                  style={{
                    position: 'absolute', bottom: '2px', left: '50%',
                    transform: 'translateX(-50%)',
                    width: '16px', height: '2px',
                    background: 'var(--accent)',
                    borderRadius: '2px',
                    transition: 'all 0.3s var(--ease)',
                  }}
                />
              )}
            </button>
          )
        })}
        <button
          onClick={() => scrollTo('contact')}
          style={{
            fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.8rem',
            color: 'var(--bg)', background: 'var(--accent)',
            padding: '6px 18px', borderRadius: '8px', border: 'none', marginLeft: '8px',
            transition: 'all 0.25s var(--ease)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.85'
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(194,255,61,0.25)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Hire Me
        </button>
      </div>
    </nav>
  )
}
