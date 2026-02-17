import React from "react";
import logo from "../assets/logo.png";
import footerLogo from "../assets/logo2.png";

interface LogoProps {
  className?: string;
  footer?: boolean; // new prop to switch to footer logo
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-20 w-auto",
  footer = false,
}) => {
  const logoSrc = footer ? footerLogo : logo; // choose logo based on prop

  return (
    <div className="flex items-center justify-center select-none group">
      <img
        src={logoSrc}
        alt="Moonspring AI"
        className={`${className} object-contain transition-all duration-500 group-hover:scale-105`}
      />
    </div>
  );
};
