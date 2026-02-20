import React from 'react';

interface HomeProps {
  onConsultClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onConsultClick }) => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-32 overflow-hidden text-white bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="AI Connectivity Network" 
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/20 backdrop-blur-md border border-brand-cyan/30 text-brand-cyan px-4 py-1.5 rounded-full text-xs font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span className="tracking-wider uppercase">Pioneering Enterprise AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-white">
              The Next Frontier of <span className="text-brand-cyan">Intelligence</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-lg font-light">
              We architect bespoke AI ecosystems and Salesforce integrations that transform raw data into your most strategic advantage.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={onConsultClick}
                className="bg-brand-blue text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-blue/90 transition-all shadow-2xl shadow-brand-blue/40 flex items-center group ring-1 ring-white/20"
              >
                Launch Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                View Solutions
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
             <div className="relative z-10 p-2 rounded-[2.5rem] bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern AI Visualisation" 
                  className="rounded-[2rem] w-full object-cover aspect-[4/3] mix-blend-overlay brightness-125" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Comprehensive AI Pillars</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Scalable intelligence designed for the modern enterprise stack.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Strategy Consulting",
                desc: "High-level advisory to identify high-ROI AI opportunities across your enterprise operations.",
                icon: "M13 10V3L4 14H11V21L20 10H13Z",
                color: "bg-brand-blue"
              },
              {
                title: "Custom Agentic AI",
                desc: "Sophisticated autonomous agents trained on your proprietary data to handle complex multi-step workflows.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.244l-2.864 1.91A2 2 0 003.5 21H20.5a2 2 0 001.5-3.333l-2.572-2.239z",
                color: "bg-slate-900"
              },
              {
                title: "Enterprise Deployment",
                desc: "Scalable infrastructure setup for private LLM instances, ensuring maximum security and data sovereignty.",
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                color: "bg-brand-cyan"
              }
            ].map((service, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 card-hover">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{service.desc}</p>
                <button 
                  onClick={onConsultClick}
                  className="text-brand-blue font-bold text-sm hover:text-brand-blue/80 transition-colors flex items-center gap-2"
                >
                  Explore Pillar
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};