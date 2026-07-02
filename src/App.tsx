/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Connection from './components/Connection';
import Positioning from './components/Positioning';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import LocationMap from './components/LocationMap';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-50 font-sans text-slate-800 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Connection />
        <Positioning />
        <Testimonials />
        <Services />
        <About />
        <Features />
        <Gallery />
        <LocationMap />
        <Cta />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/554833650966?text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
