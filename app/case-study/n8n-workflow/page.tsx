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
  'Zapier', 'Zapier Agents', 'Airtable', 'Gmail API',
  'Slack Developer', 'Google Sheets',
]

const SYSTEMS = [
  {
    num: '01',
    title: 'Phase 1: Raw Dynamic Input',
    steps: 'Slack Operational Sandbox Sensor',
    desc: 'The entry engine acts as an early-warning monitor. It tracks active channels to capture complex API failures, text dumps, and system alerts, structuring string vectors for the worker nodes.',
    tools: ['Zapier', 'Claude AI', 'Gmail', 'Slack API', 'String Ingestion', 'Payload Capture', 'Google Sheets'],
    image: '/projects/slack.png',
    imageLabel: 'Slack Channel Message',
    icon: FileText,
    metric: 'Compiled Messages',
  },
  {
    num: '02',
    title: 'Ops Triage Supervisor',
    steps: 'Zapier Copilot Parent Manager Agent',
    desc: 'An autonomous processing engine. The agent filters the data arrays, separates critical infrastructure exceptions from backlogs, and dynamically constructs an hour-by-hour triage script.',
    tools: ['Zapier Copilot', 'AI Core', 'Incident Matrix'],
    image: '/projects/Agent01.png',
    imageLabel: 'Manager Agent',
    icon: Lightning,
    metric: 'Main Architect',
  },
  {
    num: '03',
    title: 'Decentralized Task Routing',
    steps: 'Gmail Briefing Copywriter Sub-Agent Worker',
    desc: 'To guarantee absolute runtime protection, a strict separation of concerns decoupling handles execution. The main logic manager delegates template layout formatting down to a secondary worker bot.',
    tools: ['Zapier', 'Sub-Agents', 'Decoupled Logice', 'Gmail', 'Template Engineering'],
    image: '/projects/agent1sub.png',
    imageLabel: 'Sub Agent',
    icon: Star,
    metric: '100% email sent',
  },
  {
    num: '04',
    title: 'Persistent Audit Registry',
    steps: 'Multi-Paragraph Google Sheets Log Matrix',
    desc: 'The core analytical data archive. System rules force the tool to write crisp cell formatting blocks, injecting system diagnostics, copy-ready communication messages, and bypass strategies.',
    tools: ['Zapier', 'Google Sheets API', 'Structured Database', 'System Logging'],
    image: '/projects/Sheet1.png',
    imageLabel: 'Sub Agent',
    icon: Star,
    metric: '100% email sent',
  },
  {
    num: '05',
    title: 'Branded Inbox Delivery',
    steps: 'Executive Branded Intelligence Client Briefing',
    desc: 'The programmatic completion of the automated lifecycle. Pushes styled emails containing colored content groupings, summaries, and anchor web elements straight to the phone for review.',
    tools: ['Zapier', 'Gmail SDK', 'Inbox Alerts', 'Branded CSS Blocks'],
    image: '/projects/Gmail1.png',
    imageLabel: 'Gmail Message',
    icon: Star,
    metric: 'Daily Update Briefing',
  },
]

const RESULTS = [
  { value: 0, display: 'Seconds', label: 'Speed to action (was 3 hrs)', prefix: '' },
  { value: 20, suffix: '+', label: 'Hours saved every week', prefix: '' },
  { value: 2, suffix: '', label: 'Automation system built', prefix: '' },
  { value: 2, suffix: '', label: 'Agent Running', prefix: '' },
  { value: 100, suffix: '%', label: 'Message Sorting automated', prefix: '' },
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
              Featured Case Study
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Autonomous{' '}
            <span style={{ color: 'var(--accent)' }}>Multi-Agent</span>{' '}
            Crisis Triage
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            {[
              { icon: Robot, text: 'Multi-Agent' },
              { icon: Gear, text: 'Speed Support' },
              { icon: CheckCircle, text: 'AI Automation Specialist' },
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
              { value: '3 Hrs', label: 'Manual Triage Buffer' },
              { value: '99.5% Success', label: 'Operational Velocity' },
              { value: '3s', label: 'Automated Loop Time' },
              { value: '0% Bias', label: 'Data Governance' },
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
              Scaling digital creator agencies operate round-the-clock, meaning administrative or infrastructure delays directly impact tip revenue pipelines. Manual workflows completely stall under chaotic conditions:
            </p>
            <ul className="space-y-3">
              {[
                'High-Velocity Multi-Task Ingestion: Dozens of competing operational strings arrive simultaneously, hiding critical server drops behind routine status chatter.',
                'The First-Hour Management Bottleneck: Human sorting limits force a 60-minute processing delay before actionable triage plans can even be drafted.Subjective Workforce Intervention: Escalating system blockages and team rebalancing are handled through emotional arguments rather than clear relational database thresholds.',
                'Subjective Workforce Intervention: Escalating system blockages and team rebalancing are handled through emotional arguments rather than clear relational database thresholds.',
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
        <Section title="The Solution — Automation Systems">
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
              { label: 'Speed to action', top: '3 hrs', bottom: 'Seconds', accent: true },
              { label: 'Hours saved / week', num: 20, suffix: '+', bottom: 'Manual hours eliminated' },
              { label: 'Automation systems', num: 2, suffix: '', bottom: 'Running simultaneously' },
              { label: 'Agent Running', num: 2, suffix: '', bottom: 'Across engines' },
              { label: 'Message sorting automated', num: 100, suffix: '%', bottom: 'Zero manual sorting' },
              { label: 'Bulk messages answered', num: 100, suffix: '%', bottom: 'In day to day basis' },
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
            Multi-Agent Automation
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
            Want a similar system for your business?
          </h2>
          <p className="text-sm max-w-md mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
            Book a free 30-minute strategy call and I&apos;ll map out exactly which automations will have the biggest impact for your brokerage.
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
