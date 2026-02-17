import React from "react";
import logo from "../assets/logo.png"; // make sure this path is correct

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-20 w-auto",
}) => {
  return (
    <div className="flex items-center justify-center select-none group">
      <img
        src={logo}
        alt="Moonspring AI"
        className={`${className} object-contain transition-all duration-500 group-hover:scale-105`}
      />
    </div>
  );
};
