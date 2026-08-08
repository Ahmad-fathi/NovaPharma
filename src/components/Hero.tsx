import React, { useRef } from 'react';
import { HERO_DATA } from '../data/labData';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section id="hero-section" ref={containerRef} className="relative w-full px-2 sm:px-3 lg:px-4 pt-2 sm:pt-2.5 pb-2">
      
      {/* Outer Large Rounded Hero Container */}
      <div className="relative w-full max-w-[1380px] mx-auto min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden rounded-[18px] sm:rounded-[26px] lg:rounded-[28px] shadow-[0_24px_60px_rgba(26,61,61,0.22)] bg-[#1a3d3d] border border-white/10 pt-28 sm:pt-36 lg:pt-40 pb-28 sm:pb-32 lg:pb-36">
        
        {/* Parallax Background Image Container */}
        <motion.div 
          style={{ y: imageY, scale: imageScale }}
          className="absolute -top-[10%] inset-x-0 h-[120%] w-full z-0 will-change-transform"
        >
          <img
            src={HERO_DATA.heroImageUrl}
            alt="Medical Diagnostics Laboratory"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-right-top"
          />

          {/* Gradient Dark Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a2a] via-[#1a3d3d]/90 to-[#1a3d3d]/30 md:to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a2a]/90 via-transparent to-black/20 z-10" />
        </motion.div>

        {/* Hero Content Container with Parallax scroll drift */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center will-change-transform"
        >
          
          {/* Left Column */}
          <div className="w-full max-w-[600px] text-white">
            
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-medium leading-[1.12] text-white tracking-tight mb-6 sm:mb-7 font-['Poppins'] max-w-[560px]"
            >
              Accurate results you can trust.
            </motion.h1>

            {/* Subtext Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-[20px] text-white/85 font-normal leading-relaxed max-w-[500px] mb-10 sm:mb-12 font-['Plus_Jakarta_Sans']"
            >
              We combine cutting-edge technology, automated analytics, and expert clinical care to deliver fast, reliable diagnostic results.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <button
                id="hero-cta-button"
                onClick={onOpenContact}
                className="group relative inline-flex items-center gap-4 bg-white hover:bg-white/95 text-[#1a3d3d] font-semibold text-base sm:text-lg px-8 sm:px-9 py-4 sm:py-4.5 rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.22)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.32)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span className="font-['Poppins']">Contact Us</span>
                
                {/* Pink Accent Bullet Dot */}
                <span className="w-3 h-3 rounded-full bg-[#e0357a] shadow-[0_0_10px_rgba(224,53,122,0.8)] group-hover:scale-125 transition-transform duration-200" />
              </button>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};


