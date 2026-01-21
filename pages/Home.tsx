
import React from 'react';

interface HomeProps {
  onConsultClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onConsultClick }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#3b82f6" d="M44.7,-76.4C58.3,-69.2,70,-58,78.2,-44.6C86.4,-31.2,91.1,-15.6,90.2,-0.5C89.3,14.6,82.8,29.1,73.8,42.2C64.9,55.3,53.4,66.9,39.9,74.5C26.5,82.1,13.2,85.6,-0.5,86.4C-14.2,87.2,-28.4,85.3,-41.7,78.5C-55,71.7,-67.4,60.1,-75.6,46.2C-83.8,32.3,-87.8,16.2,-87.3,0.3C-86.7,-15.6,-81.7,-31.1,-72.6,-44.3C-63.4,-57.4,-50.2,-68.2,-35.8,-75C-21.4,-81.8,-5.7,-84.6,9.2,-80.5C24.1,-76.5,31.1,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Leading AI Transformation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Empower Your Enterprise with <span className="gradient-text">MoonspringAI</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              We build bespoke AI products and provide elite consulting services to turn your data into your most valuable asset.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onConsultClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center group"
              >
                Consult With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button 
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
              >
                Explore Products
              </button>
            </div>
            <div className="mt-12 flex items-center space-x-6 text-sm text-slate-400 grayscale opacity-70">
              <span>Trusted by innovative teams:</span>
              <div className="flex gap-4 font-bold text-slate-500">
                <span>TECHCO</span>
                <span>DATAWISE</span>
                <span>NEXTLEVEL</span>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="bg-white rounded-3xl shadow-2xl p-4 border border-slate-100 relative z-10">
                <img src="https://picsum.photos/seed/moonspring/800/600" alt="AI Dashboard" className="rounded-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
                    <div className="text-blue-600 font-bold text-2xl mb-1">98%</div>
                    <p className="text-xs text-slate-500">Efficiency gain reported by our enterprise partners</p>
                </div>
             </div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive AI Solutions</h2>
            <p className="text-slate-600">From initial strategy to full-scale production, we deliver the future today.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Consulting",
                desc: "Strategic advisory to align your business goals with the power of LLMs and generative models.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              },
              {
                title: "Product Lab",
                desc: "Custom AI-native application development, from RAG-based systems to specialized copilots.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.244l-2.864 1.91A2 2 0 003.5 21H20.5a2 2 0 001.5-3.333l-2.572-2.239z"
              },
              {
                title: "Edge Deployment",
                desc: "Optimized model deployment for high performance, low latency, and maximum privacy.",
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 card-hover">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <button 
                  onClick={onConsultClick}
                  className="text-blue-600 font-semibold text-sm hover:translate-x-1 transition-transform flex items-center"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
