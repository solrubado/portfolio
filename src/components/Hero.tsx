import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 mb-6">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Maria Sol Rubado
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Full-Stack Software Developer with 10+ years of experience crafting innovative digital solutions
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Experienced in mobile and web development, specializing in React, React Native, Android, and modern web technologies. Passionate about creating user-centric applications and leading development teams.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="https://github.com/solrubado" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/maria-sol-rubado/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="mailto:sol.rubado@gmail.com"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              Contact
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-slate-400 hover:text-blue-400 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;