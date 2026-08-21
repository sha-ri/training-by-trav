import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/trainerData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 relative bg-black overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[120px] bg-white opacity-[0.03] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 blur-[100px] bg-[#FF300B] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="bg-[#FF300B] text-black inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4">
            Client Transformations
          </div>
          <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter text-white font-['Outfit'] leading-[0.92]">
            Success <span className="text-[#FF300B]">Stories</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed max-w-2xl">
            Real feedback from clients who transformed their health, broke through barriers, and gained lasting confidence with Trav.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between p-8 bg-white/5 border border-white/10 hover:border-[#FF300B]/60 transition-all relative group"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#FF300B] text-[#FF300B]"
                      />
                    ))}
                  </div>

                  <Quote className="w-6 h-6 text-[#FF300B]/40 group-hover:text-[#FF300B] transition-colors" />
                </div>

                {/* Highlight Tag */}
                <div className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#FF300B]/10 text-[#FF300B] border border-[#FF300B]/30 mb-4">
                  {item.highlightTag}
                </div>

                {/* Quote text */}
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-black italic uppercase text-white text-sm tracking-wide font-['Outfit']">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium">
                    {item.role}
                  </div>
                </div>

                {item.resultMetric && (
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-1">
                      {item.resultMetric}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Confidence Assurance */}
        <div className="mt-12 p-8 bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#FF300B] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold uppercase tracking-wider text-white font-['Outfit']">Ready for your own success story?</h4>
              <p className="text-xs text-gray-400 mt-0.5">Join a supportive, judgment-free training environment in Altamonte Springs.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-8 py-3.5 bg-white text-black hover:bg-[#FF300B] hover:text-black text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2"
          >
            <span>Connect With Trav</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
