import React, { useState } from 'react';
import { FeatureCards } from './FeatureCards';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import aboutHeroImg from '../assets/images/ChatGPT Image Aug 5, 2026, 03_41_02 AM.png';
import labCardImg from '../assets/images/pexels-artempodrez-8532824.jpg';
import pharmaCardImg from '../assets/images/pexels-mart-production-7231210.jpg';
import timelineImg from '../assets/images/pexels-artempodrez-8532864.jpg';

interface AboutPageProps {
  onNavigateSection?: (sectionId: string) => void;
}

const actionKeys = [
  {
    title: 'Reliability (that inspires)',
    description: 'We act with integrity, responsibility, and commitment to build trust in every interaction.',
  },
  {
    title: 'Innovation with purpose',
    description: 'We continuously implement cutting-edge diagnostic methodologies and pharmaceutical precision technologies to elevate patient care.',
  },
  {
    title: 'Excellence in service',
    description: 'Our dedicated clinical specialists provide technical assistance and continuous advice for all medical equipment.',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateSection }) => {
  const [currentActionKeyIndex, setCurrentActionKeyIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNextActionKey = () => {
    setDirection(1);
    setCurrentActionKeyIndex((prev) => (prev + 1) % actionKeys.length);
  };

  const handlePrevActionKey = () => {
    setDirection(-1);
    setCurrentActionKeyIndex((prev) => (prev - 1 + actionKeys.length) % actionKeys.length);
  };

  return (
    <div className="w-full pb-16 space-y-16 sm:space-y-24 font-['Plus_Jakarta_Sans']">
      
      {/* 1. HERO SECTION - MATCHING HOMEPAGE HERO CONTAINER SYSTEM & IMAGE 2 HEIGHT */}
      <section id="about-hero-section" className="relative w-full px-2 sm:px-3 lg:px-4 pt-2 sm:pt-2.5 pb-2">
        <div className="relative w-full max-w-[1380px] mx-auto min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] flex items-center overflow-hidden rounded-[18px] sm:rounded-[26px] lg:rounded-[28px] bg-gradient-to-r from-[#fde8ef] via-[#f2f6fa] to-[#e6f1f8] border border-teal-900/5 shadow-xs pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 lg:pb-12 px-6 sm:px-10 lg:px-14">
          
          {/* Soft atmospheric gradient glows */}
          <div className="absolute -top-12 -right-12 sm:-top-20 sm:-right-20 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] bg-[#00b4d8] rounded-full blur-[100px] opacity-60 pointer-events-none" />
          <div className="absolute -top-20 left-1/3 w-80 h-80 bg-[#e0357a]/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">
            
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="text-xs sm:text-sm font-light tracking-[0.25em] text-[#e0357a] uppercase font-['Poppins'] block">
                US
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-light text-[#1a3d3d] font-['Poppins'] leading-[1.18] sm:leading-[1.2] tracking-tight max-w-xl">
                50 years providing medical solutions to the healthcare system.
              </h1>
            </div>

            {/* Right Building Facility Image Card */}
            <div className="lg:col-span-5 relative h-full flex items-center justify-end">
              <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[320px] rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-lg border border-white/70">
                <img
                  src={aboutHeroImg}
                  alt="Nova Lab Headquarters Building"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                
                {/* Top-Right Facade Logo Badge */}
                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-white/80 flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#e0357a">
                    <circle cx="12" cy="7" r="4" />
                    <circle cx="7" cy="16" r="4" />
                    <circle cx="17" cy="16" r="4" />
                  </svg>
                  <span className="text-xs font-bold text-[#1a3d3d] font-['Poppins']">Nova Lab</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INNER CONTENT WRAPPER */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* 2. LARGE STATEMENT BLOCK */}
        <section className="w-full py-8 sm:py-12 px-2 sm:px-6">
          <div className="max-w-5xl space-y-6">
            <span className="text-xs sm:text-sm font-light tracking-[0.25em] text-[#e0357a] uppercase font-['Poppins'] block">
              US
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-light text-[#1a3d3d] font-['Poppins'] leading-[1.38] sm:leading-[1.42] tracking-tight">
              We provide medical and pharmaceutical solutions that support healthcare teams in their daily work, bringing confidence and peace of mind to every decision.
            </h2>
          </div>
        </section>

        {/* 3. 360° COVERAGE SECTION (DIVISIONS) */}
        <section className="bg-gradient-to-r from-[#fde8ef] via-[#f3f7fa] to-[#e2f1fa] rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 lg:p-16 border border-teal-900/5 shadow-xs space-y-12">
          
          {/* Top Text Block */}
          <div className="space-y-6 max-w-5xl">
            <span className="text-xs sm:text-sm font-light tracking-[0.25em] text-[#e0357a] uppercase font-['Poppins'] block">
              WHAT MEDICAL COVERAGE DO WE PROVIDE?
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-light text-[#1a3d3d] font-['Poppins'] leading-[1.36] sm:leading-[1.4] tracking-tight max-w-4xl">
              Partnering with leading global brands, we offer 360° coverage of the healthcare sector.
            </h2>
            <p className="text-base sm:text-lg text-[#1a3d3d]/80 font-light max-w-2xl leading-relaxed">
              A structure designed to meet all the critical needs of the modern medical institution.
            </p>
          </div>

          {/* 3 Vertical Image Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Laboratories */}
            <div 
              onClick={() => onNavigateSection?.('brands-section')}
              className="group relative h-[400px] sm:h-[460px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-md border border-white/60 flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={labCardImg}
                alt="Laboratories"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top-Left: White 3-Dot Clover Icon */}
              <div className="relative z-10 p-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white" className="drop-shadow-sm">
                  <circle cx="12" cy="7" r="4.2" />
                  <circle cx="6.8" cy="16" r="4.2" />
                  <circle cx="17.2" cy="16" r="4.2" />
                </svg>
              </div>

              {/* Bottom Title */}
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-light font-['Poppins'] text-white">
                  Laboratories
                </h3>
              </div>
            </div>

            {/* Card 2: Medical devices */}
            <div 
              onClick={() => onNavigateSection?.('brands-section')}
              className="group relative h-[400px] sm:h-[460px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-md border border-white/60 flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                alt="Medical devices"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top-Left: White 3-Dot Clover Icon */}
              <div className="relative z-10 p-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white" className="drop-shadow-sm">
                  <circle cx="12" cy="7" r="4.2" />
                  <circle cx="6.8" cy="16" r="4.2" />
                  <circle cx="17.2" cy="16" r="4.2" />
                </svg>
              </div>

              {/* Bottom Title */}
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-light font-['Poppins'] text-white">
                  Medical devices
                </h3>
              </div>
            </div>

            {/* Card 3: Pharma */}
            <div 
              onClick={() => onNavigateSection?.('brands-section')}
              className="group relative h-[400px] sm:h-[460px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-md border border-white/60 flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={pharmaCardImg}
                alt="Pharma"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top-Left: White 3-Dot Clover Icon */}
              <div className="relative z-10 p-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white" className="drop-shadow-sm">
                  <circle cx="12" cy="7" r="4.2" />
                  <circle cx="6.8" cy="16" r="4.2" />
                  <circle cx="17.2" cy="16" r="4.2" />
                </svg>
              </div>

              {/* Bottom Title */}
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-light font-['Poppins'] text-white">
                  Pharma
                </h3>
              </div>
            </div>

          </div>
        </section>

        {/* 4. RECOGNIZED IN THE INDUSTRY STATEMENT - FULL SENTENCE GRADIENT WITH MOBILE BALANCED TYPOGRAPHY */}
        <section className="w-full py-8 sm:py-16 lg:py-20 px-3 sm:px-6 flex justify-center items-center">
          <div className="max-w-[960px] mx-auto text-center px-1 sm:px-4">
            <h2 className="text-[21px] sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[54px] font-light font-['Poppins'] leading-[1.35] sm:leading-[1.38] tracking-tight [text-wrap:balance] bg-gradient-to-r from-[#e0357a] via-[#801b38] to-[#1a3d3d] bg-clip-text text-transparent">
              Recognized in the industry for our comprehensive approach, we support clinics, hospitals, pharmacies and laboratories with a 360° service to meet their needs.
            </h2>
          </div>
        </section>

        {/* 5. CAROUSEL FEATURE CARDS */}
        <section id="features-carousel-section" className="w-full overflow-hidden">
          <FeatureCards className="mt-0 pt-0" />
        </section>

        {/* 6. TRAJECTORY AND ORIGIN (TIMELINE) */}
        <section className="pt-10 sm:pt-16 pb-8 sm:pb-12 space-y-10 sm:space-y-14">
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-light text-[#801b38] font-['Poppins'] text-center mb-6 sm:mb-10 lg:mb-12">
            Trajectory and origin
          </h2>

          {/* Milestone Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Photo */}
            <div className="lg:col-span-5">
              <div className="w-full h-[280px] sm:h-[340px] lg:h-[380px] rounded-[22px] overflow-hidden shadow-sm border border-gray-100 relative">
                <img
                  src={timelineImg}
                  alt="Biofarma convention team"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Text - Raised to align near the top edge of the image */}
            <div className="lg:col-span-7 flex flex-col justify-start pt-1 lg:pt-3 space-y-3.5 text-[#1a3d3d]">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-light font-['Poppins'] leading-tight">
                Expansion: From a local company to a regional group
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                <p>
                  With the incorporation of the second generation, Biofarma Laboratories initiated a strategic process of regional growth, giving rise to <strong className="font-semibold text-[#1a3d3d]">Diargo SpA in Chile</strong> and <strong className="font-semibold text-[#1a3d3d]">Diargo SAC in Peru</strong>.
                </p>
                <p>
                  Today, Biofarma and Diargo operate as an integrated group, sharing unified values and specialized capabilities to build a true <strong className="font-semibold text-[#1a3d3d]">regional ecosystem of health solutions</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Milestone Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start pt-6">
            {/* Left Text - Raised to align near top edge */}
            <div className="lg:col-span-7 flex flex-col justify-start pt-1 lg:pt-3 space-y-3.5 text-[#1a3d3d] order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-light font-['Poppins'] leading-tight">
                New stage: Infrastructure, identity and future projection
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                <p>
                  Sustained growth drives a modern stage of operational consolidation, backed by strategic logistics hubs and temperature-monitored storage facilities to support diagnostic networks.
                </p>
                <p>
                  Above all, our group is recognized for <strong className="font-semibold text-[#1a3d3d]">how we work alongside our partners</strong>: with closeness, immediate responsiveness, and a genuine commitment to health outcomes.
                </p>
              </div>
            </div>

            {/* Right Graphic Badge Card */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="w-full h-[280px] sm:h-[340px] lg:h-[380px] bg-gradient-to-br from-[#f8dce5] via-[#e8f0f8] to-[#d8e8f5] rounded-[22px] p-8 flex flex-col items-center justify-center relative shadow-xs border border-teal-900/5 overflow-hidden">
                {/* Pattern Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#1a3d3d_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-xs border border-white">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#e0357a">
                    <circle cx="12" cy="7" r="4" />
                    <circle cx="7" cy="16" r="4" />
                    <circle cx="17" cy="16" r="4" />
                  </svg>
                  <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                    <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">🇵🇪</span>
                    <span className="text-sm font-bold text-[#1a3d3d] font-['Poppins']">PER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. WE ARE ONE BIG FAMILY BANNER CARD - WITH INCREASED HEIGHT */}
        <div className="max-w-[1150px] mx-auto px-2 sm:px-4">
          <section className="relative w-full rounded-[20px] sm:rounded-[26px] h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden shadow-md border border-white/20 flex items-end p-6 sm:p-10 lg:p-12">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80"
              alt="We are one big family"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="relative z-10 space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white font-['Poppins'] tracking-tight">
                We are one big family.
              </h2>
            </div>
          </section>
        </div>

        {/* 8. QUALITY STANDARDS & RELIABILITY GRID - WITH SIDE MARGINS & REDUCED SIZE */}
        <div className="max-w-[1150px] mx-auto px-2 sm:px-4">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 py-2">
            
            {/* Left Card: Soft pink to light ice-blue background gradient */}
            <div className="bg-gradient-to-br from-[#fde8ef]/90 via-[#f0f4f8] to-[#e1f0fa] rounded-[20px] sm:rounded-[24px] p-5 sm:p-7 lg:p-8 border border-teal-900/5 flex flex-col justify-center h-[260px] sm:h-[280px] lg:h-[290px] shadow-2xs space-y-3">
              <h3 className="text-xl sm:text-2xl lg:text-[30px] font-light text-[#0b3334] font-['Poppins'] leading-[1.2] tracking-tight max-w-md">
                Our quality standards guide us every day.
              </h3>
              <p className="text-xs sm:text-sm text-[#1d4849]/90 font-light leading-relaxed max-w-md pt-1">
                We defined these action keys to drive us to be a better company, a better team, and consequently, to empower our customers.
              </p>
            </div>

            {/* Right Action Key Card: Rich multi-color dark gradient with circular badge & star medal graphic */}
            <div className="bg-gradient-to-br from-[#8a0b32] via-[#093637] to-[#012223] text-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-7 lg:p-8 flex flex-col justify-between h-[260px] sm:h-[280px] lg:h-[290px] relative overflow-hidden shadow-xl border border-white/10">
              
              {/* Floating Graphic 1: Soft dark translucent circle in top-center */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md absolute top-4 left-[36%] pointer-events-none" />

              {/* Floating Graphic 2: Star Medal with Ribbons in top-right */}
              <div className="absolute top-2.5 right-4 sm:right-6 text-teal-200/25 pointer-events-none">
                <svg width="75" height="95" viewBox="0 0 100 120" fill="currentColor">
                  <path d="M50 5 L55 15 L66 10 L68 21 L79 20 L77 31 L88 35 L82 44 L91 52 L82 59 L88 68 L77 72 L79 83 L68 82 L66 93 L55 88 L50 98 L45 88 L34 93 L32 82 L21 83 L23 72 L12 68 L18 59 L9 52 L18 44 L12 35 L23 31 L21 20 L32 21 L34 10 L45 15 Z" fill="currentColor" />
                  <circle cx="50" cy="51.5" r="24" fill="currentColor" opacity="0.8" />
                  <polygon points="50,35 54,46 66,46 56,53 60,65 50,57 40,65 44,53 34,46 46,46" fill="#032526" opacity="0.95" />
                  <polygon points="38,80 26,115 38,107 50,115 42,80" fill="currentColor" opacity="0.8" />
                  <polygon points="58,80 50,115 62,107 74,115 62,80" fill="currentColor" opacity="0.8" />
                </svg>
              </div>

              {/* Top Header Label */}
              <div className="relative z-10">
                <span className="text-[11px] font-normal tracking-widest text-white/90 uppercase font-['Poppins'] block">
                  ACTION KEYS
                </span>
              </div>

              {/* Animated Content (Badge, Title, Description) with Absolute Positioning to guarantee zero height jump */}
              <div className="relative z-10 my-1 h-[135px] sm:h-[145px] overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentActionKeyIndex}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                    transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0 flex flex-col justify-center space-y-1.5 sm:space-y-2 pr-2"
                  >
                    {/* Number badge */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center text-xs sm:text-sm font-light shadow-2xs shrink-0">
                      {currentActionKeyIndex + 1}
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-[24px] font-light text-white font-['Poppins'] leading-[1.2] tracking-tight">
                      {actionKeys[currentActionKeyIndex].title}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-slate-200 font-light leading-relaxed max-w-md">
                      {actionKeys[currentActionKeyIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Right Nav Arrow Buttons */}
              <div className="flex items-center justify-end relative z-10 gap-2.5 pt-1">
                <button
                  onClick={handlePrevActionKey}
                  aria-label="Previous action key"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d4748] hover:bg-[#135455] active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-md border border-white/10"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextActionKey}
                  aria-label="Next action key"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0d4748] hover:bg-[#135455] active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-md border border-white/10"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </section>
        </div>

        {/* 9. SUPPORT HEALTHCARE INSTITUTIONS CTA BANNER - MATCHING REFERENCE IMAGE */}
        <div className="max-w-[1150px] mx-auto px-2 sm:px-4 py-6">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Photo Card */}
            <div className="w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-md border border-gray-100/80 relative">
              <img
                src={timelineImg}
                alt="Healthcare team collaboration"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Gradient Card */}
            <div className="w-full h-[320px] sm:h-[380px] lg:h-[420px] bg-gradient-to-tr from-[#fce4ee]/90 via-[#f0f4f9] to-[#d6e6f8] rounded-[24px] sm:rounded-[28px] p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden shadow-sm border border-blue-900/5">
              
              {/* Background Watermark Clover Logo */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none opacity-30 text-white flex items-center justify-center">
                <svg width="280" height="280" viewBox="0 0 200 200" fill="currentColor">
                  {/* Biofarma 3-clover shape watermark */}
                  <circle cx="100" cy="65" r="42" />
                  <circle cx="65" cy="125" r="42" />
                  <circle cx="135" cy="125" r="42" />
                  <circle cx="100" cy="100" r="22" fill="#dce8f8" opacity="0.6" />
                </svg>
              </div>

              {/* Main Heading */}
              <div className="relative z-10 pt-2">
                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-light text-[#0b3334] font-['Poppins'] leading-[1.25] tracking-tight max-w-md">
                  We support healthcare institutions with reliable, high-quality medical solutions.
                </h2>
              </div>

              {/* Contact Button */}
              <div className="relative z-10 pb-2">
                <button
                  onClick={() => {
                    if (onNavigateSection) {
                      onNavigateSection('brands-section');
                    }
                  }}
                  className="bg-white text-[#0b3334] hover:bg-slate-50 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full font-normal text-base sm:text-lg shadow-sm inline-flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-white/60"
                >
                  <span>Contact</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e0357a]" />
                </button>
              </div>

            </div>

          </section>
        </div>

      </div>

    </div>
  );
};
