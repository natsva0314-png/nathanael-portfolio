'use client'

import { motion } from 'framer-motion'
import { PaperPlaneTilt, CircleNotch, SpeakerHigh, SpeakerSlash } from '@phosphor-icons/react'
import { useRef } from 'react'
import VoiceButton from './VoiceButton'

interface ChatInputProps {
  input: string
  isLoading: boolean
  ttsEnabled: boolean
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onSubmit: (e: React.FormEvent) => void
  onVoiceTranscript: (text: string) => void
  onTtsToggle: () => void
}

export default function ChatInput({
  input,
  isLoading,
  ttsEnabled,
  onChange,
  onSubmit,
  onVoiceTranscript,
  onTtsToggle,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (input.trim() && !isLoading) {
        onSubmit(e as unknown as React.FormEvent)
      }
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e)
    const el = e.target
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 120) + 'px'
  }

  const canSend = input.trim().length > 0 && !isLoading

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <form onSubmit={onSubmit} className="relative">
        <div
          className="flex items-end gap-2 rounded-2xl px-4 py-3 transition-all duration-200"
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
          }}
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about projects, skills, or how I can automate your business…"
            disabled={isLoading}
            rows={1}
            className="flex-1 bg-transparent text-sm outline-none resize-none leading-relaxed placeholder:text-sm"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-outfit), sans-serif',
              maxHeight: '120px',
            }}
          />

          {/* TTS toggle */}
          <motion.button
            type="button"
            onClick={onTtsToggle}
            whileTap={{ scale: 0.88 }}
            title={ttsEnabled ? 'Mute AI voice' : 'Enable AI voice'}
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
            style={{
              background: ttsEnabled ? 'var(--accent-glow)' : 'var(--bg-elevated)',
              border: ttsEnabled ? '1px solid var(--border-accent)' : '1px solid var(--border)',
              color: ttsEnabled ? 'var(--accent)' : 'var(--text-secondary)',
              cursor: 'pointer',
            }}
          >
            {ttsEnabled
              ? <SpeakerHigh size={16} weight="bold" />
              : <SpeakerSlash size={16} weight="bold" />
            }
          </motion.button>

          {/* Voice input */}
          <VoiceButton onTranscript={onVoiceTranscript} disabled={isLoading} />

          {/* Send */}
          <motion.button
            type="submit"
            disabled={!canSend}
            whileTap={canSend ? { scale: 0.88 } : {}}
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
            style={{
              background: canSend ? 'var(--accent)' : 'var(--bg-elevated)',
              color: canSend ? '#000' : 'var(--text-secondary)',
              cursor: canSend ? 'pointer' : 'not-allowed',
            }}
          >
            {isLoading
              ? <CircleNotch size={16} weight="bold" className="animate-spin" />
              : <PaperPlaneTilt size={16} weight="bold" />
            }
          </motion.button>
        </div>
      </form>

      <p
        className="text-center text-[10px] mt-2 tracking-wide"
        style={{ color: 'var(--text-secondary)', opacity: 0.45 }}
      >
        Enter to send · Shift+Enter for new line · Mic to speak
      </p>
    </motion.div>
  )
}
