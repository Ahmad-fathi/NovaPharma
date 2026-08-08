import React, { useRef, useState } from 'react';
import testimonialVideo1 from '../assets/images/pexels-karola-g-6627919.jpg';
import testimonialVideo2 from '../assets/images/pexels-pedrofurtadoo-28516280.jpg';
import testimonialVideo3 from '../assets/images/pexels-tima-miroshnichenko-8376264.jpg';
import testimonialVideo4 from '../assets/images/pexels-tima-miroshnichenko-5452193.jpg';

interface VideoTestimonialsSectionProps {
  onOpenContact?: () => void;
}

const TESTIMONIAL_MEDIA = [
  { src: testimonialVideo1, alt: 'Pediatric Nephrology testimonial' },
  { src: testimonialVideo2, alt: 'Otolaryngologist testimonial' },
  { src: testimonialVideo3, alt: 'Biochemists testimonial' },
  { src: testimonialVideo4, alt: 'Biochemists team testimonial' },
] as const;

const MediaBlock: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-[22px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] shrink-0">
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      loading="lazy"
      draggable={false}
    />
  </div>
);

export const VideoTestimonialsSection: React.FC<VideoTestimonialsSectionProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    isPointerDownRef.current = true;
    setIsDraggingState(true);
    startXRef.current = e.clientX;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current || !scrollRef.current) return;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    const currentX = e.clientX;
    const dx = currentX - lastXRef.current;

    if (dt > 0) {
      velocityRef.current = dx / dt;
    }

    lastXRef.current = currentX;
    lastTimeRef.current = now;

    const totalDx = currentX - startXRef.current;
    scrollRef.current.scrollLeft = scrollLeftRef.current - totalDx;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;
    setIsDraggingState(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    // Momentum / inertia decay for fluid drag physics
    if (scrollRef.current && Math.abs(velocityRef.current) > 0.1) {
      let vel = velocityRef.current * 16;
      const decay = () => {
        if (!scrollRef.current || Math.abs(vel) < 0.3) return;
        scrollRef.current.scrollLeft -= vel;
        vel *= 0.92;
        animFrameRef.current = requestAnimationFrame(decay);
      };
      animFrameRef.current = requestAnimationFrame(decay);
    }
  };

  return (
    <section
      id="video-testimonials-section"
      className="relative w-full py-10 sm:py-14 lg:py-16 px-2 sm:px-3 lg:px-4 bg-white overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-10 lg:px-16">
        
        {/* Horizontal Drag/Scroll Container on Mobile, Grid on Tablet/Desktop */}
        <div
          ref={scrollRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-none cursor-grab active:cursor-grabbing select-none touch-pan-x overscroll-x-contain ${
            isDraggingState ? 'scroll-auto' : 'scroll-smooth'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          
          {/* COLUMN 1: Tall Block (Top) + Info Card (Bottom) */}
          <div className="w-[260px] sm:w-[300px] md:w-auto shrink-0 flex flex-col gap-4 sm:gap-6 justify-between">
            <MediaBlock src={TESTIMONIAL_MEDIA[0].src} alt={TESTIMONIAL_MEDIA[0].alt} />

            {/* Info Card: Pediatric Nephrology */}
            <div className="relative overflow-hidden rounded-[22px] bg-[#fdfafc] p-5 sm:p-6 border border-pink-100/70 shadow-[0_4px_25px_rgba(26,61,61,0.03)] text-left h-[160px] sm:h-[180px] lg:h-[200px] flex flex-col justify-center space-y-1.5 shrink-0">
              {/* Pink Gradient Glow Blob in Top Right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e0357a]/25 rounded-full blur-[35px] pointer-events-none" />

              <h3 className="relative z-10 text-base sm:text-lg lg:text-xl font-bold text-[#1a3d3d] font-['Poppins'] leading-snug">
                Pediatric Nephrology
              </h3>
              <div className="relative z-10 space-y-0.5">
                <p className="text-xs sm:text-sm font-medium text-[#1a3d3d]/90 font-['Plus_Jakarta_Sans']">
                  Mariana Kamariski
                </p>
                <p className="text-xs text-[#1a3d3d]/60 font-['Plus_Jakarta_Sans']">
                  MN 8315
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Info Card (Top) + Tall Block (Bottom) */}
          <div className="w-[260px] sm:w-[300px] md:w-auto shrink-0 flex flex-col gap-4 sm:gap-6 justify-between">
            {/* Info Card: Otolaryngologist */}
            <div className="relative overflow-hidden rounded-[22px] bg-[#fdfafc] p-5 sm:p-6 border border-pink-100/70 shadow-[0_4px_25px_rgba(26,61,61,0.03)] text-left h-[160px] sm:h-[180px] lg:h-[200px] flex flex-col justify-center space-y-1.5 shrink-0">
              {/* Pink Gradient Glow Blob in Top Right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e0357a]/25 rounded-full blur-[35px] pointer-events-none" />

              <h3 className="relative z-10 text-base sm:text-lg lg:text-xl font-bold text-[#1a3d3d] font-['Poppins'] leading-snug">
                Otolaryngologist
              </h3>
              <div className="relative z-10 space-y-0.5">
                <p className="text-xs sm:text-sm font-medium text-[#1a3d3d]/90 font-['Plus_Jakarta_Sans']">
                  Eduardo Alfredo Figueroa
                </p>
                <p className="text-xs text-[#1a3d3d]/60 font-['Plus_Jakarta_Sans']">
                  MP 12100 • MN 153869
                </p>
              </div>
            </div>

            <MediaBlock src={TESTIMONIAL_MEDIA[1].src} alt={TESTIMONIAL_MEDIA[1].alt} />
          </div>

          {/* COLUMN 3: Tall Block (Top) + Info Card (Bottom) */}
          <div className="w-[260px] sm:w-[300px] md:w-auto shrink-0 flex flex-col gap-4 sm:gap-6 justify-between">
            <MediaBlock src={TESTIMONIAL_MEDIA[2].src} alt={TESTIMONIAL_MEDIA[2].alt} />
            <div className="relative overflow-hidden rounded-[22px] bg-[#fdfafc] p-5 sm:p-6 border border-pink-100/70 shadow-[0_4px_25px_rgba(26,61,61,0.03)] text-left h-[160px] sm:h-[180px] lg:h-[200px] flex flex-col justify-center space-y-1.5 shrink-0">
              {/* Pink Gradient Glow Blob in Top Right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e0357a]/25 rounded-full blur-[35px] pointer-events-none" />

              <h3 className="relative z-10 text-base sm:text-lg lg:text-xl font-bold text-[#1a3d3d] font-['Poppins'] leading-snug">
                Biochemists
              </h3>
              <div className="relative z-10 space-y-0.5">
                <p className="text-xs sm:text-sm font-medium text-[#1a3d3d]/90 font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Eduardo Pusiol, Rubén Berman and José Ansiaume
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 4: Info Card (Top) + Tall Block (Bottom) */}
          <div className="w-[260px] sm:w-[300px] md:w-auto shrink-0 flex flex-col gap-4 sm:gap-6 justify-between">
            {/* Info Card: Biochemists Team */}
            <div className="relative overflow-hidden rounded-[22px] bg-[#fdfafc] p-5 sm:p-6 border border-pink-100/70 shadow-[0_4px_25px_rgba(26,61,61,0.03)] text-left h-[160px] sm:h-[180px] lg:h-[200px] flex flex-col justify-center space-y-1 shrink-0">
              {/* Pink Gradient Glow Blob in Top Right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e0357a]/25 rounded-full blur-[35px] pointer-events-none" />

              <h3 className="relative z-10 text-base sm:text-lg lg:text-xl font-bold text-[#1a3d3d] font-['Poppins'] leading-snug">
                Biochemists
              </h3>
              <div className="relative z-10 space-y-0.5">
                <p className="text-[11px] sm:text-xs font-medium text-[#1a3d3d]/90 font-['Plus_Jakarta_Sans'] leading-snug">
                  María del Valle Recabarren, Lorena Contreras, Mónica Biscardi, Raúl Vallejos, Marcela Chiofalo, and Rafael Pérez Elizalde
                </p>
              </div>
            </div>

            <MediaBlock src={TESTIMONIAL_MEDIA[3].src} alt={TESTIMONIAL_MEDIA[3].alt} />
          </div>
        </div>
      </div>
    </section>
  );
};


