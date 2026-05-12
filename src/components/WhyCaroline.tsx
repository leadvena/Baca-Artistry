import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const pillars = [
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: 'Certified PMU Artist',
    text: 'Highly trained and certified in the latest premium permanent makeup techniques globally.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: 'Medical-Grade Tools',
    text: 'Your safety is paramount. We use only sterile, single-use, medical-grade equipment.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    title: 'Natural Results',
    text: 'Specialize in hyper-realistic techniques that enhance your unique beauty, never mask it.',
  },
];

export default function WhyCaroline() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="aspect-[3/4] bg-[#F3E8E2] relative overflow-hidden">
             <img 
               src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/610675272_25568130232873405_6382451476879960419_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=I04EUGvWebAQ7kNvwFfddKC&_nc_oc=AdoRCBgPgNEOHBjUAcTCkHi0qPmklwsDIhVbLuFozAR_5cQs9MEilmcOUly-XW66UFKMpS4zdEZhkIa4z408u-WK&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=BvzRkZJdbcSWk19e8sJr8w&_nc_ss=7b2a8&oh=00_Af7KqVv9LfLkjmrhv1aG-VebVsE59-jjN8hGPK9w-euD2w&oe=6A08448C" 
               alt="Caroline Baca Artist" 
               className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-medium">The Artist</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Meet Caroline Baca</h2>
            <p className="text-lg text-primary/60 leading-relaxed max-w-2xl">
              Caroline Baca is the founder of Brow.rn, a premier cosmetic tattoo studio in Minneapolis. Combining her clinical precision with an artist's eye, she specializes in hyper-realistic techniques that enhance your unique features. Her philosophy is simple: your features, but perfected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-4"
              >
                <div className="mb-2">{pillar.icon}</div>
                <h4 className="text-lg font-serif text-primary">{pillar.title}</h4>
                <p className="text-sm text-primary/50 leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
