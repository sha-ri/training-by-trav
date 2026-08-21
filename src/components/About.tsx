import React from 'react';
import { motion } from 'motion/react';
import { Heart, Activity, CheckCircle2, Award, Sparkles, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, MAILTO_LINK } from '../data/trainerData';

export const About: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Engaging & Tailored Workouts',
      desc: 'No repetitive drills or boring routines. Every workout is customized around what moves your body safely and keeps you excited.',
      icon: Activity,
    },
    {
      number: '02',
      title: 'Positive Relationship with Exercise',
      desc: 'Ditch the dread and gym anxiety. We build an uplifting mindset where fitness becomes an energizing highlight of your week.',
      icon: Heart,
    },
    {
      number: '03',
      title: 'Sustainable Health for Life',
      desc: 'Living a fit lifestyle means enjoying the activities and people you love with strength, endurance, and pain-free mobility.',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-12 relative bg-black border-t border-b border-white/10">
      {/* Background subtle light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 blur-[120px] bg-white opacity-[0.03] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Core Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FF300B] text-black inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              Philosophy & Mission
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic text-white uppercase tracking-tighter font-['Outfit'] leading-[0.95]">
              A Healthier Lifestyle,{' '}
              <span className="text-[#FF300B]">Built for You.</span>
            </h2>

            <blockquote className="text-lg sm:text-xl text-gray-200 font-medium leading-relaxed border-l-4 border-[#FF300B] pl-5 py-2 italic bg-white/5">
              “{BRAND_INFO.missionStatement}”
            </blockquote>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Fitness is a lifelong empowerment tool for your mind and body. At Training by Trav, we eliminate the intimidation and guesswork by partnering closely with you. Whether you are stepping into a gym for the first time, working with physical limitations, seeking more flexibility or power, or breaking through stubborn plateaus, our tailored guidance delivers the steady progress you deserve.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href={MAILTO_LINK}
                id="about-get-started-btn"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-widest text-xs text-black bg-[#FF300B] hover:bg-white transition-all cursor-pointer"
              >
                <span>Start Transformation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#meet-trainer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
              >
                <span>Meet Coach Trav</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Pillars Cards */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 hover:border-[#FF300B]/60 transition-all group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#FF300B] group-hover:bg-[#FF300B] group-hover:text-black transition-all shrink-0 font-black text-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-white tracking-tight uppercase group-hover:text-[#FF300B] transition-colors font-['Outfit']">
                          {pillar.title}
                        </h3>
                        <span className="text-[10px] font-mono text-gray-500 font-bold">{pillar.number}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick trust strip */}
            <div className="p-4 bg-white/5 border border-white/10 flex flex-wrap items-center justify-around gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-300">
              <span className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF300B]" /> Evidence-Based
              </span>
              <span className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF300B]" /> Personalized Plans
              </span>
              <span className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF300B]" /> Flexible Scheduling
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
