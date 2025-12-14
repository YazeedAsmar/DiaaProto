import React from 'react';
import { ABOUT_CONTENT, SKILLS, EXPERIENCES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">About Me & Skills</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bio Card - Spans 2 cols */}
          <div className="md:col-span-2 glass-panel rounded-2xl p-8 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              The Journey
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {ABOUT_CONTENT.bio}
            </p>
          </div>

          {/* Stats/Quick Info */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-center items-center text-center hover:border-secondary/50 transition-colors">
            <div className="text-5xl font-bold gradient-text mb-2">3+</div>
            <div className="text-gray-400">Years of Experience</div>
          </div>

          {/* Experience Column */}
          <div className="md:row-span-2 glass-panel rounded-2xl p-8 hover:border-pink-500/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              Experience
            </h3>
            <div className="space-y-8">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-dark border-2 border-pink-500"></div>
                  <h4 className="text-white font-semibold">{exp.role}</h4>
                  <p className="text-primary text-sm mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid - Spans 2 cols */}
          <div id="skills" className="md:col-span-2 glass-panel rounded-2xl p-8 hover:border-cyan-500/50 transition-colors">
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="text-primary mb-2">
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
