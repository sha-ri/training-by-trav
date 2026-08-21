import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, MapPin, Home, Mail, Dumbbell, Users, Laptop, Target } from 'lucide-react';
import { TRAINER_STATS, MAILTO_LINK } from '../data/trainerData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black editorial-grid"
    >
      {/* Background Lighting Elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-white opacity-5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] bg-[#FF300B] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Main Editorial Headline & Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Editorial Stark Tag */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="bg-[#FF300B] text-black inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  First Session Free
                </div>
                <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-gray-400">
                  <MapPin className="w-3 h-3 text-[#FF300B]" /> Studio in Orlando, FL
                </div>
                <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-gray-400">
                  <Home className="w-3 h-3 text-[#FF300B]" /> At-Home or Outside Training Available
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-gray-400">
                  <Clock className="w-3 h-3 text-[#FF300B]" /> Mon–Sun 6am–9pm
                </div>
              </div>

              {/* Massive Editorial Display Title */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black italic tracking-tighter uppercase text-white leading-[0.88] mb-6 font-['Outfit']">
                Personal<br />
                Journeys.<br />
                <span className="text-[#FF300B]">Lasting Results.</span>
              </h1>

              {/* Subtitle / Intro Copy */}
              <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
                Training by Trav offers personal training, goal-setting, and online coaching designed to guide you towards a healthier lifestyle through engaging, tailored workouts.
              </p>

              {/* High Contrast Editorial Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={MAILTO_LINK}
                  id="hero-book-now-btn"
                  className="bg-white text-black px-8 sm:px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#FF300B] hover:text-white transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Book Free Session</span>
                </a>

                <a
                  href="#about"
                  id="hero-learn-more-btn"
                  className="border border-white/20 px-8 sm:px-10 py-4 font-bold uppercase tracking-widest text-xs text-white hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Editorial Bento / Quick Grid + Live Feature Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Trainer Headshot */}
            <img
              src={`${import.meta.env.BASE_URL}images/headshot-black.png`}
              alt="Trav, Certified Personal Trainer"
              className="w-full aspect-[4/3] object-cover object-[center_35%] grayscale"
            />

            {/* Quick 2x2 Services Snapshot */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2">
              <a
                href={MAILTO_LINK}
                className="bg-white/5 border border-white/10 p-5 group hover:border-[#FF300B]/60 transition-colors cursor-pointer"
              >
                <div className="text-[#FF300B] mb-3 group-hover:scale-110 transition-transform">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold uppercase mb-1 text-white font-['Outfit']">One-on-One</h4>
                <p className="text-[11px] text-gray-400 leading-tight">Uniquely aligned with your individual goals and progress.</p>
              </a>

              <a
                href={MAILTO_LINK}
                className="bg-white/5 border border-white/10 p-5 group hover:border-[#FF300B]/60 transition-colors cursor-pointer"
              >
                <div className="text-[#FF300B] mb-3 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold uppercase mb-1 text-white font-['Outfit']">Partner</h4>
                <p className="text-[11px] text-gray-400 leading-tight">Shared workouts in a motivating, supportive setting.</p>
              </a>

              <a
                href={MAILTO_LINK}
                className="bg-white/5 border border-white/10 p-5 group hover:border-[#FF300B]/60 transition-colors cursor-pointer"
              >
                <div className="text-[#FF300B] mb-3 group-hover:scale-110 transition-transform">
                  <Laptop className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold uppercase mb-1 text-white font-['Outfit']">Online Coach</h4>
                <p className="text-[11px] text-gray-400 leading-tight">Tailored plans and feedback from anywhere in the world.</p>
              </a>

              <a
                href={MAILTO_LINK}
                className="bg-white/5 border border-white/10 p-5 group hover:border-[#FF300B]/60 transition-colors cursor-pointer"
              >
                <div className="text-[#FF300B] mb-3 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold uppercase mb-1 text-white font-['Outfit']">Goal-Setting</h4>
                <p className="text-[11px] text-gray-400 leading-tight">Clear roadmap to turn fitness targets into reality.</p>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 mt-12 border-t border-white/10">
          {TRAINER_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-4">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#FF300B]">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white italic tracking-tight font-['Outfit'] mt-1">
                {stat.value}
              </div>
              <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
