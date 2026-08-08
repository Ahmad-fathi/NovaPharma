import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "New Partnership Expands Diagnostic Imaging Capabilities",
    excerpt: "Taking another step forward in diagnostic healthcare technology across our regional centers.",
    category: "Medical Technology",
    date: "August 2026",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    alt: "Diagnostic imaging equipment in clinical setting",
  },
  {
    id: 2,
    title: "Celebrating Our Team's Family Day & Milestone Achievements",
    excerpt: "Real value comes from people — behind every accurate test result is a dedicated team.",
    category: "Culture & Team",
    date: "July 2026",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    alt: "Team gathering and celebration event",
  },
  {
    id: 3,
    title: "Voices That Build Our Story: Annual Regional Summit",
    excerpt: "Our journey is shaped by the voices of clinical specialists who innovate every day.",
    category: "Corporate",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    alt: "Company town hall meeting and speaker event",
  },
  {
    id: 4,
    title: "Next-Gen Pathology Automation Implemented in Riyadh & Cairo",
    excerpt: "Reducing turn-around time for vital diagnostic reports through modern robotic sampling.",
    category: "Innovation",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    alt: "Automated laboratory testing equipment",
  },
  {
    id: 5,
    title: "Accreditation Renewal Achieved with Zero Non-Conformities",
    excerpt: "Demonstrating uncompromised international clinical quality and rigorous precision standards.",
    category: "Quality Control",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    alt: "Quality accreditation seal and laboratory lab work",
  },
];

export const NewsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        const max = Math.max(0, trackWidth - containerWidth);
        setMaxScroll(max);
      }
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    const timer = setTimeout(updateConstraints, 300);

    return () => {
      window.removeEventListener('resize', updateConstraints);
      clearTimeout(timer);
    };
  }, []);

  const slideLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="news-section"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-16 bg-white overflow-hidden border-t border-slate-100"
    >
      {/* Decorative Soft Gradient Blob */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-gradient-to-br from-[#e0357a]/15 via-[#80d8ff]/15 to-transparent rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1380px] mx-auto">
        
        {/* TOP ROW: Headline Left, View All Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-['Poppins'] leading-[1.2] text-[#1a3d3d] tracking-tight">
              <span className="font-normal">Latest</span>{' '}
              <span className="font-medium">News</span>
              <br />
              <span className="font-normal text-[#1a3d3d]/80">and industry updates.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center gap-2.5 bg-[#1a3d3d] hover:bg-[#133233] text-white px-6 py-3 rounded-full font-medium text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>View All</span>
              <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
            </button>
          </div>
        </div>

        {/* DRAGGABLE & SCROLLABLE CAROUSEL CONTAINER (Horizontal Row, No Vertical Stacking) */}
        <div
          ref={containerRef}
          className="w-full overflow-x-auto scrollbar-none scroll-smooth py-2 cursor-grab active:cursor-grabbing select-none"
        >
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ right: 0, left: -maxScroll }}
            dragElastic={0.08}
            className="flex items-stretch gap-6 sm:gap-8 w-max pr-8"
          >
            {articles.map((article) => (
              <article
                key={article.id}
                className="group relative flex flex-col w-[280px] sm:w-[340px] md:w-[380px] shrink-0 aspect-[4/5] rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0f2a2a]/95 via-[#1a3d3d]/45 to-transparent"
                  aria-hidden
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#1a3d3d]">
                  {article.category}
                </div>

                <div className="relative mt-auto flex flex-col p-4 sm:p-5 pt-16">
                  <div className="text-xs font-semibold text-white/70 mb-1.5">
                    {article.date}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-['Poppins'] text-white leading-snug group-hover:text-[#ffb8d4] transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-white/80 font-['Plus_Jakarta_Sans'] leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#ffb8d4] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

