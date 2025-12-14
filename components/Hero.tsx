import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { HERO_CONTENT, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
              {HERO_CONTENT.greeting}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
              {HERO_CONTENT.name}
            </h1>
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-8">
              {HERO_CONTENT.role}
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              {HERO_CONTENT.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#projects" 
                className="group px-8 py-3 bg-white text-dark font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex justify-center space-x-6">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.email} className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
