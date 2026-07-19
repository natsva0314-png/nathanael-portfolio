import React from 'react';

const MultiAgentCaseStudy: React.FC = () => {
  // Direct raw image streams fully optimized
  const images = {
    slack: "https://dropbox.com",
    mainAgent: "https://dropbox.com",
    subAgent: "https://dropbox.com",
    sheet: "https://dropbox.com",
    gmail: "https://dropbox.com"
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-[#030712] overflow-y-auto z-50 text-slate-400 py-24 px-6 font-sans antialiased text-sm scroll-smooth">
      <div className="max-w-4xl mx-auto">
        
        {/* Project Header and Meta */}
        <div className="flex justify-center mb-6">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest border border-cyan-400/15 bg-cyan-400/5 px-4 py-1.5 rounded-full">
            🤖 Multi-Agent AI Infrastructure
          </span>
        </div>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white leading-tight tracking-tight mb-5 max-w-2xl mx-auto">
            Autonomous Multi-Agent Crisis Triage &amp; <span className="text-cyan-400">Workforce Governance Engine</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-500 font-medium">
            <span>⚡ Built with Zapier Copilot AI</span>
            <span>•</span>
            <span>📊 Airtable Relational Databases</span>
            <span>•</span>
            <span>📧 Customized Inbox Delivery Matrix</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-4 gap-3 mb-20 text-center items-center">
          <div className="bg-[#0b0f19] py-5 px-2 rounded-xl border border-slate-900 shadow-lg">
            <div className="text-2xl font-bold text-white tracking-tight">3 Hours</div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Manual Triage Buffer</div>
          </div>
          <div className="bg-[#0b0f19] py-5 px-2 rounded-xl border border-slate-900 shadow-lg flex flex-col justify-center items-center h-full">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">To →</div>
          </div>
          <div className="bg-[#0b0f19] py-5 px-2 rounded-xl border border-slate-900 shadow-lg">
            <div className="text-2xl font-bold text-cyan-400 tracking-tight">3 Seconds</div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Automated Loop</div>
          </div>
          <div className="bg-[#0b0f19] py-5 px-2 rounded-xl border border-slate-900 shadow-lg">
            <div className="text-2xl font-bold text-white tracking-tight">0% Bias</div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Data Governance</div>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-3">The Challenge</h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Scaling digital creator agencies operate round-the-clock, meaning administrative or infrastructure delays directly impact tip revenue pipelines. Manual team workflows break down under specific conditions:
          </p>
          <ul className="space-y-3 pl-0 list-none">
            {['Unstructured streams of pings confuse task priority.', 'Critical 504 webhook crashes/2FA locks sit unresolved.', 'Workforce bottlenecks are tracked using human complaints.'].map(text => (
              <li key={text} className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✕</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution Modules */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-white mb-10 border-l-4 border-cyan-400 pl-3">The Solution // Automation Blueprint</h2>
          <div className="space-y-16">
            {[
              { mod: '01', title: 'Phase 1: Raw Dynamic Input (Slack Sandbox)', img: images.slack, desc: 'Tracks channels, captures unstructured API failures/updates for processing.' },
              { mod: '02', title: 'Ops Triage Supervisor (Manager Agent)', img: images.mainAgent, desc: 'Parses variables, separates exceptions, calculates 60-min triage roadmap.' },
              { mod: '03', title: 'Decentralized Task Routing (Sub-Agent)', img: images.subAgent, desc: 'Decouples logic, delegates layout engineering to specialized bot.' },
              { mod: '04', title: 'Persistent Audit Registry (Google Sheets)', img: images.sheet, desc: 'Injects line-breaks, logs 6-point diagnostics and mediation scripts.' },
              { mod: '05', title: 'Branded Inbox Delivery (Executive Briefing)', img: images.gmail, desc: 'Finalized stylized notification with visual hierarchy and links.' }
            ].map((item, i) => (
              <div key={i} className={`${i > 0 ? 'border-t border-slate-900 pt-16' : ''} space-y-4`}>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 rounded uppercase font-mono">Module {item.mod}</span>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900 shadow-2xl overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-auto rounded-lg block object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-24">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-3">The Result</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: '⚙️ Zero Loop Latency', desc: 'Routed server crashes instantly, preventing sales team idleness.' },
              { title: '🔒 Systemized Accountability', desc: 'Replaced subjective metrics with proactive Airtable tracking.' }
            ].map(res => (
              <div key={res.title} className="bg-[#0b0f19] p-6 rounded-xl border border-slate-900">
                <div className="text-sm font-bold text-white mb-2">{res.title}</div>
                <p className="text-slate-500 text-xs leading-relaxed">{res.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#0b0f19] border border-slate-900 p-10 rounded-2xl text-center shadow-2xl">
          <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest bg-cyan-400/5 border border-cyan-400/15 px-3 py-1 rounded">Connect Framework</span>
          <h3 className="text-lg font-extrabold text-white mt-4 mb-2 tracking-tight">Want a similar multi-agent tracking core?</h3>
          <p className="text-slate-500 text-xs max-w-md mx-auto mb-6 leading-relaxed">
            Integrate databases and AI agents to reclaim management overhead.
          </p>
          <a href="https://vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-lg shadow-xl shadow-cyan-400/10 hover:scale-[1.02] transition-transform duration-200 no-underline">
            📩 Work With Nathanael
          </a>
        </div>
      </div>
    </div>
  );
};

export default MultiAgentCaseStudy;
