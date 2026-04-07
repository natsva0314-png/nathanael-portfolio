'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from '@phosphor-icons/react'

interface ThemeToggleProps {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs transition-colors duration-200"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
      }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)'
        ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'
        ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'dark' ? <Sun size={14} weight="bold" /> : <Moon size={14} weight="bold" />}
      </motion.div>
      <span className="hidden sm:block">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </motion.button>
  )
}
