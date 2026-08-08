import React from 'react';
import { Facebook, Instagram, Linkedin, ShieldCheck, Award } from 'lucide-react';

interface FooterProps {
  onOpenContact?: () => void;
  onNavigatePage?: (page: 'home' | 'about' | 'laboratories' | 'medical-devices' | 'pharma' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigatePage }) => {
  return (
    <footer className="w-full bg-[#f2f7f7] text-[#1a3d3d] pt-16 pb-12 font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* TOP ROW: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">
          
          {/* Column 1: Logo Icon & Headline */}
          <div className="space-y-5">
            {/* 3-dot clover Logo Icon */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#e0357a">
                  <circle cx="12" cy="7" r="4" />
                  <circle cx="7" cy="16" r="4" />
                  <circle cx="17" cy="16" r="4" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#1a3d3d] font-['Poppins']">
                Nova Lab
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] text-[#1a3d3d] leading-snug max-w-xs">
              Specialists in providing medical solutions.
            </h3>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col space-y-3 pt-2">
            <button
              onClick={() => {
                if (onNavigatePage) onNavigatePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-base font-medium hover:text-[#e0357a] transition-colors w-fit text-left cursor-pointer"
            >
              Us
            </button>
            <a href="#testimonials" className="text-base font-medium hover:text-[#e0357a] transition-colors w-fit">
              Success stories
            </a>
            <a href="#features" className="text-base font-medium hover:text-[#e0357a] transition-colors w-fit">
              New features
            </a>
            <button
              onClick={() => {
                if (onNavigatePage) {
                  onNavigatePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (onOpenContact) {
                  onOpenContact();
                }
              }}
              className="text-base font-medium text-left hover:text-[#e0357a] transition-colors w-fit cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Column 3: Divisions */}
          <div className="flex flex-col space-y-3 pt-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 font-['Poppins'] mb-1">
              DIVISIONS
            </span>
            <a href="#specialization" className="text-base font-medium hover:text-[#e0357a] transition-colors w-fit">
              Clinical Laboratories.
            </a>
            <a href="#specialization" className="text-base font-medium hover:text-[#e0357a] transition-colors w-fit">
              Medical Devices
            </a>
            <a href="#specialization" className="text-base font-medium hover:text-[#e0357a] transition-colors w-fit">
              Pharmacy
            </a>
          </div>

          {/* Column 4: Legal & Social */}
          <div className="flex flex-col space-y-6 pt-2">
            <div className="flex flex-col space-y-3">
              <a href="#terms" className="text-base font-medium hover:text-[#e0357a] transition-colors w-fit">
                Terms of use
              </a>
              <a href="#privacy" className="text-base font-medium hover:text-[#e0357a] transition-colors w-fit">
                Privacy policies
              </a>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-semibold text-[#1a3d3d] block">
                Follow us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#1a3d3d] text-white flex items-center justify-center hover:bg-[#e0357a] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#1a3d3d] text-white flex items-center justify-center hover:bg-[#e0357a] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-[#1a3d3d] text-white flex items-center justify-center hover:bg-[#e0357a] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* MIDDLE ROW: Paragraph + Flags on left, Certifications center/right */}
        <div className="pt-8 pb-10 border-t border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Paragraph + Country Badges */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm sm:text-base text-gray-700 font-medium max-w-lg leading-relaxed">
              We are leaders in the market for supplying clinics, hospitals, and laboratories. Specialists in providing medical solutions.
            </p>
            
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-2xs border border-gray-200 text-xs font-semibold text-[#1a3d3d]">
                <span className="w-2 h-2 rounded-full bg-[#e0357a]" />
                <span>EGY</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-2xs border border-gray-200 text-xs font-semibold text-[#1a3d3d]">
                <span className="w-2 h-2 rounded-full bg-[#1a3d3d]" />
                <span>KSA</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-2xs border border-gray-200 text-xs font-semibold text-[#1a3d3d]">
                <span className="w-2 h-2 rounded-full bg-[#e0357a]" />
                <span>UAE</span>
              </div>
            </div>
          </div>

          {/* Certifications / Accreditation Badges */}
          <div className="lg:col-span-5 flex items-center justify-start lg:justify-end gap-3 flex-wrap">
            {/* Cert 1 */}
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
              <div className="w-7 h-7 rounded-full bg-[#00529b] text-white flex items-center justify-center text-[8px] font-black tracking-tighter">
                IQNET
              </div>
              <div className="text-[10px] font-bold leading-tight text-gray-700">
                RECOGNIZED<br />CERTIFICATION
              </div>
            </div>

            {/* Cert 2 */}
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
              <div className="w-7 h-7 rounded-full bg-[#1a3d3d] text-white flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold leading-tight text-gray-700">
                ISO 9001<br />QUALITY
              </div>
            </div>

            {/* Cert 3 */}
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
              <div className="w-7 h-7 rounded-full bg-[#e0357a] text-white flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold leading-tight text-gray-700">
                TÜV Rheinland<br />CERTIFIED
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: Copyright */}
        <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-gray-500">
          <p>© 2026 Nova Lab. All rights reserved.</p>
        </div>

        {/* BELOW FOOTER: CTA Banner */}
        <div className="mt-12 relative w-full bg-[#1a3d3d] text-white rounded-[24px] sm:rounded-[28px] p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden flex items-center justify-between gap-6">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e0357a]/15 rounded-full blur-[70px] pointer-events-none" />

          <div className="space-y-1 relative z-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-300 font-['Poppins']">
              DISCOVER OUR
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium font-['Poppins'] tracking-tight text-white">
              Divisions
            </h2>
          </div>

          <button
            onClick={onOpenContact}
            aria-label="Discover Divisions"
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-[#1a3d3d] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer shrink-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#1a3d3d" className="group-hover:fill-[#e0357a] transition-colors">
              <circle cx="12" cy="7" r="3.8" />
              <circle cx="7" cy="16" r="3.8" />
              <circle cx="17" cy="16" r="3.8" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};
