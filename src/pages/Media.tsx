import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';

const media = [
  { id: 1, type: 'Photos', img: 'https://picsum.photos/seed/media-1/1200/800', title: 'Studio Session' },
  { id: 2, type: 'Performances', img: 'https://picsum.photos/seed/media-2/1200/800', title: 'Live in Lusaka' },
  { id: 3, type: 'Posters', img: 'https://picsum.photos/seed/media-3/1200/800', title: 'Official Tour Poster' },
  { id: 4, type: 'Videos', img: 'https://picsum.photos/seed/media-4/1200/800', title: 'Music Video BTS' },
  { id: 5, type: 'Photos', img: 'https://picsum.photos/seed/media-5/1200/800', title: 'Fan Meet' },
  { id: 6, type: 'Performances', img: 'https://picsum.photos/seed/media-6/1200/800', title: 'Festival Stage' },
];

const filters = ['All', 'Photos', 'Performances', 'Posters', 'Videos'];

export default function Media() {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedItem, setSelectedItem] = React.useState<typeof media[0] | null>(null);

  const filteredMedia = activeFilter === 'All' 
    ? media 
    : media.filter(item => item.type === activeFilter);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredMedia.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredMedia.length) % filteredMedia.length);
  };

  // Reset index when filter changes
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  return (
    <div className="pt-20 pb-24 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold">Media <span className="text-gold">Showcase</span></h1>
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeFilter === filter 
                ? 'bg-gold text-primary' 
                : 'bg-white/5 text-text-secondary hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Slider Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden glass-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={filteredMedia[currentIndex]?.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img 
                src={filteredMedia[currentIndex]?.img} 
                alt={filteredMedia[currentIndex]?.title} 
                className="w-full h-full object-cover opacity-70"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-16 space-y-4">
                <p className="text-gold font-bold uppercase tracking-widest text-sm">{filteredMedia[currentIndex]?.type}</p>
                <h2 className="text-3xl md:text-5xl font-display font-bold">{filteredMedia[currentIndex]?.title}</h2>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedItem(filteredMedia[currentIndex])}
                  className="group"
                >
                  View Full Screen <Maximize2 size={16} className="ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-8">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-gold hover:text-primary transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 md:pr-8">
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-gold hover:text-primary transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            {filteredMedia.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === i ? 'bg-gold w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grid Preview (Optional, for quick navigation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {filteredMedia.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(i)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                currentIndex === i ? 'border-gold' : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full max-h-full relative"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedItem.img} 
                alt={selectedItem.title} 
                className="w-full h-full object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <p className="text-gold font-bold uppercase tracking-widest text-sm mb-2">{selectedItem.type}</p>
                <h2 className="text-3xl font-display font-bold">{selectedItem.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
