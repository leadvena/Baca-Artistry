/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyCaroline from './components/WhyCaroline';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyCaroline />
        <Testimonials />
        <Booking />
        <Instagram />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

