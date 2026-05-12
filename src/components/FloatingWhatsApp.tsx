import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/16514024979"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-white shadow-2xl shadow-accent/20 rounded-full flex items-center justify-center border border-accent/20 group"
    >
      <div className="absolute inset-0 bg-accent scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
      <MessageCircle size={28} className="text-accent group-hover:text-white transition-colors relative z-10" />
      
      {/* Label Tooltip */}
      <span className="absolute right-20 bg-primary text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with Caroline
      </span>
    </motion.a>
  );
}
