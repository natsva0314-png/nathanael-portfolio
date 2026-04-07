'use client'

import { memo, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export type AvatarState = 'idle' | 'thinking' | 'speaking'

interface AvatarProps {
  state?: AvatarState
  size?: 'sm' | 'lg'
}

const TOTAL_FRAMES = 240
const DEFAULT_FRAME = 239 // 0-indexed → frame_0240.webp
const LERP_SPEED = 0.07  // lower = smoother / slower tracking

const frameSrc = (i: number) =>
  `/avatar-frames/frame_${String(i + 1).padStart(4, '0')}.webp`

const Avatar = memo(function Avatar({ state = 'idle', size = 'lg' }: AvatarProps) {
  const dim = size === 'sm' ? 56 : 160
  const canvasDim = dim * 2 // retina

  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const images     = useRef<(HTMLImageElement | null)[]>(Array(TOTAL_FRAMES).fill(null))
  const currentRef = useRef(DEFAULT_FRAME)   // float, for smooth lerp
  const targetRef  = useRef(DEFAULT_FRAME)   // int, set by mouse
  const rafRef     = useRef<number>()
  const [loaded, setLoaded] = useState(false)

  /* ── Draw one frame to canvas ─────────────────────────────── */
  const drawFrame = (idx: number) => {
    const img = images.current[idx]
    if (!img?.complete || !img.naturalWidth) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Center-square crop (face is centered horizontally, full height)
    const iw = img.naturalWidth
    const ih = img.naturalHeight
    const cropSize = ih              // square = full height
    const sx = (iw - cropSize) / 2  // center horizontally
    const sy = 0

    ctx.clearRect(0, 0, canvasDim, canvasDim)
    ctx.drawImage(img, sx, sy, cropSize, cropSize, 0, 0, canvasDim, canvasDim)
  }

  /* ── Preload frames — default frame first ─────────────────── */
  useEffect(() => {
    // 1. Default frame — high priority
    const def = new Image()
    def.src = frameSrc(DEFAULT_FRAME)
    def.onload = () => {
      images.current[DEFAULT_FRAME] = def
      drawFrame(DEFAULT_FRAME)
      setLoaded(true)
    }
    images.current[DEFAULT_FRAME] = def

    // 2. All other frames in background
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (i === DEFAULT_FRAME) continue
      const img = new Image()
      img.src = frameSrc(i)
      img.onload = () => { images.current[i] = img }
      images.current[i] = img
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ── rAF animation loop with lerp ────────────────────────── */
  useEffect(() => {
    const loop = () => {
      const cur = currentRef.current
      const tgt = targetRef.current
      const diff = tgt - cur

      if (Math.abs(diff) > 0.15) {
        currentRef.current += diff * LERP_SPEED
        drawFrame(Math.round(currentRef.current))
      }

      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ── Cursor → frame mapping ───────────────────────────────── */
  /*
   *  Mirror technique so frame_0240 (frontal) is always the
   *  centre position regardless of which way the video rotates:
   *
   *  cursor at 0   (far left)  → frame 0
   *  cursor at 0.5 (centre)    → frame 239  (frame_0240, default)
   *  cursor at 1   (far right) → frame 0    (mirror of left)
   *
   *  Result: head looks toward camera when cursor is centred,
   *  and rotates away symmetrically as cursor moves to either edge.
   */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = Math.max(0, Math.min(1, e.clientX / window.innerWidth))
      // Distance from centre (0 → centre, 0.5 → edge)
      const dist = Math.abs(nx - 0.5)         // 0…0.5
      const frame = Math.round(DEFAULT_FRAME - dist * 2 * DEFAULT_FRAME)
      targetRef.current = Math.max(0, Math.min(TOTAL_FRAMES - 1, frame))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  /* ── Glow colour based on avatar state ───────────────────── */
  const glowColor = {
    idle:     'rgba(0,212,255,0.22)',
    thinking: 'rgba(0,212,255,0.55)',
    speaking: 'rgba(0,255,179,0.38)',
  }[state]

  const glowPeak = {
    idle:     'rgba(0,212,255,0.38)',
    thinking: 'rgba(0,212,255,0.80)',
    speaking: 'rgba(0,255,179,0.60)',
  }[state]

  const orbitDuration = state === 'thinking' ? 2 : state === 'speaking' ? 4 : 9

  return (
    <div className="relative flex-shrink-0" style={{ width: dim, height: dim }}>

      {/* ── Pulsing glow ring ─────────────────────────────── */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{ boxShadow: [`0 0 18px ${glowColor}`, `0 0 38px ${glowPeak}`, `0 0 18px ${glowColor}`] }}
        transition={{ duration: state === 'thinking' ? 0.8 : 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Circular canvas ──────────────────────────────── */}
      <div
        style={{
          width: dim,
          height: dim,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '1.5px solid rgba(0,212,255,0.35)',
          background: 'var(--bg-elevated)',
          position: 'relative',
        }}
      >
        {/* Shimmer placeholder while default frame loads */}
        {!loaded && (
          <div
            className="absolute inset-0 shimmer"
            style={{ borderRadius: '50%' }}
          />
        )}

        <canvas
          ref={canvasRef}
          width={canvasDim}
          height={canvasDim}
          style={{
            width: dim,
            height: dim,
            display: 'block',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* Thinking overlay: subtle cyan pulse */}
        {state === 'thinking' && (
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            style={{ background: 'rgba(0,212,255,1)', borderRadius: '50%' }}
          />
        )}
      </div>

      {/* ── Orbit ring + particle (lg only) ──────────────── */}
      {size === 'lg' && (
        <>
          <div
            className="absolute pointer-events-none"
            style={{
              inset: -14,
              border: '1px dashed rgba(0,212,255,0.14)',
              borderRadius: '50%',
            }}
          />
          <motion.div
            className="absolute"
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 10px var(--accent)',
              top: '50%',
              left: '50%',
              marginLeft: -3.5,
              marginTop: -(dim / 2 + 14),
              transformOrigin: `3.5px ${dim / 2 + 14}px`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: orbitDuration, repeat: Infinity, ease: 'linear' }}
          />
        </>
      )}

      {/* ── Thinking dots ─────────────────────────────────── */}
      {state === 'thinking' && size === 'lg' && (
        <div className="absolute" style={{ top: -4, right: -8, display: 'flex', gap: 4 }}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--accent)',
              }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      )}
    </div>
  )
})

export default Avatar
