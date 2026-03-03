import * as React from 'react';
import { motion } from 'motion/react';
import { Award, Star, Music, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 pb-24 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              The Voice of the <span className="text-gold">Streets</span>, The Rhythm of the <span className="text-gold">Future</span>.
            </h1>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Baska Baska is a dynamic Zambian recording artist known for his distinctive sound, energetic delivery, and growing influence within the local music scene. Blending authentic street energy with modern African rhythms, he continues to build a powerful connection with fans across Zambia and beyond.
              </p>
              <p>
                Born and raised in the heart of Lusaka, Baska's musical journey is a testament to resilience and raw talent. His music serves as a bridge between traditional Zambian storytelling and contemporary global trends, creating a unique sonic identity that resonates with a diverse audience.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://picsum.photos/seed/baska-bio/1200/1600"
              alt="Baska Baska"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-secondary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-16">Career Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Breakthrough Artist', desc: 'Recognized as one of the most promising talents in the Zambian music industry.', icon: Star },
              { title: 'Chart-Topping Singles', desc: 'Multiple releases reaching the top of local radio and streaming charts.', icon: Music },
              { title: 'Sold-Out Shows', desc: 'Consistently delivering high-energy performances to packed venues across the country.', icon: Zap },
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl space-y-4">
                <item.icon className="w-8 h-8 text-gold" />
                <h3 className="text-xl font-display font-bold">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-video rounded-3xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/baska-style/1200/800"
              alt="Baska Baska Performance"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-4xl">Musical Style & Influence</h2>
            <div className="space-y-6 text-text-secondary">
              <p>
                Baska Baska's sound is a rich tapestry of Afro-pop, Dancehall, and traditional Zambian Kalindula influences. He is celebrated for his lyrical prowess, often touching on themes of social reality, hope, and celebration.
              </p>
              <p>
                Influenced by both local legends and global superstars, Baska has developed a vocal delivery that is both commanding and melodic, making him a versatile artist capable of handling high-energy club anthems and soulful, introspective tracks alike.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Afro-Pop', 'Dancehall', 'Kalindula Fusion', 'Street Energy', 'Conscious Lyrics'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gold uppercase tracking-widest font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
