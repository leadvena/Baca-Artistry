import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const credentials = [
  "Licensed Tattoo Artist in Minnesota",
  "Globally Certified PMU Master",
  "Specialized in Hyper-Realistic Techniques",
  "Medical-Grade Safety Standards",
  "Premium Pigments & Tools",
  "Over 500 Successful Procedures"
];

export default function WhyCaroline() {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Portrait Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-warm">
                <img 
                  src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/610675272_25568130232873405_6382451476879960419_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=I04EUGvWebAQ7kNvwFfddKC&_nc_oc=AdoRCBgPgNEOHBjUAcTCkHi0qPmklwsDIhVbLuFozAR_5cQs9MEilmcOUly-XW66UFKMpS4zdEZhkIa4z408u-WK&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=BvzRkZJdbcSWk19e8sJr8w&_nc_ss=7b2a8&oh=00_Af7KqVv9LfLkjmrhv1aG-VebVsE59-jjN8hGPK9w-euD2w&oe=6A08448C" 
                  alt="Caroline Baca Artist" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent rounded-full flex items-center justify-center p-8 text-center shadow-2xl">
                <p className="text-[10px] uppercase tracking-widest text-white font-bold leading-tight">
                  Certified Master Artist
                </p>
              </div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6">The Founder</p>
              <h2 className="text-5xl md:text-7xl font-serif text-primary mb-8 leading-tight">Caroline Baca</h2>
              <p className="text-xl text-primary/70 leading-relaxed max-w-2xl italic font-serif mb-8">
                "My philosophy is simple: your features, but perfected. I believe in enhancements that respect your natural beauty while elevating your daily confidence."
              </p>
              <p className="text-primary/60 leading-relaxed max-w-2xl">
                Combining clinical precision with an artist's eye, Caroline specializes in hyper-realistic techniques that integrate seamlessly with your unique bone structure. Based in Minneapolis, she has built a reputation for subtle, high-end transformations that last.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {credentials.map((cred, i) => (
                <motion.div 
                  key={cred}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check size={14} className="text-accent" />
                  </div>
                  <span className="text-sm text-primary/70 font-medium">{cred}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
