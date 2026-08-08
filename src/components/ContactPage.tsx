import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface ContactPageProps {
  onNavigatePage?: (page: 'home' | 'about' | 'laboratories' | 'medical-devices' | 'pharma' | 'contact') => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigatePage, onNavigateSection }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    division: 'Clinical Laboratories',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      division: 'Clinical Laboratories',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="w-full bg-[#f7f8f6] text-[#1a3d3d] min-h-screen pt-28 sm:pt-36 pb-20 font-['Poppins']">
      
      {/* Top Header & Breadcrumb Container aligned with main card container */}
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 flex justify-end">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
          <span>Biofarma</span>
          <span>•</span>
          <span className="text-[#e0357a]">Contact Us</span>
        </div>
      </div>

      {/* MAIN CONTAINER: REPLICATING THE DARK ELEVATED CARD LAYOUT FROM REFERENCE IMAGE */}
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-[#12393d] rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 lg:p-20 shadow-[0_20px_60px_rgba(18,57,61,0.25)] border border-white/10">
          
          {/* Subtle Ambient Glow Effect inside dark card */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#e0357a]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

          {/* Form Content */}
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 max-w-2xl mx-auto space-y-10 sm:space-y-12"
              >
                {/* Title */}
                <div className="text-center space-y-3">
                  <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-light text-white tracking-tight leading-tight">
                    Schedule An Appointment
                  </h1>
                  <p className="text-sm sm:text-base text-white/70 font-light max-w-md mx-auto">
                    Fill out the form below and our specialized team will get back to you promptly.
                  </p>
                </div>

                {/* Form Elements with Underlined Line Inputs */}
                <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                  
                  {/* Full Name */}
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-transparent border-b border-white/25 focus:border-[#e0357a] text-white text-base sm:text-lg py-3 px-1 focus:outline-none placeholder:text-white/40 transition-colors font-light"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/25 focus:border-[#e0357a] text-white text-base sm:text-lg py-3 px-1 focus:outline-none placeholder:text-white/40 transition-colors font-light"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative group">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-white/25 focus:border-[#e0357a] text-white text-base sm:text-lg py-3 px-1 focus:outline-none placeholder:text-white/40 transition-colors font-light"
                    />
                  </div>

                  {/* Selected Division / Inquiry Type */}
                  <div className="relative group">
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full bg-transparent border-b border-white/25 focus:border-[#e0357a] text-white text-base sm:text-lg py-3 px-1 focus:outline-none transition-colors font-light cursor-pointer [&>option]:bg-[#12393d] [&>option]:text-white"
                    >
                      <option value="Clinical Laboratories">Clinical Laboratories Division</option>
                      <option value="Medical Devices">Medical Devices Division</option>
                      <option value="Pharma">Pharmaceuticals Division</option>
                      <option value="General Inquiry">General Inquiry & Quotes</option>
                    </select>
                  </div>

                  {/* Message (Optional) */}
                  <div className="relative group">
                    <textarea
                      rows={2}
                      placeholder="How can we help you? (Optional)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-white/25 focus:border-[#e0357a] text-white text-base sm:text-lg py-3 px-1 focus:outline-none placeholder:text-white/40 transition-colors font-light resize-none"
                    />
                  </div>

                  {/* Centered Pill Submit Button (Exact match to reference image) */}
                  <div className="pt-6 flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center min-w-[180px] px-10 py-3.5 rounded-full border border-white/40 hover:border-[#e0357a] bg-[#12393d] hover:bg-[#e0357a] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <span>SUBMIT</span>
                      )}
                    </button>
                  </div>

                </form>
              </motion.div>
            ) : (
              /* Success State Card */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative z-10 text-center py-12 space-y-6 max-w-md mx-auto text-white"
              >
                <div className="w-20 h-20 rounded-full bg-[#e0357a]/20 border border-[#e0357a] text-[#e0357a] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(224,53,122,0.4)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-normal tracking-tight font-['Poppins']">
                    Request Received!
                  </h3>
                  <p className="text-white/80 text-sm font-light leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Our team at Biofarma will contact you shortly regarding your <span className="text-[#e0357a] font-medium">{formData.division}</span> inquiry.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/40 hover:border-white text-white text-xs font-semibold tracking-widest uppercase transition-all cursor-pointer"
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* ADDITIONAL CONTACT DETAILS SECTION BELOW */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Headquarters */}
          <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-xs space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#eaf2fc] text-[#12393d] flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#12393d]" />
            </div>
            <h4 className="text-xl font-semibold text-[#12393d] font-['Poppins']">
              Headquarters
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed font-['Poppins']">
              Biofarma Complex, Main Medical Avenue, District 5, Cairo, Egypt.
            </p>
          </div>

          {/* Card 2: Phone & Support */}
          <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-xs space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#fbe1eb] text-[#e0357a] flex items-center justify-center">
              <Phone className="w-6 h-6 text-[#e0357a]" />
            </div>
            <h4 className="text-xl font-semibold text-[#12393d] font-['Poppins']">
              Direct Contact
            </h4>
            <div className="space-y-1 text-sm text-gray-600 font-['Poppins']">
              <p>Phone: +20 2 2790 0000</p>
              <p>Email: contact@biofarma.com</p>
            </div>
          </div>

          {/* Card 3: Operating Hours */}
          <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-xs space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#eaf2fc] text-[#12393d] flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#12393d]" />
            </div>
            <h4 className="text-xl font-semibold text-[#12393d] font-['Poppins']">
              Working Hours
            </h4>
            <div className="space-y-1 text-sm text-gray-600 font-['Poppins']">
              <p>Mon - Thu: 8:00 AM - 6:00 PM</p>
              <p>Sat - Sun: 9:00 AM - 4:00 PM</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
