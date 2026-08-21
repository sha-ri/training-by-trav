import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { BRAND_INFO, MAILTO_LINK } from '../data/trainerData';

export const MeetTrainer: React.FC = () => {
  return (
    <section id="meet-trainer" className="py-12 relative bg-black border-t border-b border-white/10">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 blur-[120px] bg-white opacity-[0.03] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 left-0 w-80 h-80 blur-[100px] bg-[#FF300B] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Trainer Badge / Visual Profile Feature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative bg-white/5 border border-white/10 p-8 sm:p-10 text-center group hover:border-[#FF300B]/60 transition-colors">
              
              {/* Trainer Photo */}
              <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}images/lift-color-transparent.png`}
                  alt="Trav Azzopardi performing a deadlift"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-black italic uppercase text-white font-['Outfit'] tracking-tight">
                Trav Azzopardi, CPT PES
              </h3>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF300B] mt-1 mb-6">
                Certified Personal Trainer (CPT) • Performance Enhancement Specialist (PES)
              </p>

              {/* Highlight Badge */}
              <div className="text-left mb-6">
                <div className="bg-black/50 p-4 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-white font-bold uppercase tracking-wider">
                    <Trophy className="w-4 h-4 text-[#FF300B]" /> 15+ Years
                  </div>
                  <div className="text-xs text-gray-300 font-medium mt-1">
                    In the Fitness Industry
                  </div>
                </div>
              </div>

              <div className="p-4 bg-black/50 border border-white/10 text-xs text-gray-400 text-left space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF300B] shrink-0" />
                  <span>Orlando Florida and Surrounding Area</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF300B] shrink-0" />
                  <span>One-on-One, Partner & Online Coaching</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF300B] shrink-0" />
                  <span>Empathy-Driven, Science-Backed Methods</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Copy & Personal Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#FF300B] text-black inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              Meet Your Trainer
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic text-white uppercase tracking-tighter font-['Outfit'] leading-[0.95]">
              Real Experience.{' '}
              <span className="text-[#FF300B]">Genuine Passion.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-400 leading-relaxed">
              <p>
                I’ve dedicated my career to the fitness industry, training clients in premier one-on-one and group settings <strong className="text-white">since 2011</strong>.
              </p>

              <p className="bg-white/5 p-5 border-l-4 border-[#FF300B] text-gray-200 font-medium italic">
                After my own fitness journey, which included <strong className="text-[#FF300B]">losing over 60 lbs</strong> and discovering the joy in pushing my own mental and physical limits to achieve my goals, I set out to share that exact empowering feeling with others.
              </p>

              <p>
                For me, living a fit and healthy lifestyle doesn’t just mean spending endless hours in the gym. It means having the energy, stamina, and physical freedom to do the things we love with the people who matter most.
              </p>

              <p className="text-white font-bold text-base sm:text-lg">
                I’m looking forward to becoming part of your fitness story.
              </p>
            </div>

            {/* Let's Connect CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={MAILTO_LINK}
                id="meet-trainer-connect-btn"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-[#FF300B] hover:bg-white transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Let’s Connect</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF300B]" />
                <span>Call {BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
