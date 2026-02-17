
import React, { useState } from 'react';
import { Logo } from './Logo';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onGetStarted?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, onGetStarted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'salesforce', label: 'Salesforce AI' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="glass-nav sticky top-0 z-50 px-6" style={{height: '64px', minHeight: '64px', maxHeight: '64px', overflow: 'hidden'}}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 h-full">
          <button onClick={() => handleNavClick('home')} className="hover:opacity-90 transition-all duration-300">
            <Logo className="h-[100px] w-[140px]" />
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                  activeTab === item.id ? 'text-[#0073fc]' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#26ebff] transition-transform duration-300 origin-left ${activeTab === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
              </button>
            ))}
            <button 
              onClick={onGetStarted}
              className="bg-[#0073fc] text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#26ebff] transition-all shadow-xl shadow-cyan-400/10 active:scale-95"
            >
              Consult Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-4 duration-200 z-40">
            <div className="flex flex-col p-8 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm font-black uppercase tracking-widest transition-colors ${
                    activeTab === item.id ? 'text-[#0073fc]' : 'text-slate-900 hover:text-[#0073fc]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-6">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    onGetStarted?.();
                  }}
                  className="w-full bg-[#0073fc] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#26ebff] transition-all"
                >
                  Consult Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow bg-white">
        {children}
      </main>

      <footer className="bg-[#020617] text-slate-400 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <Logo invert className="h-[180px] w-[180px] mb-8" />
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs mt-4">
              Building the next generation of enterprise intelligence. Architected for scale, designed for security.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">Intelligence</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors">Agentforce</button></li>
              <li><button onClick={() => setActiveTab('consulting')} className="hover:text-white transition-colors">Strategy</button></li>
              <li><button onClick={() => setActiveTab('salesforce')} className="hover:text-white transition-colors">Salesforce</button></li>
              <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">Private LLMs</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">Corporate</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">About Team</button></li>
              <li><button className="hover:text-white transition-colors">Compliance</button></li>
              <li><button className="hover:text-white transition-colors">Privacy</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">Connection</h4>
            <p className="text-sm text-slate-500 mb-8 font-medium">Quarterly briefings on sovereign AI.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Professional Email" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 w-full text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all text-white" />
              <button className="bg-[#0073fc] text-white px-6 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors">Register</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-24 pt-12 text-center text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black">
          © {new Date().getFullYear()} MOONSPRING AI. <span className="mx-4 text-white/10">|</span> ENTERPRISE GRADE INTELLIGENCE <span className="mx-4 text-white/10">|</span> hello@moonspringai.com
        </div>
      </footer>
    </div>
  );
};
