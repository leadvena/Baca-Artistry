import { motion } from 'motion/react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  return (
    <section id="main-content" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-48 pb-20 px-6 overflow-hidden bg-[#FDF6F0]">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="Luxury Permanent Makeup Artistry" 
          width="1920"
          height="1080"
          fetchpriority="high"
          className="w-full h-full object-cover opacity-60 grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF6F0]/80 via-transparent to-[#FDF6F0]" />
      </div>

      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-[10px] uppercase tracking-[0.3em] text-accent font-semibold backdrop-blur-sm">
            Minneapolis' Premier PMU Studio
          </span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-6xl md:text-9xl font-serif leading-[0.95] text-primary mb-8 tracking-tighter"
        >
          Your Features.<br />
          <span className="italic font-light">But Perfected.</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-primary/70 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Hyper-realistic permanent makeup for the modern woman. Natural, effortless results by Caroline Baca.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#book"
            className="group relative px-12 py-5 bg-primary text-white text-[10px] uppercase tracking-[0.3em] font-bold rounded-xl overflow-hidden shadow-2xl shadow-primary/20 active:scale-[0.98] transition-all duration-300"
          >
            <span className="relative z-10">Book Appointment</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </a>
          <a 
            href="#services"
            className="text-[10px] uppercase tracking-[0.3em] text-primary/60 hover:text-accent font-bold transition-all border-b border-transparent hover:border-accent pb-1"
          >
            Explore Services
          </a>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-16 border-t border-primary/5 flex justify-center items-center space-x-12 opacity-50"
        >
          <div className="text-center">
            <p className="text-2xl font-serif text-primary">500+</p>
            <p className="text-[10px] uppercase tracking-widest">Happy Clients</p>
          </div>
          <div className="w-px h-8 bg-primary/20" />
          <div className="text-center">
            <p className="text-2xl font-serif text-primary">5.0</p>
            <p className="text-[10px] uppercase tracking-widest">Google Rating</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
