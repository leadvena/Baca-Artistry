import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        {/* Left Column */}
        <div className="md:col-span-5">
          <h2 className="text-3xl font-serif mb-6">Brow.RN_</h2>
          <p className="text-white/50 text-sm max-w-sm leading-relaxed mb-8">
            Minneapolis' premier cosmetic tattoo studio. Elevate your everyday beauty with natural, high-end permanent makeup.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/40 hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-white/40 hover:text-accent transition-colors"><MessageCircle size={20} /></a>
          </div>
        </div>

        {/* Center Column - Navigation */}
        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-accent">Quick Links</h4>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Home</a>
            <a href="#services" className="text-sm text-white/60 hover:text-white transition-colors">Our Services</a>
            <a href="#gallery" className="text-sm text-white/60 hover:text-white transition-colors">Before & After</a>
            <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">Meet Caroline</a>
            <a href="#book" className="text-sm text-white/60 hover:text-white transition-colors">Book Now</a>
          </nav>
        </div>

        {/* Right Column - Contact */}
        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-accent">Contact Details</h4>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Clinic Address</p>
              <p className="text-sm text-white/80">5451 Lyndale Ave S, Minneapolis, MN 55419, United States</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Email Inquiry</p>
              <p className="text-sm text-white/80 hover:text-accent cursor-pointer transition-colors">brow.rn.mn@gmail.com</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Bookings</p>
              <p className="text-sm text-white/80">+1 651-402-4979</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">
        <p>© 2026 Brow.RN_ Studio. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
