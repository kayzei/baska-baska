import * as React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Zap, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

export default function Impact() {
  return (
    <div className="pt-20 pb-24 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold"
        >
          Using Music to <br /> <span className="text-gold">Inspire Positive Change</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
        >
          Beyond the stage, Baska Baska is committed to leveraging his platform for community development and youth empowerment across Zambia.
        </motion.p>
      </section>

      {/* Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Youth Empowerment',
              desc: 'Providing mentorship and creative workshops for aspiring young artists in underserved communities.',
              icon: Users,
              img: 'https://picsum.photos/seed/impact-1/800/600'
            },
            {
              title: 'Positive Lifestyle Advocacy',
              desc: 'Using music and public appearances to promote healthy choices and positive social values among the youth.',
              icon: Heart,
              img: 'https://picsum.photos/seed/impact-2/800/600'
            },
            {
              title: 'Community Outreach',
              desc: 'Partnering with local organizations to support education and health initiatives in Lusaka and beyond.',
              icon: Zap,
              img: 'https://picsum.photos/seed/impact-3/800/600'
            },
            {
              title: 'Partnership Opportunities',
              desc: 'Open to collaborating with brands and NGOs that align with our mission of community growth.',
              icon: MessageCircle,
              img: 'https://picsum.photos/seed/impact-4/800/600'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="aspect-video relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-gold text-primary flex items-center justify-center">
                  <item.icon size={24} />
                </div>
              </div>
              <div className="p-8 space-y-4 flex-grow">
                <h3 className="text-2xl font-display font-bold">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary p-12 md:p-20 rounded-3xl text-center space-y-8 border border-white/5">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Interested in Partnering?</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We are always looking for meaningful ways to contribute to the community. If you represent an organization or initiative, let's talk.
          </p>
          <Button variant="outline" size="lg">Inquire About Partnerships</Button>
        </div>
      </section>
    </div>
  );
}
