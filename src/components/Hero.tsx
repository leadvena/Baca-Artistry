import { motion } from 'motion/react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1920" 
          alt="Editorial PMU Portrait" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Overlays for depth and readability */}
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-bg-base/40 to-transparent md:from-bg-base/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 via-transparent to-transparent md:hidden" />
      </div>

      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32"
      >
        <div className="max-w-2xl">
          <motion.p variants={itemVariants} className="text-xs uppercase tracking-[0.4em] text-accent mb-6 font-semibold">
            Master PMU Artist
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-serif leading-[1.1] text-primary mb-8 tracking-tight">
            Your Features.<br />
            <span className="italic">But Perfected.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-primary/70 mb-12 max-w-md leading-relaxed">
            Minneapolis' premier boutique for natural permanent makeup. Elevate your everyday beauty with Brow.rn by Caroline Baca.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#book"
              className="px-10 py-5 bg-primary text-white text-xs uppercase tracking-widest hover:bg-accent transition-all duration-500 text-center font-medium shadow-xl shadow-primary/10"
            >
              Book Appointment
            </a>
            <a 
              href="#services"
              className="px-10 py-5 border border-primary/20 bg-white/10 backdrop-blur-sm text-primary text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-500 text-center font-medium"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative side element for desktop */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute right-12 bottom-12 hidden lg:flex flex-col items-end space-y-4"
      >
        <div className="w-px h-24 bg-primary/20" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-primary/40 rotate-90 origin-right translate-y-16">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
