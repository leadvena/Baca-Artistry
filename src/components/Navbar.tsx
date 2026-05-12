import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-base/80 backdrop-blur-md border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl tracking-tight text-primary">
          Brow.RN_
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-primary/70 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            className="px-8 py-3 bg-accent text-white text-sm uppercase tracking-widest rounded-full hover:bg-primary transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg-base border-b border-accent/10 px-6 py-12 flex flex-col space-y-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-serif text-primary"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setIsOpen(false)}
            className="inline-block text-center px-8 py-4 bg-accent text-white text-sm uppercase tracking-widest rounded-full"
          >
            Book Now
          </a>
        </motion.div>
      )}
    </nav>
  );
}
