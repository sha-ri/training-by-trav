import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FreeSessionBanner } from './components/FreeSessionBanner';
import { MeetTrainer } from './components/MeetTrainer';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-[#FF300B] selection:text-black">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services ("Training Made Personal") */}
        <Services />

        {/* First Session Free Callout Banner */}
        <FreeSessionBanner />

        {/* Meet Your Trainer (Trav) */}
        <MeetTrainer />

        {/* Success Stories & Testimonials */}
        <Testimonials />

        {/* Contact Us (No form - Email address, Phone, Hours, Location, Email Us Action) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
