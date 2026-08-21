import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  Calendar,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Home,
} from 'lucide-react';
import { BRAND_INFO, MAILTO_LINK } from '../data/trainerData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(BRAND_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(BRAND_INFO.phoneDisplay);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-12 relative bg-black border-t border-white/10">
      {/* Background Lighting Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] blur-[140px] bg-white opacity-[0.02] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 blur-[120px] bg-[#FF300B] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="bg-[#FF300B] text-black inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter text-white font-['Outfit'] leading-[0.92]">
            Contact <span className="text-[#FF300B]">Us</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed max-w-2xl">
            Ready to take the next step? Reach out directly via email, phone, or social.
          </p>
        </div>

        {/* Contact Information & Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Direct Contact Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Email Card with the "Email Us" Detailed Template Trigger */}
            <div className="p-8 sm:p-10 bg-white/5 border border-white/10 hover:border-[#FF300B]/60 transition-all relative group">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF300B] text-black flex items-center justify-center font-bold">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF300B]">
                      Primary Inquiries
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white font-['Outfit']">
                      Send an Email
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="text-lg sm:text-2xl font-black italic text-white hover:text-[#FF300B] transition-colors break-all block mb-4 font-['Outfit']"
              >
                {BRAND_INFO.email}
              </a>

              <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                Click below to launch a pre-filled inquiry email directly in your default mail app (Apple Mail, Gmail, Outlook).
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={MAILTO_LINK}
                  id="contact-email-us-btn"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-[#FF300B] hover:bg-white transition-all cursor-pointer font-['Outfit']"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Direct Phone & Text Card */}
            <div className="p-8 sm:p-10 bg-white/5 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 text-white flex items-center justify-center border border-white/10">
                    <Phone className="w-6 h-6 text-[#FF300B]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                      Direct Call or Text
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white font-['Outfit']">
                      Phone Line
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  title="Copy phone number"
                  className="p-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="text-2xl sm:text-4xl font-black italic text-white hover:text-[#FF300B] transition-colors block mb-3 font-['Outfit']"
              >
                {BRAND_INFO.phoneDisplay}
              </a>

              <p className="text-sm text-gray-400 mb-8">
                Feel free to call or text anytime. If Coach Trav is with a client, leave a short message or text and he will reply promptly.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  id="direct-call-now-btn"
                  className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#FF300B]" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`sms:${BRAND_INFO.phoneRaw}`}
                  id="direct-sms-btn"
                  className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#FF300B]" />
                  <span>Send SMS Text</span>
                </a>
              </div>
            </div>

          </div>

          {/* Sidebar: Location, Hours, Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Training Hours Card */}
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#FF300B]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF300B]">
                    Schedule & Availability
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white font-['Outfit']">
                    Training Hours
                  </h3>
                </div>
              </div>

              <div className="space-y-3 bg-black/50 p-5 border border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{BRAND_INFO.hours.days}</span>
                  <span className="font-bold text-white">{BRAND_INFO.hours.time}</span>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Access Format:</span>
                  <span className="font-bold text-black bg-[#FF300B] px-2 py-0.5 text-[10px] uppercase tracking-wider">
                    {BRAND_INFO.hours.note}
                  </span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#FF300B]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Studio Location
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white font-['Outfit']">
                    Mills 50 Fitness
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-1 leading-relaxed">
                1005 Virginia Dr, Orlando, FL 32803
              </p>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                By Appointment Only
              </p>

              <a
                href="https://maps.google.com/?q=1005+Virginia+Dr,+Orlando,+FL+32803"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#FF300B] transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#FF300B] shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    At Home or On Location Training
                  </span>
                  <p className="text-sm text-white font-bold">
                    Available in Greater Orlando Area
                  </p>
                  <p className="text-sm text-gray-400">
                    By Appointment Only
                  </p>
                </div>
              </div>
            </div>

            {/* Stay Connected & Socials Card */}
            <div className="p-8 bg-white/5 border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF300B] block mb-1">
                Stay Connected
              </span>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white font-['Outfit'] mb-6">
                Follow @training_by_trav
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {/* Instagram */}
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-instagram-link"
                  className="flex flex-col items-center justify-center p-4 bg-black/50 hover:bg-[#FF300B] hover:text-black border border-white/10 text-gray-300 transition-all group"
                >
                  <Instagram className="w-5 h-5 text-[#FF300B] group-hover:text-black mb-2 transition-colors" />
                  <span className="text-xs font-bold uppercase tracking-wider">Insta</span>
                </a>

                {/* Facebook */}
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-facebook-link"
                  className="flex flex-col items-center justify-center p-4 bg-black/50 hover:bg-[#FF300B] hover:text-black border border-white/10 text-gray-300 transition-all group"
                >
                  <svg className="w-5 h-5 text-[#FF300B] group-hover:text-black mb-2 fill-current transition-colors" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider">FB</span>
                </a>

                {/* Threads */}
                <a
                  href={BRAND_INFO.threadsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-threads-link"
                  className="flex flex-col items-center justify-center p-4 bg-black/50 hover:bg-[#FF300B] hover:text-black border border-white/10 text-gray-300 transition-all group"
                >
                  <svg className="w-5 h-5 text-[#FF300B] group-hover:text-black mb-2 fill-current transition-colors" viewBox="0 0 24 24">
                    <path d="M12.004 0C5.373 0 0 5.373 0 12.004c0 6.63 5.373 12.003 12.004 12.003 6.63 0 12.003-5.373 12.003-12.003C24.007 5.373 18.634 0 12.004 0zm5.114 12.56c-.035 1.54-.53 2.768-1.472 3.65-.94.882-2.186 1.33-3.702 1.33-1.637 0-2.964-.52-3.943-1.545-.98-1.025-1.476-2.42-1.476-4.148 0-1.787.502-3.21 1.493-4.23.99-1.02 2.368-1.54 4.094-1.54 1.704 0 3.037.498 3.963 1.48.78.828 1.206 1.932 1.272 3.284h-2.148c-.068-.78-.328-1.39-.778-1.815-.45-.425-1.222-.642-2.31-.642-1.096 0-1.954.34-2.552 1.01-.598.67-.902 1.62-.902 2.82 0 1.25.297 2.21.884 2.85.586.64 1.442.96 2.54.96 1.02 0 1.83-.284 2.41-.84.44-.42.69-.97.74-1.638h-3.15v-1.8h5.36v.63z"/>
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider">Threads</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
