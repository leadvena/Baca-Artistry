import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyCaroline from './components/WhyCaroline';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Gallery />
        <WhyCaroline />
        <Testimonials />
        <FAQ />
        <Booking />
        <Instagram />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

