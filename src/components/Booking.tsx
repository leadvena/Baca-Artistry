import { MessageCircle } from 'lucide-react';

export default function Booking() {
  return (
    <section id="book" className="py-32 px-6 bg-bg-blush">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-medium">Reservations</p>
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">Ready to Wake Up Beautiful?</h2>
          <p className="text-primary/60 max-w-lg mx-auto">
            Book your consultation or treatment today. Please allow 24-48 hours for a response.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 md:p-16 shadow-2xl shadow-accent/5">
          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-primary/50 font-bold ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="e.g. Maria Clara"
              className="w-full bg-bg-base border-none p-4 text-sm focus:ring-1 focus:ring-accent outline-none" 
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-primary/50 font-bold ml-1">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+63 9XX XXX XXXX"
              className="w-full bg-bg-base border-none p-4 text-sm focus:ring-1 focus:ring-accent outline-none" 
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-primary/50 font-bold ml-1">Service</label>
            <select className="w-full bg-bg-base border-none p-4 text-sm focus:ring-1 focus:ring-accent outline-none appearance-none">
              <option>Microblading</option>
              <option>Powder Brows</option>
              <option>Lip Blush</option>
              <option>Eyeliner Tattoo</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-primary/50 font-bold ml-1">Preferred Date</label>
            <input 
              type="date" 
              className="w-full bg-bg-base border-none p-4 text-sm focus:ring-1 focus:ring-accent outline-none" 
            />
          </div>

          <div className="md:col-span-2 flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-primary/50 font-bold ml-1">Message (Optional)</label>
            <textarea 
              rows={4}
              placeholder="Tell us about your brow goals..."
              className="w-full bg-bg-base border-none p-4 text-sm focus:ring-1 focus:ring-accent outline-none resize-none"
            />
          </div>

          <div className="md:col-span-2">
            <button 
              type="submit" 
              className="w-full bg-accent text-white py-5 uppercase tracking-[0.2em] text-sm font-bold hover:bg-primary transition-colors"
            >
              Confirm Appointment Request
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-primary/50 mb-4 italic font-serif">Quick inquiry?</p>
          <a 
            href="#" 
            className="inline-flex items-center space-x-3 text-accent hover:text-primary transition-colors group"
          >
            <div className="p-3 bg-white rounded-full group-hover:scale-110 transition-transform">
              <MessageCircle size={20} />
            </div>
            <span className="text-sm uppercase tracking-widest border-b border-accent/20 pb-1 font-bold">Or message me on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
