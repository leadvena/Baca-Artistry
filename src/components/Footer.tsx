import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-24">
          <div className="space-y-12">
            <a href="#" className="inline-block group">
              <img 
                src="https://ad00af1024ae9f73a262.cdn6.editmysite.com/uploads/b/ad00af1024ae9f73a262fa8a18029013fa6e680237bb1385b1a149fea37935f2/0E1F15E7-32B7-44A1-BAF8-327ECE54DF5C_1751573053.png?width=200&optimize=medium" 
                alt="Brow.rn Logo" 
                width="66"
                height="48"
                className="h-12 w-auto invert brightness-0 group-hover:scale-105 transition-transform duration-500"
              />
            </a>
            <p className="text-white/50 text-lg leading-relaxed max-w-md">
              A boutique studio dedicated to the art of natural permanent makeup. Located in the heart of Minneapolis, serving those who value subtle, high-end artistry.
            </p>
            <div className="flex space-x-10">
              <a href="https://www.instagram.com/brow.rn_" target="_blank" rel="noopener noreferrer" aria-label="Follow Brow.rn on Instagram" className="text-white/40 hover:text-accent transition-colors"><Instagram size={28} /></a>
              <a href="https://www.facebook.com/TheBrowRn2025" target="_blank" rel="noopener noreferrer" aria-label="Follow Brow.rn on Facebook" className="text-white/40 hover:text-accent transition-colors"><Facebook size={28} /></a>
              <a href="https://wa.me/16514024979" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="text-white/40 hover:text-accent transition-colors"><MessageCircle size={28} /></a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Contact</h4>
              <div className="space-y-6">
                <a href="tel:+16514024979" className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                    <Phone size={16} className="text-white/40 group-hover:text-accent" />
                  </div>
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors">+1 (651) 402-4979</span>
                </a>
                <a href="mailto:brow.rn.mn@gmail.com" className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                    <Mail size={16} className="text-white/40 group-hover:text-accent" />
                  </div>
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors">brow.rn.mn@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Studio</h4>
              <a 
                href="https://maps.google.com/?q=5451+Lyndale+Ave+S,+Minneapolis,+MN+55419" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-4 group"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors flex-shrink-0 mt-1">
                  <MapPin size={16} className="text-white/40 group-hover:text-accent" />
                </div>
                <div className="text-sm text-white/60 group-hover:text-white transition-colors leading-relaxed">
                  5451 Lyndale Ave S<br />
                  Minneapolis, MN 55419<br />
                  United States
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold gap-6">
          <p>© 2026 Brow.rn Studio. Natural results for the modern woman.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
