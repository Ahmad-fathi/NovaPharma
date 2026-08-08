import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  onOpenContact?: () => void;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqData: FaqItem[] = [
    {
      id: 0,
      question: 'What is NovaLab and what does it do?',
      answer:
        'NovaLab is a premier medical diagnostics and laboratory solutions provider, equipping healthcare facilities with state-of-the-art diagnostic technology, specimen care, and temperature-controlled logistics.',
    },
    {
      id: 1,
      question: 'Which countries does NovaLab operate in?',
      answer:
        'We maintain active regional hubs and strategic distribution networks across Saudi Arabia (KSA), United Arab Emirates (UAE), and Egypt (EGY), serving leading laboratories across the Middle East.',
    },
    {
      id: 2,
      question: 'How many years of experience does NovaLab have in the healthcare sector?',
      answer:
        'With over 25 years of specialized expertise in clinical laboratory instrumentation, cold-chain logistics, and healthcare technology, we guarantee high-precision diagnostic reliability.',
    },
    {
      id: 3,
      question: 'What solutions does NovaLab offer?',
      answer:
        'Our end-to-end portfolio includes clinical diagnostics machinery, point-of-care testing systems, automated sample management, cold-chain transport, and round-the-clock specialized technical support.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq-section"
      className="relative w-full py-20 sm:py-28 lg:py-32 px-2 sm:px-3 lg:px-4 bg-[#f5f5fb] border-t border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Headline */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1a3d3d] font-['Poppins'] tracking-tight leading-tight">
            Information about NovaLab.
          </h2>
        </div>

        {/* Content Grid (Accordion 65% / Contact Card 35%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: FAQ Accordion (7 or 8 cols) */}
          <div className="lg:col-span-8 relative">
            
            {/* Subtle Decorative Blurred Blob Behind Accordion */}
            <div className="absolute top-4 left-1/4 w-72 h-44 rounded-full bg-gradient-to-r from-[#e0357a]/20 to-[#38bdf8]/20 blur-[80px] pointer-events-none z-0" />

            <div className="relative z-10 space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-[16px] sm:rounded-[18px] border border-slate-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-medium text-[#1a3d3d] font-['Poppins'] leading-snug">
                        {item.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#e0357a]' : 'text-[#1a3d3d]/60'
                        }`}
                      >
                        <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    </button>

                    {/* Collapsible Answer */}
                    <div
                      className={`grid transition-[grid-template-rows,padding] duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] px-6 pb-6 pt-0' : 'grid-rows-[0fr] px-6 py-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base text-[#1a3d3d]/75 font-['Plus_Jakarta_Sans'] leading-relaxed pt-1 border-t border-slate-100">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact / Help Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-[#eaf2fb] rounded-[22px] p-6 sm:p-8 border border-blue-100/60 shadow-[0_8px_30px_rgba(26,61,61,0.04)] flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1a3d3d] font-['Poppins'] leading-snug">
                  Have more questions?
                </h3>
                <p className="text-sm sm:text-base text-[#1a3d3d]/75 font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Here you'll find answers to the most common questions about NovaLab. If you can't find what you're looking for, feel free to reach out to our team.
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto inline-flex items-center justify-between gap-6 px-7 py-3.5 rounded-full bg-white text-[#1a3d3d] font-semibold text-sm sm:text-base font-['Poppins'] shadow-[0_6px_20px_rgba(26,61,61,0.06)] hover:shadow-[0_10px_28px_rgba(224,53,122,0.16)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                >
                  <span>Contact Us</span>
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
