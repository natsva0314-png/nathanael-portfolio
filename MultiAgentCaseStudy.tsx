import React from 'react';

const MultiAgentCaseStudy: React.FC = () => {
  // Direct raw stream links optimized for seamless production rendering on Vercel
  const images = {
    slack: "https://dropbox.com",
    mainAgent: "https://dropbox.com",
    subAgent: "https://dropbox.com",
    sheet: "https://dropbox.com",
    gmail: "https://dropbox.com"
  };

  return (
    <section className="bg-[#030712] text-slate-400 py-24 px-6 font-sans antialiased text-sm min-h-screen overflow-y-auto relative block">

      <div className="max-w-4xl mx-auto">
        
        {/* Project Category Identifier */}
        <div className="flex justify-center mb-6">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest border border-cyan-400/15 bg-cyan-400/5 px-4 py-1.5 rounded-full">
            🤖 Multi-Agent AI Infrastructure
          </span>
        </div>

        {/* Project Meta Header */}
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

        {/* Scaled Value Metrics Grid Row */}
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

        {/* The Challenge Block */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-3">The Challenge</h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Scaling digital creator agencies operate round-the-clock, meaning administrative or infrastructure delays directly impact tip revenue pipelines [INDEX_4]. Manual team workflows break down under specific conditions [INDEX_4]:
          </p>
          <ul className="space-y-3 pl-0 list-none">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold">✕</span>
              <span>Unstructured streams of pings confuse task priority and hide system alert drops [INDEX_4].</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold">✕</span>
              <span>Critical 504 webhook crashes and profile 2FA security locks sit unresolved for hours [INDEX_4].</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold">✕</span>
              <span>Workforce project bottlenecks are tracked using human complaints instead of objective data logs [INDEX_4].</span>
            </li>
          </ul>
        </div>

        {/* The Solution Modules Layout */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-white mb-10 border-l-4 border-cyan-400 pl-3">The Solution // Automation Blueprint</h2>
          
          <div className="space-y-16">
            
            {/* Module 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 rounded uppercase font-mono">Module 01</span>
                <h3 className="text-base font-bold text-white">Phase 1: Raw Dynamic Input (Slack Sandbox)</h3>
              </div>
              <p className="text-slate-500 leading-relaxed">
                The system acts as an early-warning monitor. It tracks real company channels to capture disorganized text dumps containing complex API failures, team updates, and growth initiatives, prepping the string data vectors for the processing blocks [INDEX_4].
              </p>
              <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900 shadow-2xl overflow-hidden max-w-full">
                <img src={images.slack} alt="Slack Input System Dump" className="w-full h-auto rounded-lg block object-cover" />
              </div>
            </div>

            {/* Module 2 */}
            <div className="space-y-4 border-t border-slate-900 pt-16">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 rounded uppercase font-mono">Module 02</span>
                <h3 className="text-base font-bold text-white">Ops Triage Supervisor (Manager Agent Logic)</h3>
              </div>
              <p className="text-slate-500 leading-relaxed">
                An autonomous processing hub built inside Zapier Copilot Agents [INDEX_3]. The agent parses text variables, separates high-risk server drop exceptions from standard routine logs, and dynamically calculates a 60-minute triage roadmap to target issues [INDEX_3, INDEX_4].
              </p>
              <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900 shadow-2xl overflow-hidden max-w-full">
                <img src={images.mainAgent} alt="Manager Agent Instructions Core" className="w-full h-auto rounded-lg block object-cover" />
              </div>
            </div>

            {/* Module 3 */}
            <div className="space-y-4 border-t border-slate-900 pt-16">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 rounded uppercase font-mono">Module 03</span>
                <h3 className="text-base font-bold text-white">Decentralized Task Routing (Copywriter Sub-Agent)</h3>
              </div>
              <p className="text-slate-500 leading-relaxed">
                To ensure execution stability, a separation of concerns pattern decouples prompt calculations. The core orchestrator delegates layout engineering to a sub-agent bot focused on formatting variable arrays into communication blocks [INDEX_3].
              </p>
              <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900 shadow-2xl overflow-hidden max-w-full">
                <img src={images.subAgent} alt="Worker Sub-Agent Permitted Permissions Template" className="w-full h-auto rounded-lg block object-cover" />
              </div>
            </div>

            {/* Module 4 */}
            <div className="space-y-4 border-t border-slate-900 pt-16">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 rounded uppercase font-mono">Module 04</span>
                <h3 className="text-base font-bold text-white">Persistent Audit Registry (Google Sheets Ledger)</h3>
              </div>
              <p className="text-slate-500 leading-relaxed">
                The long-term database archive. Using system formatting triggers, the agent injects clean line-breaks into database columns, locking 6-point system diagnostic steps, copy-ready 1-on-1 mediation scripts, and pipeline balance records [INDEX_4].
              </p>
              <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900 shadow-2xl overflow-hidden max-w-full">
                <img src={images.sheet} alt="Formatted Google Sheets Log Columns" className="w-full h-auto rounded-lg block object-cover" />
              </div>
            </div>

                       {/* Module 5 */}
            <div className="space-y-4 border-t border-slate-900 pt-16">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 rounded uppercase font-mono">Module 05</span>
                <h3 className="text-base font-bold text-white">Branded Inbox Delivery (Executive Briefing Client)</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                The final step in the tracking pipeline. The sub-agent outputs a stylized notification containing colored visual hierarchy cards, structured bullet data, and clickable links directing users back to source threads for review in 30 seconds [INDEX_6].
              </p>
              <div className="bg-[#0b0f19] p-2 rounded-xl border border-slate-900 shadow-2xl overflow-hidden max-w-full">
                <img src={images.gmail} alt="Final Executive Email Layout" className="w-full h-auto rounded-lg block object-cover" />
              </div>
            </div>

          </div>
        </div>

        {/* Measured Impact Section */}
        <div className="mb-24">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-3">The Result</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0b0f19] p-6 rounded-xl border border-slate-900">
              <div className="text-sm font-bold text-white mb-2">⚙️ Zero Loop Latency</div>
              <p className="text-slate-500 text-xs leading-relaxed">Eliminated manual data translation bottlenecks, routing severe server crashes into execution queues instantly to prevent sales team idleness [INDEX_4].</p>
            </div>
            <div className="bg-[#0b0f19] p-6 rounded-xl border border-slate-900">
              <div className="text-sm font-bold text-white mb-2">🔒 Systemized Accountability</div>
              <p className="text-slate-500 text-xs leading-relaxed">Replaced subjective employee metrics with proactive Airtable tracking view sensors, enabling automated generation of HR playbooks [INDEX_5].</p>
            </div>
          </div>
        </div>

        {/* Lead Capture Footer Block */}
        <div className="bg-[#0b0f19] border border-slate-900 p-10 rounded-2xl text-center shadow-2xl">
          <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest bg-cyan-400/5 border border-cyan-400/15 px-3 py-1 rounded">Connect Framework</span>
          <h3 className="text-lg font-extrabold text-white mt-4 mb-2 tracking-tight">Want a similar multi-agent tracking core for your operations?</h3>
          <p className="text-slate-500 text-xs max-w-md mx-auto mb-6 leading-relaxed">
            Let's integrate your relational databases, automated schedules, and custom AI sub-agents to reclaim hours of management overhead.
          </p>
          <a href="https://vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-lg shadow-xl shadow-cyan-400/10 hover:scale-[1.02] transition-transform duration-200 no-underline">
            📩 Work With Nathanael
          </a>
        </div>

      </div>
    </section>
  );
};

export default MultiAgentCaseStudy;
