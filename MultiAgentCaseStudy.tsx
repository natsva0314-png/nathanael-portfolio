'use client';
import React from 'react';
import Image from 'next/image';

const MultiAgentCaseStudy: React.FC = () => {
  const images = {
    slack: "/projects/slack.png",
    mainAgent: "/projects/Agent01.png",
    subAgent: "/projects/agent1sub.png",
    sheet: "/projects/Sheet1.png",
    gmail: "/projects/Gmail1.png"
  };

  return (
    <div className="min-h-screen bg-[#05060f] text-slate-400">
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Category */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 text-cyan-400 text-sm mb-8">
          <span>●</span> Agency Operations
        </div>

        {/* Title - Now Cyan like you wanted */}
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tighter leading-none mb-12">
          Autonomous Multi-Agent Crisis Triage &amp; Workforce Governance Engine
        </h1>

        {/* Context Info */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 mb-16 text-sm">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "3 Hours", label: "MANUAL TRIAGE BUFFER" },
            { value: "99.5% Success", label: "OPERATIONAL VELOCITY", accent: true },
            { value: "3s", label: "AUTOMATED LOOP TIME" },
            { value: "0% Bias", label: "DATA GOVERNANCE", accent: true },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0a0c1a] border border-slate-800 rounded-2xl p-8 text-center">
              <div className={`text-4xl font-bold mb-2 ${stat.accent ? 'text-cyan-400' : 'text-white'}`}>
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* The Challenge */}
        <div className="mb-24">
          <h2 className="text-cyan-400 text-xl font-semibold mb-8">/ The Challenge</h2>
          <div className="bg-[#0a0c1a] border border-slate-800 rounded-3xl p-12">
            <p className="text-slate-300 mb-10 leading-relaxed">
              Scaling digital creator agencies operate round-the-clock, meaning administrative or infrastructure delays directly impact tip revenue pipelines. Manual workflows completely stall under chaotic conditions.
            </p>
            <ul className="space-y-6 text-slate-300">
              {[
                "Unstructured streams of message pings confuse task priority levels.",
                "Critical 504 webhook crashes and profile locks sit unresolved for hours.",
                "Workforce project bottlenecks are tracked using human opinions instead of logs."
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-red-500 mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-24">
          <h2 className="text-cyan-400 text-xl font-semibold mb-10">/ The Solution — Automation Systems</h2>
          
          <div className="space-y-20">
            {/* Add your modules here following the reference pattern */}
            {/* Example for one module: */}
            <div className="bg-[#0a0c1a] border border-slate-800 rounded-3xl overflow-hidden">
              <div className="p-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-2xl">01</div>
                  <div>
                    <h3 className="text-white text-2xl font-semibold">Raw Dynamic Input Sensor</h3>
                    <p className="text-cyan-400">Slack Operational Sandbox</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-8">Your description here...</p>
              </div>
              <div className="px-6 pb-6">
                <Image src={images.slack} alt="" width={800} height={500} className="rounded-2xl w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0a0c1a] border border-cyan-500/20 rounded-3xl p-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Want a similar automated system for your agency?</h3>
          <p className="text-slate-400 max-w-md mx-auto mb-10">Let’s connect your tools and deploy custom multi-agent systems.</p>
          <a href="https://calendly.com/natsva0314/30min" className="inline-block bg-cyan-400 text-black font-semibold px-12 py-4 rounded-2xl hover:bg-cyan-300 transition">
            Book Strategy Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default MultiAgentCaseStudy;
