import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface CoverageMapSectionProps {
  onOpenContact?: () => void;
  onNavigateAbout?: () => void;
}

interface PinData {
  id: string;
  label: string;
  flag: string;
  city: string;
  country: string;
  address1: string;
  address2: string;
  phone: string;
  email: string;
  x: number; // percentage
  y: number; // percentage
  cardPosition: 'top-center' | 'top-right' | 'top-left';
}

export const CoverageMapSection: React.FC<CoverageMapSectionProps> = ({
  onOpenContact,
  onNavigateAbout,
}) => {
  const [activePinId, setActivePinId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const mapY = useTransform(scrollYProgress, [0, 1], ["25px", "-25px"]);
  const sonarScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.08]);

  // Generate dot matrix points for map shape
  const mapDots = React.useMemo(() => {
    const dots: { x: number; y: number; color: 'pink' | 'blue' | 'purple'; size: number }[] = [];
    
    for (let r = 0; r < 200; r += 11) {
      for (let c = 0; c < 340; c += 11) {
        const nx = (c - 170) / 100;
        const ny = (r - 100) / 80;
        
        // Define landmass shape equation (approximating map contour)
        const shapeVal = 
          Math.sin(nx * 1.8) * Math.cos(ny * 1.5) +
          Math.exp(-((nx - 0.2) ** 2 + (ny - 0.1) ** 2) * 2) * 1.2 +
          Math.exp(-((nx + 0.5) ** 2 + (ny + 0.6) ** 2) * 3) * 0.8;

        if (shapeVal > 0.35 && Math.random() > 0.15) {
          let color: 'pink' | 'blue' | 'purple' = 'blue';
          const distToCore = Math.hypot(c - 170, r - 120);
          
          if (distToCore < 75) {
            color = 'pink';
          } else if (distToCore < 115) {
            color = 'purple';
          }

          dots.push({
            x: c + 80,
            y: r + 60,
            color,
            size: color === 'pink' ? 3.2 : 2.6,
          });
        }
      }
    }
    return dots;
  }, []);

  const pins: PinData[] = [
    {
      id: 'egy',
      label: 'EGY',
      flag: '🇪🇬',
      city: 'Cairo',
      country: 'Egypt',
      address1: '15 TAHRIR STREET - DOWNTOWN',
      address2: 'BUILDING 4, CAIRO MEDICAL ZONE',
      phone: 'T: +20 2 1234 5678',
      email: 'eg.admin@novalab.com',
      x: 28,
      y: 42,
      cardPosition: 'top-right',
    },
    {
      id: 'ksa',
      label: 'KSA',
      flag: '🇸🇦',
      city: 'Riyadh',
      country: 'Saudi Arabia',
      address1: 'KING FAHD ROAD, BUILDING 12',
      address2: 'OLAYA DISTRICT - RETAIL TOWER',
      phone: 'T: +966 11 234 5678',
      email: 'sa.admin@novalab.com',
      x: 52,
      y: 54,
      cardPosition: 'top-center',
    },
    {
      id: 'uae',
      label: 'UAE',
      flag: '🇦🇪',
      city: 'Dubai',
      country: 'UAE',
      address1: 'SHEIKH ZAYED ROAD, BUILDING 4',
      address2: 'BUSINESS BAY - TOWER A',
      phone: 'T: +971 4 123 4567',
      email: 'ae.admin@novalab.com',
      x: 74,
      y: 38,
      cardPosition: 'top-left',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="coverage-section"
      className="relative w-full py-20 sm:py-28 lg:py-32 px-2 sm:px-3 lg:px-4 bg-gradient-to-r from-[#fdf2f7] via-[#f6f2fc] to-[#edf6fc] border-t border-purple-100/50 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Text & CTA) - 5 Cols */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 text-left z-10">
            {/* Eyebrow Label */}
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#e0357a] block font-['Poppins']">
              OUR MEDICAL COVERAGE
            </span>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-normal leading-[1.25] sm:leading-[1.28] tracking-tight font-['Poppins'] bg-gradient-to-r from-[#e0357a] via-[#702958] to-[#1a3d3d] bg-clip-text text-transparent">
              Regional Presence
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-[#1a3d3d]/80 font-medium font-['Plus_Jakarta_Sans'] leading-relaxed max-w-lg">
              Partnered with leading global brands, we offer 360° coverage across the healthcare sector in the Middle East.
            </p>

            {/* Pill CTA Button */}
            <div className="pt-2">
              <button
                onClick={onNavigateAbout || onOpenContact}
                className="inline-flex items-center justify-between gap-6 px-8 py-3.5 rounded-full bg-white text-[#1a3d3d] font-semibold text-sm sm:text-base font-['Poppins'] shadow-[0_8px_30px_rgba(26,61,61,0.08)] border border-slate-100/90 hover:shadow-[0_12px_36px_rgba(224,53,122,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
              >
                <span>About Us</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#e0357a] group-hover:scale-125 transition-transform duration-300 shrink-0" />
              </button>
            </div>
          </div>

          {/* Right Column (Dot Matrix Map Illustration) - 7 Cols */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
            
            {/* Concentric Sonar Background Circles with parallax scale */}
            <motion.div 
              style={{ scale: sonarScale }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
            >
              <div className="w-[320px] sm:w-[460px] lg:w-[540px] h-[320px] sm:h-[460px] lg:h-[540px] rounded-full border border-white/80 shadow-inner" />
              <div className="absolute w-[240px] sm:w-[350px] lg:w-[410px] h-[240px] sm:h-[350px] lg:h-[410px] rounded-full border border-white/60" />
              <div className="absolute w-[160px] sm:w-[240px] lg:w-[280px] h-[160px] sm:h-[240px] lg:h-[280px] rounded-full border border-white/40" />
            </motion.div>

            {/* Dot Matrix Map SVG Container with Parallax scroll drift */}
            <motion.div 
              style={{ y: mapY }}
              className="relative w-full max-w-[580px] aspect-[4/3] flex items-center justify-center will-change-transform"
            >
              <svg
                viewBox="0 0 500 360"
                className="w-full h-full drop-shadow-sm"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Dots Rendering */}
                {mapDots.map((dot, index) => {
                  let fillColor = '#38bdf8'; // Blue
                  if (dot.color === 'pink') fillColor = '#e0357a';
                  if (dot.color === 'purple') fillColor = '#a855f7';

                  return (
                    <circle
                      key={index}
                      cx={dot.x}
                      cy={dot.y}
                      r={dot.size}
                      fill={fillColor}
                      opacity={dot.color === 'pink' ? 0.95 : 0.75}
                    />
                  );
                })}
              </svg>

              {/* Interactive Location Badges with Floating Hover Cards */}
              {pins.map((pin) => {
                const isHovered = activePinId === pin.id;

                let cardPosClass = 'bottom-full left-1/2 -translate-x-1/2 mb-3';
                if (pin.cardPosition === 'top-left') {
                  cardPosClass = 'bottom-full right-0 mb-3';
                } else if (pin.cardPosition === 'top-right') {
                  cardPosClass = 'bottom-full left-0 mb-3';
                }

                return (
                  <div
                    key={pin.id}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    onMouseEnter={() => setActivePinId(pin.id)}
                    onMouseLeave={() => setActivePinId(null)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                  >
                    {/* Floating Info Card */}
                    <div
                      className={`absolute ${cardPosClass} w-[280px] sm:w-[310px] bg-white rounded-[18px] p-6 shadow-[0_12px_40px_rgba(26,61,61,0.14)] border border-slate-100/80 transition-all duration-200 ease-out z-40 text-left pointer-events-none ${
                        isHovered
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 scale-95 translate-y-2'
                      }`}
                    >
                      {/* Top Row: Company Logo & Country Flag Circle Badge */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#1a3d3d] flex items-center justify-center text-[#38bdf8]">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <circle cx="12" cy="7" r="3.5" />
                              <circle cx="7" cy="16" r="3.5" />
                              <circle cx="17" cy="16" r="3.5" />
                            </svg>
                          </div>
                          <span className="text-base font-bold text-[#1a3d3d] font-['Poppins'] tracking-tight">
                            novalab
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-lg shadow-xs shrink-0">
                          {pin.flag}
                        </div>
                      </div>

                      {/* City & Country Heading */}
                      <h4 className="text-lg font-bold text-[#1a3d3d] font-['Poppins'] mb-3 leading-tight">
                        {pin.city}, {pin.country}
                      </h4>

                      {/* Address & Contact Details Block */}
                      <div className="text-[13px] font-medium text-[#1a3d3d]/90 font-['Plus_Jakarta_Sans'] leading-[1.5] space-y-1">
                        <div className="uppercase tracking-tight">{pin.address1}</div>
                        <div className="uppercase tracking-tight">{pin.address2}</div>
                        <div>{pin.phone}</div>
                        <div className="text-[#1a3d3d] font-medium">{pin.email}</div>
                      </div>
                    </div>

                    {/* Marker Badge Button */}
                    <div
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer ${
                        isHovered
                          ? 'scale-110 shadow-[0_10px_30px_rgba(224,53,122,0.28)] border-[#e0357a] bg-white'
                          : 'hover:scale-105'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                          isHovered ? 'bg-slate-100 text-sm' : 'bg-[#1a3d3d] text-white'
                        }`}
                      >
                        {isHovered ? pin.flag : '✓'}
                      </div>
                      <span className="text-xs font-bold text-[#1a3d3d] font-['Poppins'] tracking-wider uppercase">
                        {pin.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};


