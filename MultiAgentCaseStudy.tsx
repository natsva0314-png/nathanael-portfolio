import React from 'react';

const MultiAgentCaseStudy: React.FC = () => {
  const images = {
    slack: "/projects/slack.png",
    mainAgent: "/projects/agent1.png",
    subAgent: "/projects/agent1sub.png",
    sheet: "/projects/sheet.png",
    gmail: "/projects/Gmail1.png"
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
                <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900/60 shadow-2xl">
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
                <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900/60 shadow-2xl">
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
                The core analytical data archive [INDEX_4]. System rules force the tool to write crisp cell formatting blocks, injecting system diagnostics, copy-ready communication messages, and bypass strategies [INDEX_4].
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
                The programmatic completion of the automated lifecycle [INDEX_6]. Pushes styled emails containing colored content groupings, summaries, and anchor web elements straight to the phone for review [INDEX_6].
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

