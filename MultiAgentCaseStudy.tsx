import React from 'react';

const MultiAgentCaseStudy: React.FC = () => {
  // Direct raw stream links fully populated for production rendering on Vercel
  const images = {
    slack: "https://dropbox.com",
    mainAgent: "https://dropbox.com",
    subAgent: "https://dropbox.com",
    sheet: "https://dropbox.com",
    gmail: "https://dropbox.com"
  };

  return (
    // Fixed container layer overrides global layout locks and forces natural mouse wheel scrolling
    <div className="fixed inset-0 w-full h-full bg-[#030712] overflow-y-auto overflow-x-hidden z-[9999] scroll-smooth antialiased">
      <section className="text-slate-400 py-24 px-6 font-sans text-sm max-w-4xl mx-auto">
        
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

        {/* Value Metrics Grid */}
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

        {/* Challenge and Solution Blocks */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-3">The Challenge</h2>
          <p className="text-slate-400 mb-6 leading-relaxed">Scaling digital creator agencies operate round-the-clock, meaning manual team workflows break down under specific conditions.</p>
          <ul className="space-y-3 pl-0 list-none text-red-500 font-medium">
            <li>✕ Unstructured pings hide system alert drops.</li>
            <li>✕ 504 webhook crashes and 2FA locks remain unresolved.</li>
            <li>✕ Bottlenecks lack objective data logs.</li>
          </ul>
        </div>

        <div className="mb-20">
          <h2 className="text-xl font-bold text-white mb-10 border-l-4 border-cyan-400 pl-3">The Solution // Automation Blueprint</h2>
          <div className="space-y-16">
            {[
              { title: "Raw Dynamic Input", img: images.slack, desc: "Monitors channels, prepping text data vectors." },
              { title: "Ops Triage Supervisor", img: images.mainAgent, desc: "Parses high-risk server drops using Zapier Copilot." },
              { title: "Decentralized Task Routing", img: images.subAgent, desc: "Sub-agent formatting of variable arrays." },
              { title: "Persistent Audit Registry", img: images.sheet, desc: "Injects formatted data into Airtable/Sheets." },
              { title: "Branded Inbox Delivery", img: images.gmail, desc: "Delivers stylized notifications in 30 seconds." },
            ].map((mod, i) => (
              <div key={i} className="space-y-4 border-t border-slate-900 pt-10 first:border-0 first:pt-0">
                <h3 className="text-sm font-bold text-cyan-400">Module {String(i+1).padStart(2, '0')}: {mod.title}</h3>
                <p className="text-slate-500 text-sm">{mod.desc}</p>
                <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900 shadow-2xl overflow-hidden">
                  <img src={mod.img} alt={mod.title} className="w-full h-auto rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results and CTA */}
        <div className="mb-24">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-3">The Result</h2>
          <div className="grid grid-cols-2 gap-4 text-slate-500 text-xs">
            <div className="bg-[#0b0f19] p-6 rounded-xl border border-slate-900">Zero Loop Latency: Instant triage, preventing sales idleness.</div>
            <div className="bg-[#0b0f19] p-6 rounded-xl border border-slate-900">Systemized Accountability: Replaced subjectivity with automated logs.</div>
          </div>
        </div>

        <div className="bg-[#0b0f19] border border-slate-900 p-10 rounded-2xl text-center">
          <h3 className="text-lg font-extrabold text-white mb-2">Want a similar multi-agent core?</h3>
          <a href="https://nathanel.vercel.app/" target="_blank" className="text-cyan-400 font-bold text-sm">Work With Nathanael</a>
        </div>

      </section>
    </div>
  );
};

export default MultiAgentCaseStudy;
