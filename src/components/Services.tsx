import { motion } from 'motion/react';

const services = [
  {
    id: 'combo',
    title: 'Combo Brows',
    description: 'The ultimate brow transformation. By combining manual microblading strokes with soft machine shading, we create depth and dimension that mimics natural hair growth while providing a beautifully defined shape.',
    price: '$500',
    image: '/images/combo-brows.png',
    tag: 'Most Popular'
  },
  {
    id: 'micro',
    title: 'Microblading',
    description: 'A manual technique designed for those seeking the most natural enhancement. Individual, ultra-fine strokes are hand-drawn to fill in sparse areas and perfect your natural brow architecture.',
    price: '$450',
    image: '/images/microblading.png',
  },
  {
    id: 'powder',
    title: 'Powder Brows',
    description: 'A soft, misty gradient effect created with a specialized machine. Ideal for all skin types, this technique provides a "filled-in" look that ranges from ultra-subtle to bold definition.',
    price: '$475',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'lip',
    title: 'Lip Blush',
    description: 'Redefine your smile with a soft wash of custom-blended color. This treatment enhances your natural shape, adds symmetrical definition, and provides a healthy, youthful tint that lasts for years.',
    price: '$475',
    image: 'https://images.unsplash.com/photo-1522337621169-42af2446f1ad?auto=format&fit=crop&q=80&w=1200',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6">Expert Treatments</p>
          <h2 className="text-5xl md:text-7xl font-serif text-primary mb-8">Refined Artistry</h2>
          <p className="text-primary/60 text-lg">Every procedure is a bespoke collaboration between artist and client, tailored to your unique bone structure and aesthetic goals.</p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-warm">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Hyper-realistic permanent makeup results by Caroline Baca in Minneapolis`} 
                    width="600"
                    height="750"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-1000"
                  />
                </div>
                {service.tag && (
                  <div className="absolute top-6 right-6 px-4 py-1.5 bg-accent text-white text-[10px] uppercase tracking-widest font-bold rounded-full shadow-lg">
                    {service.tag}
                  </div>
                )}
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <p className="font-mono text-accent text-sm tracking-tighter">0{index + 1} / ARTISTRY</p>
                  <h3 className="text-4xl md:text-5xl font-serif text-primary">{service.title}</h3>
                </div>
                
                <p className="text-primary/70 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold mb-1">Starting At</span>
                    <span className="text-3xl font-serif text-primary">{service.price}</span>
                  </div>
                  <div className="h-px w-12 bg-accent/20 hidden sm:block" />
                  <a 
                    href="#book"
                    className="inline-flex items-center space-x-6 text-[10px] uppercase tracking-[0.3em] font-bold text-accent group"
                  >
                    <span>Reserve Session</span>
                    <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <div className="w-1.5 h-1.5 bg-accent group-hover:bg-white rounded-full" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
