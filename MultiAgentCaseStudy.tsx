'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MultiAgentCaseStudy: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = {
    slack: "/projects/slack.png",
    mainAgent: "/projects/agent1.png",
    subAgent: "/projects/agent1sub.png",
    sheet: "/projects/sheet.png",
    gmail: "/projects/gmail.png"
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-[#030712] overflow-y-auto z-50 text-zinc-400 font-sans antialiased text-sm scroll-smooth">
      
      {/* Premium Global Navigation Header Peak */}
      <nav className="sticky top-0 w-full bg-[#030712]/80 backdrop-blur-md border-b border-slate-900/60 z-50 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          
          {/* Back Action Link Button */}
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 text-xs font-semibold no-underline">
            <span className="text-sm">←</span>
            <span>Back to Portfolio</span>
          </Link>

          {/* Centered Premium Branded Text Signature */}
          <div className="text-cyan-400 font-mono font-black tracking-widest text-sm uppercase select-none">
            Nath.ai
          </div>

          {/* Right Mode Theme Status Pill */}
          <div className="bg-[#0b0f19]/80 border border-slate-800/60 px-3 py-1.5 rounded-xl text-zinc-400 text-[11px] font-medium select-none shadow-sm">
            Light
          </div>

        </div>
      </nav>

      {/* Main Portfolio Content Case Area */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Category Tag */}
        <div className="flex justify-start mb-6">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest bg-cyan-950/20 border border-cyan-900/30 px-4 py-1.5 rounded-full">
            ✦ Multi-Agent AI Infrastructure
          </span>
        </div>

        {/* Premium Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-12">
          Autonomous Multi-Agent Crisis Triage &amp; <span className="text-cyan-400">Workforce Governance Engine</span>
        </h1>

        {/* Premium Value Metrics Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          <div className="bg-[#0b0f19]/60 p-6 rounded-2xl border border-slate-900 shadow-xl">
            <div className="text-3xl font-black text-white font-mono tracking-tight">3 Hours</div>
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Manual Triage Buffer</div>
          </div>
          <div className="bg-[#0b0f19]/60 p-6 rounded-2xl border border-slate-900 shadow-xl flex flex-col justify-center">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest tracking-wider">Compressed To ➔</div>
          </div>
          <div className="bg-[#0b0f19]/60 p-6 rounded-2xl border border-slate-900 shadow-xl text-cyan-400">
            <div className="text-3xl font-black font-mono tracking-tight">3 Seconds</div>
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Automated Loop</div>
          </div>
          <div className="bg-[#0b0f19]/60 p-6 rounded-2xl border border-slate-900 shadow-xl">
            <div className="text-3xl font-black text-white font-mono tracking-tight">0% Bias</div>
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Data Governance</div>
          </div>
        </div>

        {/* The Challenge Block */}
        <div className="mb-20 border-t border-slate-900 pt-12">
          <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-6 tracking-wide">// The Challenge</h2>
          <p className="text-zinc-400 mb-6 leading-relaxed text-sm">
            Scaling digital creator agencies operate round-the-clock, meaning administrative or infrastructure delays directly impact tip revenue pipelines. Manual workflows completely stall under chaotic conditions:
          </p>
          <ul className="space-y-3.5 text-sm text-zinc-400 pl-0 list-none">
            <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> <span className="text-zinc-400">Unstructured streams of pings confuse task priority levels.</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> <span className="text-zinc-400">Critical 504 webhook crashes and profile locks sit unresolved for hours.</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> <span className="text-zinc-400">Workforce project bottlenecks are tracked using human opinions instead of logs.</span></li>
          </ul>
        </div>

        {/* The Solution Modules Layout */}
        <div className="border-t border-slate-900 pt-12 mb-20">
          <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-12 tracking-wide">// The Solution ➔ Automation Blueprint</h2>
          <div className="space-y-20">
            
            {/* Module 1 */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500/20 bg-cyan-950/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">01</div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white tracking-tight">Phase 1: Raw Dynamic Input</h3>
                  <p className="text-xs text-cyan-400 font-semibold tracking-wide mt-0.5">Slack Operational Sandbox Sensor</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed pl-12 max-w-3xl">
                The entry engine acts as an early-warning monitor. It tracks active channels to capture complex API failures, text dumps, and system alerts, structuring string vectors for the worker nodes.
              </p>
              <div className="pl-12 flex flex-wrap gap-2">
                {['Slack API', 'String Ingestion', 'Payload Capture'].map(badge => (
                  <span key={badge} className="text-[10px] bg-[#0b0f19] text-zinc-400 px-3 py-1 rounded border border-slate-800/80 font-mono">{badge}</span>
                ))}
              </div>
              <div className="pl-12 pt-2">
                <div onClick={() => setActiveImage(images.slack)} className="bg-[#0b0f19]/40 p-2.5 rounded-2xl border border-slate-900 shadow-2xl cursor-zoom-in group relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30">
                  <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                    <span className="bg-slate-950/90 text-cyan-400 border border-slate-800 text-[10px] px-3 py-1.5 rounded-lg font-mono uppercase tracking-wider shadow-xl">Click to expand</span>
                  </div>
                  <img src={images.slack} alt="Slack Stream Payload" className="w-full h-auto rounded-xl block object-cover" />
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="space-y-5 border-t border-slate-900/60 pt-16">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500/20 bg-cyan-950/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">02</div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white tracking-tight">Ops Triage Supervisor</h3>
                  <p className="text-xs text-cyan-400 font-semibold tracking-wide mt-0.5">Zapier Copilot Parent Manager Agent</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed pl-12 max-w-3xl">
                An autonomous processing engine built inside Zapier Copilot Agents. The agent filters data arrays, separates infrastructure exceptions from backlogs, and dynamically constructs a triage script.
              </p>
              <div className="pl-12 flex flex-wrap gap-2">
                {['Zapier Copilot', 'AI Core', 'Incident Matrix'].map(badge => (
                  <span key={badge} className="text-[10px] bg-[#0b0f19] text-zinc-400 px-3 py-1 rounded border border-slate-800/80 font-mono">{badge}</span>
                ))}
              </div>
              <div className="pl-12 pt-2">
                <div onClick={() => setActiveImage(images.mainAgent)} className="bg-[#0b0f19]/40 p-2.5 rounded-2xl border border-slate-900 shadow-2xl cursor-zoom-in group relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30">
                  <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                    <span className="bg-slate-950/90 text-cyan-400 border border-slate-800 text-[10px] px-3 py-1.5 rounded-lg font-mono uppercase tracking-wider shadow-xl">Click to expand</span>
                  </div>
                  <img src={images.mainAgent} alt="Manager Agent Strategy" className="w-full h-auto rounded-xl block object-cover" />
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="space-y-4 border-t border-slate-900/50 pt-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">03</div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white">Decentralized Task Routing</h3>
                  <p className="text-xs text-cyan-400 mt-0.5 font-medium">Gmail Briefing Copywriter Sub-Agent Worker</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-12">
                To guarantee absolute runtime protection, a strict separation of concerns decoupling handles execution. The main logic manager delegates template layout formatting down to a secondary worker bot.
              </p>
              <div className="pl-12 flex flex-wrap gap-1.5">
                {['Sub-Agents', 'Decoupled Logic', 'Template Engineering'].map(badge => (
                 <span key={badge} className="text-[10px] bg-[#0b0f19] text-zinc-400 px-3 py-1 rounded border border-slate-800/80 font-mono">{badge}</span>
                ))}  
              </div>
              <div className="pl-12 pt-2">
                <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900/60 shadow-2xl">
                  <img src={images.subAgent} alt="Sub-Agent Panel" className="w-full h-auto rounded-lg block object-cover" />
                </div>
              </div>
            </div>

                        {/* Module 4 */}
            <div className="space-y-4 border-t border-slate-900/50 pt-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">04</div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white">Persistent Audit Registry</h3>
                  <p className="text-xs text-cyan-400 mt-0.5 font-medium">Multi-Paragraph Google Sheets Log Matrix</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-12">
                The core analytical data archive. System rules force the tool to write crisp cell formatting blocks, injecting system diagnostics, copy-ready communication messages, and bypass strategies [INDEX_4].
              </p>
              <div className="pl-12 flex flex-wrap gap-1.5">
                {['Google Sheets API', 'Structured Database', 'System Logging'].map(badge => (
                  <span key={badge} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800 font-mono">{badge}</span>
                ))}
              </div>
              <div className="pl-12 pt-2">
                <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900/60 shadow-2xl">
                  <img src={images.sheet} alt="Google Sheet Storage Matrix" className="w-full h-auto rounded-lg block object-cover" />
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="space-y-4 border-t border-slate-900/50 pt-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">05</div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white">Branded Inbox Delivery</h3>
                  <p className="text-xs text-cyan-400 mt-0.5 font-medium">Executive Branded Intelligence Client Briefing</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-12">
                The programmatic completion of the automated lifecycle. Pushes styled emails containing colored content groupings, summaries, and anchor web elements straight to the phone for review [INDEX_6].
              </p>
              <div className="pl-12 flex flex-wrap gap-1.5">
                {['Gmail SDK', 'Inbox Alerts', 'Branded CSS Blocks'].map(badge => (
                  <span key={badge} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800 font-mono">{badge}</span>
                ))}
              </div>
              <div className="pl-12 pt-2">
                <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900/60 shadow-2xl">
                  <img src={images.gmail} alt="Final Branded Email Notification" className="w-full h-auto rounded-lg block object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Output Generation Blocks Layout */}
        <div className="border-t border-slate-900 pt-8 mb-14">
          <h2 className="text-base font-bold text-white mb-6">// Output Generation</h2>
          <div className="space-y-3">
            <div className="bg-[#0b0f19]/30 p-5 rounded-xl border border-slate-900/80">
              <div className="text-xs font-bold text-white mb-1">⚙️ Zero Loop Latency Pipeline</div>
              <p className="text-slate-500 text-[11px] leading-relaxed">Routes complex technical crashes into active execution queues instantly, blocking any idleness across your operations pipelines [INDEX_4].</p>
            </div>
            <div className="bg-[#0b0f19]/30 p-5 rounded-xl border border-slate-900/80">
              <div className="text-xs font-bold text-white mb-1">🔒 Systemized Operations Accountability</div>
              <p className="text-slate-500 text-[11px] leading-relaxed">Replaces human management bias with proactive data monitors, delivering diagnostic roadmaps completely on autopilot [INDEX_5].</p>
            </div>
          </div>
        </div>

        {/* Tools Used Grid */}
        <div className="border-t border-slate-900 pt-8 mb-14">
          <h2 className="text-base font-bold text-white mb-4">// Tools Used</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-[10px] font-mono font-medium text-slate-400">
            {['Zapier AI', 'Airtable', 'Google Sheets', 'Gmail API', 'Slack Developer', 'Tailwind CSS'].map(tool => (
              <div key={tool} className="bg-[#0b0f19] py-2 px-1 rounded border border-slate-900">{tool}</div>
            ))}
          </div>
        </div>

        {/* Lead Capture Footer */}
        <div className="bg-[#0b0f19]/60 border border-slate-900 p-8 rounded-2xl text-center shadow-2xl">
          <span className="text-cyan-400 font-mono text-[9px] uppercase tracking-widest bg-cyan-400/5 border border-cyan-400/15 px-2.5 py-1 rounded">Project Complete</span>
          <h3 className="text-base font-extrabold text-white mt-4 mb-2 tracking-tight">Want a similar automated system for your agency business?</h3>
          <p className="text-slate-500 text-xs max-w-md mx-auto mb-6 leading-relaxed">
            Let's link your systems, configure custom parent orchestrators, and deploy worker sub-agent automation nodes to save hours of manual overhead.
          </p>
          <a href="https://vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-lg shadow-xl shadow-cyan-400/10 hover:scale-[1.01] transition-transform duration-200 no-underline">
            📬 Consult with Nathanael
          </a>
        </div>

      </div>
    </div>
  );
};

export default MultiAgentCaseStudy;

