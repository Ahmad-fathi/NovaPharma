import React from 'react';
import { Microscope, Dna, Stethoscope, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface SpecializationSectionProps {
  onOpenContact: () => void;
  onNavigatePage?: (page: 'home' | 'about' | 'laboratories' | 'medical-devices' | 'pharma') => void;
}

export const SpecializationSection: React.FC<SpecializationSectionProps> = ({ onOpenContact, onNavigatePage }) => {
  const cards = [
    {
      id: 'equipments',
      icon: Microscope,
      title: 'Diagnostic Equipment & Reagents',
      sub: 'Automated clinical analysers, modular robotics & high-precision assay reagents.',
      imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
      tag: 'HIGH THROUGHPUT'
    },
    {
      id: 'genetics',
      icon: Dna,
      title: 'Molecular Biology & Genetics',
      sub: 'Next-generation sequencing (NGS), real-time PCR panels & oncology profiling.',
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      tag: 'GENOMICS & PCR'
    },
    {
      id: 'logistics',
      icon: Stethoscope,
      title: 'Clinical Logistics & Specimen Care',
      sub: 'Temperature-controlled cold chain logistics, stat specimen pickup & HL7 integration.',
      imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      tag: 'COLD-CHAIN 24/7'
    }
  ];

  return (
    <section id="specialization-section" className="w-full py-8 sm:py-12 lg:py-16 px-2 sm:px-4 lg:px-8 bg-gradient-to-r from-[#fcf2f7] via-[#f7f4fb] to-[#eef5fa] border-t border-purple-50/50">
      <div className="max-w-[1380px] mx-auto px-2 sm:px-4 lg:px-10 space-y-6 sm:space-y-8 lg:space-y-12">
        
        {/* Left-Aligned Header Block with generous typography breathing room */}
        <div className="max-w-4xl space-y-2 sm:space-y-3.5 px-1 sm:px-0">
          <div className="inline-flex items-center gap-2.5">
            <span className="text-xs sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-[#e0357a] font-['Poppins']">
              WHAT AREAS DO WE SPECIALIZE IN?
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[40px] font-light text-[#1a3d3d] leading-[1.35] tracking-normal font-['Poppins']">
            Partnered with industry leading brands, we deliver the equipment, technology, and expertise needed for accurate diagnostics from sample collection to results.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-normal font-['Plus_Jakarta_Sans'] max-w-2xl leading-relaxed pt-0.5">
            A structure designed to cover every critical need of a modern diagnostic laboratory.
          </p>
        </div>

        {/* 3 Image Cards Row - Reduced outer padding and optimized responsive gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 pt-1">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                onClick={() => {
                  if (onNavigatePage) {
                    onNavigatePage('laboratories');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    onOpenContact();
                  }
                }}
                className={`group relative h-[340px] sm:h-[370px] lg:h-[400px] rounded-[1.5rem] sm:rounded-[1.8rem] lg:rounded-[2.2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-white/80 flex flex-col justify-between cursor-pointer hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ${idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Full-bleed Background Photo */}
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 opacity-70 group-hover:opacity-85 transition-opacity duration-300 ease-out z-10" />

                {/* Top Row: Circular Icon & Tag Badge */}
                <div className="relative z-20 p-4 sm:p-5 lg:p-6 flex items-center justify-between">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-[#1a3d3d] group-hover:bg-[#e0357a] group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>

                  <span className="text-[10px] sm:text-xs font-medium tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                    {card.tag}
                  </span>
                </div>

                {/* Bottom Overlay Details */}
                <div className="relative z-20 p-4 sm:p-5 lg:p-6 text-white flex flex-col justify-end">
                  <h3 className="text-base sm:text-lg lg:text-xl font-medium font-['Poppins'] leading-snug group-hover:text-[#ff80ab] transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Smooth Expand & Slide-Up Reveal Container */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out">
                      <p className="pt-2 text-xs sm:text-sm text-white/90 leading-relaxed font-['Plus_Jakarta_Sans']">
                        {card.sub}
                      </p>
                      <div className="pt-2.5 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#ff80ab]">
                        <span>Explore specifications</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
