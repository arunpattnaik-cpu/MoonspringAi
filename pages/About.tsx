
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-700">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl font-bold mb-6">Redefining Intelligence</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                MoonspringAI was founded on the belief that artificial intelligence should be a practical tool for human progress, not just a buzzword.
            </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
                <img src="https://picsum.photos/seed/about-team/800/800" alt="Team at work" className="rounded-3xl shadow-2xl" />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                        Born in the heart of the AI revolution, MoonspringAI began as a collective of engineers, data scientists, and business strategists who saw a recurring problem: companies had plenty of data, but no way to turn it into actionable intelligence.
                    </p>
                    <p>
                        Today, we serve a global clientele ranging from high-growth startups to Fortune 500 enterprises. We don't just "implement AI"—we partner with you to reinvent how your business operates in an automated world.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-10">
                    <div>
                        <div className="text-3xl font-bold text-blue-600">50+</div>
                        <div className="text-sm text-slate-500 uppercase tracking-widest mt-1">AI Models Deployed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-600">12</div>
                        <div className="text-sm text-slate-500 uppercase tracking-widest mt-1">Proprietary Products</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">The Values That Guide Us</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { title: "Precision", desc: "We believe in high-accuracy results over hype." },
                    { title: "Privacy", desc: "Data security is baked into every architecture." },
                    { title: "Ethics", desc: "We prioritize responsible AI implementation." },
                    { title: "Agility", desc: "Moving fast to keep you ahead of the curve." }
                ].map((val, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="text-blue-600 font-bold mb-4">0{i+1}.</div>
                        <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};
