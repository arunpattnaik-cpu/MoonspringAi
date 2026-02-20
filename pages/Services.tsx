import React from 'react';

interface ServicesProps {
  onConsultClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onConsultClick }) => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Universal Dark Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-32 overflow-hidden text-white bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000" 
            alt="Customer Support Technology" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center px-6">
          <div className="inline-block px-4 py-1.5 bg-brand-blue/20 border border-brand-cyan/30 rounded-full text-brand-cyan text-xs font-bold tracking-widest uppercase mb-8">
            AI Operations
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
            Revolutionise Your <br className="hidden md:block"/>
            <span className="text-brand-cyan">Customer Support</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            Transform support operations with custom Voice AI Agents. 
            Automate the routine, empower your agents, and delight your customers at scale.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Deflect Calls", desc: "Automatically handle routine inquiries without human intervention.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "bg-brand-blue" },
              { title: "Save Time", desc: "Reduce average handling times and boost team productivity significantly.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "bg-slate-900" },
              { title: "Enhance Experience", desc: "Provide 24/7 instant, accurate responses that delight customers.", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "bg-brand-cyan" }
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

      {/* The Impact Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-brand-cyan/10 text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">The Challenge</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Overwhelmed Support in a Hyper-Connected World</h2>
            <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                Your customer service teams are drowning in repetitive inquiries. Skilled agents are stuck handling password resets instead of complex problem-solving.
              </p>
              <div className="p-10 bg-slate-50 border-l-4 border-brand-blue rounded-r-[2.5rem]">
                <p className="italic text-slate-800 font-medium">
                  "Scaling by hiring isn't enough. You need intelligence that handles the routine while your humans handle the exceptions."
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-6 bg-slate-100 rounded-[3rem] -z-10 transition-transform group-hover:scale-105 duration-700"></div>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" alt="Busy Office Environment" className="rounded-[2.5rem] shadow-2xl grayscale brightness-90" />
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 max-w-[280px]">
              <div className="text-brand-blue font-bold text-5xl mb-2">65%</div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Support Burnout Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Universal CTA */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 leading-tight">Ready to Modernise Operations?</h2>
          <p className="text-xl text-slate-600 mb-12 font-light">
            Join leading enterprises that have optimised their support stack with MoonspringAI.
          </p>
          <button 
            onClick={onConsultClick}
            className="px-12 py-5 bg-slate-950 text-white rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all shadow-2xl flex items-center gap-4 mx-auto"
          >
            Start Your Transformation
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </section>
    </div>
  );
};