
import React from 'react';

interface ConsultingProps {
  onConsultClick: () => void;
}

export const Consulting: React.FC<ConsultingProps> = ({ onConsultClick }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Header Section */}
      <section className="bg-slate-50 pt-20 pb-16 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Strategic AI <span className="text-blue-600">Product Advisory</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We bridge the gap between complex neural architectures and market-ready products. 
                Our consulting framework is designed to accelerate your AI roadmap from ideation to production.
              </p>
            </div>
            <div className="flex gap-4 mb-2">
              <div className="text-center px-6 py-2 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Audits Completed</div>
              </div>
              <div className="text-center px-6 py-2 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="text-2xl font-bold text-blue-600">40%</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 inline-block"></span>
                Our Consulting Pillars
              </h2>
              <div className="space-y-12">
                {[
                  {
                    title: "Feasibility & ROI Analysis",
                    desc: "Before a single line of code is written, we evaluate the technical viability and business impact of your AI concepts.",
                    details: ["LLM vs. SLM selection", "Token cost modeling", "Infrastructure requirements"]
                  },
                  {
                    title: "Architecture Design",
                    desc: "Building scalable RAG (Retrieval Augmented Generation) and agentic workflows that grow with your user base.",
                    details: ["Vector database selection", "Orchestration layers", "API security patterns"]
                  },
                  {
                    title: "Model Governance",
                    desc: "Ensuring your AI products are compliant, ethical, and safe for enterprise deployment.",
                    details: ["Bias mitigation", "Hallucination monitoring", "Data residency compliance"]
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="group">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{pillar.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{pillar.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.details.map((detail, i) => (
                        <span key={i} className="text-xs font-medium bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="sticky top-32 bg-slate-900 rounded-[2.5rem] p-8 text-white overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14H11V21L20 10H13Z"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">The "Moonspring" Sprint</h3>
                <p className="text-slate-400 mb-8">A 4-week intensive workshop to transform your product vision into a high-fidelity prototype.</p>
                
                <div className="space-y-6">
                  {[
                    { week: "01", task: "Discovery & Data Audit" },
                    { week: "02", task: "Architecture & Tech Selection" },
                    { week: "03", task: "MVP Development & Prompting" },
                    { week: "04", task: "Deployment Strategy & Handover" }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-6 border-b border-slate-800 pb-4 last:border-0">
                      <span className="text-blue-500 font-mono font-bold">{step.week}</span>
                      <span className="font-medium">{step.task}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={onConsultClick}
                  className="w-full mt-10 bg-blue-600 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
                >
                  Book a Strategy Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Enterprise Success</h2>
            <p className="text-slate-600">How we've helped market leaders integrate generative AI.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-1 rounded-3xl shadow-sm border border-slate-200">
               <div className="p-8">
                 <div className="text-blue-600 font-bold mb-2">FinTech Corp</div>
                 <h4 className="text-xl font-bold mb-4">AI Customer Support Transformation</h4>
                 <p className="text-slate-500 text-sm mb-6">Implemented a multi-agent system that resolved 65% of Tier-1 tickets without human intervention.</p>
                 <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Case Study #42</span>
                   <button className="text-blue-600 text-sm font-bold">Read Result →</button>
                 </div>
               </div>
            </div>
            <div className="bg-white p-1 rounded-3xl shadow-sm border border-slate-200">
               <div className="p-8">
                 <div className="text-blue-600 font-bold mb-2">HealthTech Labs</div>
                 <h4 className="text-xl font-bold mb-4">Automated Diagnostic Summarization</h4>
                 <p className="text-slate-500 text-sm mb-6">Engineered a HIPAA-compliant RAG system reducing report turnaround time by 4 hours per doctor.</p>
                 <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Case Study #19</span>
                   <button className="text-blue-600 text-sm font-bold">Read Result →</button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
