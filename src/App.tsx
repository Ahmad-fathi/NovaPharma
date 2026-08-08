import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureCards } from './components/FeatureCards';
import { SpecializationSection } from './components/SpecializationSection';
import { BrandsSection } from './components/BrandsSection';
import { StoryStatementSection } from './components/StoryStatementSection';
import { CoverageMapSection } from './components/CoverageMapSection';
import { FaqSection } from './components/FaqSection';
import { LabStatementSection } from './components/LabStatementSection';
import { VideoTestimonialsSection } from './components/VideoTestimonialsSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { LaboratoriesPage } from './components/LaboratoriesPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'laboratories' | 'medical-devices' | 'pharma' | 'contact'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis physics-based smooth scrolling with soft inertia easing
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential smooth decay
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(el, { duration: 1.4, offset: -20 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 120);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { duration: 1.4, offset: -20 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAbout = () => {
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f7f8f6] text-[#1a3d3d] flex flex-col selection:bg-[#e0357a] selection:text-white font-['Poppins',sans-serif]">
      
      {/* Floating Header Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigatePage={setCurrentPage}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Container */}
      <main className="flex-grow flex flex-col justify-between">
        {currentPage === 'about' ? (
          <AboutPage onNavigateSection={handleNavigateSection} />
        ) : currentPage === 'laboratories' ? (
          <LaboratoriesPage
            onNavigatePage={setCurrentPage}
            onOpenContact={openContact}
          />
        ) : currentPage === 'contact' ? (
          <ContactPage
            onNavigatePage={setCurrentPage}
            onNavigateSection={handleNavigateSection}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onOpenContact={openContact} />

            {/* Display Feature Cards Carousel */}
            <FeatureCards />

            {/* Specialization Section */}
            <SpecializationSection
              onOpenContact={openContact}
              onNavigatePage={setCurrentPage}
            />

            {/* Brands We Represent Section */}
            <BrandsSection onOpenContact={openContact} />

            {/* Story / Statement Section */}
            <StoryStatementSection onOpenContact={openContact} />

            {/* Medical Coverage Regional Map Section */}
            <CoverageMapSection onOpenContact={openContact} onNavigateAbout={openAbout} />

            {/* FAQ & Information Section */}
            <FaqSection onOpenContact={openContact} />

            {/* Lab Photo & Statement Block Section */}
            <LabStatementSection onOpenContact={openContact} />

            {/* Video Testimonials Specialists Grid Section */}
            <VideoTestimonialsSection />

            {/* Latest News & Articles Section */}
            <NewsSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigatePage={setCurrentPage} onOpenContact={openContact} />
    </div>
  );
}

