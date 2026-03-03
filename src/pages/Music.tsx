import * as React from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, Music2 } from 'lucide-react';
import Button from '../components/Button';
import MusicPlayer, { type Track } from '../components/MusicPlayer';

const tracks: Track[] = [
  {
    id: 1,
    title: 'Zambian Energy',
    artist: 'Baska Baska',
    cover: 'https://picsum.photos/seed/track-1/600/600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 2,
    title: 'Global Vibe',
    artist: 'Baska Baska',
    cover: 'https://picsum.photos/seed/track-2/600/600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 3,
    title: 'Lusaka Nights',
    artist: 'Baska Baska',
    cover: 'https://picsum.photos/seed/track-3/600/600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  }
];

const releases = [
  { id: 1, title: 'Coming Soon', type: 'Single', year: '2026' },
  { id: 2, title: 'Coming Soon', type: 'Single', year: '2026' },
  { id: 3, title: 'Coming Soon', type: 'EP', year: '2025' },
  { id: 4, title: 'Coming Soon', type: 'Single', year: '2025' },
  { id: 5, title: 'Coming Soon', type: 'Single', year: '2025' },
  { id: 6, title: 'Coming Soon', type: 'Album', year: '2024' },
];

export default function Music() {
  return (
    <div className="pt-20 pb-24 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold"
        >
          Discography
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-text-secondary max-w-2xl mx-auto"
        >
          Explore the sounds of Baska Baska. From street anthems to soulful melodies.
        </motion.p>
      </section>

      {/* Featured Player */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-display font-bold">Listen to Previews</h2>
            <p className="text-text-secondary">Stream short snippets of the latest tracks.</p>
          </div>
          <MusicPlayer tracks={tracks} />
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-display font-bold">Full Releases</h2>
          <p className="text-text-secondary">Official albums, EPs, and singles.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group glass-card rounded-2xl overflow-hidden"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/release-${release.id}/600/600`}
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-gold text-primary flex items-center justify-center hover:scale-110 transition-transform">
                    <Music2 size={20} fill="currentColor" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-display font-bold">{release.title}</h3>
                    <p className="text-sm text-text-secondary">{release.type} • {release.year}</p>
                  </div>
                  <ExternalLink size={16} className="text-text-secondary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
