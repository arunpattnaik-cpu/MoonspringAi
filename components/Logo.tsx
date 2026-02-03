import React from 'react';

export const Logo: React.FC<{ className?: string; invert?: boolean }> = ({ className = "h-9", invert = false }) => (
  <div className={`flex items-center gap-1.5 font-display group cursor-pointer ${className}`}>
    <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
      {/* The Apex Monolith: A solid geometric fusion of M and S */}
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]"
      >
        {/* Base M Structure - Solid Foundation */}
        <path 
          d="M4 34V10C4 7.79086 5.79086 6 8 6H12L20 18L28 6H32C34.2091 6 36 7.79086 36 10V34H28V18L20 30L12 18V34H4Z" 
          fill={invert ? "white" : "#0f172a"} 
        />
        
        {/* The Kinetic S Curve - Carved through negative space and accent fill */}
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M20 18L28 6H32C34.2091 6 36 7.79086 36 10V18C36 21 34 22 32 22H28C26 22 24 23 24 26V34H16V26C16 21 18 20 20 20H24C26 20 28 19 28 16V10L20 22V18Z" 
          fill={invert ? "#3b82f6" : "#2563eb"} 
          className="transition-all duration-700 group-hover:brightness-125"
        />
        
        {/* Precision Node */}
        <rect 
          x="18" y="28" width="4" height="4" rx="1" 
          fill={invert ? "white" : "#2563eb"} 
          className="animate-pulse"
        />
      </svg>
    </div>
    
    <div className="flex flex-col space-y-0.5">
      <div className="flex items-center leading-none">
        <span className={`text-2xl font-black tracking-tighter ${invert ? 'text-white' : 'text-slate-950'}`}>
          Moonspring
        </span>
        <span className="text-2xl font-black tracking-tighter text-blue-600 ml-0.5">
          AI
        </span>
      </div>
      <div className={`text-[7px] uppercase tracking-[0.48em] font-black opacity-40 ${invert ? 'text-slate-300' : 'text-slate-600'} leading-none mt-0.5`}>
        Enterprise Grade Intelligence
      </div>
    </div>
  </div>
);