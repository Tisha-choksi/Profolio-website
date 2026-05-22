'use client'

import { useEffect, useRef, useState } from 'react'

export default function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const o = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          o.unobserve(el)
        }
      },
      { threshold }
    )
    o.observe(el)
    return () => o.disconnect()
  }, [threshold])

  return [ref, inView]
}
