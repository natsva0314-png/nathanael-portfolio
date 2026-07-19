'use client';

import React, { useState } from 'react';

const MultiAgentCaseStudy: React.FC = () => {
  // Active state controller to track which image is blown up fullscreen
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = {
    slack: "/projects/slack.png",
    mainAgent: "/projects/agent1.png",
    subAgent: "/projects/agent1sub.png",
    sheet: "/projects/sheet.png",
    gmail: "/projects/gmail.png"
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-[#030712] overflow-y-auto z-50 text-slate-400 font-sans antialiased text-sm scroll-smooth">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Category Tag */}
        <div className="flex justify-start mb-4">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-950/40 border border-cyan-800/30 px-3 py-1 rounded-full">
            ✦ Agency Operations
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-8">
          Autonomous Multi-Agent Crisis Triage &amp; Workforce Governance Engine
        </h1>

        {/* Metrics Blocks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#0b0f19]/60 p-5 rounded-xl border border-slate-900/80">
            <div className="text-xl font-bold text-white">3 Hours</div>
            <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">Manual Triage Buffer</div>
          </div>
          <div className="bg-[#0b0f19]/60 p-5 rounded-xl border border-slate-900/80">
            <div className="text-xl font-bold text-cyan-400">99.5% Success</div>
            <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">Operational Velocity</div>
          </div>
          <div className="bg-[#0b0f19]/60 p-5 rounded-xl border border-slate-900/80">
            <div className="text-xl font-bold text-white">3s</div>
            <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">Automated Loop Time</div>
          </div>
          <div className="bg-[#0b0f19]/60 p-5 rounded-xl border border-slate-900/80">
            <div className="text-xl font-bold text-white">0% Bias</div>
            <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">Data Governance</div>
          </div>
        </div>

        {/* The Challenge Block */}
        <div className="mb-14 border-t border-slate-900 pt-8">
          <h2 className="text-base font-bold text-white mb-4">// The Challenge</h2>
          <p className="text-slate-400 mb-4 leading-relaxed text-xs">
            Scaling digital creator agencies operate round-the-clock, meaning administrative or infrastructure delays directly impact tip revenue pipelines. Manual workflows completely stall under chaotic conditions:
          </p>
          <ul className="space-y-2.5 text-xs text-slate-400 pl-0 list-none">
            <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Unstructured streams of message pings confuse task priority levels.</li>
            <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Critical 504 webhook crashes and profile locks sit unresolved for hours.</li>
            <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Workforce project bottlenecks are tracked using human opinions instead of logs.</li>
          </ul>
        </div>

        {/* The Solution Blocks Grid Layout */}
        <div className="border-t border-slate-900 pt-8 mb-14">
          <h2 className="text-base font-bold text-white mb-8">// The Solution ➔ Automation Systems</h2>
          <div className="space-y-12">
            
            {/* Module 1 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">01</div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white">Phase 1: Raw Dynamic Input</h3>
                  <p className="text-xs text-cyan-400 mt-0.5 font-medium">Slack Operational Sandbox Sensor</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-12">
                The entry engine acts as an early-warning monitor. It tracks active channels to capture complex API failures, text dumps, and system alerts, structuring string vectors for the worker nodes.
              </p>
              <div className="pl-12 flex flex-wrap gap-1.5">
                {['Slack API', 'String Ingestion', 'Payload Capture'].map(badge => (
                  <span key={badge} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800 font-mono">{badge}</span>
                ))}
              </div>
              <div className="pl-12 pt-2">
                <div onClick={() => setActiveImage(images.slack)} className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900/60 shadow-2xl cursor-zoom-in group relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30">
                  <div className="absolute inset-0 bg-cyan-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                    <span className="bg-slate-950/80 text-cyan-400 border border-slate-800 text-[10px] px-2.5 py-1 rounded font-mono uppercase tracking-wider shadow-xl">Click to expand</span>
                  </div>
                  <img src={images.slack} alt="Slack Stream Payload" className="w-full h-auto rounded-lg block object-cover" />
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="space-y-4 border-t border-slate-900/50 pt-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">02</div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white">Ops Triage Supervisor</h3>
                  <p className="text-xs text-cyan-400 mt-0.5 font-medium">Zapier Copilot Parent Manager Agent</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-12">
                An autonomous processing engine. The agent filters the data arrays, separates critical infrastructure exceptions from backlogs, and dynamically constructs an hour-by-hour triage script.
              </p>
              <div className="pl-12 flex flex-wrap gap-1.5">
                {['Zapier Copilot', 'AI Core', 'Incident Matrix'].map(badge => (
                  <span key={badge} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800 font-mono">{badge}</span>
                ))}
              </div>
              <div className="pl-12 pt-2">
                <div onClick={() => setActiveImage(images.mainAgent)} className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900/60 shadow-2xl cursor-zoom-in group relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30">
                  <div className="absolute inset-0 bg-cyan-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                    <span className="bg-slate-950/80 text-cyan-400 border border-slate-800 text-[10px] px-2.5 py-1 rounded font-mono uppercase tracking-wider shadow-xl">Click to expand</span>
                  </div>
                  <img src={images.mainAgent} alt="Manager Agent Strategy" className="w-full h-auto rounded-lg block object-cover" />
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
                  <span key={badge} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800 font-mono">{badge}</span>
                ))}
              </div>
              <div className="pl-12 pt-2">
                <div onClick={() => setActiveImage(images.subAgent)} className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900/60 shadow-2xl cursor-zoom-in group relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30">
                  <div className="absolute inset-0 bg-cyan-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                    <span className="bg-slate-950/80 text-cyan-400 border border-slate-800 text-[10px] px-2.5 py-1 rounded font-mono uppercase tracking-wider shadow-xl">Click to expand</span>
                  </div>
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
                The core analytical data archive. System rules force the tool to write crisp cell formatting blocks, injecting system diagnostics, copy-ready communication messages, and bypass strategies.
              </p>
              <div className="pl-12 flex flex-wrap gap-1.5">
                {['Google Sheets API', 'Structured Database', 'System Logging'].map(badge => (
                  <span key={badge} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800 font-mono">{badge}</span>
                ))}
              </div>
              <div className="pl-12 pt-2">
                <div onClick={() => setActiveImage(images.sheet)} className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900/60 shadow-2xl cursor-zoom-in group relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30">
                  <div className="absolute inset-0 bg-cyan-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                    <span className="bg-slate-950/80 text-cyan-400 border border-slate-800 text-[10px] px-2.5 py-1 rounded font-mono uppercase tracking-wider shadow-xl">Click to expand</span>
                  </div>
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
                The programmatic completion of the automated lifecycle. Pushes styled emails containing colored content groupings, summaries, and anchor web elements straight to the phone for review.
              </p>
              <div className="pl-12 flex flex-wrap gap-1.5">
                {['Gmail SDK', 'Inbox Alerts', 'Branded CSS Blocks'].map(badge => (
                  <span key={badge} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800 font-mono">{badge}</span>
                ))}
              </div>
              <div className="pl-12 pt-2">
                <div onClick={() => setActiveImage(images.gmail)} className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900/60 shadow-2xl cursor-zoom-in group relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30">
                  <div className="absolute inset-0 bg-cyan-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                    <span className="bg-slate-950/80 text-cyan-400 border border-slate-800 text-[10px] px-2.5 py-1 rounded font-mono uppercase tracking-wider shadow-xl">Click to expand</span>
                  </div>
                  <img src={images.gmail} alt="Final Branded Email Notification" className="w-full h-auto rounded-lg block object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>

      {/* Modern Lightbox Modal Overlay for Fullscreen High-Resolution Image Expansion */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)} 
          className="fixed inset-0 bg-slate-950/95 z-[100] flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
        >
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-xl transition-colors duration-200 text-slate-300 text-xs font-mono uppercase tracking-wider shadow-2xl">
            <span>Close View</span>
            <span className="font-sans font-bold text-sm">✕</span>
          </div>
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl w-full max-h-[85vh] bg-[#0b0f19] p-2 rounded-2xl border border-slate-800/60 shadow-2xl overflow-auto select-none"
          >
            <img 
              src={activeImage} 
              alt="Fullscreen Dashboard Preview" 
              className="w-full h-auto rounded-xl object-contain mx-auto shadow-inner"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiAgentCaseStudy;

