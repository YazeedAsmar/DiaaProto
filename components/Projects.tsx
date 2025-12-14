import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark-lighter relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-secondary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative rounded-2xl overflow-hidden bg-dark border border-white/5 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10 opacity-60"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
              </div>

              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-1 text-sm text-white hover:text-secondary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
