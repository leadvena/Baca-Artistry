import { motion } from 'motion/react';

const galleryItems = [
  { id: 1, title: 'Natural Brow Restoration', before: 'https://images.unsplash.com/photo-1583243543264-d41f5533d728?auto=format&fit=crop&q=80&w=400', after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Velvet Lip Blush', before: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400&blur=10', after: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Soft Ombre Powder Brows', before: 'https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=400&blur=5', after: 'https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'Lash Enhancement Eyeliner', before: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=400&sepia=1', after: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=400' },
  { id: 5, title: 'Full Lip Definition', before: 'https://images.unsplash.com/photo-1498842812179-c81beecf902c?auto=format&fit=crop&q=80&w=400&blur=8', after: 'https://images.unsplash.com/photo-1498842812179-c81beecf902c?auto=format&fit=crop&q=80&w=400' },
  { id: 6, title: 'Feather Touch Brows', before: 'https://images.unsplash.com/photo-1595475242265-c3a8c01ad9ed?auto=format&fit=crop&q=80&w=400&blur=6', after: 'https://images.unsplash.com/photo-1595475242265-c3a8c01ad9ed?auto=format&fit=crop&q=80&w=400' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-medium">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">The Work Speaks for Itself</h2>
        </div>

        <div className="masonry-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="masonry-item group"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex gap-2">
                  {/* Before */}
                  <div className="flex-1 flex flex-col space-y-2">
                    <div className="aspect-[4/5] bg-[#EDE4DD] relative overflow-hidden">
                      <img 
                        src={item.before} 
                        alt={`${item.title} Before`} 
                        className="w-full h-full object-cover grayscale opacity-60"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-primary/40 text-center font-medium">Before</span>
                  </div>
                  {/* After */}
                  <div className="flex-1 flex flex-col space-y-2">
                    <div className="aspect-[4/5] bg-[#E2D1C3] relative overflow-hidden border border-accent/20">
                      <img 
                        src={item.after} 
                        alt={`${item.title} After`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-accent/5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-accent font-medium text-center">After</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h4 className="font-serif text-sm italic text-primary/60">{item.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
