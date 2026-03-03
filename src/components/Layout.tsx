import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Youtube, Music2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Music', path: '/music' },
  { name: 'Media', path: '/media' },
  { name: 'News', path: '/news' },
  { name: 'Impact', path: '/impact' },
  { name: 'Bookings', path: '/bookings' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-primary text-text-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-lg border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold tracking-tighter text-gold">
                BASKA BASKA
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-gold",
                    location.pathname === link.path ? "text-gold" : "text-text-secondary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-text-secondary hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-secondary border-b border-white/5 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block text-lg font-medium transition-colors",
                      location.pathname === link.path ? "text-gold" : "text-text-secondary"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-gold">BASKA BASKA</h3>
              <p className="text-text-secondary text-sm max-w-xs">
                Zambian Sound. Global Energy. Official artist platform for music, performances, and bookings.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-text-secondary hover:text-gold transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-text-secondary hover:text-gold transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-text-secondary hover:text-gold transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-text-secondary hover:text-gold transition-colors">
                  <Music2 size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-gold transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                {navLinks.slice(4).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-gold transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>Email: management@baskabaska.com</li>
                <li>Phone: +260 970 000 000</li>
                <li>Location: Lusaka, Zambia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary space-y-4 md:space-y-0">
            <p>© {new Date().getFullYear()} Baska Baska. All rights reserved.</p>
            <p>Built by KVI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
