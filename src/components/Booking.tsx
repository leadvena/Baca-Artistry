import { useState } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="book" className="py-32 px-6 bg-[#F3E8E2]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6">Reservations</p>
              <h2 className="text-5xl md:text-7xl font-serif text-primary mb-8 leading-tight">Begin Your Transformation</h2>
              <p className="text-primary/60 text-lg leading-relaxed max-w-md">
                Consultations are complimentary. Please allow 24-48 hours for our team to review your request and confirm your time.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="font-serif text-accent text-xl italic">1</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-2">Request Consultation</h3>
                  <p className="text-sm text-primary/50">Submit the form with your goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="font-serif text-accent text-xl italic">2</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-2">Phone Screening</h3>
                  <p className="text-sm text-primary/50">We'll chat about your skin and lifestyle.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="font-serif text-accent text-xl italic">3</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-2">Artistry Session</h3>
                  <p className="text-sm text-primary/50">Your features, but perfected.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  onSubmit={handleSubmit}
                  className="bg-white p-8 md:p-12 rounded-2xl shadow-warm space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-primary/40 font-bold ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Maria Clara"
                        className="w-full bg-bg-base border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-accent/20 outline-none transition-all" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-primary/40 font-bold ml-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="(651) 402-4979"
                        className="w-full bg-bg-base border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-accent/20 outline-none transition-all" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service-select" className="text-[10px] uppercase tracking-widest text-primary/40 font-bold ml-1">Service Selection</label>
                    <select id="service-select" required className="w-full bg-bg-base border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-accent/20 outline-none appearance-none cursor-pointer">
                      <option value="">Select a service...</option>
                      <option>Combo Brows</option>
                      <option>Microblading</option>
                      <option>Powder Brows</option>
                      <option>Lip Blush</option>
                      <option>Initial Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-primary/40 font-bold ml-1">Message (Optional)</label>
                    <textarea 
                      rows={4}
                      placeholder="Share your brow goals or questions..."
                      className="w-full bg-bg-base border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-accent/20 outline-none resize-none transition-all"
                    />
                  </div>

                  <button 
                    disabled={isLoading}
                    type="submit" 
                    className="w-full bg-primary text-white py-5 rounded-xl uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-accent active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary/10 flex items-center justify-center space-x-4"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <span>Request Appointment</span>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-12 md:p-24 rounded-2xl shadow-warm text-center space-y-8"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} className="text-accent" />
                  </div>
                  <h3 className="text-4xl font-serif text-primary">Request Sent</h3>
                  <p className="text-primary/60 text-lg">Thank you for trusting Brow.rn. Caroline will personally review your request and get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[10px] uppercase tracking-widest text-accent font-bold border-b border-accent/20 pb-1"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-[10px] uppercase tracking-widest text-primary/30 mb-6 font-bold">Prefer Direct Message?</p>
          <a 
            href="https://wa.me/16514024979" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-6 text-primary hover:text-accent transition-all group"
          >
            <div className="p-4 bg-white rounded-2xl shadow-diffuse group-hover:scale-110 transition-transform">
              <MessageCircle size={24} className="text-accent" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest font-bold text-accent">WhatsApp Inquiry</p>
              <p className="text-xl font-serif">+1 (651) 402-4979</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
