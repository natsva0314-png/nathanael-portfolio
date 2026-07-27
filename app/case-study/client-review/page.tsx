'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  Lightning,
  Clock,
  CheckCircle,
  Star,
  CalendarBlank,
  Robot,
  Envelope,
  ChartLineUp,
  Buildings,
  FileText,
  Gear,
} from '@phosphor-icons/react'

/* ─── Animated counter ───────────────────────────────────────── */
function AnimatedStat({ to, prefix = '', suffix = '', duration = 1.8 }: {
  to: number | string
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(typeof to === 'number' ? 0 : to)

  useEffect(() => {
    if (!inView || typeof to !== 'number') {
      if (typeof to === 'string') setDisplay(to)
      return
    }
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(ease * to))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}

const TOOLS = [
  'Zapier', 'Claude AI', 'Zapier Forms', 'Gmail',
  'Google Sheets',
]

const SYSTEMS = [
  {
    num: '01',
    title: 'Internal Transaction Agent Intake',
    steps: '100% of closed sales routed for feedback collection',
    desc: 'Triggered the exact second an internal agent enters transaction and client profile data into a secure intake form. This system establishes a clean database ledger, maps customer metadata parameters, and immediately deploys a personalized, automated transaction confirmation message to kick off the client engagement pipeline.',
    tools: ['Zapier Forms', 'Gmail', 'Google Sheets'],
    image: '/projects/ase.png',
    imageLabel: '[Agent Intake & Confirmation Pipeline — 3 Steps]',
    icon: FileText,
    metric: 'Zero manual data duplication across platforms',
  },
  {
    num: '02',
    title: 'Feedback Analysis & Human-in-the-Loop AI Review',
    steps: 'Agent quality gate to ensure 100% brand safety',
    desc: 'Captures raw, brief customer feedback from a dedicated external submission page. The workflow instantly channels the text through Anthropics Claude AI to analyze customer sentiment and expand casual notes into polished, professional testimonials that align with company brand guidelines. Rather than emailing the client directly, the system routes the generated text to the internal agent for approval via a secure verification email notification.',
    tools: ['Zapier Forms', 'Anthropic-Claude', 'Google Sheets', 'Gmail'],
    image: '/projects/apr.png',
    imageLabel: '[AI Testimonial Enrichment & Human Verification Engine — 7 Steps]',
    icon: Lightning,
    metric: 'Instant sentiment parsing of raw user text',
  },
  {
    num: '03',
    title: 'Dynamic Review Delivery & Retention Loop',
    steps: '3-day delayed behavioral follow-up sequence',
    desc: 'Monitors the central Google Sheets master database for a manual REVIEW APPROVAL checkbox update from the internal agent. Once checked, the pipeline automatically releases the approved review draft directly to the client via a personalized Gmail delivery layout embedded with direct review links for platforms like Google and Zillow. To maximize conversion rates, a time delay step pauses the pipeline before evaluating client action and issuing an automated follow-up reminder if needed.',
    tools: ['Zapier', 'Google Sheets', 'Gmail'],
    image: '/projects/sr.png',
    imageLabel: '[Review Delivery & Behavioral Follow-up Pipeline — 6 Steps]',
    icon: Star,
    metric: 'Automated omnichannel review links deployed',
  },
]

const PLACEHOLDERS = [
  { 
    label: 'Client Experience Intake Portal', 
    icon: Envelope, 
    image: '/projects/Form.png' 
  },
  { 
    label: 'Internal Agent Approval Alert', 
    icon: Buildings, 
    image: '/projects/nrr.png' 
  },
  { 
    label: 'Final Client Delivery Layout', 
    icon: ChartLineUp, 
    image: '/projects/er.png' 
  },
]

const RESULTS = [
  { value: 0, display: 'Seconds', label: 'Time required to translate customer thoughts into professional testimonials (was 5 mins)', prefix: '' },
  { value: 15, suffix: '+', label: 'Hours saved every single week across the business operations team', prefix: '' },
  { value: 2, suffix: '+', label: 'Integrated public review platforms linked directly to minimize user friction', prefix: '' },
  { value: 0, suffix: '', label: 'Manual follow-up emails left for sales agents to manage individually', prefix: '' },
  { value: 100, suffix: '%', label: 'Automated tracking from raw feedback submission to enriched review drafts', prefix: '' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function RealEstateCaseStudy() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    // Inherit theme from main app's html class
    const isLight = document.documentElement.classList.contains('light')
    setTheme(isLight ? 'light' : 'dark')
    // Allow scrolling on this page
    document.body.style.overflow = 'auto'
    return () => { document.body.style.overflow = 'hidden' }
  }, [])

  useEffect(() => {
    const html = document.documentElement
    if (theme === 'light') html.classList.add('light')
    else html.classList.remove('light')
  }, [theme])

  return (
    <div
      className={theme}
      style={{ minHeight: '100dvh', background: 'var(--bg)', color: 'var(--text-primary)' }}
    >
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.035\'/%3E%3C/svg%3E")',
          zIndex: 1,
        }}
      />

      {/* Nav */}
      <nav
        className="sticky top-0 z-30 flex items-center justify-between px-5 py-3"
        style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
      >
        <Link href="/">
          <motion.div
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            <ArrowLeft size={16} weight="bold" />
            Back to Portfolio
          </motion.div>
        </Link>
        <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
          nath.ai
        </span>
        <button
          onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
          className="text-xs px-3 py-1.5 rounded-lg transition-all"
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text-secondary)', cursor: 'pointer' }}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 pb-24">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: 'var(--accent-glow)',
                border: '1px solid var(--border-accent)',
                color: 'var(--accent)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              AI Implementation
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            AI-Powered{' '}
            <span style={{ color: 'var(--accent)' }}>Client Review</span>{' '}
            Engine
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            {[
              { icon: Robot, text: 'Transaction Intake Portal' },
              { icon: Gear, text: 'Human-in-the-Loop AI Review' },
              { icon: CheckCircle, text: 'Dynamic Review Delivery Loop' },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-1.5 text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Icon size={14} weight="bold" style={{ color: 'var(--accent)' }} />
                {text}
              </div>
            ))}
          </motion.div>

          {/* Hero stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14"
          >
            {[
              { value: '3', label: 'Connected Systems' },
              { value: '5 mins → 1 sec', label: 'Review Generation Speed' },
              { value: '15+', label: 'Hrs Saved / Week' },
              { value: '100%', label: 'Brand Compliance' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-4 text-center"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              >
                <p className="text-xl font-bold tracking-tight mb-1" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                  {s.value}
                </p>
                <p className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Challenge ─────────────────────────────────────────── */}
        <Section title="The Challenge">
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
          >
            <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
              A high-volume real estate boutique was struggling to capture high-quality client reviews after closing successful transactions. Manual follow-up methods were slow, inconsistent, and often resulted in vague customer feedback that failed to boost SEO rankings or build strong public trust on platforms like Google and Zillow.
            </p>
            <ul className="space-y-3">
              {[
                'Sales agents wasted hours manually drafting and sending review request emails',
                'Client feedback was often too short or lacked professional context to serve as strong social proof',
                'Valuable testimonials remained buried in private emails instead of moving to public platforms',
                'Negative or neutral client sentiment went unmonitored without internal escalation pathways',
                'No automated follow-up loop existed to remind busy clients to publish their drafted reviews',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px]"
                    style={{ background: 'rgba(239,68,68,0.12)', color: 'rgb(239,68,68)', border: '1px solid rgba(239,68,68,0.25)' }}
                  >
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* ── Solution ─────────────────────────────────────────── */}
        <Section title="The Solution — 3 Automated Systems">
          <div className="space-y-8">
            {SYSTEMS.map((sys, i) => (
              <motion.div
                key={sys.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl overflow-hidden"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              >
                {/* System header */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold"
                      style={{ background: 'var(--accent-glow)', border: '1px solid var(--border-accent)', color: 'var(--accent)' }}
                    >
                      {sys.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>
                        {sys.title}
                      </h3>
                      <p className="text-xs font-medium" style={{ color: 'var(--accent)' }}>
                        {sys.steps}
                      </p>
                    </div>
                    <div
                      className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold"
                      style={{ background: 'var(--accent-glow)', border: '1px solid var(--border-accent)', color: 'var(--accent)' }}
                    >
                      <CheckCircle size={11} weight="fill" />
                      {sys.metric}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {sys.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {sys.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-lg"
                        style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

               <WorkflowDisplay sys={sys} />

              </motion.div>
            ))}
          </div>
        </Section>

               {/* ── Output Screenshots (Dynamically Rendered) ─────────────────── */}
        <Section title="Output Screenshots">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLACEHOLDERS.map((placeholder) => {
              const Icon = placeholder.icon;
              // Check if the current placeholder item contains a local directory image path mapping
              const hasImage = 'image' in placeholder && placeholder.image;

              return (
                <motion.div
                  key={placeholder.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-2xl overflow-hidden flex flex-col ${hasImage ? 'p-2 bg-[#0b0f19]/40 border border-slate-900/60 shadow-2xl' : 'py-14 justify-center items-center gap-3'}`}
                  style={!hasImage ? {
                    background: 'var(--bg-surface)',
                    border: '1px dashed var(--border-accent)',
                  } : undefined}
                >
                  {hasImage ? (
                    <img 
                      src={placeholder.image} 
                      alt={placeholder.label} 
                      className="w-full h-auto rounded-xl block object-cover" 
                    />
                  ) : (
                    <>
                      <Icon size={28} weight="thin" style={{ color: 'var(--accent)', opacity: 0.6 }} />
                      <span className="text-xs text-center px-4" style={{ color: 'var(--text-secondary)' }}>
                        [{placeholder.label}]
                      </span>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </Section>


        {/* ── Tools ─────────────────────────────────────────────── */}
        <Section title="Tools & Stack">
          <div className="flex flex-wrap gap-2.5">
            {TOOLS.map((tool) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </Section>

        {/* ── Results ───────────────────────────────────────────── */}
        <Section title="Results">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Time to turn raw client feedback into professional reviews', top: '5 mns', bottom: 'Seconds', accent: true },
              { label: 'Hours saved every', num: 15, suffix: '+', bottom: 'single week across the team' },
              { label: 'Zapier automation workflows', num: 3, suffix: '', bottom: 'running seamlessly together' },
              { label: 'Manual follow-up emails', num: 0, suffix: '', bottom: 'left for sales agents to manage' },
              { label: 'Brand guideline compliance', num: 100, suffix: '%', bottom: 'across all generated outputs' },
              { label: 'Directly linked review channels', num: 2, suffix: '+', bottom: 'integrated to minimize user friction' },
            ].map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-5 text-center"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              >
                {r.top ? (
                  <div>
                    <p className="text-xs line-through mb-0.5" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>{r.top}</p>
                    <p className="text-2xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{r.bottom}</p>
                  </div>
                ) : (
                  <p className="text-2xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                    <AnimatedStat to={r.num!} suffix={r.suffix} />
                  </p>
                )}
                <p className="text-[10px] uppercase tracking-wider mt-2" style={{ color: 'var(--text-secondary)' }}>{r.label}</p>
                {!r.top && r.bottom && (
                  <p className="text-[11px] mt-1" style={{ color: 'var(--text-secondary)', opacity: 0.65 }}>{r.bottom}</p>
                )}
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 rounded-3xl p-8 md:p-12 text-center"
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-accent)',
            boxShadow: '0 0 60px var(--accent-glow)',
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: 'var(--accent-glow)', border: '1px solid var(--border-accent)', color: 'var(--accent)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            Business Operations Automation
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
            Want a similar system for your business?
          </h2>
          <p className="text-sm max-w-md mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
            Book a free 30-minute strategy call and I&apos;ll map out exactly which automations will have the biggest impact for your operations.
          </p>
          <motion.a
            href="https://calendly.com/natsva0314/30min?month=2026-04"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold"
            style={{
              background: 'var(--accent)',
              color: '#000',
              textDecoration: 'none',
              boxShadow: '0 0 32px var(--accent-glow-strong)',
            }}
          >
            <CalendarBlank size={18} weight="bold" />
            Book a Free Strategy Call
          </motion.a>
        </motion.div>

      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      <h2 className="text-lg font-bold tracking-tight mb-5" style={{ color: 'var(--text-primary)' }}>
        <span style={{ color: 'var(--accent)' }}>/ </span>{title}
      </h2>
      {children}
    </motion.section>
  )
}
function WorkflowDisplay({ sys }: { sys: any }) {
  // Scenario A: If this project contains the 7-workflow multi-tab setup
  if (sys.workflows && sys.workflows.length > 0) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
      <div className="border-t border-slate-800">
        {/* Workflow Tab Selection Banner */}
        <div className="p-4 md:p-6 flex flex-wrap gap-2 border-b border-slate-800">
          {sys.workflows.map((wf: any, idx: number) => {
            const isActive = activeIndex === idx
            return (
              <button
                key={wf.label}
                onClick={() => setActiveIndex(idx)}
                className={`text-[11px] md:text-xs px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#04d9ff]/10 border border-[#04d9ff]/30 text-[#04d9ff]'
                    : 'bg-transparent border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {wf.label}
              </button>
            )
          })}
        </div>
        
        {/* Dynamic Image Display Area */}
        <div className="relative mx-4 my-4 md:mx-6 md:my-6 rounded-xl overflow-hidden border border-slate-800">
          <Image
            src={sys.workflows[activeIndex].path}
            alt={sys.workflows[activeIndex].label}
            width={900}
            height={520}
            className="w-full h-auto object-contain bg-[#111827]"
          />
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[10px] font-medium bg-[#0b0f19] border-t border-slate-800 text-slate-400">
            [{sys.workflows[activeIndex].label}]
          </div>
        </div>
      </div>
    )
  }

  // Scenario B: Fallback logic for your older projects using a standard single image
  if (sys.image) {
    return (
      <div className="relative mx-4 mb-4 md:mx-6 md:mb-6 rounded-xl overflow-hidden border border-slate-800">
        <Image
          src={sys.image}
          alt={sys.imageLabel || sys.title}
          width={900}
          height={520}
          className="w-full h-auto object-contain bg-[#111827]"
        />
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[10px] font-medium bg-[#0b0f19] border-t border-slate-800 text-slate-400">
          [{sys.imageLabel || sys.title}]
        </div>
      </div>
    )
  }

  return null
}
