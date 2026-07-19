import React from 'react';

const MultiAgentCaseStudy: React.FC = () => {
  const images = {
    slack: "/projects/slack.png",
    mainAgent: "/projects/Agent01.png",
    subAgent: "/projects/agent1sub.png",
    sheet: "/projects/Sheet1.png",
    gmail: "/projects/Gmail1.png"
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-[#030712] overflow-y-auto z-50 text-slate-400 font-sans antialiased text-sm scroll-smooth">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Category Tag */}
        <div className="flex justify-start mb-6">
          <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-950/60 border border-cyan-800/40 px-4 py-1.5 rounded-full flex items-center gap-1.5">
            ✦ Agency Operations
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tighter leading-tight mb-10">
          Autonomous Multi-Agent Crisis Triage &amp; Workforce Governance Engine
        </h1>

        {/* Metrics Blocks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-[#0b0f19]/70 p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-900/50 transition-all duration-200 group">
            <div className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">3 Hours</div>
            <div className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-2">Manual Triage Buffer</div>
          </div>
          <div className="bg-[#0b0f19]/70 p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-900/50 transition-all duration-200 group">
            <div className="text-3xl font-bold text-cyan-400">99.5%</div>
            <div className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-2">Operational Velocity</div>
          </div>
          <div className="bg-[#0b0f19]/70 p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-900/50 transition-all duration-200 group">
            <div className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">3s</div>
            <div className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-2">Automated Loop Time</div>
          </div>
          <div className="bg-[#0b0f19]/70 p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-900/50 transition-all duration-200 group">
            <div className="text-3xl font-bold text-emerald-400">0% Bias</div>
            <div className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-2">Data Governance</div>
          </div>
        </div>

        {/* The Challenge Block */}
        <div className="mb-16 border-t border-slate-800 pt-10">
          <h2 className="text-lg font-bold text-cyan-400 mb-6 tracking-tight">// The Challenge</h2>
          <p className="text-slate-400 mb-6 leading-relaxed text-[15px]">
            Scaling digital creator agencies operate round-the-clock, meaning administrative or infrastructure delays directly impact tip revenue pipelines. Manual workflows completely stall under chaotic conditions:
          </p>
          <ul className="space-y-4 text-[15px] text-slate-400">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5">✕</span>
              <span>Unstructured streams of message pings confuse task priority levels.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5">✕</span>
              <span>Critical 504 webhook crashes and profile locks sit unresolved for hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5">✕</span>
              <span>Workforce project bottlenecks are tracked using human opinions instead of logs.</span>
            </li>
          </ul>
        </div>

        {/* The Solution Blocks */}
        <div className="border-t border-slate-800 pt-10 mb-16">
          <h2 className="text-lg font-bold text-cyan-400 mb-10 tracking-tight">// The Solution ➔ Automation Systems</h2>
          
          <div className="space-y-16">
            {/* Module 1 */}
            <div>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-2xl border border-cyan-500/40 bg-cyan-950/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">01</div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold text-white">Phase 1: Raw Dynamic Input</h3>
                  <p className="text-cyan-400 mt-1 font-medium">Slack Operational Sandbox Sensor</p>
                </div>
              </div>

              <div className="pl-14 mt-4">
                <p className="text-slate-400 leading-relaxed text-[15px]">
                  The entry engine acts as an early-warning monitor. It tracks active channels to capture complex API failures, text dumps, and system alerts, structuring string vectors for the worker nodes.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {['Slack API', 'String Ingestion', 'Payload Capture'].map(badge => (
                    <span key={badge} className="text-xs bg-[#0b0f19] text-zinc-400 px-4 py-1.5 rounded-xl border border-slate-700 font-mono">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-6 bg-[#0b0f19] p-4 rounded-2xl border border-slate-800/80 shadow-inner">
                  <img 
                    src={images.slack} 
                    alt="Slack Stream Payload" 
                    className="w-full h-auto rounded-xl block" 
                  />
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="pt-12 border-t border-slate-800/60">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-2xl border border-cyan-500/40 bg-cyan-950/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">02</div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold text-white">Ops Triage Supervisor</h3>
                  <p className="text-cyan-400 mt-1 font-medium">Zapier Copilot Parent Manager Agent</p>
                </div>
              </div>

              <div className="pl-14 mt-4">
                <p className="text-slate-400 leading-relaxed text-[15px]">
                  An autonomous processing engine. The agent filters the data arrays, separates critical infrastructure exceptions from backlogs, and dynamically constructs an hour-by-hour triage script.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {['Zapier Copilot', 'AI Core', 'Incident Matrix'].map(badge => (
                    <span key={badge} className="text-xs bg-[#0b0f19] text-zinc-400 px-4 py-1.5 rounded-xl border border-slate-700 font-mono">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-6 bg-[#0b0f19] p-4 rounded-2xl border border-slate-800/80 shadow-inner">
                  <img 
                    src={images.mainAgent} 
                    alt="Manager Agent Strategy" 
                    className="w-full h-auto rounded-xl block" 
                  />
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="pt-12 border-t border-slate-800/60">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-2xl border border-cyan-500/40 bg-cyan-950/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">03</div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold text-white">Decentralized Task Routing</h3>
                  <p className="text-cyan-400 mt-1 font-medium">Gmail Briefing Copywriter Sub-Agent Worker</p>
                </div>
              </div>

              <div className="pl-14 mt-4">
                <p className="text-slate-400 leading-relaxed text-[15px]">
                  To guarantee absolute runtime protection, a strict separation of concerns decoupling handles execution. The main logic manager delegates template layout formatting down to a secondary worker bot.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {['Sub-Agents', 'Decoupled Logic', 'Template Engineering'].map(badge => (
                    <span key={badge} className="text-xs bg-[#0b0f19] text-zinc-400 px-4 py-1.5 rounded-xl border border-slate-700 font-mono">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-6 bg-[#0b0f19] p-4 rounded-2xl border border-slate-800/80 shadow-inner">
                  <img 
                    src={images.subAgent} 
                    alt="Sub-Agent Panel" 
                    className="w-full h-auto rounded-xl block" 
                  />
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="pt-12 border-t border-slate-800/60">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-2xl border border-cyan-500/40 bg-cyan-950/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">04</div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold text-white">Persistent Audit Registry</h3>
                  <p className="text-cyan-400 mt-1 font-medium">Multi-Paragraph Google Sheets Log Matrix</p>
                </div>
              </div>

              <div className="pl-14 mt-4">
                <p className="text-slate-400 leading-relaxed text-[15px]">
                  The core analytical data archive. System rules force the tool to write crisp cell formatting blocks, injecting system diagnostics, copy-ready communication messages, and bypass strategies.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {['Google Sheets API', 'Structured Database', 'System Logging'].map(badge => (
                    <span key={badge} className="text-xs bg-[#0b0f19] text-zinc-400 px-4 py-1.5 rounded-xl border border-slate-700 font-mono">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-6 bg-[#0b0f19] p-4 rounded-2xl border border-slate-800/80 shadow-inner">
                  <img 
                    src={images.sheet} 
                    alt="Google Sheet Storage Matrix" 
                    className="w-full h-auto rounded-xl block" 
                  />
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="pt-12 border-t border-slate-800/60">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-2xl border border-cyan-500/40 bg-cyan-950/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">05</div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold text-white">Branded Inbox Delivery</h3>
                  <p className="text-cyan-400 mt-1 font-medium">Executive Branded Intelligence Client Briefing</p>
                </div>
              </div>

              <div className="pl-14 mt-4">
                <p className="text-slate-400 leading-relaxed text-[15px]">
                  The programmatic completion of the automated lifecycle. Pushes styled emails containing colored content groupings, summaries, and anchor web elements straight to the phone for review.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {['Gmail SDK', 'Inbox Alerts', 'Branded CSS Blocks'].map(badge => (
                    <span key={badge} className="text-xs bg-[#0b0f19] text-zinc-400 px-4 py-1.5 rounded-xl border border-slate-700 font-mono">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-6 bg-[#0b0f19] p-4 rounded-2xl border border-slate-800/80 shadow-inner">
                  <img 
                    src={images.gmail} 
                    alt="Final Branded Email Notification" 
                    className="w-full h-auto rounded-xl block" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Output Generation */}
        <div className="border-t border-slate-800 pt-10 mb-16">
          <h2 className="text-lg font-bold text-cyan-400 mb-8 tracking-tight">// Output Generation</h2>
          <div className="space-y-4">
            <div className="bg-[#0b0f19]/70 p-7 rounded-2xl border border-slate-800/80">
              <div className="flex items-center gap-3 text-cyan-400 mb-3">
                <span className="text-xl">⚙️</span>
                <div className="font-semibold text-white">Zero Loop Latency Pipeline</div>
              </div>
              <p className="text-slate-400 text-[15px] leading-relaxed">
                Routes complex technical crashes into active execution queues instantly, blocking any idleness across your operations pipelines.
              </p>
            </div>

            <div className="bg-[#0b0f19]/70 p-7 rounded-2xl border border-slate-800/80">
              <div className="flex items-center gap-3 text-cyan-400 mb-3">
                <span className="text-xl">🔒</span>
                <div className="font-semibold text-white">Systemized Operations Accountability</div>
              </div>
              <p className="text-slate-400 text-[15px] leading-relaxed">
                Replaces human management bias with proactive data monitors, delivering diagnostic roadmaps completely on autopilot.
              </p>
            </div>
          </div>
        </div>

        {/* Tools Used */}
        <div className="border-t border-slate-800 pt-10 mb-16">
          <h2 className="text-lg font-bold text-cyan-400 mb-6 tracking-tight">// Tools Used</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 text-center text-xs font-mono">
            {['Zapier AI', 'Airtable', 'Google Sheets', 'Gmail API', 'Slack Developer', 'Tailwind CSS'].map(tool => (
              <div key={tool} className="bg-[#0b0f19] py-3 px-4 rounded-xl border border-slate-700 hover:border-cyan-800 hover:text-cyan-300 transition-colors">
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Footer / CTA */}
        <div className="bg-gradient-to-br from-[#0b0f19] to-[#0a0d16] border border-slate-700 p-10 rounded-3xl text-center">
          <span className="inline-block text-cyan-400 font-mono text-xs uppercase tracking-[2px] bg-cyan-950 border border-cyan-800 px-5 py-2 rounded-2xl">Project Complete</span>
          
          <h3 className="text-2xl font-bold text-white mt-6 mb-3 tracking-tight">
            Want a similar automated system for your agency?
          </h3>
          
          <p className="text-slate-400 max-w-md mx-auto text-[15px] leading-relaxed">
            Let's link your systems, configure custom parent orchestrators, and deploy worker sub-agent automation nodes to save hours of manual overhead.
          </p>

          <a 
            href="https://vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-8 inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm px-8 py-3.5 rounded-2xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all active:scale-[0.985]"
          >
            📬 Consult with Nathanael
          </a>
        </div>
      </div>
    </div>
  );
};

export default MultiAgentCaseStudy;
