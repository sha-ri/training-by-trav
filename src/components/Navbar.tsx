import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { BRAND_INFO, MAILTO_LINK } from '../data/trainerData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Meet Your Trainer', href: '#meet-trainer' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo-white-transparent.png`}
              alt="Training by Trav logo"
              className="w-9 h-9 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase text-white font-['Outfit']">
                TRAINING BY <span className="text-[#FF300B]">TRAV</span>
              </span>
              <span className="text-[9px] text-gray-400 tracking-[0.25em] uppercase font-bold">
                Personal Training
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#FF300B]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              id="nav-phone-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/20 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF300B]" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>

            <a
              href={MAILTO_LINK}
              id="nav-email-us-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black bg-[#FF300B] hover:bg-white transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-b border-white/10 px-8 py-6 space-y-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase font-bold tracking-[0.2em] text-gray-300 hover:text-[#FF300B] py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-4 py-3 border border-white/20 text-xs uppercase font-bold tracking-widest text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF300B]" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>

            <a
              href={MAILTO_LINK}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-xs uppercase font-bold tracking-widest text-black bg-[#FF300B] hover:bg-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
