import * as React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Button from '../components/Button';

const posts = [
  {
    id: 1,
    title: 'Digital Launch Coming Soon',
    excerpt: 'The official Baska Baska digital platform is set to go live, bringing fans closer to the music than ever before.',
    date: 'March 1, 2026',
    author: 'Management',
    category: 'Announcement',
    img: 'https://picsum.photos/seed/news-1/800/500'
  },
  {
    id: 2,
    title: 'New Music Loading',
    excerpt: 'Baska is back in the studio working on a fresh project that promises to redefine the Zambian sound.',
    date: 'February 20, 2026',
    author: 'Baska Baska',
    category: 'Music',
    img: 'https://picsum.photos/seed/news-2/800/500'
  },
  {
    id: 3,
    title: 'Official Artist Platform Live Soon',
    excerpt: 'We are building a dedicated space for all things Baska Baska. Stay tuned for exclusive content.',
    date: 'February 15, 2026',
    author: 'Tech Team',
    category: 'Tech',
    img: 'https://picsum.photos/seed/news-3/800/500'
  },
  {
    id: 4,
    title: 'Lusaka Live Performance Recap',
    excerpt: 'A look back at the high-energy performance that rocked the capital last weekend.',
    date: 'February 5, 2026',
    author: 'Media',
    category: 'Live',
    img: 'https://picsum.photos/seed/news-4/800/500'
  }
];

export default function News() {
  return (
    <div className="pt-20 pb-24 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold">Latest <span className="text-gold">News</span></h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Stay updated with official announcements, tour dates, and behind-the-scenes stories.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row"
        >
          <div className="lg:w-1/2 aspect-video lg:aspect-auto">
            <img src={posts[0].img} alt={posts[0].title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4 text-xs text-gold font-bold uppercase tracking-widest">
              <span className="bg-gold/10 px-3 py-1 rounded-full">{posts[0].category}</span>
              <span>{posts[0].date}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">{posts[0].title}</h2>
            <p className="text-text-secondary text-lg leading-relaxed">{posts[0].excerpt}</p>
            <div className="pt-4">
              <Button variant="outline">Read Full Article</Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="aspect-video overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex items-center justify-between text-[10px] text-text-secondary font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Tag size={10} className="text-gold" /> {post.category}</span>
                  <span className="flex items-center gap-1"><Calendar size={10} className="text-gold" /> {post.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold group-hover:text-gold transition-colors">{post.title}</h3>
                <p className="text-text-secondary text-sm line-clamp-3 flex-grow">{post.excerpt}</p>
                <div className="pt-4 flex items-center text-xs font-bold text-gold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pagination Ready */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Prev</Button>
          <Button variant="primary" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </section>
    </div>
  );
}
