import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface StoryStatementSectionProps {
  onOpenContact?: () => void;
}

export const StoryStatementSection: React.FC<StoryStatementSectionProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-40px", "60px"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["60px", "-40px"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["15px", "-15px"]);

  return (
    <section
      ref={sectionRef}
      id="story-statement-section"
      className="relative w-full py-20 sm:py-28 lg:py-32 px-2 sm:px-3 lg:px-4 bg-gradient-to-br from-[#faf8fd] via-[#f7f5fd] to-[#f2f6fb] border-t border-purple-50/60 overflow-hidden"
    >
      {/* Background Soft Blurred Gradient Blobs with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Upper-Left Vibrant Pink / Magenta Blob */}
        <motion.div 
          style={{ y: blob1Y }}
          className="absolute -top-12 left-6 sm:left-12 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#e0357a]/18 blur-[90px] sm:blur-[110px] will-change-transform" 
        />
        
        {/* Slightly Overlapping Light Blue Blob to the Right */}
        <motion.div 
          style={{ y: blob2Y }}
          className="absolute top-16 left-48 sm:left-80 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#38bdf8]/18 blur-[90px] sm:blur-[110px] will-change-transform" 
        />
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div style={{ y: textY }} className="max-w-3xl sm:max-w-4xl text-left space-y-5 sm:space-y-6 will-change-transform">
          
          {/* Two-Tone Gradient Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-normal leading-[1.3] sm:leading-[1.32] tracking-tight font-['Poppins'] bg-gradient-to-r from-[#e0357a] via-[#702958] to-[#1a3d3d] bg-clip-text text-transparent max-w-4xl">
            Thousands of stories behind every solution installed.
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-[#1a3d3d]/80 font-medium font-['Plus_Jakarta_Sans'] leading-relaxed max-w-[540px]">
            We work hand in hand with healthcare professionals to turn technology into real wellbeing and quality of life.
          </p>

          {/* CTA Button without background and without dot */}
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 text-[#1a3d3d] font-semibold text-base sm:text-lg font-['Poppins'] hover:text-[#e0357a] transition-colors cursor-pointer group py-2 px-0"
            >
              <span>Success Stories</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

