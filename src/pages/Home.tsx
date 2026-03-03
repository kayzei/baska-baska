import * as React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Users, Music, Mic2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const stats = [
  { label: 'Singles Released', value: '12+', icon: Music },
  { label: 'Live Performances', value: '50+', icon: Mic2 },
  { label: 'Cities Reached', value: '15+', icon: Globe },
  { label: 'Growing Fanbase', value: '100K+', icon: Users },
];

const latestMusic = [
  { id: 1, title: 'Coming Soon', type: 'Single' },
  { id: 2, title: 'Coming Soon', type: 'EP' },
  { id: 3, title: 'Coming Soon', type: 'Album' },
];

const news = [
  { id: 1, title: 'Digital Launch Coming Soon', date: 'March 2026' },
  { id: 2, title: 'New Music Loading', date: 'February 2026' },
  { id: 3, title: 'Official Artist Platform Live Soon', date: 'February 2026' },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
          <img
            src="https://picsum.photos/seed/baska-hero/1920/1080?grayscale"
            alt="Baska Baska"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-2xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
                Baska Baska — <br />
                <span className="text-gold">Zambian Sound.</span> <br />
                Global Energy.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary max-w-lg"
            >
              Official artist platform. Music • Performances • Bookings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/bookings">
                <Button size="lg" className="w-full sm:w-auto">Book Now</Button>
              </Link>
              <Link to="/music">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Listen to Music</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center space-y-2"
            >
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="text-3xl font-display font-bold">{stat.value}</div>
              <div className="text-xs text-text-secondary uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Music */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl">Latest Music</h2>
            <p className="text-text-secondary">Fresh sounds from Lusaka to the world.</p>
          </div>
          <Link to="/music">
            <Button variant="ghost" className="hidden sm:flex group">
              View All Music <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestMusic.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-secondary"
            >
              <img
                src={`https://picsum.photos/seed/music-${item.id}/600/600`}
                alt={item.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
                <div>
                  <p className="text-xs text-gold uppercase tracking-widest mb-1">{item.type}</p>
                  <h3 className="text-xl">{item.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/baska-about/800/1000"
              alt="Baska Baska Portrait"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl">The Artist Behind the Sound</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Baska Baska is a dynamic Zambian recording artist known for his distinctive sound, energetic delivery, and growing influence within the local music scene. Blending authentic street energy with modern African rhythms, he continues to build a powerful connection with fans across Zambia and beyond.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">Read Full Story</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Impact Strip */}
      <section className="bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-gold">Community Impact</h3>
            <p className="text-text-secondary max-w-xl">
              Baska Baska supports youth empowerment and positive lifestyle initiatives through selected community partnerships.
            </p>
          </div>
          <Link to="/impact">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gold-gradient p-12 md:p-20 rounded-3xl text-primary text-center space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold">
            Book Baska for Performances, <br className="hidden md:block" /> Events & Collaborations
          </h2>
          <Link to="/bookings">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Send Booking Request
            </Button>
          </Link>
        </div>
      </section>

      {/* News Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl">Latest News</h2>
          <p className="text-text-secondary">Stay updated with the latest from the camp.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((post) => (
            <Link key={post.id} to="/news" className="group glass-card p-8 rounded-2xl space-y-4 hover:border-gold/50 transition-colors">
              <p className="text-xs text-gold uppercase tracking-widest">{post.date}</p>
              <h3 className="text-xl group-hover:text-gold transition-colors">{post.title}</h3>
              <div className="flex items-center text-sm text-text-secondary group-hover:text-white transition-colors">
                Read More <ArrowRight size={14} className="ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl">Follow the Journey</h2>
            <p className="text-text-secondary">Stay connected with @BaskaBaska on Instagram.</p>
          </div>
          <Button variant="outline" className="group">
            Follow on Instagram <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={`https://picsum.photos/seed/ig-${i}/400/400`}
                alt={`Instagram post ${i}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex gap-4 text-white font-bold">
                  <span className="flex items-center gap-1">❤️ {Math.floor(Math.random() * 1000)}</span>
                  <span className="flex items-center gap-1">💬 {Math.floor(Math.random() * 100)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
