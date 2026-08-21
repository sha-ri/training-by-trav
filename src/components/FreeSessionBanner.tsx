import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Mail, Phone, CalendarCheck } from 'lucide-react';
import { BRAND_INFO, MAILTO_LINK } from '../data/trainerData';

export const FreeSessionBanner: React.FC = () => {
  return (
    <section className="py-8 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/5 border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 blur-[100px] bg-[#FF300B] opacity-10 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="bg-[#FF300B] text-black inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                Zero Risk • Zero Pressure
              </div>

              <h3 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter text-white font-['Outfit'] leading-[0.95]">
                Your First Session is <span className="text-[#FF300B]">Always Free.</span>
              </h3>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Take the first step without hesitation. Come in for a personalized movement screening, fitness goal consultation, and initial custom workout in studio or at home, completely free of charge.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span className="flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-4 h-4 text-[#FF300B]" /> No Commitment
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <CalendarCheck className="w-4 h-4 text-[#FF300B]" /> 1-on-1 Training Session
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
              <a
                href={MAILTO_LINK}
                id="claim-free-session-btn"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-[#FF300B] hover:bg-white transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Claim Free Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF300B]" />
                <span>Direct Call: {BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
