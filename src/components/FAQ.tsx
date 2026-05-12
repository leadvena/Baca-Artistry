import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Does permanent makeup hurt?",
    answer: "We use high-potency topical anesthetics before and during your procedure to ensure maximum comfort. Most clients describe the sensation as a light scratch or vibration. Your comfort is our priority."
  },
  {
    question: "How long do the results last?",
    answer: "PMU is 'low maintenance,' not 'no maintenance.' Results typically last 1-3 years depending on the technique, skin type, and lifestyle. We recommend annual touch-ups to keep your color fresh and defined."
  },
  {
    question: "What is the healing process like?",
    answer: "Initial healing takes about 7-10 days. You may experience minor redness and slight flaking. The color will appear darker initially and then soften by 30-50% once fully healed at the 6-week mark."
  },
  {
    question: "How should I prepare for my appointment?",
    answer: "Avoid caffeine, alcohol, and blood thinners (like Ibuprofen) 24 hours before your session. Discontinue Retin-A or AHA skincare near the treatment area 2 weeks prior. Arrive with a clean face and your favorite brow inspiration!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6">Clarifications</p>
          <h2 className="text-5xl md:text-6xl font-serif text-primary">Common Inquiries</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-primary/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className="text-xl md:text-2xl font-serif text-primary group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <span className="text-2xl font-light text-accent ml-4">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-primary/60 text-lg leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
