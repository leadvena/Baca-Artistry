import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "I can't believe I waited this long. Caroline is a true artist—my brows looks so natural, my friends think I just have amazing genes.",
    author: "Isabella",
    service: "Microblading",
  },
  {
    quote: "The Lip Blush treatment completely changed my morning routine. I wake up with the perfect tint every single day. Professional and hygienic.",
    author: "Sofia",
    service: "Lip Blush",
  },
  {
    quote: "Service was impeccable. Caroline took the time to explain everything and made sure I was comfortable. The Powder Brows are flawless.",
    author: "Elena",
    service: "Powder Brows",
  },
];

const StarRating = () => (
  <div className="flex space-x-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} className="fill-accent text-accent" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-[#F3E8E2]/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-medium">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Loved by Our Clients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-12 text-center border border-accent/5 flex flex-col items-center"
            >
              <StarRating />
              <blockquote className="text-xl font-serif italic text-primary/80 mb-8 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="mt-auto">
                <p className="text-xs uppercase tracking-widest text-primary font-bold">{t.author}</p>
                <div className="w-4 h-[1px] bg-accent/30 mx-auto my-2" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{t.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
