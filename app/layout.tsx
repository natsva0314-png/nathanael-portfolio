import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nathanael Calma — Workflow Automation Specialist',
  description:
    'AI-powered interactive portfolio of Nathanael Calma — n8n, Zapier & GoHighLevel expert from Mandaue City, Philippines. 50+ automations delivered, 500+ hours saved monthly.',
  openGraph: {
    title: 'Nathanael Calma — Workflow Automation Specialist',
    description: 'Talk to my AI. Ask me anything about n8n, Zapier, GoHighLevel, or how I can automate your business.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
