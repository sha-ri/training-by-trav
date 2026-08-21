import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Users, Laptop, Target, CheckCircle2, ArrowRight, Sparkles, Mail } from 'lucide-react';
import { SERVICES, MAILTO_LINK } from '../data/trainerData';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Dumbbell':
        return Dumbbell;
      case 'Users':
        return Users;
      case 'Laptop':
        return Laptop;
      case 'Target':
        return Target;
      default:
        return Dumbbell;
    }
  };

  return (
    <section id="services" className="py-12 relative bg-black overflow-hidden border-b border-white/10">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-[-100px] w-[500px] h-[500px] blur-[120px] bg-[#FF300B] opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-10 left-[-100px] w-[400px] h-[400px] blur-[120px] bg-white opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="bg-[#FF300B] text-black inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4">
            Tailored Fitness Solutions
          </div>
          <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter text-white font-['Outfit'] leading-[0.92]">
            Training Made <span className="text-[#FF300B]">Personal</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed max-w-2xl">
            Every fitness journey begins from a different starting line. Choose the coaching format that fits your lifestyle, schedule, and personal goals best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col justify-between p-8 sm:p-10 bg-white/5 border border-white/10 hover:border-[#FF300B]/60 transition-all group"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#FF300B] group-hover:bg-[#FF300B] group-hover:text-black transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {service.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 bg-white/5 border border-white/10 text-gray-300 group-hover:border-[#FF300B]/40 group-hover:text-[#FF300B] transition-colors">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-black italic uppercase text-white tracking-tight group-hover:text-[#FF300B] transition-colors font-['Outfit']">
                    {service.title}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF300B] mt-1 mb-4">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Benefits List */}
                  <div className="space-y-2.5 pt-6 border-t border-white/10 mb-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                      What's Included:
                    </div>
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF300B] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For Note */}
                  <div className="bg-black/50 p-4 border border-white/10 text-xs text-gray-400 mb-8">
                    <strong className="text-white uppercase tracking-wider text-[10px] block mb-1">Ideal For:</strong> {service.idealFor}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                  <a
                    href={MAILTO_LINK}
                    id={`inquire-btn-${service.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-bold uppercase tracking-widest text-black bg-white group-hover:bg-[#FF300B] group-hover:text-black transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Inquire About {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
