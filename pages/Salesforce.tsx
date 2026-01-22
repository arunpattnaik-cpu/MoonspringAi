
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
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
                <span className="bg-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded">Certified</span>
                <h3 className="text-blue-600 font-bold text-sm tracking-widest uppercase">Salesforce Einstein Partner</h3>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Unlock the Power of <span className="text-blue-600">Einstein GPT</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We specialize in bridging the gap between your Salesforce CRM and next-generation AI. 
              Our implementations help your sales, service, and marketing teams work smarter, not harder.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={onConsultClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center"
              >
                Request Expert Consultation
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-200 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-slate-50 pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.244l-2.864 1.91A2 2 0 003.5 21H20.5a2 2 0 001.5-3.333l-2.572-2.239z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Einstein Trust Layer</h4>
                    <p className="text-xs text-slate-500 italic">Enterprise data privacy by design</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <div className="text-blue-600 font-bold text-xl mb-1">35%</div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Faster Case Resolution</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <div className="text-blue-600 font-bold text-xl mb-1">22%</div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Increase in Pipeline</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Beyond Standard Automation</h2>
            <p className="text-slate-600">Deploy advanced AI capabilities directly inside your Salesforce instance.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Einstein Voice Agents</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Empower your mobile workforce with voice-driven CRM interactions. Our voice agents allow sales reps to update opportunities, log calls, and query dashboards hands-free using natural language.
              </p>
              <ul className="space-y-3">
                {["Real-time Speech-to-CRM updates", "Automated meeting transcription", "Contextual voice commands"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Intelligent Document Extraction</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Turn unstructured documents into structured Salesforce records instantly. Using Einstein OCR and custom LLM pipelines, we automate the ingestion of contracts, invoices, and IDs.
              </p>
              <ul className="space-y-3">
                {["Automated Lead creation from PDFs", "Contract metadata extraction", "High-accuracy field mapping"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Industry-Specific AI Accelerators</h2>
            <p className="text-slate-400">Tailored Salesforce AI implementations for your sector.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
                <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ind.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-4">{ind.name}</h4>
                <ul className="space-y-3">
                  {ind.cases.map((useCase, idx) => (
                    <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button 
               onClick={onConsultClick}
               className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors"
             >
               View All 20+ Industry Blueprints
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </button>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-1 px-4 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Start Your Transformation</div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Ready to modernize your Salesforce stack?</h2>
            <p className="text-slate-600 mb-10 text-lg">Join the leading enterprises that have already optimized their workflows with MoonspringAI's Salesforce expertise.</p>
            <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={onConsultClick}
                  className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl"
                >
                  Schedule Technical Demo
                </button>
                <button 
                  onClick={onConsultClick}
                  className="bg-white border border-slate-200 text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  Contact a Solutions Architect
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};
