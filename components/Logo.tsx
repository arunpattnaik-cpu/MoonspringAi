import React from 'react';

/**
 * Logo Component
 * Loads brand assets from the /logo folder.
 * Priority: logo/logo.png -> logo/logo.svg -> text fallback
 */
export const Logo: React.FC<{ className?: string; invert?: boolean }> = ({ className = "h-12", invert = false }) => {
  const taglineColor = invert ? "text-slate-400" : "text-slate-500";

  const logoSrc = invert
    ? "/logo/HD Square_Icons_Mockups/HD Square/2.jpg"
    : "/logo/Moonspring final logo files/Without Tagline/Moonspring-final-logo.png";
  return (
    <div className={`flex flex-col select-none group ${className}`}>
      <div className="flex items-center justify-center">
        <img 
          src={logoSrc}
          alt="Moonspring AI" 
          className="h-28 w-28 object-contain transition-all duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes('.jpg')) {
              target.src = "/logo/logo.png";
            } else if (target.src.includes('.png')) {
              target.src = "/logo/logo.svg";
            } else {
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.classList.remove('hidden');
            }
          }}
        />
      </div>
    </div>
  );
};