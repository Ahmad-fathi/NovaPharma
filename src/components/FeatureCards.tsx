import React, { useRef, useState, useEffect } from 'react';
import { FEATURE_CARDS } from '../data/labData';
import { FeatureCardItem } from '../types';
import { ArrowUpRight, Star } from 'lucide-react';
import { motion, useMotionValue, useAnimationFrame } from 'motion/react';

interface FeatureCardsProps {
  onSelectCard?: (card: FeatureCardItem) => void;
  className?: string;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  // Duplicate cards 4 times to ensure seamless infinite looping & dragging
  const cardsList = [
    ...FEATURE_CARDS,
    ...FEATURE_CARDS,
    ...FEATURE_CARDS,
    ...FEATURE_CARDS,
  ];

  useEffect(() => {
    const calculateWidth = () => {
      if (trackRef.current) {
        // Since we repeated 4 times, 1 set width is total / 4
        const totalW = trackRef.current.scrollWidth;
        setSingleSetWidth(totalW / 4);
      }
    };

    calculateWidth();
    // Recalculate after images load and on window resize
    window.addEventListener('resize', calculateWidth);
    const timer = setTimeout(calculateWidth, 300);

    return () => {
      window.removeEventListener('resize', calculateWidth);
      clearTimeout(timer);
    };
  }, []);

  // Continuous smooth slow auto-scroll loop
  useAnimationFrame((_, delta) => {
    if (!isDragging && !isHovered && singleSetWidth > 0) {
      // 30 pixels per second slow motion
      let currentX = x.get() - (delta / 1000) * 32;

      // Wrap seamless loop
      if (currentX <= -singleSetWidth) {
        currentX += singleSetWidth;
      } else if (currentX > 0) {
        currentX -= singleSetWidth;
      }

      x.set(currentX);
    }
  });

  const handleDragEnd = () => {
    setIsDragging(false);
    // Standardize position after user release
    if (singleSetWidth > 0) {
      let currentX = x.get();
      while (currentX <= -singleSetWidth) {
        currentX += singleSetWidth;
      }
      while (currentX > 0) {
        currentX -= singleSetWidth;
      }
      x.set(currentX);
    }
  };

  const renderSingleCard = (card: FeatureCardItem, uniqueKey: string) => {
    // Card 1: Regional / Global Presence (Map with EGY, KSA, UAE)
    if (card.id === 'presence') {
      return (
        <div
          key={uniqueKey}
          className="relative w-[180px] sm:w-[280px] h-[180px] sm:h-[280px] shrink-0 bg-white/95 backdrop-blur-sm rounded-[18px] sm:rounded-[24px] p-3.5 sm:p-5 shadow-[0_6px_24px_rgba(0,0,0,0.05)] border border-gray-200/80 flex flex-col justify-between overflow-hidden select-none"
        >
          {/* Subtle Map Background Vector */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg viewBox="0 0 300 300" className="w-full h-full text-teal-900/10 fill-current">
              <path d="M120 40 C 150 40, 180 70, 170 110 C 160 140, 190 180, 160 220 C 140 250, 110 270, 100 240 C 90 200, 110 160, 100 120 C 90 80, 100 40, 120 40 Z" />
            </svg>
          </div>

          {/* Map Node Badges with EGY, KSA, UAE Checkmark Pills */}
          <div className="relative z-10 flex flex-col gap-2 pt-1">
            {/* EGY Badge */}
            <div className="self-start flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.06)] border border-slate-100 text-[10px] sm:text-[11px] font-bold text-[#1a3d3d]">
              <div className="w-3.5 h-3.5 rounded-full bg-[#1a3d3d] text-white flex items-center justify-center text-[8px] font-extrabold shrink-0">
                ✓
              </div>
              <span className="tracking-wider">EGY</span>
            </div>

            {/* KSA Badge */}
            <div className="self-center flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.06)] border border-slate-100 text-[10px] sm:text-[11px] font-bold text-[#1a3d3d] ml-4">
              <div className="w-3.5 h-3.5 rounded-full bg-[#1a3d3d] text-white flex items-center justify-center text-[8px] font-extrabold shrink-0">
                ✓
              </div>
              <span className="tracking-wider">KSA</span>
            </div>

            {/* UAE Badge */}
            <div className="self-end flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.06)] border border-slate-100 text-[10px] sm:text-[11px] font-bold text-[#1a3d3d]">
              <div className="w-3.5 h-3.5 rounded-full bg-[#1a3d3d] text-white flex items-center justify-center text-[8px] font-extrabold shrink-0">
                ✓
              </div>
              <span className="tracking-wider">UAE</span>
            </div>
          </div>

          {/* Card Title & Eyebrow */}
          <div className="relative z-10 mt-1 sm:mt-2">
            <span className="text-[8px] sm:text-[10px] font-medium tracking-widest uppercase text-[#e0357a] block mb-0.5 sm:mb-1 font-['Poppins']">
              {card.eyebrow}
            </span>
            <h3 className="text-[10px] sm:text-sm font-medium text-[#1a3d3d] leading-tight sm:leading-snug font-['Poppins']">
              {card.title}
            </h3>
          </div>
        </div>
      );
    }

    // Card 2: Guidance (Photo)
    if (card.id === 'guidance') {
      return (
        <div
          key={uniqueKey}
          className="relative w-[180px] sm:w-[280px] h-[180px] sm:h-[280px] shrink-0 rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.05)] border border-gray-200/80 flex flex-col justify-end select-none"
        >
          <img
            src={card.imageUrl}
            alt="Expert Guidance"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          <div className="relative z-10 p-3.5 sm:p-5 text-white">
            <span className="text-[8px] sm:text-[10px] font-medium tracking-widest uppercase text-[#ff80ab] block mb-0.5 sm:mb-1 font-['Poppins']">
              {card.eyebrow}
            </span>
            <h3 className="text-[10px] sm:text-sm font-medium text-white leading-tight sm:leading-snug font-['Poppins']">
              {card.title}
            </h3>
          </div>
        </div>
      );
    }

    // Card 3: Growth (Stat 3.5x)
    if (card.id === 'growth') {
      return (
        <div
          key={uniqueKey}
          className="relative w-[180px] sm:w-[280px] h-[180px] sm:h-[280px] shrink-0 bg-white/95 backdrop-blur-sm rounded-[18px] sm:rounded-[24px] p-3.5 sm:p-5 shadow-[0_6px_24px_rgba(0,0,0,0.05)] border border-gray-200/80 flex flex-col justify-between select-none"
        >
          <div className="flex items-start justify-between">
            <span className="text-2xl sm:text-4xl font-extralight text-[#1a3d3d] tracking-tight font-['Poppins']">
              3.5x
            </span>
            <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full border border-[#1a3d3d]/70 flex items-center justify-center text-[#1a3d3d]">
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2]" />
            </div>
          </div>

          <div className="mt-1 sm:mt-2">
            <span className="text-[8px] sm:text-[10px] font-medium tracking-widest uppercase text-[#e0357a] block mb-0.5 sm:mb-1 font-['Poppins']">
              {card.eyebrow}
            </span>
            <h3 className="text-[10px] sm:text-sm font-medium text-[#1a3d3d] leading-tight sm:leading-snug font-['Poppins']">
              {card.title}
            </h3>
          </div>
        </div>
      );
    }

    // Card 4: Facilities (Photo)
    if (card.id === 'facilities') {
      return (
        <div
          key={uniqueKey}
          className="relative w-[180px] sm:w-[280px] h-[180px] sm:h-[280px] shrink-0 rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.05)] border border-gray-200/80 flex flex-col justify-end select-none"
        >
          <img
            src={card.imageUrl}
            alt="Facilities"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          <div className="relative z-10 p-3.5 sm:p-5 text-white">
            <span className="text-[8px] sm:text-[10px] font-medium tracking-widest uppercase text-white/90 block mb-0.5 sm:mb-1 font-['Poppins']">
              {card.eyebrow}
            </span>
            <h3 className="text-[10px] sm:text-sm font-medium text-white leading-tight sm:leading-snug font-['Poppins']">
              {card.title}
            </h3>
          </div>
        </div>
      );
    }

    // Card 5: Clients (Stat 500)
    if (card.id === 'clients') {
      return (
        <div
          key={uniqueKey}
          className="relative w-[180px] sm:w-[280px] h-[180px] sm:h-[280px] shrink-0 bg-white/95 backdrop-blur-sm rounded-[18px] sm:rounded-[24px] p-3.5 sm:p-5 shadow-[0_6px_24px_rgba(0,0,0,0.05)] border border-gray-200/80 flex flex-col justify-between select-none"
        >
          <div className="flex items-start justify-between">
            <span className="text-2xl sm:text-4xl font-extralight text-[#1a3d3d] tracking-tight font-['Poppins']">
              500+
            </span>
            <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full border border-[#1a3d3d]/70 flex items-center justify-center text-[#1a3d3d]">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-none stroke-[2]" />
            </div>
          </div>

          <div className="mt-1 sm:mt-2">
            <span className="text-[8px] sm:text-[10px] font-medium tracking-widest uppercase text-[#e0357a] block mb-0.5 sm:mb-1 font-['Poppins']">
              {card.eyebrow}
            </span>
            <h3 className="text-[10px] sm:text-sm font-medium text-[#1a3d3d] leading-tight sm:leading-snug font-['Poppins']">
              {card.title}
            </h3>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="features-carousel-section" className={`relative z-30 w-full pb-6 sm:pb-8 lg:pb-10 overflow-hidden pointer-events-auto ${className || '-mt-12 sm:-mt-28 lg:-mt-32'}`}>
      {/* Draggable & Auto-Scrolling Carousel Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full overflow-hidden py-3 bg-transparent cursor-grab active:cursor-grabbing select-none"
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          drag="x"
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          dragElastic={0.08}
          className="flex items-center gap-4 sm:gap-5 w-max px-4 sm:px-8"
        >
          {cardsList.map((card, idx) => renderSingleCard(card, `${card.id}-${idx}`))}
        </motion.div>
      </div>
    </section>
  );
};


