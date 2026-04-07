'use client'

import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Message } from 'ai'
import ProjectCards from './ProjectCards'

interface MessageBubbleProps {
  message: Message
  index: number
}

export default function MessageBubble({ message, index }: MessageBubbleProps) {
  const isUser = message.role === 'user'

  // Split on project showcase marker
  const parts = message.content.split('[PROJECTS_SHOWCASE]')
  const hasProjects = parts.length > 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-end gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* AI avatar badge */}
      {!isUser && (
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold mb-0.5"
          style={{ background: 'var(--accent)', color: '#000' }}
        >
          N
        </div>
      )}

      <div
        className={`flex flex-col gap-2 ${isUser ? 'items-end max-w-[75%]' : 'items-start max-w-[85%]'}`}
      >
        {/* Main text bubble */}
        {parts[0].trim() && (
          <div
            className="px-4 py-3 text-sm leading-relaxed"
            style={
              isUser
                ? {
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    borderRadius: '18px 18px 4px 18px',
                    color: 'var(--text-primary)',
                  }
                : {
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '18px 18px 18px 4px',
                    boxShadow: '0 0 24px var(--accent-glow)',
                    color: 'var(--text-primary)',
                  }
            }
          >
            {isUser ? (
              <span>{parts[0]}</span>
            ) : (
              <div className="chat-markdown">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {parts[0]}
                </ReactMarkdown>
              </div>
            )}
          </div>
        )}

        {/* Inline project cards */}
        {hasProjects && !isUser && <ProjectCards />}

        {/* Text after project cards */}
        {hasProjects && parts[1]?.trim() && (
          <div
            className="px-4 py-3 text-sm leading-relaxed"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: '18px 18px 18px 4px',
              boxShadow: '0 0 24px var(--accent-glow)',
              color: 'var(--text-primary)',
            }}
          >
            <div className="chat-markdown">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {parts[1]}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
