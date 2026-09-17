import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoCloud from '../components/LogoCloud';
import BentoGrid from '../components/BentoGrid';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <BentoGrid />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
