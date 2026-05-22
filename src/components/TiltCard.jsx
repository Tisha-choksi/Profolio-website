'use client'

import { useRef, useCallback, memo } from 'react'

function TiltCard({ children, onClick, style, className }) {
  const ref = useRef(null)
  const timeoutRef = useRef(null)

  const move = useCallback((e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const rx = -((e.clientY - r.top - r.height / 2) / r.height) * 12
    const ry = ((e.clientX - r.left - r.width / 2) / r.width) * 12
    ref.current.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`
    ref.current.style.transition = 'transform 0.06s linear'
  }, [])

  const leave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    ref.current.style.transition = 'transform 0.5s var(--ease)'
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </div>
  )
}

export default memo(TiltCard)
