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
      <div className="max-w-4xl mx-auto px-6 py-24"> {/* Increased top padding */}

        {/* Category */}
        <div className="flex items-center gap-2 text-cyan-400 text-sm mb-6">
          <span className="text-cyan-500">●</span> Agency Operations
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter leading-none mb-12">
          Autonomous Multi-Agent Crisis Triage &amp; Workforce Governance Engine
        </h1>

        {/* Context */}
        <div className="flex flex-wrap gap-x-16 gap-y-8 text-sm mb-20">
          <div>
            <div className="text-slate-500">Client</div>
            <div className="text-white">Digital Creator Agency</div>
          </div>
          <div>
            <div className="text-slate-500">Role</div>
            <div className="text-white">AI Automation Architect</div>
          </div>
          <div>
            <div className="text-slate-500">Systems Built</div>
            <div className="text-white">5 Autonomous Agents</div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-28">
          <div className="bg-[#0a0c1a] rounded-3xl p-10 text-center">
            <div className="text-6xl font-bold text-white mb-3">3</div>
            <div className="text-cyan-400 text-sm tracking-widest">HOURS</div>
            <div className="text-slate-400 text-xs mt-2">MANUAL TRIAGE BUFFER</div>
          </div>
          
          <div className="bg-[#0a0c1a] rounded-3xl p-10 text-center">
            <div className="text-6xl font-bold text-cyan-400 mb-3">99.5%</div>
            <div className="text-cyan-400 text-sm tracking-widest">SUCCESS</div>
            <div className="text-slate-400 text-xs mt-2">OPERATIONAL VELOCITY</div>
          </div>
          
          <div className="bg-[#0a0c1a] rounded-3xl p-10 text-center">
            <div className="text-6xl font-bold text-white mb-3">3s</div>
            <div className="text-cyan-400 text-sm tracking-widest">LOOP TIME</div>
            <div className="text-slate-400 text-xs mt-2">AUTOMATED</div>
          </div>
          
          <div className="bg-[#0a0c1a] rounded-3xl p-10 text-center">
            <div className="text-6xl font-bold text-emerald-400 mb-3">0%</div>
            <div className="text-cyan-400 text-sm tracking-widest">BIAS</div>
            <div className="text-slate-400 text-xs mt-2">DATA GOVERNANCE</div>
          </div>
        </div>

        {/* The Challenge */}
        <div className="mb-28">
          <h2 className="text-cyan-400 text-xl font-semibold mb-12 tracking-tight">/ The Challenge</h2>
          
          <div className="bg-[#0a0c1a] rounded-3xl p-12">
            <p className="mb-12 text-slate-300 text-[15.5px] leading-relaxed">
              Scaling digital creator agencies operate round-the-clock. Manual workflows collapse under high-velocity chaos, creating massive revenue leakage.
            </p>
            
            <ul className="space-y-8 text-slate-300">
              <li className="flex gap-4">
                <span className="text-red-500 font-bold flex-shrink-0 mt-1">✕</span>
                Unstructured Slack pings and alerts overwhelm priority detection.
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold flex-shrink-0 mt-1">✕</span>
                Critical 504 webhook failures and profile locks remain unresolved for hours.
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold flex-shrink-0 mt-1">✕</span>
                Workforce bottlenecks are managed through subjective human judgment instead of real-time logs.
              </li>
            </ul>
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-28">
          <h2 className="text-cyan-400 text-xl font-semibold mb-14 tracking-tight">/ The Solution — 5 Automation Systems</h2>
          
          <div className="space-y-32"> {/* Increased vertical spacing between modules */}

            {/* 01 */}
            <div>
              <div className="flex gap-6 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-2xl flex-shrink-0">01</div>
                <div className="pt-1">
                  <h3 className="text-white text-2xl font-semibold tracking-tight">Raw Dynamic Input Sensor</h3>
                  <p className="text-cyan-400 mt-1">Slack Operational Sandbox</p>
                </div>
              </div>
              
              <div className="pl-[72px]">
                <p className="text-slate-300 leading-relaxed mb-10 text-[15.5px]">
                  Early-warning monitor that continuously scans active channels for API failures, text dumps, and system alerts. Converts raw inputs into structured vectors for downstream agents.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {['Slack API', 'String Ingestion', 'Payload Capture'].map(tag => (
                    <span key={tag} className="bg-[#11141f] text-xs px-6 py-3 rounded-2xl border border-slate-700 font-mono text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="bg-[#0a0c1a] rounded-3xl p-3">
                  <img src={images.slack} alt="Slack Stream" className="rounded-2xl w-full" />
                </div>
              </div>
            </div>

            {/* 02 */}
            <div>
              <div className="flex gap-6 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-2xl flex-shrink-0">02</div>
                <div className="pt-1">
                  <h3 className="text-white text-2xl font-semibold tracking-tight">Ops Triage Supervisor</h3>
                  <p className="text-cyan-400 mt-1">Zapier Copilot Parent Manager Agent</p>
                </div>
              </div>
              
              <div className="pl-[72px]">
                <p className="text-slate-300 leading-relaxed mb-10 text-[15.5px]">
                  Autonomous processing core. Filters incoming data, separates critical exceptions from routine backlogs, and dynamically generates hour-by-hour triage scripts.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {['Zapier Copilot', 'AI Core', 'Incident Matrix'].map(tag => (
                    <span key={tag} className="bg-[#11141f] text-xs px-6 py-3 rounded-2xl border border-slate-700 font-mono text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="bg-[#0a0c1a] rounded-3xl p-3">
                  <img src={images.mainAgent} alt="Main Agent" className="rounded-2xl w-full" />
                </div>
              </div>
            </div>

            {/* 03 */}
            <div>
              <div className="flex gap-6 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-2xl flex-shrink-0">03</div>
                <div className="pt-1">
                  <h3 className="text-white text-2xl font-semibold tracking-tight">Sub-Agent Execution Layer</h3>
                  <p className="text-cyan-400 mt-1">Specialized Worker Nodes</p>
                </div>
              </div>
              
              <div className="pl-[72px]">
                <p className="text-slate-300 leading-relaxed mb-10 text-[15.5px]">
                  Parallel execution of specialized sub-agents handling distinct remediation tasks (webhook recovery, profile unlock, content moderation, etc.).
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {['Worker Agents', 'Parallel Execution', 'Remediation Scripts'].map(tag => (
                    <span key={tag} className="bg-[#11141f] text-xs px-6 py-3 rounded-2xl border border-slate-700 font-mono text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="bg-[#0a0c1a] rounded-3xl p-3">
                  <img src={images.subAgent} alt="Sub Agent" className="rounded-2xl w-full" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Output Generation */}
        <div className="mb-28">
          <h2 className="text-cyan-400 text-xl font-semibold mb-12 tracking-tight">/ Output Generation</h2>
          
          <div className="space-y-12">
            <div className="bg-[#0a0c1a] rounded-3xl p-12">
              <div className="flex gap-4 items-center mb-8 text-cyan-400">
                <span className="text-4xl">⚙️</span>
                <div className="font-semibold text-white text-xl">Zero Loop Latency Pipeline</div>
              </div>
              <img src={images.sheet} alt="Zero Latency Output" className="rounded-2xl w-full" />
            </div>

            <div className="bg-[#0a0c1a] rounded-3xl p-12">
              <div className="flex gap-4 items-center mb-8 text-cyan-400">
                <span className="text-4xl">🔒</span>
                <div className="font-semibold text-white text-xl">Systemized Accountability</div>
              </div>
              <img src={images.gmail} alt="Accountability Output" className="rounded-2xl w-full" />
            </div>
          </div>
        </div>

        {/* Tools & Stack */}
        <div className="mb-28">
          <h2 className="text-cyan-400 text-xl font-semibold mb-12 tracking-tight">/ Tools &amp; Stack</h2>
          <div className="bg-[#0a0c1a] rounded-3xl p-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8 text-slate-300">
              {['Zapier AI', 'Airtable', 'Google Sheets', 'Gmail API', 'Slack Developer API', 'Tailwind CSS', 'Claude', 'Custom Agents'].map(tool => (
                <div key={tool} className="py-1 text-[15px]">{tool}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-28">
          <h2 className="text-cyan-400 text-xl font-semibold mb-12 tracking-tight">/ Results</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-[#0a0c1a] rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-white mb-4">3s</div>
              <div className="text-cyan-400">Automated Loop Time</div>
            </div>
            <div className="bg-[#0a0c1a] rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-emerald-400 mb-4">99.5%</div>
              <div className="text-cyan-400">Operational Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0a0c1a] rounded-3xl p-16 text-center">
          <div className="inline-block border border-slate-500 text-xs font-mono tracking-[3px] px-10 py-3 rounded-full mb-10">
            PROJECT COMPLETE
          </div>
          
          <h3 className="text-3xl font-bold text-white tracking-tighter mb-8">
            Want a similar automated system for your agency?
          </h3>
          
          <p className="max-w-md mx-auto text-slate-400 mb-12 leading-relaxed text-[15.5px]">
            Let's connect your tools, build custom parent orchestrators, and deploy specialized worker sub-agents to eliminate manual overhead.
          </p>
          
          <a
            href="https://calendly.com/natsva0314/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-400 text-black font-semibold px-16 py-5 rounded-2xl hover:bg-cyan-300 transition-all text-lg"
          >
            📬 Book Strategy Call with Nathanael
          </a>
        </div>

      </div>
    </div>
  );
};

export default MultiAgentCaseStudy;
