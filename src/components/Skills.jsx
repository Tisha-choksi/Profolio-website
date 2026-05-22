'use client'

import { SKILLS_LIST } from '@/data/portfolio'
import useInView from '@/hooks/useInView'
import SectionHeading from './SectionHeading'

const CATEGORIES = [
  { label: 'AI & ML', keywords: ['RAG', 'LangChain', 'LangGraph', 'Prompt Engineering', 'Multi-Agent Systems', 'LoRA/QLoRA Fine-tuning', 'Hallucination Reduction', 'Semantic Search', 'Vision-Language Models'] },
  { label: 'Frameworks & Tools', keywords: ['FastAPI', 'PyTorch', 'TensorFlow', 'Hugging Face', 'FAISS', 'OpenCV', 'ChromaDB'] },
  { label: 'Languages & Platforms', keywords: ['Python', 'JavaScript', 'SQL', 'Bash', 'AWS', 'Vercel', 'Supabase', 'REST APIs', 'Smart Contracts'] },
  { label: 'Specialized', keywords: ['Vector DBs', 'Face Recognition', 'PDF Pipelines', 'NLP', 'BERT', 'MediaPipe'] },
]

function SkillCard({ label, skills }) {
  const [ref, inView] = useInView(0.1)

  return (
    <div
      ref={ref}
      className="glass-hover"
      style={{
        padding: '1.5rem 1.75rem',
        background: 'var(--surface)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        transition: 'all 0.4s var(--ease)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
        color: 'var(--accent)', letterSpacing: '0.08em',
        marginBottom: '1rem',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <span style={{ color: 'var(--accent)', opacity: 0.5 }}>#</span>
        {label}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
        {skills.map((sk, j) => (
          <span
            key={sk}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
              padding: '5px 12px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border)',
              color: 'var(--text-tertiary)', borderRadius: '7px',
              cursor: 'default',
              transition: 'all 0.2s',
              animation: inView ? `fadeInUp 0.4s var(--ease) ${0.2 + j * 0.03}s both` : 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(194,255,61,0.06)'
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.borderColor = 'rgba(194,255,61,0.15)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              e.currentTarget.style.color = 'var(--text-tertiary)'
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {sk}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [edRef, edInView] = useInView(0.1)

  return (
    <section
      id="skills"
      style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '2rem clamp(1.5rem, 6vw, 6rem) 6rem',
      }}
    >
      <SectionHeading label="Skills & Technologies" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
        {CATEGORIES.map(cat => (
          <SkillCard key={cat.label} label={cat.label} skills={cat.keywords} />
        ))}
      </div>

      <div
        ref={edRef}
        style={{
          padding: '2rem 2.25rem',
          background: 'var(--surface)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          transition: 'all 0.5s var(--ease)',
          opacity: edInView ? 1 : 0,
          transform: edInView ? 'translateY(0)' : 'translateY(20px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', right: '-20px', top: '-20px',
          width: '120px', height: '120px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194,255,61,0.04), transparent)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }} />
        <div>
          <div style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: '1rem', color: 'var(--text-primary)',
            marginBottom: '0.25rem',
          }}>
            B.Tech — Artificial Intelligence & Data Science
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
            Sarvajanik College of Engineering & Technology, Surat
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontFamily: 'var(--font-sans)', fontWeight: 700,
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, var(--accent), #8aff3d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            9.375
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            color: 'var(--text-tertiary)', letterSpacing: '0.05em',
          }}>
            CGPA · 2021–2025
          </div>
        </div>
      </div>
    </section>
  )
}
