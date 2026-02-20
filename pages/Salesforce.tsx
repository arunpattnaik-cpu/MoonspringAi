import React from 'react';

interface SalesforceProps {
  onConsultClick: () => void;
}

export const Salesforce: React.FC<SalesforceProps> = ({ onConsultClick }) => {
  const sectors = [
    {
      name: "Nonprofit",
      tag: "IMPACT",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200",
      icon: (
        <>
          <path className="opacity-40" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5c-2-2.5-5.5-2.5-7.5 0s-1 6 7.5 12c8.5-6 9.5-9.5 7.5-12s-5.5-2.5-7.5 0" />
        </>
      ),
      points: [
        "AI donor scoring and next‑best ask recommendations to increase fundraising conversion.",
        "Automated, personalised fundraising campaigns across email, SMS, and social.",
        "Volunteer matching and scheduling based on skills and engagement.",
        "Program and case management with AI summaries and impact reporting.",
        "Self‑service supporter and beneficiary portals with AI chat for queries."
      ]
    },
    {
      name: "Public Sector",
      tag: "GOVERNMENT",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200",
      icon: (
        <>
          <path className="opacity-40" d="M2 22h20v-2H2v2zM12 2L2 7v2h20V7L12 2z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 10v7h3v-7H4zm6 0v7h4v-7h-4zm7 0v7h3v-7h-3zM2 19h20" />
        </>
      ),
      points: [
        "AI assistants for citizen services (status updates, FAQs, form help).",
        "Case triage and routing for benefits and permits based on complexity.",
        "Document intake, classification, and redaction for applications.",
        "Proactive outreach to at‑risk groups (renewals, compliance reminders).",
        "Performance dashboards for programmes and contact centres."
      ]
    },
    {
      name: "Media",
      tag: "ENTERTAINMENT",
      image: "https://images.unsplash.com/photo-1492619334760-22e02f77bd58?auto=format&fit=crop&q=80&w=1200",
      icon: (
        <>
          <path className="opacity-40" d="M15 10l4.55-2.27A1 1 0 0121 8.61v6.76a1 1 0 01-1.45.89L15 14v-4z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3z M10 9l5 3-5 3V9z" />
        </>
      ),
      points: [
        "Audience segmentation and content recommendations via engagement signals.",
        "Ad‑sales pipeline management with AI forecasting and upsell suggestions.",
        "Campaign optimisation agents that test creatives and channels automatically.",
        "Subscriber churn prediction and personalised win‑back journeys.",
        "Social listening and sentiment analysis to guide brand strategy."
      ]
    },
    {
      name: "Business Services",
      tag: "PROFESSIONAL",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
      icon: (
        <>
          <path className="opacity-40" d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2 M3 9h18 M10 13h4 M12 17h.01" />
        </>
      ),
      points: [
        "Lead routing and scoring for consulting and professional opportunities.",
        "Proposal and SOW generation using client data and past projects.",
        "Project health monitoring with AI risk alerts on budget and scope.",
        "Knowledge base assistants that surface templates and case studies.",
        "Customer success playbooks triggered by satisfaction and usage."
      ]
    },
    {
      name: "Financial Services",
      tag: "FINTECH",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      icon: (
        <>
          <path className="opacity-40" d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-12 8-6.45 8-12V5l-8-3z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4 M12 2v20 M4 5l8-3 8 3" />
        </>
      ),
      points: [
        "Intelligent onboarding and KYC with document recognition and risk flags.",
        "Portfolio insights and AI investment ideas tailored to client risk profile.",
        "Next‑best‑product offers for banking, insurance, and wealth customers.",
        "Fraud and anomaly detection on transactions and login patterns.",
        "Self‑service financial advice bots for FAQs and policy questions."
      ]
    },
    {
      name: "Healthcare",
      tag: "MEDTECH",
      image: "https://images.unsplash.com/photo-1504813184591-01592fd03cfd?auto=format&fit=crop&q=80&w=1200",
      icon: (
        <>
          <path className="opacity-40" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v8 M8 12h8 M19 3L5 3 M5 21l14 0" />
        </>
      ),
      points: [
        "Virtual care and triage assistants that suggest next steps via symptoms.",
        "Appointment reminders and no‑show prediction with auto-rescheduling.",
        "Care‑plan recommendations and risk scoring based on history.",
        "AI summaries of consultations and notes to reduce clinician admin.",
        "Patient engagement journeys for screening and wellness."
      ]
    },
    {
      name: "Education",
      tag: "ACADEMIA",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
      icon: (
        <>
          <path className="opacity-40" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3L1 9l11 6 11-6-11-6z M4.5 10.5v4c0 2 3.5 4.5 7.5 4.5s7.5-2.5 7.5-4.5v-4" />
        </>
      ),
      points: [
        "Recruitment and admissions scoring to prioritise high‑fit applicants.",
        "Automated nurture journeys from enquiry through enrolment.",
        "Early‑warning alerts for at‑risk students based on engagement.",
        "AI tutoring and FAQ bots for course, fee, and campus questions.",
        "Alumni and donor engagement journeys for events and giving."
      ]
    },
    {
      name: "Sports",
      tag: "ATHLETICS",
      image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=1200",
      icon: (
        <>
          <path className="opacity-40" d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5 5 0 0011 13v3H9v2h6v-2h-2v-3a5 5 0 003.61-2.06C19.08 10.63 21 8.55 21 6V5c0-1.1-.9-2-2-2z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 3h10v10a5 5 0 01-10 0V3z M3 7c0 2 2 3 4 3 M21 7c0 2-2 3-4 3" />
        </>
      ),
      points: [
        "Fan 360 profiles with AI‑driven ticket and merch recommendations.",
        "Dynamic pricing and demand prediction for tickets and hospitality.",
        "Personalised game‑day messaging (travel, offers, in‑stadium).",
        "Sponsor asset tracking and ROI reporting with automated insights.",
        "Community and grassroots programme management with AI comms."
      ]
    },
    {
      name: "Retail",
      tag: "COMMERCE",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
      icon: (
        <>
          <path className="opacity-40" d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 6c0-2.76 2.24-5 5-5s5 2.24 5 5 M3 8h18 M8 12l2 2 4-4" />
        </>
      ),
      points: [
        "Personalised product recommendations across web, app, and email.",
        "AI‑assisted merchandising, pricing, and promotion planning.",
        "Inventory and demand forecasting to reduce stock‑outs.",
        "Service bots for order status, returns, and store information.",
        "Customer lifetime value and churn prediction for loyalty."
      ]
    },
    {
      name: "Tech",
      tag: "SAAS",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      icon: (
        <>
          <path className="opacity-40" d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 17l10 5 10-5 M2 12l10 5 10-5 M12 2l10 5-10 5L2 7l10-5z" />
        </>
      ),
      points: [
        "Complex B2B deal orchestration with AI‑driven next steps.",
        "Subscription and renewal health scoring with automatic playbooks.",
        "Product‑usage analytics that trigger expansion or save‑motions.",
        "Partner and channel deal registration with AI overlap checks.",
        "AI documentation assistants trained on release notes and articles."
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Universal Dark Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-32 overflow-hidden text-white bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
            alt="Data Analytics" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left w-full">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-brand-blue/20 border border-brand-cyan/30 rounded-full text-brand-cyan text-xs font-bold tracking-widest uppercase mb-8">
              Agentforce Specialist
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight font-display">
              Agentforce <br/>
              <span className="text-brand-cyan">Vertical Intelligence</span> <br/>
              <span className="text-white">on Salesforce</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed font-light">
              We engineer the connection between your Customer 360 and generative intelligence. 
              Deploy sector‑specific AI agents that drive real business outcomes within the world's leading CRM.
            </p>
            <div className="flex items-center gap-6">
              <img src="/logo/salesforce.svg" alt="Salesforce" className="h-10 w-auto brightness-0 invert opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight font-display">Sector‑Specific AI Solutions</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">Tailored Agentforce and Einstein GPT strategies for your industry.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((ind, idx) => (
              <div key={idx} className="group relative bg-white rounded-[2.5rem] border border-slate-100 transition-all duration-700 flex flex-col overflow-hidden min-h-[620px] shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,115,252,0.2)] hover:-translate-y-2">
                
                <div className="absolute inset-0 z-0">
                  <img 
                    src={ind.image} 
                    alt={`${ind.name} context`} 
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-[6px] group-hover:bg-white/70 transition-all duration-500"></div>
                  <div className="absolute inset-0 border border-white/20 rounded-[2.5rem] pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>

                <div className="relative z-10 p-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-slate-900 flex items-center justify-center text-brand-cyan shadow-2xl group-hover:from-brand-blue group-hover:to-brand-cyan group-hover:text-white group-hover:scale-110 transition-all duration-500">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {ind.icon}
                        </svg>
                      </div>
                      <div>
                        <div className="text-[10px] font-black tracking-[0.3em] text-brand-blue uppercase mb-0.5">{ind.tag}</div>
                        <h3 className="text-2xl font-bold text-slate-900 leading-none font-display">{ind.name}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 flex-grow">
                    <ul className="space-y-4">
                      {ind.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-4 text-sm text-slate-700 leading-relaxed group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 flex-shrink-0 group-hover/item:bg-brand-blue group-hover/item:scale-150 transition-all duration-300"></div>
                          <span className="group-hover/item:text-slate-950 transition-colors font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-200/50">
                    <button 
                      onClick={onConsultClick}
                      className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-brand-blue transition-all duration-300 w-full text-left"
                    >
                      <span>Activate Roadmap</span>
                      <svg className="w-5 h-5 translate-x-0 group-hover:translate-x-3 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-32 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl font-bold mb-16 flex items-center gap-5 text-slate-900 font-display">
                <span className="w-16 h-1.5 bg-brand-blue rounded-full inline-block"></span>
                The Implementation Framework
              </h2>
              <div className="space-y-20">
                {[
                  {
                    title: "Data Cloud Harmonization",
                    desc: "We unify your siloed enterprise data to ensure AI grounding is accurate and real-time.",
                    details: ["Zero-Copy Integration", "Harmonization Mapping", "Streaming Data"]
                  },
                  {
                    title: "Agentforce Orchestration",
                    desc: "Designing autonomous agents that handle complex multi-step workflows natively within Salesforce.",
                    details: ["Prompt Engineering", "Custom Apex Actions", "Trust Layer Safety"]
                  },
                  {
                    title: "Architecture Governance",
                    desc: "Ensuring all AI deployments are compliant with industry standards and data residency requirements.",
                    details: ["Data Sovereignty", "Bias Audit", "Human-in-the-loop"]
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute -left-10 top-0 text-slate-100 font-black text-6xl -z-10 group-hover:text-brand-cyan/20 transition-colors">0{idx+1}</div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-brand-blue transition-colors font-display">{pillar.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed text-lg font-light">{pillar.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.details.map((detail, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-white text-slate-500 px-5 py-2 rounded-xl border border-slate-200 shadow-sm">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32 bg-slate-950 rounded-[3.5rem] p-16 text-white overflow-hidden shadow-2xl border border-white/5">
                <div className="absolute -top-10 -right-10 p-12 opacity-5 text-brand-blue">
                  <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-8 italic font-display">Agentforce Ready?</h3>
                <p className="text-slate-400 mb-12 text-lg leading-relaxed font-light">
                  Most enterprises have the tools, but lack the orchestration. We provide the engineering required to move from demo to global production.
                </p>
                
                <div className="space-y-12">
                  {[
                    { title: "Sovereign Integration", desc: "Native cloud architecture with no third-party data hops." },
                    { title: "Predictive Analytics", desc: "Moving from reactive service to proactive engagement." },
                    { title: "Trust Layer Mastery", desc: "Leverage Einstein without compromising sensitive data." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="flex-shrink-0 w-14 h-14 bg-brand-blue/10 rounded-2xl border border-brand-blue/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                        <span className="font-bold text-sm">0{i+1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1 font-display">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={onConsultClick}
                  className="w-full mt-16 bg-brand-blue py-6 rounded-2xl font-bold hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/40 text-lg active:scale-95 flex items-center justify-center gap-3"
                >
                  Architecture Audit
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal CTA */}
      <section className="py-40 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 text-slate-900 tracking-tight leading-tight font-display">
            Activate your <span className="text-brand-blue underline decoration-brand-cyan/30 underline-offset-8">Autonomous</span> workforce.
          </h2>
          <p className="text-xl text-slate-500 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            Join the organizations leading their sectors with specialized Salesforce intelligence. 
            MoonspringAI ensures your technology investment delivers measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button 
              onClick={onConsultClick}
              className="w-full sm:w-auto px-16 py-6 bg-slate-950 text-white rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all shadow-2xl flex items-center justify-center gap-4 active:scale-95"
            >
              Consult with Architects
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            <div className="flex flex-col items-start sm:items-center">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Certified Specialist</div>
              <div className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em]">Salesforce Partner</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};