import React from 'react';

interface ConsultingProps {
  onConsultClick: () => void;
}

export const Consulting: React.FC<ConsultingProps> = ({ onConsultClick }) => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Universal Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-32 overflow-hidden text-white bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
            alt=" Strategic Planning" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-brand-blue/20 border border-brand-cyan/30 rounded-full text-brand-cyan text-xs font-bold tracking-widest uppercase mb-8">
              Advisory & Strategy
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Strategic AI <span className="text-brand-cyan">Product Advisory</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed font-light">
              We bridge the gap between complex neural architectures and market-ready products. 
              Our framework accelerates your roadmap from ideation to production.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-slate-900">
                <span className="w-12 h-1.5 bg-brand-blue rounded-full inline-block"></span>
                Consulting Pillars
              </h2>
              <div className="space-y-16">
                {[
                  {
                    title: "Feasibility & ROI Analysis",
                    desc: "Before development begins, we evaluate technical viability and business impact.",
                    details: ["LLM vs. SLM selection", "Token cost modeling", "Infra requirements"]
                  },
                  {
                    title: "Architecture Design",
                    desc: "Building scalable RAG and agentic workflows that grow with your user base.",
                    details: ["Vector DB selection", "Orchestration layers", "API security patterns"]
                  },
                  {
                    title: "Model Governance",
                    desc: "Ensuring products are compliant, ethical, and safe for enterprise deployment.",
                    details: ["Bias mitigation", "Hallucination monitoring", "Data residency"]
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="group">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-brand-blue transition-colors">{pillar.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed text-lg">{pillar.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.details.map((detail, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full border border-slate-100">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="sticky top-32 bg-slate-950 rounded-[3rem] p-12 text-white overflow-hidden shadow-2xl border border-white/5">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14H11V21L20 10H13Z"/></svg>
                </div>
                <h3 className="text-3xl font-bold mb-8 italic">The "Moonspring" Sprint</h3>
                <p className="text-slate-400 mb-12 text-lg leading-relaxed">A 4-week intensive workshop to transform vision into a high-fidelity prototype.</p>
                
                <div className="space-y-8">
                  {[
                    { week: "01", task: "Discovery & Data Audit" },
                    { week: "02", task: "Architecture & Tech Selection" },
                    { week: "03", task: "MVP Development & Prompting" },
                    { week: "04", task: "Deployment Strategy & Handover" }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-8 border-b border-white/5 pb-6 last:border-0">
                      <span className="text-brand-cyan font-mono font-bold text-xl">W{step.week}</span>
                      <span className="font-semibold text-lg">{step.task}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={onConsultClick}
                  className="w-full mt-12 bg-brand-blue py-5 rounded-2xl font-bold hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/40 text-lg"
                >
                  Book a Strategy Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};