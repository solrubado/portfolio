import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Odysee Spain - In Progress',
      description: 'Modern e-commerce website for cultural events in Spain built with React, Tailwind CSS and Firebase as a freelance project. ',
      image: '/projects/odysee-spain.png',
      technologies: ['React', 'Typescript', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://ecommerce-demo.example.com',
      githubUrl: 'https://github.com/solrubado/odysee',
      isApp: false,
      isMine: true,
      inProgress: true,
      featured: true,
    },
    {
      title: 'Coachency App - In Progress',
      description: 'Website for sport coaches built in React, Tailwind CSS and Supabase as a freelance project.',
      image: '/projects/coachency.jpeg',
      technologies: ['React', 'Typescript', 'Supabase', 'Tailwind CSS', 'Stripe'],
      liveUrl: 'https://coachency.app',
      isApp: false,
      githubUrl: 'https://github.com/solrubado/coachency',
      featured: true,
      isMine: true,
      
    },
    {
      title: 'Wecan Connect',
      description: 'An instant messaging service secured by blockchain, designed for both professionals and individuals, with distributed data storage.',
      image: '/projects/wecan-connect.png',
      technologies: ['React Native', 'Typescript', 'XMPP', 'Firebase', 'Blockchain'],
      liveUrl: 'https://play.google.com/store/apps/details?id=ch.wecangroup.connect.android',
      isApp: true,
      githubUrl: 'https://wecangroup.ch/products/wecan-connect/',
      featured: true,
      isMine: false,
        
    },
    {
      title: 'Thirdfort App',
      description: 'Automated ID verification, anti-money laundering and Source of Funds checks to protect big transactions.',
      image:'/projects/thirdfort.png',
      technologies: ['Android', 'Kotlin', 'Firebase', 'Security', 'Node.JS', 'Go'],
      liveUrl: 'https://play.google.com/store/apps/details?id=app.thirdfort.android',
      isApp: true,
      githubUrl: '',
      featured: true,
      isMine: false,
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A collection of projects that showcase my technical skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                {!project.inProgress && 
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex-1 justify-center"
                  >
                    <ExternalLink size={18} />
                    {project.isApp? 'Google Play': 'Website' }
                  </a>
                  }
                  {project.isMine &&
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex-1 justify-center"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/30 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-300 text-sm flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-all duration-300 text-sm flex-1 justify-center"
                  >
                    <Github size={16} />
                    Code
                  </a>
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