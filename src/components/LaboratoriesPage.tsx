import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, Sparkles, Layers, ShieldCheck, Microscope, Plus, Minus } from 'lucide-react';
import { BrandsSection } from './BrandsSection';
import { LabStatementSection } from './LabStatementSection';

interface LaboratoriesPageProps {
  onNavigatePage: (page: 'home' | 'about' | 'laboratories' | 'medical-devices' | 'pharma') => void;
  onOpenContact: () => void;
}

interface DiagnosticCategory {
  id: string;
  name: string;
  description: string;
  keyTests: string[];
  analyzers: string;
}

const CATEGORIES: DiagnosticCategory[] = [
  {
    id: 'high-complexity',
    name: 'High complexity',
    description: 'Specialized diagnostic assays including oncology biomarkers, rare metabolic disorders, and mass spectrometry panels designed for tertiary care facilities.',
    keyTests: ['Tumor markers', 'Hormonal cascades', 'Specialized proteins', 'Therapeutic drug monitoring'],
    analyzers: 'cobas 8000 modular analyzer series & Mass Spectrometry Systems'
  },
  {
    id: 'pathological-anatomy',
    name: 'Pathological anatomy',
    description: 'Automated tissue processing, slide staining, immunohistochemistry (IHC), and digital pathology solutions for precise cancer diagnosis.',
    keyTests: ['IHC staining', 'In Situ Hybridization (ISH)', 'Biopsy tissue processing', 'Digital slide scanning'],
    analyzers: 'VENTANA BenchMark ULTRA IHC/ISH staining system'
  },
  {
    id: 'bacteriology',
    name: 'Bacteriology',
    description: 'Rapid microbial identification and automated antimicrobial susceptibility testing (AST) to guide targeted antibiotic therapy.',
    keyTests: ['Bacterial culture & ID', 'Antimicrobial susceptibility', 'Blood culture monitoring'],
    analyzers: 'VITEK® 2 & BacT/ALERT® automated microbiology platforms'
  },
  {
    id: 'molecular-biology',
    name: 'Molecular biology',
    description: 'Real-time PCR, viral load quantification, respiratory and gastrointestinal pathogen panels, and next-generation sequencing assays.',
    keyTests: ['HIV/HCV/HBV Viral Load', 'Respiratory viral panels', 'STD PCR screening', 'Oncology mutation panels'],
    analyzers: 'cobas® 4800 / 6800 Molecular Diagnostics Systems'
  },
  {
    id: 'coagulation',
    name: 'Coagulation',
    description: 'Comprehensive hemostasis testing for bleeding disorders, thrombophilia screening, and anticoagulant therapy monitoring.',
    keyTests: ['PT/INR', 'aPTT', 'Fibrinogen', 'D-Dimer', 'Factor assays'],
    analyzers: 'cobas t 411 / t 511 coagulation analyzers'
  },
  {
    id: 'erythrocyte-sedimentation',
    name: 'Erythrocyte sedimentation rate',
    description: 'Automated ESR testing providing rapid, standardized inflammatory biomarker evaluation directly from primary EDTA blood tubes.',
    keyTests: ['Erythrocyte Sedimentation Rate (ESR)', 'Inflammatory monitoring'],
    analyzers: 'CUBE 30 Touch automated ESR analyzer'
  },
  {
    id: 'blood-gases',
    name: 'Blood gases',
    description: 'Critical care blood gas analyzers providing immediate electrolyte, lactate, metabolite, and co-oximetry measurements for ICU and ER departments.',
    keyTests: ['pH, pCO2, pO2', 'Electrolytes (Na+, K+, Cl-, Ca++)', 'Lactate', 'Co-oximetry (tHb, SO2)'],
    analyzers: 'cobas b 221 / b 123 point-of-care blood gas systems'
  },
  {
    id: 'hematology',
    name: 'Hematology',
    description: 'High-throughput complete blood count (CBC) with 5-part differential, reticulocyte analysis, and digital body fluid morphology.',
    keyTests: ['CBC with 5-part diff', 'Reticulocyte count', 'Nucleated RBCs (nRBC)', 'Body fluid differential'],
    analyzers: 'Sysmex XN-Series / cobas m 511 hematology analyzer'
  },
  {
    id: 'hemostasis',
    name: 'Hemostasis',
    description: 'Advanced platelet function testing, von Willebrand factor assays, and specialized thrombophilia diagnostic panels.',
    keyTests: ['Platelet aggregation', 'vWF antigen & activity', 'Antithrombin III', 'Protein C & S'],
    analyzers: 'Sysmex CS-2500 automated hemostasis analyzer'
  },
  {
    id: 'immunology',
    name: 'Immunology',
    description: 'High-sensitivity electrochemiluminescence (ECLIA) assays for thyroid panels, cardiac biomarkers, infectious disease serology, and autoimmune testing.',
    keyTests: ['Thyroid panel (TSH, FT4, FT3)', 'Infectious serology (TORCH, Hepatitis)', 'Autoantibodies', 'Vitamin D'],
    analyzers: 'cobas e 411 / e 801 immunoassay modules'
  },
  {
    id: 'ions',
    name: 'Ions',
    description: 'Ion-selective electrode (ISE) determination of serum and urine electrolytes for rapid fluid and acid-base balance management.',
    keyTests: ['Sodium (Na+)', 'Potassium (K+)', 'Chloride (Cl-)', 'Ionized Calcium'],
    analyzers: 'cobas ISE integrated module'
  },
  {
    id: 'cardiac-markers',
    name: 'Cardiac markers',
    description: 'High-sensitivity Troponin T, NT-proBNP, and CK-MB assays enabling swift stratification of acute coronary syndromes and heart failure.',
    keyTests: ['High-Sensitivity Troponin T (hsTnT)', 'NT-proBNP', 'CK-MB', 'Myoglobin'],
    analyzers: 'cobas e immunoassay platform'
  },
  {
    id: 'urine',
    name: 'Urine',
    description: 'Fully automated urine test strip chemistry combined with digital flow cytometry for sediment and particle classification.',
    keyTests: ['Urinalysis strip chemistry', 'Urine sediment analysis', 'Microalbuminuria'],
    analyzers: 'cobas u 601 / u 701 urine workcell'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'High-speed clinical chemistry solutions for comprehensive metabolic panels, renal function, liver enzymes, and lipid profiles.',
    keyTests: ['Glucose, HbA1c', 'Lipid panel (Cholesterol, Triglycerides, HDL, LDL)', 'Liver enzymes (ALT, AST, ALP)', 'Renal panel (Creatinine, BUN)'],
    analyzers: 'cobas c 501 / c 702 clinical chemistry modules'
  }
];

const PRODUCTS = [
  {
    id: 'cobas-pro',
    badge: 'IVD',
    brand: 'cobas®',
    model: 'pro integrated solutions',
    title: 'cobas® pro integrated solutions',
    imageUrl: '/src/assets/images/cobas_pro_analyzer_1786056031099.jpg'
  },
  {
    id: 'cobas-pure',
    badge: 'IVD',
    brand: 'cobas®',
    model: 'pure integrated solutions',
    title: 'cobas® pure integrated solutions',
    imageUrl: '/src/assets/images/cobas_pure_analyzer_1786056044674.jpg'
  }
];

const FAQS = [
  {
    q: 'What internationally recognized brands does Biofarma represent?',
    a: 'Biofarma is the authorized distributor and partner for global diagnostics leaders including Roche Diagnostics, B.Braun, Samsung Healthcare, and BD (Becton Dickinson), providing official equipment, reagents, and technical support.'
  },
  {
    q: 'How can I request a quote or contact Biofarma?',
    a: 'You can submit a inquiry directly through our Contact Us page or reach out to our regional sales team via email or phone. Our specialist engineers will conduct a custom assessment based on your laboratory’s sample volume and testing repertoire.'
  },
  {
    q: 'Why choose Biofarma as your supplier of medical equipment and supplies?',
    a: 'We provide end-to-end solutions: cold-chain logistics, certified biotechnical maintenance, laboratory automation software integration, and continuous training for technical personnel.'
  },
  {
    q: 'Does Biofarma work only with large hospitals or also with small institutions?',
    a: 'We support diagnostic centers of all scales — from specialized outpatient clinics and private clinical laboratories to large public hospital networks.'
  }
];

export const LaboratoriesPage: React.FC<LaboratoriesPageProps> = ({
  onNavigatePage,
  onOpenContact
}) => {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>('high-complexity');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleCategory = (id: string) => {
    setOpenCategoryId(prev => (prev === id ? null : id));
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full bg-[#f7f8f6] text-[#1a3d3d] pt-20 sm:pt-24 pb-16 space-y-8 sm:space-y-12 lg:space-y-16 font-['Poppins',sans-serif]">
      
      {/* 1. HERO SECTION FOR LABORATORIES - EXACTLY MATCHING REFERENCE SCREENSHOT */}
      <section className="max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8 pt-2">
        <div className="relative w-full rounded-[28px] sm:rounded-[34px] overflow-hidden bg-gradient-to-r from-[#fae6ee] via-[#f1f4f8] to-[#e5eef6] border border-white/90 shadow-[0_10px_35px_rgba(0,0,0,0.02)] min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-stretch">
          
          {/* Soft ambient glow spots */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#fce4ec]/70 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-1/3 w-96 h-96 rounded-full bg-[#e3f2fd]/60 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center w-full relative z-10 p-6 sm:p-10 lg:p-14">
            
            {/* Left Content Block */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 lg:pr-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] text-[#e0357a] uppercase font-['Poppins']">
                  DIVISIONS
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-normal text-[#12393d] leading-[1.12] tracking-tight font-['Poppins']">
                Laboratory.<br />
                In Vitro Diagnostics (IVD)
              </h1>

              <p className="text-sm sm:text-base lg:text-[19px] text-[#12393d]/85 font-normal font-['Poppins'] max-w-xl leading-relaxed pt-1">
                Reagents, analyzers and intelligent automation for laboratories.
              </p>
            </div>

            {/* Right Image - Scientist in Lab Coat with Seamless Blend */}
            <div className="lg:col-span-5 h-[280px] sm:h-[360px] lg:h-[420px] relative flex items-center justify-end">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/src/assets/images/pexels-artempodrez-8532824.jpg"
                  alt="Laboratory In Vitro Diagnostics Specialist"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center sm:object-right"
                />
                {/* Soft left gradient fade for seamless card integration */}
                <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#f1f4f8] via-[#f1f4f8]/50 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#e5eef6]/40 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BRANDS CAROUSEL DIRECTLY BELOW HERO SECTION */}
      <BrandsSection hideHeader={true} className="mt-1 sm:mt-2 mb-4" />

      {/* 3. ESTABLISHED LEADERSHIP STATEMENT SECTION */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 py-4">
        <h2 className="text-2xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-light font-['Poppins'] leading-[1.3] tracking-tight bg-gradient-to-r from-[#e0357a] via-[#801b38] to-[#1a3d3d] bg-clip-text text-transparent [text-wrap:balance]">
          Established leadership in diagnostic and automation solutions.
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans'] font-normal">
          We are the preferred channel for the technological transformation of laboratories in the region. Through our exclusive alliance with Roche Diagnostics, we provide scalability and confidence to hundreds of public and private institutions.
        </p>
      </section>

      {/* 4. PRODUCT / ANALYZER SOLUTIONS CAROUSEL GRID */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCTS.map((prod) => (
            <motion.div
              key={prod.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 md:p-10 border border-[#d6e0f8] shadow-[0_4px_20px_rgba(0,0,0,0.015)] flex flex-col justify-between h-[380px] sm:h-[420px] lg:h-[450px] group cursor-pointer hover:shadow-lg hover:border-[#a8c2f5] transition-all duration-300 relative overflow-hidden"
              onClick={onOpenContact}
            >
              {/* IVD Badge Top Left */}
              <div className="inline-block self-start">
                <span className="text-xs font-semibold text-[#0066cc] bg-[#eef5fc] px-4 py-1.5 rounded-full border border-[#d2e2f8] tracking-wide">
                  {prod.badge}
                </span>
              </div>

              {/* Large Clean Analyzer Equipment Image */}
              <div className="w-full flex-1 flex items-center justify-center p-2 my-2 min-h-[210px] sm:min-h-[250px]">
                <img
                  src={prod.imageUrl}
                  alt={prod.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[230px] sm:max-h-[270px] lg:max-h-[290px] w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Title formatted as brand (bold) + model name (light) - Centered as in reference */}
              <div className="text-center pt-2">
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-light text-[#12393d] font-['Poppins'] leading-tight tracking-tight">
                  <span className="font-bold text-[#12393d] mr-2">{prod.brand}</span>
                  <span className="font-light text-[#12393d]">{prod.model}</span>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. DIAGNOSTIC CATEGORIES LIST (CLEAN WHITE BY DEFAULT, GRADUAL LEFT-TO-RIGHT GRADIENT ON HOVER) */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 pt-4">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="relative w-full rounded-[20px] sm:rounded-[24px] bg-white border border-gray-100/90 shadow-[0_2px_10px_rgba(0,0,0,0.015)] hover:border-[#f8d0df] transition-colors duration-300 group overflow-hidden cursor-pointer"
          >
            {/* Left-to-right smooth gradient hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fae2ec] via-[#fff5f8] to-white opacity-0 group-hover:opacity-100 transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-out pointer-events-none" />

            <div className="relative z-10 w-full px-7 py-4.5 sm:py-5 flex items-center justify-between text-left">
              <span className="text-base sm:text-lg lg:text-[19px] font-normal text-[#12393d] font-['Poppins'] tracking-tight">
                {cat.name}
              </span>

              {/* Three dots icon matching reference image */}
              <div className="flex flex-col items-center gap-[3px] opacity-70 group-hover:opacity-100 transition-opacity">
                <span className="w-[3.5px] h-[3.5px] rounded-full bg-[#12393d]" />
                <div className="flex items-center gap-[3px]">
                  <span className="w-[3.5px] h-[3.5px] rounded-full bg-[#12393d]" />
                  <span className="w-[3.5px] h-[3.5px] rounded-full bg-[#12393d]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 6. EXPLORE OUR DIVISIONS SECTION (EXACT REFERENCE MATCH) */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="relative overflow-hidden w-full rounded-[32px] sm:rounded-[40px] bg-gradient-to-tr from-[#fbe1eb]/80 via-[#f0f4f9] to-[#e2eef8] p-8 sm:p-12 lg:p-16 border border-white/90 shadow-[0_10px_35px_rgba(0,0,0,0.025)]">
          {/* Subtle ambient blur highlights inside container */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#fce4ec]/70 blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#e3f2fd]/60 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Title Block (Top Aligned with Cards) */}
            <div className="lg:col-span-4 lg:pr-4 pt-1 sm:pt-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#12393d] font-['Poppins'] leading-[1.12] tracking-tight">
                Explore our<br className="hidden sm:inline" /> divisions
              </h2>
            </div>

            {/* Right Cards Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1: Medical Devices */}
              <div
                onClick={() => {
                  onNavigatePage('medical-devices');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative h-[380px] sm:h-[420px] lg:h-[450px] rounded-[28px] sm:rounded-[32px] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
                  alt="Medical devices"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay darkening on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />

                {/* Top Left Clover / Brand Logo Icon */}
                <div className="absolute top-6 left-6 z-10 text-white opacity-95">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 100 100">
                    <circle cx="50" cy="28" r="18" />
                    <circle cx="28" cy="66" r="18" />
                    <circle cx="72" cy="66" r="18" />
                  </svg>
                </div>

                {/* Bottom Content Area with Smooth Slide-Up Reveal */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 text-white flex flex-col justify-end">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-normal font-['Poppins'] leading-tight transform group-hover:-translate-y-1 transition-transform duration-500">
                    Medical devices
                  </h3>

                  {/* Divider line appearing on hover */}
                  <div className="w-full h-[1px] bg-white/40 my-3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />

                  {/* Smooth Sliding Paragraph */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-xs sm:text-sm text-white/90 font-['Poppins'] leading-relaxed pt-1">
                      We provide tools that support the daily work of healthcare teams. We empower professionals and facilitate more efficient, safer interventions for patients.
                    </p>
                    
                    {/* Action Link "Explore ::" */}
                    <div className="flex items-center gap-2 mt-4 text-sm sm:text-base font-medium font-['Poppins'] text-white">
                      <span>Explore</span>
                      <div className="flex flex-col items-center gap-[2.5px]">
                        <span className="w-[3px] h-[3px] rounded-full bg-white" />
                        <div className="flex items-center gap-[2.5px]">
                          <span className="w-[3px] h-[3px] rounded-full bg-white" />
                          <span className="w-[3px] h-[3px] rounded-full bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Pharma */}
              <div
                onClick={() => {
                  onNavigatePage('pharma');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative h-[380px] sm:h-[420px] lg:h-[450px] rounded-[28px] sm:rounded-[32px] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
                  alt="Pharma"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay darkening on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />

                {/* Top Left Clover / Brand Logo Icon */}
                <div className="absolute top-6 left-6 z-10 text-white opacity-95">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 100 100">
                    <circle cx="50" cy="28" r="18" />
                    <circle cx="28" cy="66" r="18" />
                    <circle cx="72" cy="66" r="18" />
                  </svg>
                </div>

                {/* Bottom Content Area with Smooth Slide-Up Reveal */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 text-white flex flex-col justify-end">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-normal font-['Poppins'] leading-tight transform group-hover:-translate-y-1 transition-transform duration-500">
                    Pharma
                  </h3>

                  {/* Divider line appearing on hover */}
                  <div className="w-full h-[1px] bg-white/40 my-3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />

                  {/* Smooth Sliding Paragraph */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-xs sm:text-sm text-white/90 font-['Poppins'] leading-relaxed pt-1">
                      Comprehensive pharmaceutical solutions developed under rigorous international quality standards to enhance health and patient well-being.
                    </p>
                    
                    {/* Action Link "Explore ::" */}
                    <div className="flex items-center gap-2 mt-4 text-sm sm:text-base font-medium font-['Poppins'] text-white">
                      <span>Explore</span>
                      <div className="flex flex-col items-center gap-[2.5px]">
                        <span className="w-[3px] h-[3px] rounded-full bg-white" />
                        <div className="flex items-center gap-[2.5px]">
                          <span className="w-[3px] h-[3px] rounded-full bg-white" />
                          <span className="w-[3px] h-[3px] rounded-full bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. INFORMATION ABOUT BIOFARMA (FAQ + CONTACT BOX MATCHING REFERENCE IMAGE 2) */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-10 pb-6">
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#12393d] font-['Poppins'] leading-tight tracking-tight">
          Information about Biofarma.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* FAQ Left Column */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[22px] sm:rounded-[26px] border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.015)] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 sm:py-6 text-left flex items-start sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg text-[#12393d] font-semibold font-['Poppins'] leading-snug tracking-tight">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#12393d] shrink-0 transition-transform duration-300 mt-0.5 sm:mt-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#12393d]/80 font-['Poppins'] leading-relaxed border-t border-gray-50/80">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Support Box (Matching Reference Image 2) */}
          <div className="lg:col-span-5 xl:col-span-4 bg-[#eaf2fc] rounded-[28px] sm:rounded-[34px] p-8 sm:p-10 space-y-6 border border-[#d2e4f7] shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#12393d] font-['Poppins'] leading-tight tracking-tight">
              Do you have any more questions?
            </h3>
            <p className="text-sm sm:text-base text-[#12393d]/80 font-['Poppins'] leading-relaxed">
              Here you'll find answers to the most frequently asked questions about Biofarma. If you don't find what you're looking for, please contact our team.
            </p>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-3 bg-white hover:bg-white/95 text-[#12393d] text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full shadow-xs border border-white/90 transition-all cursor-pointer group"
            >
              <span>Contact us</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#e0357a] group-hover:scale-125 transition-transform duration-200" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. WE SUPPORT DIAGNOSTIC LABORATORIES SECTION */}
      <LabStatementSection onOpenContact={onOpenContact} />

    </div>
  );
};
