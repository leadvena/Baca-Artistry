import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'pt-2' : 'pt-0'}`}>
      <div className={`max-w-5xl mx-auto px-6 h-16 flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass rounded-xl mx-4 md:mx-auto' : 'bg-transparent'}`}>
        <a href="#" className="flex items-center group">
          <img 
            src="https://ad00af1024ae9f73a262.cdn6.editmysite.com/uploads/b/ad00af1024ae9f73a262fa8a18029013fa6e680237bb1385b1a149fea37935f2/0E1F15E7-32B7-44A1-BAF8-327ECE54DF5C_1751573053.png?width=200&optimize=medium" 
            alt="Brow.rn Logo" 
            width="55"
            height="40"
            className="h-10 w-auto group-hover:scale-110 transition-transform duration-500"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-medium text-primary/60 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            className="px-6 py-2.5 bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-lg hover:bg-accent active:scale-[0.98] transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col space-y-1.5 items-end">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7, width: 24 } : { rotate: 0, y: 0, width: 24 }}
              className="h-0.5 bg-primary rounded-full"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, width: 16 }}
              className="h-0.5 bg-primary rounded-full"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -7, width: 24 } : { rotate: 0, y: 0, width: 20 }}
              className="h-0.5 bg-primary rounded-full"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 bg-bg-base/80 z-[-1] flex flex-col items-center justify-center space-y-12"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif text-primary hover:italic transition-all"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="#book"
              onClick={() => setIsOpen(false)}
              className="px-12 py-5 bg-accent text-white text-xs uppercase tracking-widest rounded-xl font-bold shadow-xl shadow-accent/20"
            >
              Book Appointment
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
