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
    <div className="fixed inset-0 w-full h-full bg-[#05060f] overflow-y-auto z-50 text-slate-400 font-sans antialiased text-[15px] scroll-smooth">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header / Category */}
        <div className="flex items-center gap-2 text-cyan-400 text-sm mb-3">
          <span className="text-cyan-500">●</span> Agency Operations
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter leading-none mb-12">
          Autonomous Multi-Agent Crisis Triage &amp; Workforce Governance Engine
        </h1>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-16">
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-6">
            <div className="text-cyan-400 text-sm font-medium mb-1">MANUAL TRIAGE BUFFER</div>
            <div className="text-4xl font-bold text-white">3 Hours</div>
          </div>
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-6">
            <div className="text-cyan-400 text-sm font-medium mb-1">OPERATIONAL VELOCITY</div>
            <div className="text-4xl font-bold text-cyan-400">99.5% Success</div>
          </div>
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-6">
            <div className="text-cyan-400 text-sm font-medium mb-1">AUTOMATED LOOP TIME</div>
            <div className="text-4xl font-bold text-white">3s</div>
          </div>
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-6">
            <div className="text-cyan-400 text-sm font-medium mb-1">DATA GOVERNANCE</div>
            <div className="text-4xl font-bold text-emerald-400">0% Bias</div>
          </div>
        </div>

        {/* The Challenge */}
        <div className="mb-20">
          <h2 className="text-cyan-400 text-xl font-semibold mb-8 tracking-tight">/ The Challenge</h2>
          
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-8 text-slate-300">
            <p className="mb-6">
              Scaling digital creator agencies operate round-the-clock, meaning administrative or infrastructure delays directly impact tip revenue pipelines.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-red-500 font-bold flex-shrink-0">×</span>
                Unstructured streams of message pings confuse task priority levels.
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold flex-shrink-0">×</span>
                Critical 504 webhook crashes and profile locks sit unresolved for hours.
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold flex-shrink-0">×</span>
                Workforce project bottlenecks are tracked using human opinions instead of logs.
              </li>
            </ul>
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-20">
          <h2 className="text-cyan-400 text-xl font-semibold mb-10 tracking-tight">/ The Solution — Automation Systems</h2>

          <div className="space-y-16">
            {/* Module 1 */}
            <div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold flex-shrink-0">01</div>
                <div>
                  <h3 className="text-white text-2xl font-semibold tracking-tight">Phase 1: Raw Dynamic Input</h3>
                  <p className="text-cyan-400 mt-1">Slack Operational Sandbox Sensor</p>
                </div>
              </div>

              <div className="pl-16 mt-6">
                <p className="text-slate-300 leading-relaxed mb-6">
                  The entry engine acts as an early-warning monitor. It tracks active channels to capture complex API failures, text dumps, and system alerts, structuring string vectors for the worker nodes.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Slack API', 'String Ingestion', 'Payload Capture'].map((tag) => (
                    <span key={tag} className="bg-[#11141f] text-xs text-slate-400 px-4 py-2 rounded-xl border border-slate-700 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-[#0a0c1a] border border-slate-700 rounded-2xl p-3">
                  <img src={images.slack} alt="Slack Stream" className="rounded-xl w-full" />
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold flex-shrink-0">02</div>
                <div>
                  <h3 className="text-white text-2xl font-semibold tracking-tight">Ops Triage Supervisor</h3>
                  <p className="text-cyan-400 mt-1">Zapier Copilot Parent Manager Agent</p>
                </div>
              </div>

              <div className="pl-16 mt-6">
                <p className="text-slate-300 leading-relaxed mb-6">
                  An autonomous processing engine. The agent filters the data arrays, separates critical infrastructure exceptions from backlogs, and dynamically constructs an hour-by-hour triage script.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Zapier Copilot', 'AI Core', 'Incident Matrix'].map((tag) => (
                    <span key={tag} className="bg-[#11141f] text-xs text-slate-400 px-4 py-2 rounded-xl border border-slate-700 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-[#0a0c1a] border border-slate-700 rounded-2xl p-3">
                  <img src={images.mainAgent} alt="Main Agent" className="rounded-xl w-full" />
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold flex-shrink-0">03</div>
                <div>
                  <h3 className="text-white text-2xl font-semibold tracking-tight">Decentralized Task Routing</h3>
                  <p className="text-cyan-400 mt-1">Gmail Briefing Copywriter Sub-Agent Worker</p>
                </div>
              </div>

              <div className="pl-16 mt-6">
                <p className="text-slate-300 leading-relaxed mb-6">
                  To guarantee absolute runtime protection, a strict separation of concerns decoupling handles execution. The main logic manager delegates template layout formatting down to a secondary worker bot.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Sub-Agents', 'Decoupled Logic', 'Template Engineering'].map((tag) => (
                    <span key={tag} className="bg-[#11141f] text-xs text-slate-400 px-4 py-2 rounded-xl border border-slate-700 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-[#0a0c1a] border border-slate-700 rounded-2xl p-3">
                  <img src={images.subAgent} alt="Sub Agent" className="rounded-xl w-full" />
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold flex-shrink-0">04</div>
                <div>
                  <h3 className="text-white text-2xl font-semibold tracking-tight">Persistent Audit Registry</h3>
                  <p className="text-cyan-400 mt-1">Multi-Paragraph Google Sheets Log Matrix</p>
                </div>
              </div>

              <div className="pl-16 mt-6">
                <p className="text-slate-300 leading-relaxed mb-6">
                  The core analytical data archive. System rules force the tool to write crisp cell formatting blocks, injecting system diagnostics, copy-ready communication messages, and bypass strategies.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Google Sheets API', 'Structured Database', 'System Logging'].map((tag) => (
                    <span key={tag} className="bg-[#11141f] text-xs text-slate-400 px-4 py-2 rounded-xl border border-slate-700 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-[#0a0c1a] border border-slate-700 rounded-2xl p-3">
                  <img src={images.sheet} alt="Google Sheet" className="rounded-xl w-full" />
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold flex-shrink-0">05</div>
                <div>
                  <h3 className="text-white text-2xl font-semibold tracking-tight">Branded Inbox Delivery</h3>
                  <p className="text-cyan-400 mt-1">Executive Branded Intelligence Client Briefing</p>
                </div>
              </div>

              <div className="pl-16 mt-6">
                <p className="text-slate-300 leading-relaxed mb-6">
                  The programmatic completion of the automated lifecycle. Pushes styled emails containing colored content groupings, summaries, and anchor web elements straight to the phone for review.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Gmail SDK', 'Inbox Alerts', 'Branded CSS Blocks'].map((tag) => (
                    <span key={tag} className="bg-[#11141f] text-xs text-slate-400 px-4 py-2 rounded-xl border border-slate-700 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-[#0a0c1a] border border-slate-700 rounded-2xl p-3">
                  <img src={images.gmail} alt="Gmail Output" className="rounded-xl w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Output Generation */}
        <div className="mb-20">
          <h2 className="text-cyan-400 text-xl font-semibold mb-8 tracking-tight">/ Output Generation</h2>
          
          <div className="space-y-4">
            <div className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 text-cyan-400 mb-4">
                <span className="text-2xl">⚙️</span>
                <div className="font-semibold text-white">Zero Loop Latency Pipeline</div>
              </div>
              <p className="text-slate-300">
                Routes complex technical crashes into active execution queues instantly, blocking any idleness across your operations pipelines.
              </p>
            </div>

            <div className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 text-cyan-400 mb-4">
                <span className="text-2xl">🔒</span>
                <div className="font-semibold text-white">Systemized Operations Accountability</div>
              </div>
              <p className="text-slate-300">
                Replaces human management bias with proactive data monitors, delivering diagnostic roadmaps completely on autopilot.
              </p>
            </div>
          </div>
        </div>

        {/* Tools Used */}
        <div className="mb-20">
          <h2 className="text-cyan-400 text-xl font-semibold mb-8 tracking-tight">/ Tools &amp; Stack</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {['Zapier AI', 'Airtable', 'Google Sheets', 'Gmail API', 'Slack Developer', 'Tailwind CSS'].map((tool) => (
              <div key={tool} className="bg-[#0a0c1a] border border-slate-700 hover:border-cyan-900 text-center py-4 rounded-2xl text-sm font-medium text-slate-300 transition-colors">
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-gradient-to-b from-[#0a0c1a] to-black border border-slate-700 rounded-3xl p-12 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-950 text-cyan-400 text-xs font-mono tracking-widest px-6 py-2 rounded-2xl border border-cyan-800 mb-6">
            PROJECT COMPLETE
          </div>
          
          <h3 className="text-3xl font-bold text-white tracking-tighter mb-4">
            Want a similar automated system for your agency business?
          </h3>
          
          <p className="max-w-md mx-auto text-slate-400 mb-10">
            Let's link your systems, configure custom parent orchestrators, and deploy worker sub-agent automation nodes to save hours of manual overhead.
          </p>

          <a 
            href="https://vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-cyan-400 hover:bg-cyan-300 transition-colors text-black font-semibold px-10 py-4 rounded-2xl text-lg shadow-xl shadow-cyan-500/20"
          >
            📬 Consult with Nathanael
          </a>
        </div>
      </div>
    </div>
  );
};

export default MultiAgentCaseStudy;
