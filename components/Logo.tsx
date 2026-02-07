
import React from 'react';

export const Logo: React.FC<{ className?: string; invert?: boolean }> = ({ className = "h-12", invert = false }) => {
  const primaryColor = invert ? "#ffffff" : "#0f172a";
  const accentColor = invert ? "#60a5fa" : "#1a4175";
  const detailColor = invert ? "#94a3b8" : "#64748b";

  return (
    <div className={`flex items-center select-none group ${className}`}>
      {/* Refined Moon-Spring 'M' Fusion Icon */}
      <div className="relative w-10 h-10 shrink-0 mr-3">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm group-hover:scale-105 transition-transform duration-500">
          {/* Background Crescent (Moon) */}
          <path 
            d="M30 20C15 35 15 65 30 80C22 70 22 30 30 20Z" 
            fill={primaryColor} 
          />
          {/* Flowing Spring Path (The 'M' shape) */}
          <path 
            d="M30 80V20L55 55L80 20V80" 
            stroke={accentColor} 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Intelligence Node (The 'AI' spark) */}
          <circle cx="80" cy="20" r="6" fill={accentColor} className="animate-pulse" />
          
          {/* Subtle tech-line detail */}
          <path 
            d="M55 55L55 85" 
            stroke={detailColor} 
            strokeWidth="2" 
            strokeDasharray="4 2" 
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline leading-none">
          <span className={`text-xl font-extrabold tracking-tight ${invert ? 'text-white' : 'text-slate-900'} font-display uppercase`}>
            Moonspring
          </span>
          <span className={`text-xl font-light tracking-[0.2em] ${invert ? 'text-blue-300' : 'text-[#1a4175]'} ml-1.5 font-display`}>
            AI
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="h-[1px] w-3" style={{ backgroundColor: accentColor }}></div>
          <span className={`text-[7px] uppercase tracking-[0.4em] font-bold ${invert ? 'text-slate-400' : 'text-slate-500'}`}>
            Enterprise Grade Intelligence
          </span>
        </div>
      </div>
    </div>
  );
};
