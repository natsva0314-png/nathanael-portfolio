'use client'

import { motion } from 'framer-motion'

const CHIPS = [
  'Show me your best projects',
  'What tools do you use?',
  'How can we collaborate?',
  "What's your success rate?",
  'Tell me a fun fact about you',
]

interface SuggestionChipsProps {
  onChipClick: (text: string) => void
}

export default function SuggestionChips({ onChipClick }: SuggestionChipsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
      transition={{ delay: 0.7, duration: 0.45 }}
      className="flex flex-wrap justify-center gap-2 py-3 w-full"
    >
      {CHIPS.map((chip, i) => (
        <motion.button
          key={chip}
          onClick={() => onChipClick(chip)}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.07, duration: 0.35 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-full text-xs transition-all duration-200"
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)'
            ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 12px var(--accent-glow)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'
            ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
          }}
        >
          {chip}
        </motion.button>
      ))}
    </motion.div>
  )
}
