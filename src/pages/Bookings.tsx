import * as React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Users, DollarSign, Send, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

export default function Bookings() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 rounded-3xl text-center space-y-6 max-w-md"
        >
          <div className="w-20 h-20 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-display font-bold">Request Received</h2>
          <p className="text-text-secondary">
            Thank you. The Baska management team will respond within 24–48 hours regarding your booking inquiry.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">Back to Bookings</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-display font-bold">Book <span className="text-gold">Baska</span></h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Bring the energy of Baska Baska to your next event. We are available for festivals, corporate events, private parties, and collaborations.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Flexible Scheduling</h3>
                  <p className="text-text-secondary text-sm">Available for local and international bookings with advance notice.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Professional Team</h3>
                  <p className="text-text-secondary text-sm">Full management support for logistics, technical riders, and promotion.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl space-y-4">
              <h4 className="font-display font-bold text-gold uppercase tracking-widest text-sm">Direct Contact</h4>
              <p className="text-2xl font-display font-bold">+260 970 000 000</p>
              <p className="text-text-secondary">bookings@baskabaska.com</p>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold border-b border-white/5 pb-4">Event Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Full Name *</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Organization</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Event Co." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Email *</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Phone *</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="+260..." />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold border-b border-white/5 pb-4">Logistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Event Date *</label>
                    <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Location *</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Lusaka, Zambia" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Event Type</label>
                    <select className="w-full bg-secondary border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors">
                      <option>Festival</option>
                      <option>Club Performance</option>
                      <option>Corporate Event</option>
                      <option>Private Party</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Audience Size</label>
                    <select className="w-full bg-secondary border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors">
                      <option>0 - 500</option>
                      <option>500 - 2,000</option>
                      <option>2,000 - 5,000</option>
                      <option>5,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Additional Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Tell us more about your event..."></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send size={18} className="mr-2" /> Submit Booking Request
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
