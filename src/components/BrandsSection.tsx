import React, { useState, useRef } from 'react';
import { Check, Pause, Play, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

interface BrandsSectionProps {
  onOpenContact?: () => void;
  hideHeader?: boolean;
  className?: string;
}

interface BrandItem {
  id: string;
  name: string;
  badgeEn: string;
  badgeEs: string;
  logoSvg: React.ReactNode;
  subtitleEn: string;
  subtitleEs: string;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onOpenContact, hideHeader = false, className = '' }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const brands: BrandItem[] = [
    {
      id: 'roche',
      name: 'Roche',
      badgeEn: 'STRATEGIC ALLIANCE',
      badgeEs: 'ALIANZA ESTRATÉGICA',
      subtitleEn: 'Molecular Diagnostics & Clinical Chemistry',
      subtitleEs: 'Diagnóstico Molecular y Química Clínica',
      logoSvg: (
        <svg viewBox="0 0 200 60" className="h-10 w-auto fill-current text-[#0066CC]">
          <path d="M25 10 H75 V50 H25 Z" fill="none" stroke="#0066CC" strokeWidth="3" />
          <text x="32" y="38" fontFamily="sans-serif" fontWeight="bold" fontSize="22" fill="#0066CC" letterSpacing="1">Roche</text>
        </svg>
      )
    },
    {
      id: 'bd',
      name: 'BD',
      badgeEn: 'OFFICIAL DISTRIBUTOR',
      badgeEs: 'DISTRIBUIDOR OFICIAL',
      subtitleEn: 'Specimen Collection & Flow Cytometry',
      subtitleEs: 'Toma de Muestras y Citometría de Flujo',
      logoSvg: (
        <div className="flex items-center gap-2 text-[#F26522] font-bold font-sans">
          <svg viewBox="0 0 60 60" className="w-10 h-10 fill-current">
            <path d="M10 10 L45 30 L10 50 Z" />
            <circle cx="20" cy="30" r="8" fill="#ffffff" />
          </svg>
          <span className="text-3xl font-black tracking-tighter text-[#1a3d3d]">BD</span>
        </div>
      )
    },
    {
      id: 'bbraun',
      name: 'B. Braun',
      badgeEn: 'GLOBAL PARTNER',
      badgeEs: 'SOCIO GLOBAL',
      subtitleEn: 'Infusion Technology & Clinical Disposables',
      subtitleEs: 'Tecnología de Infusión y Desechables Médicos',
      logoSvg: (
        <div className="flex items-center gap-1.5 font-bold font-sans text-[#008754]">
          <span className="text-3xl font-extrabold tracking-tight">B|BRAUN</span>
        </div>
      )
    },
    {
      id: 'siemens',
      name: 'Siemens Healthineers',
      badgeEn: 'DIAGNOSTIC LEADER',
      badgeEs: 'LÍDER DIAGNÓSTICO',
      subtitleEn: 'Immunoassay & Automated Automation Systems',
      subtitleEs: 'Inmunoensayo y Sistemas Automatizados',
      logoSvg: (
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold tracking-widest text-[#EB780A] uppercase font-sans">SIEMENS</span>
          <span className="text-[10px] font-semibold tracking-wider text-[#1a3d3d] uppercase">Healthineers</span>
        </div>
      )
    },
    {
      id: 'sysmex',
      name: 'Sysmex',
      badgeEn: 'CERTIFIED TECH',
      badgeEs: 'TECNOLOGÍA CERTIFICADA',
      subtitleEn: 'Hematology & Urinalysis Analyzers',
      subtitleEs: 'Analizadores de Hematología y Uroanálisis',
      logoSvg: (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#005BAC] flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <span className="text-2xl font-bold tracking-wider text-[#005BAC] font-sans">sysmex</span>
        </div>
      )
    },
    {
      id: 'abbott',
      name: 'Abbott',
      badgeEn: 'PREMIUM PARTNER',
      badgeEs: 'SOCIO PREMIUM',
      subtitleEn: 'Point of Care & Core Laboratory Solutions',
      subtitleEs: 'Punto de Atención y Soluciones de Laboratorio',
      logoSvg: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-4 border-[#0096D6] flex items-center justify-center">
            <div className="w-3 h-3 bg-[#0096D6] rounded-full" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#1a3d3d] font-sans">Abbott</span>
        </div>
      )
    },
    {
      id: 'thermo',
      name: 'Thermo Fisher',
      badgeEn: 'CERTIFIED DISTRIBUTOR',
      badgeEs: 'DISTRIBUIDOR CERTIFICADO',
      subtitleEn: 'Mass Spectrometry & Life Science Research',
      subtitleEs: 'Espectrometría de Masas e Investigación',
      logoSvg: (
        <div className="flex flex-col items-center">
          <span className="text-base font-extrabold text-[#E31B23] tracking-normal font-sans">Thermo Fisher</span>
          <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">SCIENTIFIC</span>
        </div>
      )
    },
    {
      id: 'mindray',
      name: 'Mindray',
      badgeEn: 'GLOBAL ALLIANCE',
      badgeEs: 'ALIANZA GLOBAL',
      subtitleEn: 'Clinical Chemistry & Patient Monitoring',
      subtitleEs: 'Química Clínica y Monitoreo de Pacientes',
      logoSvg: (
        <div className="flex items-center gap-1.5">
          <span className="text-2xl font-black tracking-tight text-[#E20613] font-sans">mindray</span>
        </div>
      )
    }
  ];

  // Quadruple array for seamless infinite marquee loop
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="brands-section" className={`w-full ${hideHeader ? 'py-2 sm:py-4 bg-transparent' : 'py-20 sm:py-28 lg:py-32 bg-[#f7f7fb] border-t border-slate-200/60'} px-2 sm:px-3 lg:px-4 relative overflow-hidden ${className}`}>
      {/* Keyframe Style for Smooth Continuous Marquee */}
      <style>{`
        @keyframes brandsMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-brands-marquee {
          animation: brandsMarquee 75s linear infinite;
        }
        .animate-brands-marquee.paused,
        .animate-brands-wrapper:hover .animate-brands-marquee {
          animation-play-state: paused !important;
        }
      `}</style>

      {!hideHeader && (
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Top Text Block (Left Aligned) */}
            <div className="max-w-4xl space-y-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#e0357a] block font-['Poppins']">
                BRANDS WE REPRESENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[48px] font-medium text-[#1a3d3d] leading-[1.2] tracking-tight font-['Poppins'] max-w-4xl">
                Global strategic partners who trust us.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-[#1a3d3d]/75 font-medium font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl pt-1">
                We work and comply with international quality standards throughout the workflow, guaranteeing the reliability of the most recognized laboratories.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Brand Cards Carousel Container */}
      <div className="animate-brands-wrapper relative w-full overflow-hidden py-3">
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-20 bg-gradient-to-r from-[#f7f7fb] via-[#f7f7fb]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-20 bg-gradient-to-l from-[#f7f7fb] via-[#f7f7fb]/80 to-transparent" />

        {/* Marquee Flex Track */}
        <div
          ref={scrollContainerRef}
          className={`flex items-center gap-6 w-max animate-brands-marquee ${isPaused ? 'paused' : ''}`}
        >
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              onClick={onOpenContact}
              className="group relative w-[310px] sm:w-[360px] h-[240px] sm:h-[270px] shrink-0 bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border-2 border-slate-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(181,176,255,0.25)] hover:border-[#b5b0ff] active:scale-[0.97] transition-all duration-200 ease-out flex flex-col justify-between cursor-pointer"
            >
              {/* Top-Left Badge: Small dark circular icon with white checkmark + text badge */}
              <div className="flex items-center gap-2.5">
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#1a3d3d] flex items-center justify-center text-white shrink-0 group-hover:bg-[#e0357a] transition-colors">
                  <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs font-bold tracking-wider text-[#1a3d3d]/90 uppercase font-['Poppins'] whitespace-nowrap">
                  {brand.badgeEn}
                </span>
              </div>

              {/* Center Brand Logo */}
              <div className="flex-1 flex items-center justify-center my-2 group-hover:scale-[1.04] transition-transform duration-200">
                {brand.logoSvg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
