import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "I had combo brow done with Caroline and couldn’t be happier with the results! Truly a master of her craft.",
    author: "Sugandha Singh",
    service: "Combo Brows",
  },
  {
    quote: "Truly loved and enjoyed my experience! Caroline is professional and kind, and the results are just stunning.",
    author: "Diana Arco",
    service: "Lip Blush",
  },
  {
    quote: "I've received so many compliments on my brows. They look so natural and have honestly boosted my daily confidence.",
    author: "Paulina Gram",
    service: "Microblading",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-[#FDF6F0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6">Client Stories</p>
            <h2 className="text-5xl md:text-7xl font-serif text-primary">Loved by Minneapolis</h2>
          </div>
          
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-xs uppercase tracking-widest font-bold text-primary/40">
              5.0 Rating based on <span className="text-primary/80">48+ Google Reviews</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-2xl shadow-diffuse border border-primary/5 flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="w-10 h-8 text-accent opacity-20">
                  <svg viewBox="0 0 32 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 24V11.1429C0 7.71429 0.761905 4.95238 2.28571 2.85714C3.90476 0.761905 6.47619 -0.190476 10 0V5.14286C8.28571 5.14286 7.14286 5.52381 6.57143 6.28571C6.09524 7.04762 5.85714 8.19048 5.85714 9.71429H10V24H0ZM18 24V11.1429C18 7.71429 18.7619 4.95238 20.2857 2.85714C21.9048 0.761905 24.4762 -0.190476 28 0V5.14286C26.2857 5.14286 25.1429 5.52381 24.5714 6.28571C24.0952 7.04762 23.8571 8.19048 23.8571 9.71429H28V24H18Z" />
                  </svg>
                </div>
                <blockquote className="text-xl md:text-2xl font-serif italic text-primary/80 leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </div>
              
              <div className="mt-12 pt-8 border-t border-primary/5">
                <p className="text-xs uppercase tracking-widest text-primary font-bold">{t.author}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent mt-1">{t.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
