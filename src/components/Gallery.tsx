import { motion } from 'motion/react';

const galleryItems = [
  { id: 1, title: 'Natural Brow Restoration', before: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=600&blur=10', after: '/images/gallery-brow.png' },
  { id: 2, title: 'Velvet Lip Blush', before: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=600&blur=10', after: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, title: 'Soft Ombre Powder Brows', before: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=600&blur=10', after: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, title: 'Lash Enhancement Eyeliner', before: 'https://images.pexels.com/photos/4612159/pexels-photo-4612159.jpeg?auto=compress&cs=tinysrgb&w=600&blur=10', after: 'https://images.pexels.com/photos/4612159/pexels-photo-4612159.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, title: 'Defined Lip Architecture', before: 'https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600&blur=10', after: 'https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, title: 'Feather Touch Brows', before: 'https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg?auto=compress&cs=tinysrgb&w=600&blur=10', after: 'https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6">Portfolio</p>
          <h2 className="text-5xl md:text-7xl font-serif text-primary mb-8">Clinical Results</h2>
          <p className="text-primary/60 text-lg max-w-xl mx-auto">Witness the subtle power of precision. Every transformation is designed to look effortlessly natural, even up close.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col space-y-6">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm border border-primary/5">
                  {/* Container for split view */}
                  <div className="absolute inset-0 flex">
                    <div className="relative flex-1 h-full overflow-hidden border-r border-white/20">
                      <img 
                        src={item.before} 
                        alt={`${item.title} Before`} 
                        width="300"
                        height="400"
                        loading="lazy"
                        className="absolute h-full w-[200%] max-w-none object-cover left-0 grayscale"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[8px] uppercase tracking-widest text-white font-bold">
                        Before
                      </div>
                    </div>
                    <div className="relative flex-1 h-full overflow-hidden">
                      <img 
                        src={item.after} 
                        alt={`${item.title} After`} 
                        width="300"
                        height="400"
                        loading="lazy"
                        className="absolute h-full w-[200%] max-w-none object-cover right-0"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-accent/80 backdrop-blur-md rounded-full text-[8px] uppercase tracking-widest text-white font-bold">
                        After
                      </div>
                    </div>
                  </div>
                  
                  {/* Full image hover reveal */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-bg-base">
                    <img 
                      src={item.after} 
                      alt={item.title} 
                      width="600"
                      height="800"
                      loading="lazy"
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-xl text-primary mb-1">{item.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Healed Results</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <a 
            href="https://www.instagram.com/brow.rn_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 px-8 py-4 border border-primary/10 rounded-xl hover:border-accent hover:text-accent transition-all duration-300 group"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">View full portfolio on Instagram</span>
            <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
