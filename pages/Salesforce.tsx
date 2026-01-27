
import React from 'react';

interface SalesforceProps {
  onConsultClick: () => void;
}

export const Salesforce: React.FC<SalesforceProps> = ({ onConsultClick }) => {
  const industries = [
    {
      name: "Financial Services",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      cases: ["Automated Loan Processing", "AI-Powered Wealth Advisory", "KYC Document Verification"]
    },
    {
      name: "Healthcare",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      cases: ["Patient Intake Automation", "Clinical Trial Matching", "Insurance Claim Summaries"]
    },
    {
      name: "Retail & E-commerce",
      icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
      cases: ["Hyper-Personalized Marketing", "Visual Search Integration", "Inventory Demand Prediction"]
    },
    {
      name: "Manufacturing",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      cases: ["Predictive Maintenance Alerts", "Supply Chain Optimization", "Field Service AI Assistant"]
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Universal Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 pb-32 overflow-hidden text-white bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" 
            alt="Enterprise Technology" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-8">
                <span className="bg-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">Official Partner</span>
                <span className="text-blue-400 font-bold text-xs tracking-widest uppercase">Salesforce Einstein</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
              Unlock <span className="text-blue-400">Einstein GPT</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed font-light">
              We bridge the gap between your Salesforce CRM and next-generation AI. Deploy custom agentic workflows that transform how you sell and serve.
            </p>
            <button 
              onClick={onConsultClick}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/40"
            >
              Request Implementation Roadmap
            </button>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/20 shadow-2xl">
              <div className="space-y-8">
                <div className="flex items-center gap-6 pb-6 border-b border-white/10">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-400/30">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Trust Layer Integration</h4>
                    <p className="text-sm text-slate-400">Enterprise data privacy by design</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="text-blue-400 font-bold text-4xl mb-1">35%</div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Case Resolution Speed</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="text-blue-400 font-bold text-4xl mb-1">22%</div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Pipeline Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice AI Scaling Section */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Einstein AI Accelerators</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Deploy turnkey AI agents directly into your Salesforce environment.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Inbound Receptionist", 
                desc: "24/7 AI receptionist that answers calls, books appointments, and qualifies leads directly into CRM.",
                color: "bg-blue-600",
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              },
              { 
                title: "Outbound Sales", 
                desc: "AI-powered outbound calls for follow-ups, renewals, and surveys—all synced with your brand voice.",
                color: "bg-slate-900",
                icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              },
              { 
                title: "Website Widget", 
                desc: "Turn any webpage into a live conversation. Visitors engage instantly, creating leads in Salesforce.",
                color: "bg-indigo-600",
                icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 card-hover">
                <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">CRM Native</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">Omni-Channel</span>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-32 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">Industry Blueprints</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">Pre-configured Einstein workflows tailored to your vertical.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all card-hover">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-8 border border-blue-400/20">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ind.icon} />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-6">{ind.name}</h4>
              <ul className="space-y-4">
                {ind.cases.map((useCase, idx) => (
                  <li key={idx} className="text-xs text-slate-400 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
