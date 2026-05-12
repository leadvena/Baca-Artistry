import { motion } from 'motion/react';

const instagramImages = [
  'https://images.unsplash.com/photo-1522337621169-42af2446f1ad?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1527799822367-33465dbf9a34?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600',
];

export default function Instagram() {
  return (
    <section className="py-32 overflow-hidden border-t border-accent/5">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-2">Follow the Journey</h2>
        <p className="text-accent tracking-widest text-sm font-medium">@Brow.rn.mn</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {instagramImages.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="aspect-square relative overflow-hidden bg-[#FDF6F0] group cursor-pointer"
          >
            <div className="absolute inset-0 bg-accent/5 mix-blend-multiply transition-opacity opacity-0 group-hover:opacity-100 z-10" />
            <img 
              src={src} 
              alt={`Instagram post ${i + 1}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay detail */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
