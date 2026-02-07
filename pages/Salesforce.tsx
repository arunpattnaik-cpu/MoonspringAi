
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
          <div className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-xs font-bold tracking-widest uppercase mb-8">
            Agentforce Implementation
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
            Revolutionise Your <br className="hidden md:block"/>
            <span className="text-blue-400">Salesforce Customer Service</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            Transform Your Support Operations with Custom Voice AI Agents. 
            Automate the routine, empower your agents, and delight your customers at scale.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Deflect Calls", desc: "Automatically handle routine inquiries without human intervention.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "bg-blue-600" },
              { title: "Save Time", desc: "Reduce average handling times and boost team productivity significantly.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "bg-slate-900" },
              { title: "Enhance Experience", desc: "Provide 24/7 instant, accurate responses that delight customers.", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "bg-indigo-600" }
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

      {/* The Challenge Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">The Challenge You're Facing</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Overwhelmed Support in a Hyper-Connected World</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Your customer service teams are drowning in repetitive inquiries. Every day, valuable human agents spend countless hours answering the same basic questions: "Where's my order?" "How do I reset my password?" "What's my account balance?"
              </p>
              <p>
                This creates a cascade of problems. Skilled agents are stuck handling routine tasks instead of complex problem-solving, satisfaction scores decline as wait times grow, and operational costs skyrocket.
              </p>
              <div className="p-8 bg-slate-50 border-l-4 border-blue-600 rounded-r-[2rem]">
                <p className="italic text-slate-800 font-medium">
                  "Scaling by hiring isn't enough. You need intelligence that handles the routine while your humans handle the exceptions."
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-6 bg-slate-100 rounded-[3rem] -z-10 transition-transform group-hover:scale-105 duration-700"></div>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" alt="Busy Corporate Office" className="rounded-[2.5rem] shadow-2xl" />
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 max-w-[280px]">
              <div className="text-red-600 font-bold text-5xl mb-2">60%</div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest leading-tight">Support Capacity Burnout</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - Dedicated AI Agent */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000" 
                alt="Autonomous AI Digital Agent" 
                className="rounded-[2.5rem] shadow-2xl border border-slate-200" 
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Introducing Your Dedicated AI Voice Agent</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Imagine having a tireless team member who never takes breaks, never gets frustrated, and handles your most common customer inquiries with perfect consistency. Our Custom Voice AI Agent integrates natively with Agentforce.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Fully Trained Intelligence", desc: "We customise the AI specifically for your business, training it to expertly handle your top 3 most common inquiry types." },
                  { title: "Native Salesforce Integration", desc: "Call summaries and full transcripts are stored directly in Salesforce, creating a seamless workflow for your existing team." },
                  { title: "Intelligent Escalation", desc: "When a customer needs human assistance, it seamlessly transfers the call with complete context." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0 mt-1">{i+1}</div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Measurable Business Impact</h2>
            <p className="text-slate-500">Real transformation for your customer service department.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "40-60%", label: "Call Deflection Rate", desc: "Reduction in human intervention" },
              { val: "50%", label: "Time Savings", desc: "Reduction in handling time" },
              { val: "24/7", label: "Availability", desc: "Round-the-clock support" },
              { val: "95%+", label: "Accuracy Rate", desc: "Consistent trained responses" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 text-center card-hover shadow-sm">
                <div className="text-blue-600 text-4xl font-bold mb-2">{stat.val}</div>
                <div className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-2">{stat.label}</div>
                <p className="text-[10px] text-slate-400 leading-tight">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Implementation Framework</h2>
            <p className="text-slate-500 text-lg">Choose the path that best aligns with your operational goals.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "One-Time Setup",
                price: "Project Based",
                features: ["System configuration", "Custom inquiry training", "Salesforce testing", "Self-managed operations"],
                color: "slate-900"
              },
              {
                title: "Monthly Managed",
                price: "Usage Based",
                features: ["Infrastructure maintenance", "Included usage minutes", "Reporting & Analytics", "Ongoing optimisation"],
                color: "blue-600",
                popular: true
              },
              {
                title: "Hybrid Approach",
                price: "Custom Tier",
                features: ["Initial professional setup", "Managed support service", "Monthly reporting", "Peace of mind"],
                color: "indigo-600"
              }
            ].map((plan, i) => (
              <div key={i} className={`relative p-10 rounded-[2.5rem] border ${plan.popular ? 'border-blue-600 ring-4 ring-blue-50 shadow-2xl' : 'border-slate-100 shadow-sm'} bg-white card-hover`}>
                {plan.popular && <span className="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Most Popular</span>}
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.title}</h3>
                <div className={`text-${plan.color} font-bold text-sm uppercase tracking-widest mb-8`}>{plan.price}</div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={onConsultClick} className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Blueprints (Use Cases) */}
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
          <p className="text-slate-400 max-w-xl mx-auto text-lg">Pre-configured Agentforce workflows tailored to your vertical.</p>
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

      {/* Universal CTA */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 leading-tight">Ready to Transform Your Customer Service?</h2>
          <p className="text-xl text-slate-600 mb-12 font-light">
            Don't let another day pass with your valuable agents stuck handling routine inquiries. Your team deserves to focus on meaningful work that drives business value.
          </p>
          <button 
            onClick={onConsultClick}
            className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl flex items-center gap-4 mx-auto"
          >
            Start Your Transformation
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
          <p className="mt-8 text-sm text-slate-400">Join leading enterprises that have optimised their support stack with MoonspringAI.</p>
        </div>
      </section>
    </div>
  );
};
