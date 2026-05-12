import { motion } from 'motion/react';

const trustItems = [
  "Licensed & Certified",
  "Medical-Grade Tools",
  "500+ Happy Clients",
  "Minneapolis, MN"
];

export default function TrustStrip() {
  return (
    <div className="bg-bg-base border-y border-primary/5 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {trustItems.map((item, i) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {i !== 0 && <div className="hidden md:block w-1.5 h-1.5 bg-accent rounded-full opacity-30" />}
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary/60 font-semibold whitespace-nowrap">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
