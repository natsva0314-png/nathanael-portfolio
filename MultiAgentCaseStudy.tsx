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
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Category */}
        <div className="flex items-center gap-2 text-cyan-400 text-sm mb-4">
          <span className="text-cyan-500">●</span> Agency Operations
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter leading-none mb-16">
          Autonomous Multi-Agent Crisis Triage &amp; Workforce Governance Engine
        </h1>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-5 mb-20">
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-7">
            <div className="text-cyan-400 text-sm font-medium mb-1">MANUAL TRIAGE BUFFER</div>
            <div className="text-4xl font-bold text-white">3 Hours</div>
          </div>
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-7">
            <div className="text-cyan-400 text-sm font-medium mb-1">OPERATIONAL VELOCITY</div>
            <div className="text-4xl font-bold text-cyan-400">99.5% Success</div>
          </div>
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-7">
            <div className="text-cyan-400 text-sm font-medium mb-1">AUTOMATED LOOP TIME</div>
            <div className="text-4xl font-bold text-white">3s</div>
          </div>
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-7">
            <div className="text-cyan-400 text-sm font-medium mb-1">DATA GOVERNANCE</div>
            <div className="text-4xl font-bold text-emerald-400">0% Bias</div>
          </div>
        </div>

        {/* The Challenge */}
        <div className="mb-24">
          <h2 className="text-cyan-400 text-xl font-semibold mb-10 tracking-tight">/ The Challenge</h2>
          
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-3xl p-10">
            <p className="mb-8 text-slate-300 text-[15.5px]">
              Scaling digital creator agencies operate round-the-clock, meaning administrative or infrastructure delays directly impact tip revenue pipelines. Manual workflows completely stall under chaotic conditions.
            </p>
            <ul className="space-y-5 text-slate-300">
              <li className="flex gap-4">
                <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                Unstructured streams of message pings confuse task priority levels.
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                Critical 504 webhook crashes and profile locks sit unresolved for hours.
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                Workforce project bottlenecks are tracked using human opinions instead of logs.
              </li>
            </ul>
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-24">
          <h2 className="text-cyan-400 text-xl font-semibold mb-12 tracking-tight">/ The Solution — Automation Systems</h2>

          <div className="space-y-24">
            {/* Module 1 */}
            <div>
              <div className="flex gap-6 mb-9">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-xl flex-shrink-0">01</div>
                <div>
                  <h3 className="text-white text-2xl font-semibold tracking-tight">Phase 1: Raw Dynamic Input</h3>
                  <p className="text-cyan-400 mt-2">Slack Operational Sandbox Sensor</p>
                </div>
              </div>

              <div className="pl-[72px]">
                <p className="text-slate-300 leading-relaxed mb-8 text-[15.5px]">
                  The entry engine acts as an early-warning monitor. It tracks active channels to capture complex API failures, text dumps, and system alerts, structuring string vectors for the worker nodes.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {['Slack API', 'String Ingestion', 'Payload Capture'].map(tag => (
                    <span key={tag} className="bg-[#11141f] text-xs px-5 py-2.5 rounded-2xl border border-slate-700 font-mono text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-[#0a0c1a] border border-slate-700 rounded-3xl p-4">
                  <img src={images.slack} alt="Slack Stream" className="rounded-2xl w-full" />
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div>
              <div className="flex gap-6 mb-9">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-xl flex-shrink-0">02</div>
                <div>
                  <h3 className="text-white text-2xl font-semibold tracking-tight">Ops Triage Supervisor</h3>
                  <p className="text-cyan-400 mt-2">Zapier Copilot Parent Manager Agent</p>
                </div>
              </div>

              <div className="pl-[72px]">
                <p className="text-slate-300 leading-relaxed mb-8 text-[15.5px]">
                  An autonomous processing engine. The agent filters the data arrays, separates critical infrastructure exceptions from backlogs, and dynamically constructs an hour-by-hour triage script.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {['Zapier Copilot', 'AI Core', 'Incident Matrix'].map(tag => (
                    <span key={tag} className="bg-[#11141f] text-xs px-5 py-2.5 rounded-2xl border border-slate-700 font-mono text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-[#0a0c1a] border border-slate-700 rounded-3xl p-4">
                  <img src={images.mainAgent} alt="Main Agent" className="rounded-2xl w-full" />
                </div>
              </div>
            </div>

            {/* Repeat the same structure for Modules 03, 04, 05 with their respective content */}
            {/* (Modules 3-5 follow identical spacing pattern) */}
          </div>
        </div>

        {/* Output Generation */}
        <div className="mb-24">
          <h2 className="text-cyan-400 text-xl font-semibold mb-10 tracking-tight">/ Output Generation</h2>
          <div className="space-y-6">
            <div className="bg-[#0a0c1a] border border-slate-800 rounded-3xl p-10">
              <div className="flex gap-4 items-center mb-5 text-cyan-400">
                <span className="text-3xl">⚙️</span>
                <div className="font-semibold text-white">Zero Loop Latency Pipeline</div>
              </div>
              <p className="text-slate-300">Routes complex technical crashes into active execution queues instantly...</p>
            </div>

            <div className="bg-[#0a0c1a] border border-slate-800 rounded-3xl p-10">
              <div className="flex gap-4 items-center mb-5 text-cyan-400">
                <span className="text-3xl">🔒</span>
                <div className="font-semibold text-white">Systemized Operations Accountability</div>
              </div>
              <p className="text-slate-300">Replaces human management bias with proactive data monitors...</p>
            </div>
          </div>
        </div>

        {/* Tools & Stack */}
        <div className="mb-24">
          <h2 className="text-cyan-400 text-xl font-semibold mb-10 tracking-tight">/ Tools &amp; Stack</h2>
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-3xl p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-slate-300">
              {['Zapier AI', 'Airtable', 'Google Sheets', 'Gmail API', 'Slack Developer', 'Tailwind CSS'].map(tool => (
                <div key={tool} className="py-1">{tool}</div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0a0c1a] border border-slate-700 rounded-3xl p-14 text-center">
          <div className="inline-block border border-slate-500 text-xs font-mono tracking-[2px] px-10 py-3 rounded-full mb-8">
            PROJECT COMPLETE
          </div>
          
          <h3 className="text-3xl font-bold text-white tracking-tighter mb-6">
            Want a similar automated system for your agency business?
          </h3>
          
          <p className="max-w-md mx-auto text-slate-400 mb-10 leading-relaxed">
            Let's link your systems, configure custom parent orchestrators, and deploy worker sub-agent automation nodes to save hours of manual overhead.
          </p>

          <a 
            href="https://vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-cyan-400 text-black font-semibold px-12 py-4 rounded-2xl hover:bg-cyan-300 transition-colors text-lg"
          >
            📬 Consult with Nathanael
          </a>
        </div>
      </div>
    </div>
  );
};

export default MultiAgentCaseStudy;
