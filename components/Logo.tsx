
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <div className={`flex items-center gap-2.5 font-display ${className}`}>
    <div className="relative flex items-center justify-center w-9 h-9">
      {/* Abstract 'M' / Spring geometric shape */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full text-blue-600"
      >
        <path 
          d="M4 18L12 6L20 18" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="opacity-20"
        />
        <path 
          d="M4 14L12 2L20 14" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle cx="12" cy="14" r="2" fill="currentColor" />
      </svg>
      
      {/* Subtle accent glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full -z-10"></div>
    </div>
    
    <div className="flex flex-col leading-tight">
      <span className="text-slate-900 font-bold text-xl tracking-tight">
        MOONSPRING<span className="text-blue-600">AI</span>
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-400 -mt-0.5">
        Enterprise Intelligence
      </span>
    </div>
  </div>
);
