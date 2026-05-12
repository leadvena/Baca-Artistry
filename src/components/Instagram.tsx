import { motion } from 'motion/react';
import { Instagram as InstagramIcon } from 'lucide-react';

const instagramImages = [
  'https://images.unsplash.com/photo-1522337621169-42af2446f1ad?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=600',
];

export default function Instagram() {
  return (
    <section className="py-32 bg-white overflow-hidden border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-md">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6">Social</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Follow the Journey</h2>
          <p className="text-primary/60">Peek behind the scenes and see daily transformations on our Instagram.</p>
        </div>
        <a 
          href="https://instagram.com/brow.rn.mn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 group"
        >
          <span className="text-xl md:text-2xl font-serif text-accent italic group-hover:text-primary transition-colors">@brow.rn.mn</span>
          <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
            <InstagramIcon size={20} className="text-accent group-hover:text-white transition-colors" />
          </div>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {instagramImages.map((src, i) => (
          <motion.a
            key={i}
            href="https://instagram.com/brow.rn.mn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            className="aspect-square relative overflow-hidden rounded-2xl bg-[#FDF6F0] group"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity opacity-0 group-hover:opacity-100 z-10" />
            <img 
              src={src} 
              alt={`Instagram post ${i + 1}`} 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <InstagramIcon size={32} className="text-white" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
