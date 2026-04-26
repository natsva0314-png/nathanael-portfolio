'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Microphone, MicrophoneSlash } from '@phosphor-icons/react'

interface VoiceButtonProps {
  onTranscript: (text: string) => void
  disabled?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySpeechRecognition = any

export default function VoiceButton({ onTranscript, disabled }: VoiceButtonProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const recognitionRef = useRef<AnySpeechRecognition>(null)

  useEffect(() => {
    const w = window as unknown as Record<string, unknown>
    setIsSupported(!!(w['SpeechRecognition'] || w['webkitSpeechRecognition']))
  }, [])

  const stopRecording = useCallback(() => {
    recognitionRef.current?.stop()
    setIsRecording(false)
  }, [])

  const startRecording = useCallback(() => {
    const w = window as unknown as Record<string, unknown>
    const SpeechRec = (w['SpeechRecognition'] || w['webkitSpeechRecognition']) as (new () => AnySpeechRecognition) | undefined
    if (!SpeechRec) return

    const recognition = new SpeechRec()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.continuous = false

    recognition.onresult = (e: AnySpeechRecognition) => {
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
