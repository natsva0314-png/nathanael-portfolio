import React from 'react';

// Production-ready component with restored images and layout [INDEX_4, INDEX_6]
const MultiAgentCaseStudy: React.FC = () => {
  const images = {
    slack: "https://dropbox.com",
    mainAgent: "https://dropbox.com",
    subAgent: "https://dropbox.com",
    sheet: "https://dropbox.com",
    gmail: "https://dropbox.com"
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-[#030712] overflow-y-auto z-50 text-slate-400 font-sans text-sm">
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white mb-5">Autonomous Multi-Agent Crisis Triage</h1>
          <p className="text-slate-500">⚡ Zapier AI • 📊 Airtable • 📧 Inbox Automation</p>
        </div>

        {/* --- Modules 01-05 --- */}
        <div className="space-y-20 mb-20">
          {/* Module 1: Input */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-base font-bold text-white mb-3">Phase 1: Raw Input [INDEX_4]</h3>
              <p className="text-xs text-slate-500">Captures unstructured channel data, preparing data vectors [INDEX_4].</p>
            </div>
            <img src={images.slack} alt="Slack Input" className="rounded-lg" />
          </div>
          {/* Module 2: Supervisor */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src={images.mainAgent} alt="Agent Logic" className="rounded-lg md:order-last" />
            <div>
              <h3 className="text-base font-bold text-white mb-3">Ops Triage Supervisor [INDEX_3]</h3>
              <p className="text-xs text-slate-500">Parses risks, calculating 60-min triage maps via AI agents [INDEX_3, INDEX_4].</p>
            </div>
          </div>
          {/* Module 3: Routing */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-base font-bold text-white mb-3">Decentralized Routing [INDEX_3]</h3>
              <p className="text-xs text-slate-500">Sub-agent handles formatting, ensuring stability [INDEX_3].</p>
            </div>
            <img src={images.subAgent} alt="Sub-Agent" className="rounded-lg" />
          </div>
          {/* Module 4: Ledger */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src={images.sheet} alt="Sheet Log" className="rounded-lg md:order-last" />
            <div>
              <h3 className="text-base font-bold text-white mb-3">Persistent Ledger [INDEX_4]</h3>
              <p className="text-xs text-slate-500">Archives diagnostics and scripts into Airtable [INDEX_4].</p>
            </div>
          </div>
          {/* Module 5: Email */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-base font-bold text-white mb-3">Executive Briefing [INDEX_6]</h3>
              <p className="text-xs text-slate-500">Delivers stylized, actionable notifications [INDEX_6].</p>
            </div>
            <img src={images.gmail} alt="Email Layout" className="rounded-lg" />
          </div>
        </div>

        {/* --- Results & Footer --- */}
        <div className="bg-[#0b0f19] p-10 rounded-2xl border border-slate-900 text-center">
          <h3 className="text-lg font-extrabold text-white mb-2">Want a similar AI tracking core?</h3>
          <a href="https://vercel.app" className="text-cyan-400 font-bold">Work With Nathanael</a>
        </div>
      </section>
    </div>
  );
};

export default MultiAgentCaseStudy;
