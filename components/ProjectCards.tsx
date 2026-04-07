'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Clock, Lightning, CheckCircle, Star, X, MagnifyingGlassPlus } from '@phosphor-icons/react'
import { memo, useState } from 'react'

const N8N_PROJECTS = [
  {
    id: 'n1',
    title: 'Full E-commerce Operations Engine',
    description:
      'End-to-end n8n automation powered by Claude AI — real-time order processing, fraud detection, and daily AI-generated business intelligence reports. Zero manual intervention.',
    image: '/projects/full-ecommerce.png',
    tech: ['n8n', 'Claude AI', 'Webhooks', 'Slack'],
    metrics: [
      { label: '100% automated', icon: 'check' },
      { label: 'Real-time fraud detection', icon: 'lightning' },
      { label: 'Daily AI reports', icon: 'star' },
    ],
  },
  {
    id: 'n2',
    title: 'Customer Health Intelligence Engine',
    description:
      'Autonomous churn prevention system using Claude AI to score customer risk levels and trigger personalized email and Slack interventions — before customers ever leave.',
    image: '/projects/customer-health.png',
    tech: ['n8n', 'Claude AI', 'GoHighLevel', 'Slack'],
    metrics: [
      { label: 'Proactive churn prevention', icon: 'lightning' },
      { label: 'AI risk scoring', icon: 'star' },
      { label: '25+ hrs saved/week', icon: 'clock' },
    ],
  },
  {
    id: 'n3',
    title: 'AI Abandoned Cart Recovery',
    description:
      'Hourly-triggered n8n workflow that processes individual customers with personalized recovery messages — fully automated abandoned cart rescue that recovers lost revenue.',
    image: '/projects/abandoned-cart.png',
    tech: ['n8n', 'Claude AI', 'CRM', 'Email'],
    metrics: [
      { label: 'Hourly auto-triggers', icon: 'clock' },
      { label: '100% personalized', icon: 'star' },
      { label: 'Zero manual work', icon: 'check' },
    ],
  },
  {
    id: 'n4',
    title: 'Weather Poster with AI Processing',
    description:
      'Scheduled daily at 8AM — fetches live weather via OpenWeatherMap, generates an AI-written quote, creates an optimized image, and auto-publishes to Facebook via Graph API.',
    image: '/projects/n8n-weather-poster.png',
    tech: ['n8n', 'OpenWeatherMap', 'OpenRouter', 'Facebook API'],
    metrics: [
      { label: 'Daily auto-posting', icon: 'clock' },
      { label: '88% engagement rate', icon: 'star' },
      { label: 'AI-powered captions', icon: 'lightning' },
    ],
  },
  {
    id: 'n5',
    title: 'Electrical Service AI Automation',
    description:
      'AI-powered lead qualifier and instant quote generator. Form submission triggers an AI agent that qualifies the lead, sends high-priority GHL messages, logs details to Sheets, and follows up automatically.',
    image: '/projects/n8n-electrical-service.png',
    tech: ['n8n', 'AI Agent', 'GoHighLevel', 'Google Sheets'],
    metrics: [
      { label: 'Instant AI quotes', icon: 'lightning' },
      { label: 'Automated follow-up', icon: 'check' },
      { label: '100% lead capture', icon: 'star' },
    ],
  },
  {
    id: 'n6',
    title: 'Gaming Hub AI Agent',
    description:
      'Memory-enabled AI chatbot for Nats Gaming Hub — handles webhook triggers, filters requests, processes pick-up and delivery orders, updates Google Sheets inventory, and sends automated customer messages.',
    image: '/projects/n8n-gaming-hub.png',
    tech: ['n8n', 'AI Agent', 'OpenRouter', 'Google Sheets'],
    metrics: [
      { label: 'Natural conversation', icon: 'star' },
      { label: 'Multi-tool capability', icon: 'lightning' },
      { label: 'Real-time stock sync', icon: 'check' },
    ],
  },
]

const GHL_PROJECTS = [
  {
    id: 'g1',
    title: 'SparkFix Electrical — Appointment Auto-Workflow',
    description:
      'Customer booking triggers a full GHL automation: creates contact, creates or updates opportunity, auto-assigns to the correct CRM pipeline stage, adds tags, and sends a branded confirmation email — zero manual data entry.',
    image: '/projects/ghl-sparkfix-appointment.jpg',
    tech: ['GoHighLevel', 'CRM Pipeline', 'Email', 'Automation'],
    metrics: [
      { label: '100% booking capture', icon: 'check' },
      { label: 'Zero manual entry', icon: 'lightning' },
      { label: 'Instant confirmation', icon: 'star' },
    ],
  },
  {
    id: 'g2',
    title: 'SparkFix Electrical CRM Dashboard',
    description:
      'Complete GoHighLevel opportunity pipeline with smart routing, real-time prospect tracking, and revenue analytics. Manages 3 active pipelines, tracks P55K total value, and displays 33% conversion rate across all stages.',
    image: '/projects/ghl-sparkfix-crm.png',
    tech: ['GoHighLevel', 'Pipeline', 'Analytics', 'CRM'],
    metrics: [
      { label: '₱55K pipeline value', icon: 'star' },
      { label: '33% conversion rate', icon: 'lightning' },
      { label: '3 active pipelines', icon: 'check' },
    ],
  },
]

const ZAPIER_PROJECTS = [
  {
    id: 'z1',
    title: 'AI-Powered Call Analysis & Response System',
    description:
      'Transforms every phone call into actionable business intelligence. Instantly transcribes calls, extracts critical insights, manages CRM contacts, and filters urgent situations with AI.',
    image: '/projects/zapier-call-analysis.jpg',
    tech: ['Zapier', 'AI Analysis', 'Smart Routing', 'CRM'],
    metrics: [
      { label: '99% accuracy', icon: 'star' },
      { label: '35% faster resolution', icon: 'lightning' },
      { label: 'Auto CRM updates', icon: 'check' },
    ],
  },
  {
    id: 'z2',
    title: 'Smart Customer Service & Reporting Automation',
    description:
      'Multi-source feedback intake (support tickets, email, Typeform) classified by AI, structured into PDF reports, saved to Google Drive, and routed to Slack by urgency level.',
    image: '/projects/zapier-customer-service.jpg',
    tech: ['Zapier', 'AI Analysis', 'Google Drive', 'Slack'],
    metrics: [
      { label: '50% faster response', icon: 'lightning' },
      { label: '40% fewer escalations', icon: 'check' },
      { label: 'Auto PDF reports', icon: 'star' },
    ],
  },
  {
    id: 'z3',
    title: 'Smart AI Feedback & Escalation System',
    description:
      'Intelligent feedback processing with AI-powered sentiment scoring, automatic issue type classification, conditional routing, ticket creation, and professional PDF report generation.',
    image: '/projects/zapier-feedback-escalation.jpg',
    tech: ['Zapier', 'Claude AI', 'HubSpot', 'Google Drive'],
    metrics: [
      { label: '92% categorization accuracy', icon: 'star' },
      { label: '60% faster escalation', icon: 'lightning' },
      { label: 'Zero delay response', icon: 'check' },
    ],
  },
  {
    id: 'z4',
    title: 'Automated Lead Nurturing & Sales Alerts',
    description:
      'Facebook leads auto-captured, qualified, and synced to HubSpot CRM instantly. Automated follow-up emails, high-value deal detection, and Slack/Google Sheets logging — no manual entry.',
    image: '/projects/zapier-lead-nurturing.jpg',
    tech: ['Zapier', 'HubSpot', 'Facebook Leads', 'Slack'],
    metrics: [
      { label: '40% more follow-ups', icon: 'lightning' },
      { label: '25% conversion increase', icon: 'star' },
      { label: '100% lead capture', icon: 'check' },
    ],
  },
  {
    id: 'z5',
    title: 'AI-Generated Personalized Voice Outreach',
    description:
      'Automatically creates personalized voice messages for every new tech-industry lead from HubSpot using ChatGPT scripts, ElevenLabs AI voice generation, uploaded to Notion with team Slack alerts.',
    image: '/projects/zapier-voice-outreach.jpg',
    tech: ['Zapier', 'ChatGPT', 'ElevenLabs', 'Notion'],
    metrics: [
      { label: '3× engagement boost', icon: 'star' },
      { label: '95% delivery rate', icon: 'check' },
      { label: 'Fully personalized', icon: 'lightning' },
    ],
  },
  {
    id: 'z6',
    title: 'Typeform → CRM + Project Management + Email',
    description:
      'Qualified Typeform leads enriched via Clearbit/ZoomInfo, synced to HubSpot/Zoho CRM, auto-assigned to teams in ClickUp, added to Mailchimp nurture sequences, and instantly notified via Slack.',
    image: '/projects/zapier-typeform-crm.jpg',
    tech: ['Zapier', 'Typeform', 'HubSpot', 'ClickUp'],
    metrics: [
      { label: '100% form-to-CRM accuracy', icon: 'check' },
      { label: '80% less manual entry', icon: 'lightning' },
      { label: 'Instant team alerts', icon: 'star' },
    ],
  },
]

const MetricIcon = ({ type }: { type: string }) => {
  if (type === 'clock') return <Clock size={10} weight="bold" />
  if (type === 'lightning') return <Lightning size={10} weight="bold" />
  if (type === 'star') return <Star size={10} weight="bold" />
  return <CheckCircle size={10} weight="bold" />
}

/* ── Lightbox ──────────────────────────────────────────────────── */
function Lightbox({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }} />

        {/* Image container */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-3 max-w-5xl w-full"
          initial={{ scale: 0.88, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="self-end">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer' }}
            >
              <X size={13} weight="bold" /> Close
            </button>
          </div>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={title} className="w-full h-auto block" style={{ maxHeight: '80vh', objectFit: 'contain' }} />
          </div>

          {/* Title */}
          <p className="text-sm font-medium text-center" style={{ color: 'rgba(255,255,255,0.7)' }}>{title}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const ProjectCard = ({ project, i, onImageClick }: { project: typeof N8N_PROJECTS[0]; i: number; onImageClick: (src: string, title: string) => void }) => (
  <motion.article
    key={project.id}
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    className="group relative overflow-hidden rounded-2xl"
    style={{
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border)',
    }}
  >
    <div
      className="relative overflow-hidden cursor-zoom-in"
      style={{ height: 120 }}
      onClick={() => onImageClick(project.image, project.title)}
      title="Click to expand"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt=""
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 30%, var(--bg-elevated) 100%)',
        }}
      />
      <div
        className="absolute top-2 left-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
        style={{ background: 'var(--accent)', color: '#000' }}
      >
        {i + 1}
      </div>
      {/* Expand hint — visible on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: 'rgba(0,0,0,0.35)' }}
      >
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[10px] font-semibold"
          style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}
        >
          <MagnifyingGlassPlus size={12} weight="bold" /> Expand
        </div>
      </div>
    </div>

    <div className="px-3 pb-3 pt-1">
      <div className="flex items-start justify-between gap-1 mb-1">
        <h3 className="text-xs font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <button
          className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}
          aria-label="View project"
        >
          <ArrowUpRight size={10} weight="bold" />
        </button>
      </div>

      <p className="text-[11px] leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[9px] px-1.5 py-0.5 rounded-full"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1">
        {project.metrics.map((m) => (
          <span
            key={m.label}
            className="flex items-center gap-1 text-[9px] font-medium px-1.5 py-0.5 rounded-full"
            style={{
              background: 'var(--accent-glow)',
              color: 'var(--accent)',
              border: '1px solid var(--border-accent)',
            }}
          >
            <MetricIcon type={m.icon} />
            {m.label}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
)

const ProjectCards = memo(function ProjectCards() {
  const [tab, setTab] = useState<'n8n' | 'zapier' | 'ghl'>('n8n')
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null)
  const projects = tab === 'n8n' ? N8N_PROJECTS : tab === 'zapier' ? ZAPIER_PROJECTS : GHL_PROJECTS

  return (
    <div className="w-full">
      {/* Tab switcher */}
      <div className="flex gap-2 mb-3">
        {([
          { key: 'n8n', label: 'n8n' },
          { key: 'zapier', label: 'Zapier' },
          { key: 'ghl', label: 'GoHighLevel' },
        ] as const).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className="px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all duration-200"
            style={{
              background: tab === key ? 'var(--accent)' : 'var(--bg-elevated)',
              color: tab === key ? '#000' : 'var(--text-secondary)',
              border: `1px solid ${tab === key ? 'var(--accent)' : 'var(--border)'}`,
              cursor: 'pointer',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 gap-3"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              i={i}
              onImageClick={(src, title) => setLightbox({ src, title })}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
})

export default ProjectCards
