
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Universal Dark Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-32 overflow-hidden text-white bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Collaborative Space" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-xs font-bold tracking-widest uppercase mb-8">
              Our Vision
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">Redefining <span className="text-blue-400">Intelligence</span></h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                MoonspringAI was founded on the belief that artificial intelligence should be a practical tool for human progress, not just a buzzword.
            </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] -z-10 group-hover:bg-blue-600/10 transition-colors"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team Mission" 
                  className="rounded-[2.5rem] shadow-2xl relative z-10" 
                />
            </div>
            <div>
                <h2 className="text-4xl font-bold mb-8 text-slate-900 leading-tight">Bridging the Gap Between Data and Decision</h2>
                <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
                    <p>
                        Born in the heart of the AI revolution, MoonspringAI began as a collective of engineers, data scientists, and business strategists who saw a recurring problem: companies had plenty of data, but no way to turn it into actionable intelligence.
                    </p>
                    <p>
                        We work with growing UK businesses, supported by a team with experience delivering for large, complex organisations.
                    </p>
                    <p>
                        We don’t “install AI tools”. We partner with you to simplify operations, remove manual work, and build automation where it genuinely pays off.
                    </p>
                    <p>
                        Today, we serve a global clientele ranging from high-growth startups to Fortune 500 enterprises. We don't just "implement AI"—we partner with you to reinvent how your business operates in an automated world.
                    </p>
                </div>
                {/* 
                <div className="grid grid-cols-2 gap-12 mt-12">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <div className="text-4xl font-bold text-blue-600">50+</div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2">AI Models Deployed</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <div className="text-4xl font-bold text-blue-600">12</div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2">Proprietary Products</div>
                    </div>
                </div>
                */}
            </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Principles</h2>
              <p className="text-slate-500 text-lg">The foundational values that guide every line of code we write.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { title: "Precision", desc: "We believe in high-accuracy results over marketing hype." },
                    { title: "Privacy", desc: "Enterprise data security is baked into every architecture." },
                    { title: "Ethics", desc: "Responsible implementation of AI is our absolute priority." },
                    { title: "Agility", desc: "Moving at the speed of the frontier to keep you ahead." }
                ].map((val, i) => (
                    <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm card-hover">
                        <div className="text-blue-600 font-bold mb-6 text-xl tracking-tighter">0{i+1}.</div>
                        <h4 className="text-2xl font-bold mb-4 text-slate-900">{val.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};
