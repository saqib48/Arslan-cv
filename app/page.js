'use client';

import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About/>
          <Skills/>
          <Portfolio />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}