import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Let's create something <span className="gradient-text">extraordinary</span> together.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Have a project in mind or just want to chat? I'm always open to discussing new opportunities, creative ideas, or how I can help bring your vision to life.
            </p>
            
            <div className="space-y-6">
              <a href={SOCIAL_LINKS.email} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg">contact@yazeedasmar.com</span>
              </a>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-lg">Amman, Jordan (Remote Friendly)</span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-white/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-[1.02] duration-200">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
