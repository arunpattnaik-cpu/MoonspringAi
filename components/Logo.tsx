import React from 'react';

/**
 * Logo Component
 * Loads brand assets from the /logo folder.
 * Priority: logo/logo.png -> logo/logo.svg -> text fallback
 */
export const Logo: React.FC<{ className?: string; invert?: boolean }> = ({ 
  className = "h-20 w-auto", 
  invert = false 
}) => {

  const logoSrc = invert
    ? "/logo/hd-square-icon.jpg"
    : "/logo/logo.png";

  return (
    <div className="flex items-center justify-center select-none group">
      <img 
        src={logoSrc}
        alt="Moonspring AI"
        className={`${className} object-contain transition-all duration-500 group-hover:scale-105`}
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src.includes('.jpg')) {
            target.src = "/logo/logo.png";
          } else if (target.src.includes('.png')) {
            target.src = "/logo/logo.svg";
          } else {
            target.style.display = 'none';
          }
        }}
      />
    </div>
  );
};
