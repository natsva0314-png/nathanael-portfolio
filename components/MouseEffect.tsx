'use client'

import { useEffect, useRef, useState, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Ripple {
  id: number
  x: number
  y: number
  hue: number
}

const MouseEffect = memo(function MouseEffect({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const blendMode = theme === 'light' ? 'multiply' : 'screen'
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 })
  const [isVisible, setIsVisible] = useState(false)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [hue, setHue] = useState(185)

  const inactivityRef = useRef<ReturnType<typeof setTimeout>>()
  const rafRef = useRef<number>()
  const rippleId = useRef(0)
  const hueRef = useRef(185)

  // Hue cycling via rAF
  useEffect(() => {
    const cycle = () => {
      hueRef.current = (hueRef.current + 0.4) % 360
      setHue(hueRef.current)
      rafRef.current = requestAnimationFrame(cycle)
    }
    rafRef.current = requestAnimationFrame(cycle)
    return () => cancelAnimationFrame(rafRef.current!)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
    setIsVisible(true)
    clearTimeout(inactivityRef.current)
    inactivityRef.current = setTimeout(() => setIsVisible(false), 1800)
  }, [])

  const handleClick = useCallback((e: MouseEvent) => {
    const id = rippleId.current++
    const currentHue = hueRef.current
    setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY, hue: currentHue }])
    setTimeout(() => {
      setRipples((r) => r.filter((rip) => rip.id !== id))
    }, 750)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('click', handleClick, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
      clearTimeout(inactivityRef.current)
      cancelAnimationFrame(rafRef.current!)
    }
  }, [handleMouseMove, handleClick])

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
      {/* Large ambient rainbow blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          background: `radial-gradient(circle, hsla(${hue}, 75%, 60%, 0.1) 0%, transparent 70%)`,
          mixBlendMode: blendMode as 'screen' | 'multiply',
        }}
        animate={{
          x: mousePos.x - 160,
          y: mousePos.y - 160,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: 120, damping: 28 },
          y: { type: 'spring', stiffness: 120, damping: 28 },
          opacity: { duration: 0.6 },
        }}
      />

      {/* Smaller, sharper secondary blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 120,
          height: 120,
          background: `radial-gradient(circle, hsla(${(hue + 60) % 360}, 80%, 65%, 0.08) 0%, transparent 70%)`,
          mixBlendMode: blendMode as 'screen' | 'multiply',
        }}
        animate={{
          x: mousePos.x - 60,
          y: mousePos.y - 60,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: 280, damping: 30 },
          y: { type: 'spring', stiffness: 280, damping: 30 },
          opacity: { duration: 0.4 },
        }}
      />

      {/* Precision cursor ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 14,
          height: 14,
          border: `1.5px solid hsla(${hue}, 80%, 70%, 0.7)`,
          background: `hsla(${hue}, 80%, 70%, 0.07)`,
        }}
        animate={{
          x: mousePos.x - 7,
          y: mousePos.y - 7,
          opacity: isVisible ? 0.9 : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: 500, damping: 28 },
          y: { type: 'spring', stiffness: 500, damping: 28 },
          opacity: { duration: 0.25 },
        }}
      />

      {/* Click ripple waves */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full"
            style={{
              x: ripple.x - 24,
              y: ripple.y - 24,
              width: 48,
              height: 48,
              border: `2px solid hsla(${ripple.hue}, 80%, 70%, 0.9)`,
            }}
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: 3.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>

      {/* Second ripple wave (slight delay) */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={`r2-${ripple.id}`}
            className="absolute rounded-full"
            style={{
              x: ripple.x - 16,
              y: ripple.y - 16,
              width: 32,
              height: 32,
              border: `1.5px solid hsla(${(ripple.hue + 40) % 360}, 80%, 70%, 0.6)`,
            }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
})

export default MouseEffect
