import React, { useRef } from 'react';
import labImg from '../assets/images/pexels-mikhail-nilov-8943070.jpg';
import { motion, useScroll, useTransform } from 'motion/react';

interface LabStatementSectionProps {
  onOpenContact?: () => void;
}

export const LabStatementSection: React.FC<LabStatementSectionProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["20px", "-40px"]);
  const watermarkRotate = useTransform(scrollYProgress, [0, 1], [-10, 15]);

  return (
    <section
      ref={sectionRef}
      id="lab-statement-section"
      className="relative w-full py-20 sm:py-28 lg:py-32 px-2 sm:px-3 lg:px-4 bg-white border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Two-Column Equal Height Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch min-h-[440px] lg:min-h-[480px]">
          
          {/* Left Column: Photo with Parallax Scroll */}
          <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-slate-100 bg-[#e9eef3]">
            <motion.img
              style={{ y: imageY, scale: 1.25 }}
              src={labImg}
              alt="Diagnostic laboratory technicians reviewing testing solutions"
              className="w-full h-full object-cover object-center will-change-transform"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column: Statement Card */}
          <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[480px] rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-[#fdf2f7] via-[#f6f2fc] to-[#edf6fc] border border-purple-100/60 shadow-[0_8px_30px_rgba(26,61,61,0.04)] p-8 sm:p-12 lg:p-14 flex flex-col justify-center text-left overflow-hidden">
            
            {/* Parallax Watermark 3-Circle Molecule Logo */}
            <motion.div 
              style={{ y: watermarkY, rotate: watermarkRotate }}
              className="absolute -bottom-12 -right-12 text-[#1a3d3d] opacity-[0.09] pointer-events-none select-none z-0 will-change-transform"
            >
              <svg className="w-72 sm:w-96 h-72 sm:h-96 fill-current" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4" />
                <circle cx="7" cy="16" r="4" />
                <circle cx="17" cy="16" r="4" />
              </svg>
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 max-w-lg space-y-6 sm:space-y-7">
              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-medium text-[#1a3d3d] font-['Poppins'] leading-[1.28] sm:leading-[1.3] tracking-tight">
                We support diagnostic laboratories with reliable, high-quality testing solutions.
              </h2>

              {/* Pill CTA Button */}
              <div className="pt-2 sm:pt-3">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-between gap-6 px-8 py-3.5 rounded-full bg-white text-[#1a3d3d] font-semibold text-sm sm:text-base font-['Poppins'] shadow-[0_8px_25px_rgba(26,61,61,0.06)] border border-slate-100/90 hover:shadow-[0_12px_32px_rgba(224,53,122,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                >
                  <span>Contact</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e0357a] group-hover:scale-125 transition-transform duration-300 shrink-0" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

