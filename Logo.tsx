import React from 'react';

export const Logo: React.FC<{ className?: string; invert?: boolean }> = ({ className = "h-9", invert = false }) => (
  <div className={`flex items-center gap-4 font-display ${className}`}>
    <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
      {/* The Kinetic Monolith: A singular, bold silhouette of M and S */}
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full transform transition-all duration-300 hover:scale-110"
      >
        {/* The Mark: A single bold path forming the MS fusion */}
        <path 
          d="M6 34V10C6 7 8 6 11 6C14 6 16 8 18 11L22 17C22 17 25 21 28 21C31 21 33 19 34 16V34" 
          stroke={invert ? "white" : "#1e40af"} 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* The 'S' Momentum Detail: A high-contrast accent within the path */}
        <path 
          d="M22 17C22 17 25 21 28 21C31 21 33 19 34 16" 
          stroke={invert ? "#3b82f6" : "#60a5fa"} 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          className="opacity-90"
        />

        {/* The Core Intelligence Node: Minimalist center point */}
        <circle 
          cx="22" cy="17" r="2.5" 
          fill={invert ? "#1e40af" : "white"} 
        />
      </svg>
    </div>
    
    <div className="flex flex-col -space-y-1.5">
      <div className="flex items-center">
        <span className={`text-2xl font-black tracking-tighter ${invert ? 'text-white' : 'text-slate-950'}`}>
          Moonspring
        </span>
        <span className="text-2xl font-black tracking-tighter text-blue-600 ml-0.5">
          AI
        </span>
      </div>
      <div className={`text-[8px] uppercase tracking-[0.35em] font-black opacity-40 ${invert ? 'text-slate-400' : 'text-slate-600'}`}>
        Enterprise Grade Intelligence
      </div>
    </div>
  </div>
);