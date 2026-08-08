import React from 'react';

interface LogoProps {
  className?: string;
  brandName?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '', brandName = 'Nova Lab' }) => {
  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* 3-dot clover icon in pink */}
      <div className="relative w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#e0357a" className="drop-shadow-2xs">
          <circle cx="12" cy="7" r="4" />
          <circle cx="7" cy="16" r="4" />
          <circle cx="17" cy="16" r="4" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-2xl font-bold tracking-tight text-[#1a3d3d] font-['Poppins'] group-hover:text-[#e0357a] transition-colors">
          {brandName}
        </span>
      </div>
    </div>
  );
};

