// Desktop Nav Links & Action
import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenContact?: () => void;
  onNavigateSection?: (sectionId: string) => void;
  currentPage?: 'home' | 'about' | 'laboratories' | 'medical-devices' | 'pharma' | 'contact';
  onNavigatePage?: (page: 'home' | 'about' | 'laboratories' | 'medical-devices' | 'pharma' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onNavigateSection,
  currentPage = 'home',
  onNavigatePage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollYRef.current + 6) {
        // Scrolling DOWN -> hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollYRef.current - 6) {
        // Scrolling UP -> show header
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenDivisions = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDivisionsOpen(true);
    setHoveredNav('divisions');
  };

  const handleCloseDivisions = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setDivisionsOpen(false);
      setHoveredNav(null);
    }, 220);
  };

  const handleNavClick = (href: string, id: string) => {
    setMobileMenuOpen(false);
    setDivisionsOpen(false);

    if (id === 'about') {
      if (onNavigatePage) {
        onNavigatePage('about');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage === 'about' && onNavigatePage) {
      onNavigatePage('home');
      setTimeout(() => {
        if (onNavigateSection) {
          onNavigateSection(id);
        }
      }, 100);
      return;
    }

    if (onNavigateSection) {
      onNavigateSection(id);
    }
  };

  const headerVisible = isVisible || divisionsOpen || mobileMenuOpen;

  return (
    <header className={`py-2 fixed top-6 sm:top-4 left-2 right-2 z-50 px-3.5 sm:px-5 max-w-[1340px] mx-auto pointer-events-none transition-all duration-300 ease-in-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'}`}>
      <div id="navbar-container" className="relative pointer-events-auto bg-white/95 backdrop-blur-md rounded-[12px] sm:rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/90 px-6 sm:px-8 py-4 flex items-center justify-between transition-all duration-300">
        
        {/* Left: Logo */}
        <button
          onClick={() => {
            if (onNavigatePage) onNavigatePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer text-left focus:outline-none"
        >
          <Logo brandName="Nova Lab" />
        </button>

        {/* Right Nav Links Layout (Visible on desktop lg+) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#1a3d3d]">
          {/* Us */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setHoveredNav('about')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <button
              onClick={() => handleNavClick('#about', 'about')}
              className="hover:text-[#e0357a] transition-colors duration-200 cursor-pointer py-1 font-medium relative z-10"
            >
              Us
            </button>

            {/* Gradient Glow Underneath */}
            <AnimatePresence>
              {hoveredNav === 'about' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.65 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.65 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-44 h-16 pointer-events-none z-[-1]"
                >
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(224,53,122,0.85)_0%,rgba(224,53,122,0.45)_35%,transparent_70%)] blur-md opacity-90" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Divisions ∨ with Dropdown */}
          <div
            className="relative flex items-center py-2"
            onMouseEnter={handleOpenDivisions}
            onMouseLeave={handleCloseDivisions}
          >
            <button
              onClick={() => handleNavClick('#specialization-section', 'specialization-section')}
              className="group flex items-center gap-1 hover:text-[#e0357a] transition-colors duration-200 cursor-pointer py-1 font-medium relative z-10"
            >
              <span>Divisions</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#1a3d3d]/70 group-hover:text-[#e0357a] transition-transform duration-200 ${divisionsOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Gradient Glow Underneath */}
            <AnimatePresence>
              {hoveredNav === 'divisions' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.65 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.65 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-44 h-16 pointer-events-none z-[-1]"
                >
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(224,53,122,0.85)_0%,rgba(224,53,122,0.45)_35%,transparent_70%)] blur-md opacity-90" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Success stories */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setHoveredNav('case-studies')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <button
              onClick={() => handleNavClick('#features-carousel-section', 'features-carousel-section')}
              className="hover:text-[#e0357a] transition-colors duration-200 cursor-pointer py-1 font-medium relative z-10"
            >
              Success stories
            </button>

            {/* Gradient Glow Underneath */}
            <AnimatePresence>
              {hoveredNav === 'case-studies' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.65 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.65 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-44 h-16 pointer-events-none z-[-1]"
                >
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(224,53,122,0.85)_0%,rgba(224,53,122,0.45)_35%,transparent_70%)] blur-md opacity-90" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* New features / News */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setHoveredNav('news')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <button
              onClick={() => handleNavClick('#news-section', 'news-section')}
              className="hover:text-[#e0357a] transition-colors duration-200 cursor-pointer py-1 font-medium relative z-10"
            >
              New features
            </button>

            {/* Gradient Glow Underneath */}
            <AnimatePresence>
              {hoveredNav === 'news' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.65 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.65 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-44 h-16 pointer-events-none z-[-1]"
                >
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(224,53,122,0.85)_0%,rgba(224,53,122,0.45)_35%,transparent_70%)] blur-md opacity-90" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Vertical Separator | */}
          <span className="text-gray-300/80 font-light select-none px-0.5 text-base">|</span>

          {/* Contact with Pink Dot • */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setHoveredNav('contact')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <button
              onClick={() => {
                if (onNavigatePage) {
                  onNavigatePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (onOpenContact) {
                  onOpenContact();
                }
              }}
              className="group flex items-center gap-2 hover:text-[#e0357a] transition-colors duration-200 cursor-pointer py-1 font-medium text-[#1a3d3d] relative z-10"
            >
              <span>Contact</span>
              <span className="w-2 h-2 rounded-full bg-[#e0357a] inline-block shadow-[0_0_8px_rgba(224,53,122,0.6)] group-hover:scale-125 transition-transform" />
            </button>

            {/* Gradient Glow Underneath */}
            <AnimatePresence>
              {hoveredNav === 'contact' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.65 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.65 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-44 h-16 pointer-events-none z-[-1]"
                >
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(224,53,122,0.85)_0%,rgba(224,53,122,0.45)_35%,transparent_70%)] blur-md opacity-90" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Divisions Cards Glass Container Mega-Menu Dropdown */}
        <AnimatePresence>
          {divisionsOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleOpenDivisions}
              onMouseLeave={handleCloseDivisions}
              className="absolute top-full right-0 sm:right-2 lg:right-4 pt-3 w-[680px] sm:w-[740px] lg:w-[780px] max-w-[96vw] z-50 pointer-events-auto"
            >
              {/* Frosted Glass Outer Container (Matching Reference Image) */}
              <div className="bg-[#d5e4f2]/80 backdrop-blur-2xl rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/70 p-4 sm:p-5 grid grid-cols-3 gap-3.5 sm:gap-4">
                
                {/* Card 1: Laboratories */}
                <div
                  onClick={() => {
                    setDivisionsOpen(false);
                    setMobileMenuOpen(false);
                    if (onNavigatePage) onNavigatePage('laboratories');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group relative h-[250px] sm:h-[280px] lg:h-[300px] rounded-[18px] sm:rounded-[20px] overflow-hidden cursor-pointer shadow-xs hover:shadow-xl hover:scale-[1.015] transition-all duration-300"
                >
                  <img
                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800"
                    alt="Laboratories"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  
                  {/* Top Left Clover Icon */}
                  <div className="absolute top-4 left-4 z-10 text-white drop-shadow-sm opacity-90">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 100 100">
                      <circle cx="50" cy="28" r="18" />
                      <circle cx="28" cy="66" r="18" />
                      <circle cx="72" cy="66" r="18" />
                    </svg>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <h4 className="text-xl sm:text-2xl font-normal font-['Poppins'] leading-tight text-white tracking-tight">
                      Laboratories
                    </h4>
                  </div>
                </div>

                {/* Card 2: Medical devices */}
                <div
                  onClick={() => {
                    setDivisionsOpen(false);
                    setMobileMenuOpen(false);
                    if (onNavigatePage) onNavigatePage('medical-devices');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group relative h-[250px] sm:h-[280px] lg:h-[300px] rounded-[18px] sm:rounded-[20px] overflow-hidden cursor-pointer shadow-xs hover:shadow-xl hover:scale-[1.015] transition-all duration-300"
                >
                  <img
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
                    alt="Medical devices"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  
                  {/* Top Left Clover Icon */}
                  <div className="absolute top-4 left-4 z-10 text-white drop-shadow-sm opacity-90">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 100 100">
                      <circle cx="50" cy="28" r="18" />
                      <circle cx="28" cy="66" r="18" />
                      <circle cx="72" cy="66" r="18" />
                    </svg>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <h4 className="text-xl sm:text-2xl font-normal font-['Poppins'] leading-tight text-white tracking-tight">
                      Medical devices
                    </h4>
                  </div>
                </div>

                {/* Card 3: Pharma */}
                <div
                  onClick={() => {
                    setDivisionsOpen(false);
                    setMobileMenuOpen(false);
                    if (onNavigatePage) onNavigatePage('pharma');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group relative h-[250px] sm:h-[280px] lg:h-[300px] rounded-[18px] sm:rounded-[20px] overflow-hidden cursor-pointer shadow-xs hover:shadow-xl hover:scale-[1.015] transition-all duration-300"
                >
                  <img
                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
                    alt="Pharma"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  
                  {/* Top Left Clover Icon */}
                  <div className="absolute top-4 left-4 z-10 text-white drop-shadow-sm opacity-90">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 100 100">
                      <circle cx="50" cy="28" r="18" />
                      <circle cx="28" cy="66" r="18" />
                      <circle cx="72" cy="66" r="18" />
                    </svg>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <h4 className="text-xl sm:text-2xl font-normal font-['Poppins'] leading-tight text-white tracking-tight">
                      Pharma
                    </h4>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile & Tablet Menu Toggle Button (Visible on screens < lg) */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-full hover:bg-gray-100/80 text-[#1a3d3d] transition-colors focus:outline-none cursor-pointer flex items-center justify-center border border-slate-200/60 shadow-2xs"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#e0357a]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Tablet & Mobile Slide-Down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-3.5 flex flex-col gap-1 text-[#1a3d3d] pointer-events-auto max-w-[1340px] mx-auto"
          >
            <button
              onClick={() => handleNavClick('#about', 'about')}
              className="flex items-center justify-between text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 active:bg-slate-100 font-medium text-sm transition-colors cursor-pointer"
            >
              <span className="font-medium text-[#1a3d3d]">About Us</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>

            <button
              onClick={() => handleNavClick('#specialization-section', 'specialization-section')}
              className="flex items-center justify-between text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 active:bg-slate-100 font-medium text-sm transition-colors cursor-pointer"
            >
              <span className="font-medium text-[#1a3d3d]">Divisions</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>

            <button
              onClick={() => handleNavClick('#features-carousel-section', 'features-carousel-section')}
              className="flex items-center justify-between text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 active:bg-slate-100 font-medium text-sm transition-colors cursor-pointer"
            >
              <span className="font-medium text-[#1a3d3d]">Case studies</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>

            <button
              onClick={() => handleNavClick('#news-section', 'news-section')}
              className="flex items-center justify-between text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 active:bg-slate-100 font-medium text-sm transition-colors cursor-pointer"
            >
              <span className="font-medium text-[#1a3d3d]">New features</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigatePage) {
                  onNavigatePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (onOpenContact) {
                  onOpenContact();
                }
              }}
              className="flex items-center justify-between text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 active:bg-slate-100 font-medium text-sm transition-colors cursor-pointer"
            >
              <span className="font-medium text-[#1a3d3d]">Contact</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


