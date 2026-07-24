'use client'

import { useChat } from 'ai/react'
import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Avatar, { type AvatarState } from '@/components/Avatar'
import ChatInput from '@/components/ChatInput'
import MessageBubble from '@/components/MessageBubble'
import SuggestionChips from '@/components/SuggestionChips'
import MouseEffect from '@/components/MouseEffect'
import ThemeToggle from '@/components/ThemeToggle'
import { ArrowCounterClockwise, ArrowRight } from '@phosphor-icons/react'
import SocialLinks from '@/components/SocialLinks'
import Link from 'next/link';


function stripMarkdown(text: string): string {
  return text
    .replace(/\[PROJECTS_SHOWCASE\]/g, '')
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`{1,3}[^`]*`{1,3}/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/\n{2,}/g, '. ')
    .replace(/\n/g, ' ')
    .trim()
}

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [avatarState, setAvatarState] = useState<AvatarState>('idle')
  const [ttsEnabled, setTtsEnabled] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const lastSpokenIdRef = useRef<string | null>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, append, setMessages } = useChat({
    api: '/api/chat',
    onResponse: () => setAvatarState('speaking'),
    onFinish: () => setTimeout(() => setAvatarState('idle'), 1800),
    onError: () => setAvatarState('idle'),
  })

  const hasMessages = messages.length > 0

  // Sync theme class to <html>
  useEffect(() => {
    const html = document.documentElement
    if (theme === 'light') html.classList.add('light')
    else html.classList.remove('light')
  }, [theme])

  // Avatar → thinking state while loading
  useEffect(() => {
    if (isLoading) setAvatarState('thinking')
  }, [isLoading])

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  // TTS: speak new assistant messages when enabled
  useEffect(() => {
    if (!ttsEnabled || isLoading) return
    const lastMsg = messages[messages.length - 1]
    if (!lastMsg || lastMsg.role !== 'assistant') return
    if (lastMsg.id === lastSpokenIdRef.current) return

    lastSpokenIdRef.current = lastMsg.id
    const utterance = new SpeechSynthesisUtterance(stripMarkdown(lastMsg.content))
    utterance.rate = 1.05
    utterance.pitch = 1
    utterance.lang = 'en-US'
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)

    return () => { window.speechSynthesis.cancel() }
  }, [messages, ttsEnabled, isLoading])

  // Stop TTS when disabled
  useEffect(() => {
    if (!ttsEnabled) window.speechSynthesis?.cancel()
  }, [ttsEnabled])

  const handleChipClick = useCallback(
    (text: string) => { append({ role: 'user', content: text }) },
    [append]
  )

  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => { handleSubmit(e) },
    [handleSubmit]
  )

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)
  }

  const handleVoiceTranscript = useCallback(
    (text: string) => { append({ role: 'user', content: text }) },
    [append]
  )

  return (
    <div
      className={theme}
      style={{ height: '100dvh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg)', color: 'var(--text-primary)' }}
    >
      {/* Background noise grain — fixed, non-interactive */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.035\'/%3E%3C/svg%3E")',
          zIndex: 1,
          opacity: theme === 'light' ? 0.4 : 1,
        }}
      />

      <MouseEffect theme={theme} />

      {/* ─── Header ──────────────────────────────────────────────── */}
      <header
        className="flex-shrink-0 flex items-center justify-between px-5 py-3 relative z-30 transition-all duration-300"
        style={{
          height: 56,
          background: hasMessages ? 'var(--bg)' : 'transparent',
          borderBottom: hasMessages ? '1px solid var(--border)' : 'none',
        }}
      >
        <motion.span
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: 'var(--accent)' }}
        >
          nath.ai
        </motion.span>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ThemeToggle theme={theme} onToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
        </motion.div>
      </header>

      {/* ─── Main scrollable area ─────────────────────────────────── */}
      <main
        className="relative z-10 flex-1 overflow-y-auto"
        style={{ minHeight: 0 }}
      >
        <div className="max-w-2xl mx-auto px-4 flex flex-col" style={{ minHeight: '100%' }}>

          {/* ─── Hero / Avatar section ─────────────────────────────── */}
          <AnimatePresence mode="wait">
            {!hasMessages ? (
              /* ── INITIAL HERO STATE ── */
              <motion.div
                key="hero"
                className="flex flex-col items-center justify-center flex-1 py-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="animate-float"
                >
                  <Avatar state={avatarState} size="lg" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6"
                >
                  <h1
                    className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Hey, I&apos;m Nathanael 👋
                  </h1>
                  <p
                    className="mt-2 text-base"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    AI Automation Specialist &mdash; Mandaue City, PH
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: 'var(--accent-glow)',
                      border: '1px solid var(--border-accent)',
                      color: 'var(--accent)',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }}
                    />
                    Available for hire
                  </div>

                  {/* Social links */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="mt-4"
                  >
                    <SocialLinks />
                  </motion.div>
                </motion.div>

                {/* Suggestion chips */}
                <motion.div
                  className="w-full mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <SuggestionChips onChipClick={handleChipClick} />
                </motion.div>

                {/* Stat bar */}
                <motion.div
                  className="flex items-center gap-6 mt-6 flex-wrap justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    { value: '50+', label: 'Automations' },
                    { value: '500+', label: 'Hrs saved/mo' },
                    { value: '99.5%', label: 'Success rate' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p
                        className="text-xl font-bold tracking-tight"
                        style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>

                {/* Featured Case Study Card */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full mt-4"
                >
                  <Link href="/case-study/real-estate" style={{ textDecoration: 'none' }}>
                    <motion.div
                      whileHover={{ scale: 1.015, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-2xl p-4 flex items-center gap-4 transition-all duration-200"
                      style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-accent)',
                        boxShadow: '0 0 28px var(--accent-glow)',
                        cursor: 'pointer',
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold"
                        style={{ background: 'var(--accent-glow)', border: '1px solid var(--border-accent)', color: 'var(--accent)' }}
                      >
                        ★
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: 'var(--accent)' }}>
                          Featured Case Study
                        </p>
                        <p className="text-sm font-semibold leading-tight truncate" style={{ color: 'var(--text-primary)' }}>
                          $70M/year Real Estate Brokerage — 4 AI Systems
                        </p>
                        <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                          9 hrs → seconds · 30+ hrs/week saved · 100% automated
                        </p>
                      </div>
                      <ArrowRight size={16} weight="bold" style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    </motion.div>
                  </Link>
                </motion.div>
                 {/* Featured Case Study Card */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full mt-4"
                >
                  <Link href="/case-study/n8n-workflow" style={{ textDecoration: 'none' }}>
                    <motion.div
                      whileHover={{ scale: 1.015, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-2xl p-4 flex items-center gap-4 transition-all duration-200"
                      style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-accent)',
                        boxShadow: '0 0 28px var(--accent-glow)',
                        cursor: 'pointer',
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold"
                        style={{ background: 'var(--accent-glow)', border: '1px solid var(--border-accent)', color: 'var(--accent)' }}
                      >
                        🤖
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: 'var(--accent)' }}>
                          AI AUTOMATION INFRASTRUCTURE
                        </p>
                        <p className="text-sm font-semibold leading-tight truncate" style={{ color: 'var(--text-primary)' }}>
                          Autonomous Multi-Agent 
                        </p>
                        <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                          Decentralized manager-worker network automating operations triage
                        </p>
                      </div>
                      <ArrowRight size={16} weight="bold" style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    </motion.div>
                  </Link>
                </motion.div>

                  {/* Featured Case Study Card */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full mt-4"
                >
                  <Link href="/case-study/smart-mart" style={{ textDecoration: 'none' }}>
                    <motion.div
                      whileHover={{ scale: 1.015, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-2xl p-4 flex items-center gap-4 transition-all duration-200"
                      style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-accent)',
                        boxShadow: '0 0 28px var(--accent-glow)',
                        cursor: 'pointer',
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold"
                        style={{ background: 'var(--accent-glow)', border: '1px solid var(--border-accent)', color: 'var(--accent)' }}
                      >
                        ★
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: 'var(--accent)' }}>
                          Featured Case Study
                        </p>
                        <p className="text-sm font-semibold leading-tight truncate" style={{ color: 'var(--text-primary)' }}>
                          Automated Sales Setup - 4 AI Assistants
                        </p>
                        <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                          30 mins ➔ seconds · 20+ hrs/week saved · 100% automated
                        </p>
                      </div>
                      <ArrowRight size={16} weight="bold" style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    </motion.div>
                  </Link>
                </motion.div>
                
                {/* Book a Call CTA */}
                <motion.a
                  href="https://calendly.com/natsva0314/30min?month=2026-04"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold mt-2"
                  style={{
                    background: 'var(--accent)',
                    color: '#000',
                    textDecoration: 'none',
                    boxShadow: '0 0 28px var(--accent-glow-strong)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Book a Free Strategy Call
                </motion.a>
              </motion.div>
            ) : (
              /* ── CHAT STATE ── */
              <motion.div
                key="chat"
                className="flex flex-col py-4 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Compact avatar header */}
                <div className="flex items-center gap-3 pb-2" style={{ borderBottom: '1px solid var(--border)' }}>
                  <Avatar state={avatarState} size="sm" />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Nathanael Calma
                    </p>
                    <p className="text-[11px]" style={{ color: 'var(--accent)' }}>
                      AI Automation Specialist
                    </p>
                  </div>
                  <div
                    className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px]"
                    style={{
                      background: 'var(--accent-glow)',
                      color: 'var(--accent)',
                      border: '1px solid var(--border-accent)',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                    Online
                  </div>
                  {/* New chat / reset button */}
                  <motion.button
                    onClick={() => { setMessages([]); setAvatarState('idle') }}
                    whileTap={{ scale: 0.88 }}
                    title="New chat"
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] transition-all duration-200"
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)'
                      ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'
                      ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'
                    }}
                  >
                    <ArrowCounterClockwise size={13} weight="bold" />
                    <span className="hidden sm:block">New chat</span>
                  </motion.button>
                </div>

                {/* Messages */}
                {messages.map((message, i) => (
                  <MessageBubble key={message.id} message={message} index={i} />
                ))}

                {/* Typing indicator */}
                <AnimatePresence>
                  {isLoading && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-end gap-2.5"
                    >
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                        style={{ background: 'var(--accent)', color: '#000' }}
                      >
                        N
                      </div>
                      <div
                        className="flex gap-1.5 px-4 py-3 rounded-[18px] rounded-bl-[4px]"
                        style={{
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border)',
                          boxShadow: '0 0 24px var(--accent-glow)',
                        }}
                      >
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full typing-dot"
                            style={{
                              background: 'var(--accent)',
                              animationDelay: `${i * 0.2}s`,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* ─── Floating Book a Call button (chat mode) ─────────────── */}
      <AnimatePresence>
        {hasMessages && (
          <motion.a
            href="https://calendly.com/natsva0314/30min?month=2026-04"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            className="fixed z-30 flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold"
            style={{
              bottom: 88,
              right: 16,
              background: 'var(--accent)',
              color: '#000',
              textDecoration: 'none',
              boxShadow: '0 4px 20px var(--accent-glow-strong)',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Book a Call
          </motion.a>
        )}
      </AnimatePresence>

      {/* ─── Fixed bottom input ───────────────────────────────────── */}
      <div
        className="flex-shrink-0 relative z-20 px-4 pt-2 pb-4"
        style={{
          background: 'var(--bg)',
          borderTop: hasMessages ? '1px solid var(--border)' : 'none',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <ChatInput
            input={input}
            isLoading={isLoading}
            ttsEnabled={ttsEnabled}
            onChange={handleTextareaChange}
            onSubmit={handleFormSubmit}
            onVoiceTranscript={handleVoiceTranscript}
            onTtsToggle={() => setTtsEnabled(v => !v)}
          />
        </div>
      </div>
    </div>
  )
}
