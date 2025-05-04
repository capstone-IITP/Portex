'use client';

import HeroNew from '@/components/marketing/HeroNew';
import Features from '@/components/marketing/Features';
import HowItWorks from '@/components/marketing/HowItWorks';
import Testimonials from '@/components/marketing/Testimonials';
import CTA from '@/components/marketing/CTA';
import Footer from '@/components/marketing/Footer';
import Navbar from '@/components/marketing/Navbar';

// Create animations for our CSS 
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroNew />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
