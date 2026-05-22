'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import ProjectModal from '@/components/ProjectModal'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  const [selProj, setSelProj] = useState(null)

  return (
    <div style={{ position: 'relative' }}>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects onSelect={setSelProj} />
        <Skills />
        <Contact />
      </main>
      <Footer />
      {selProj && (
        <ProjectModal project={selProj} onClose={() => setSelProj(null)} />
      )}
    </div>
  )
}
