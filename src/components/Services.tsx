import { motion } from 'motion/react';

const services = [
  {
    title: 'Microblading',
    description: 'Ultra-fine, hairlike strokes that mimic natural brow hair for a realistic, fuller look.',
    price: '₱12,000',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Powder Brows',
    description: 'A soft, misty gradient effect that gives the appearance of beautifully filled-in brows.',
    price: '₱15,000',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Lip Blush',
    description: 'Enhancing the natural color and shape of your lips with a soft, tinted wash of color.',
    price: '₱18,000',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Eyeliner Tattoo',
    description: 'Defined eyes that last. From subtle lash enhancement to a more dramatic winged look.',
    price: '₱10,000',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-medium">Professional Treatments</p>
        <h2 className="text-4xl md:text-5xl font-serif text-primary">Elevated PMU Services</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-white border border-transparent hover:border-accent transition-all duration-500 ease-out cursor-default overflow-hidden"
          >
            <div className="flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 relative">
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary/60 mb-8 leading-relaxed max-w-md">
                  {service.description}
                </p>
                <p className="font-serif text-lg text-primary italic">
                  Starting at {service.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
