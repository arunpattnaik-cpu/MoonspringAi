
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
    { id: 'about', label: 'About Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="glass-nav sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => handleNavClick('home')} className="hover:opacity-80 transition-opacity">
            <Logo />
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeTab === item.id ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={onGetStarted}
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-colors"
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
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-4 duration-200 z-40">
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg font-semibold py-2 transition-colors ${
                    activeTab === item.id ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    onGetStarted?.();
                  }}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-950 text-slate-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Logo invert className="h-9 mb-6" />
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Pioneering the future of enterprise intelligence through bespoke AI consulting and world-class product implementations.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setActiveTab('services')} className="hover:text-blue-400 transition-colors">Voice AI Agents</button></li>
              <li><button onClick={() => setActiveTab('consulting')} className="hover:text-blue-400 transition-colors">Strategy & Consulting</button></li>
              <li><button onClick={() => setActiveTab('salesforce')} className="hover:text-blue-400 transition-colors">Salesforce Einstein GPT</button></li>
              <li><button onClick={() => setActiveTab('home')} className="hover:text-blue-400 transition-colors">AI Product Development</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setActiveTab('about')} className="hover:text-blue-400 transition-colors">About Our Team</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Careers</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Privacy Policy</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Connected</h4>
            <p className="text-sm text-slate-400 mb-6">Join our monthly brief on the AI frontier.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 w-full text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 text-center text-[10px] uppercase tracking-widest text-slate-600">
          © {new Date().getFullYear()} MoonspringAI. Built for the era of intelligence. hello@moonspringai.com
        </div>
      </footer>
    </div>
  );
};
