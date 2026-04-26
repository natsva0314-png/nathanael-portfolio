'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Microphone, MicrophoneSlash } from '@phosphor-icons/react'

interface VoiceButtonProps {
  onTranscript: (text: string) => void
  disabled?: boolean
}

function getSpeechRecognition(): (new () => { lang: string; interimResults: boolean; maxAlternatives: number; continuous: boolean; onresult: ((e: { results: { [k: number]: { [k: number]: { transcript: string } } } }) => void) | null; onend: (() => void) | null; onerror: (() => void) | null; start: () => void; stop: () => void }) | null {
  if (typeof window === 'undefined') return null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

export default function VoiceButton({ onTranscript, disabled }: VoiceButtonProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    setIsSupported(getSpeechRecognition() !== null)
  }, [])

  const stopRecording = useCallback(() => {
    recognitionRef.current?.stop()
    setIsRecording(false)
  }, [])

  const startRecording = useCallback(() => {
    const SpeechRec = getSpeechRecognition()
    if (!SpeechRec) return

    const recognition = new SpeechRec()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.continuous = false

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (e: any) => {
      const transcript = e.results?.[0]?.[0]?.transcript?.trim()
      if (transcript) onTranscript(transcript)
    }
    recognition.onend = () => setIsRecording(false)
    recognition.onerror = () => setIsRecording(false)

    recognitionRef.current = recognition
    recognition.start()
    setIsRecording(true)
  }, [onTranscript])

  const toggle = useCallback(() => {
    if (isRecording) stopRecording()
    else startRecording()
  }, [isRecording, startRecording, stopRecording])

  if (!isSupported) return null

  return (
    <motion.button
      type="button"
      onClick={toggle}
      disabled={disabled}
      whileTap={{ scale: 0.88 }}
      title={isRecording ? 'Stop recording' : 'Speak your message'}
      className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center relative transition-all duration-200"
      style={{
        background: isRecording ? 'rgba(239,68,68,0.15)' : 'var(--bg-elevated)',
        border: isRecording ? '1px solid rgba(239,68,68,0.5)' : '1px solid var(--border)',
        color: isRecording ? 'rgb(239,68,68)' : 'var(--text-secondary)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <AnimatePresence>
        {isRecording && (
          <motion.span
            key="ring"
            className="absolute inset-0 rounded-xl"
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 1.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeOut' }}
            style={{ background: 'rgba(239,68,68,0.3)', pointerEvents: 'none' }}
          />
        )}
      </AnimatePresence>

      {isRecording
        ? <MicrophoneSlash size={16} weight="bold" />
        : <Microphone size={16} weight="bold" />
      }
    </motion.button>
  )
}
