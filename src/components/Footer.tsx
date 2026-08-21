import React from 'react';
import { Phone, Mail, MapPin, Instagram, Heart } from 'lucide-react';
import { BRAND_INFO, MAILTO_LINK } from '../data/trainerData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src={`${import.meta.env.BASE_URL}images/logo-white-transparent.png`}
                alt="Training by Trav logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-black italic text-base tracking-wider uppercase text-white font-['Outfit']">
                TRAINING BY <span className="text-[#FF300B]">TRAV</span>
              </span>
            </a>
            <p className="text-xs text-gray-400 leading-relaxed">
              Personal journeys. Lasting results. Dedicated to helping you build a healthier, stronger, and more confident life since 2011.
            </p>
            <div className="text-[11px] text-gray-500 uppercase tracking-widest font-mono">
              Greater Orlando Area, FL • By Appointment Only
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF300B] mb-5 font-['Outfit']">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About & Mission
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services & Coaching
                </a>
              </li>
              <li>
                <a href="#meet-trainer" className="hover:text-white transition-colors">
                  Meet Your Trainer (Trav)
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF300B] mb-5 font-['Outfit']">
              Training Programs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href={MAILTO_LINK} className="hover:text-white transition-colors cursor-pointer">
                  One-on-One Personal Training
                </a>
              </li>
              <li>
                <a href={MAILTO_LINK} className="hover:text-white transition-colors cursor-pointer">
                  Partner / Couples Training
                </a>
              </li>
              <li>
                <a href={MAILTO_LINK} className="hover:text-white transition-colors cursor-pointer">
                  Online Coaching & Support
                </a>
              </li>
              <li>
                <a href={MAILTO_LINK} className="hover:text-white transition-colors cursor-pointer">
                  Customized Goal-Setting
                </a>
              </li>
              <li>
                <a href={MAILTO_LINK} className="text-[#FF300B] font-bold hover:underline cursor-pointer">
                  ★ First Session Free Offer
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF300B] mb-5 font-['Outfit']">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="flex items-center gap-2.5 text-white hover:text-[#FF300B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF300B]" />
                  <span className="font-mono">{BRAND_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-2.5 text-white hover:text-[#FF300B] transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF300B]" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span>{BRAND_INFO.city}</span>
              </li>
              <li className="pt-2 text-gray-400 border-t border-white/10">
                <span className="text-white font-bold uppercase tracking-wider text-[10px]">Hours:</span> Mon–Sun 6:00 AM – 9:00 PM
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>© {currentYear} {BRAND_INFO.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              INSTAGRAM @TRAINING_BY_TRAV
            </a>
            <span>•</span>
            <a href={MAILTO_LINK} className="hover:text-white transition-colors cursor-pointer uppercase">
              EMAIL US
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
