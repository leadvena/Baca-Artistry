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
    <section className="min-h-[100dvh] flex flex-col md:flex-row pt-20">
      {/* Left side content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 flex items-center justify-start p-8 md:p-24"
      >
        <div className="max-w-xl">
          <motion.p variants={itemVariants} className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-medium">
            Master PMU Artist
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-serif leading-[1.1] text-primary mb-8">
            Your Features.<br />
            <span className="italic">But Perfected.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-primary/60 mb-12 max-w-md leading-relaxed">
            Minneapolis' premier boutique for natural permanent makeup. Elevate your everyday beauty with Brow.rn by Caroline Baca.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#book"
              className="px-10 py-4 bg-primary text-white text-sm uppercase tracking-widest hover:bg-accent transition-all duration-500 text-center"
            >
              Book Appointment
            </a>
            <a 
              href="#services"
              className="px-10 py-4 border border-primary/20 text-primary text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-500 text-center"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Right side visual */}
      <div className="w-full md:w-1/2 relative h-[500px] md:h-auto overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 mix-blend-multiply z-10" />
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent z-10"
          style={{ opacity: 0.4 }}
        />
        {/* Editorial Portrait Image */}
        <img 
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200" 
          alt="Editorial PMU Portrait" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Decorative elements */}
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/20 z-20"
        />
      </div>
    </section>
  );
}
