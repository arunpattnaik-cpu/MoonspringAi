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
      cases: ["Hyper-Personalised Marketing", "Visual Search Integration", "Inventory Demand Prediction"]
    },
    {
      name: "Manufacturing",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      cases: ["Predictive Maintenance Alerts", "Supply Chain Optimisation", "Field Service AI Assistant"]
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Universal Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-32 overflow-hidden text-white bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" 
            alt="Enterprise Agentforce Technology" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center px-6">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-xs font-bold tracking-widest uppercase mb-8">
              Salesforce Implementation Partner
            </div>
            
            {/* 
              Salesforce Logo: Loaded from the 'logo' folder as requested.
              Priority: logo/salesforce-logo.png -> logo/salesforce.svg
            */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 mb-8 group hover:bg-white/20 transition-all cursor-default">
              <img 
                src="/logo/salesforce.svg" 
                alt="Salesforce Platform Logo" 
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                onError={(e) => {
                   const target = e.currentTarget;
                   if (target.src.includes('.svg')) {
                     target.src = '/logo/salesforce-logo.png';
                   } else {
                     target.style.display = 'none';
                   }
                }}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
            Agentforce & <br className="hidden md:block"/>
            <span className="text-blue-400">Einstein AI Strategy</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            Revolutionize your customer service by deploying autonomous agents directly within your Salesforce stack.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Voice Agents", desc: "Deflect calls and resolve issues 24/7 with custom Agentforce Voice flows.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "bg-blue-600" },
              { title: "Einstein GPT", desc: "Automate case summaries and personalized communications instantly.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "bg-slate-900" },
              { title: "Smart Routing", desc: "Use intelligent triage to route high-complexity cases to your best human talent.", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "bg-indigo-600" }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 card-hover">
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-xl`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-white">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Salesforce Advantage Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">Integrated Intelligence</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Mastering the Salesforce Customer 360</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                We specialize in deep-tier Salesforce integrations, connecting your Data Cloud with Generative AI to create truly personalized customer journeys.
              </p>
              <p>
                MoonspringAI is more than a consultancy; we are your technical partners in the new era of AI-driven customer relationships.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-6 bg-blue-50 rounded-[3rem] -z-10 transition-transform group-hover:scale-105 duration-700"></div>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" alt="Tech Strategy Session" className="rounded-[2.5rem] shadow-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
};