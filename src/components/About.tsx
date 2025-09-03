import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
     {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description: 'React Native, Android SDK, Kotlin',
    },
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'React, TypeScript, JavaScript, HTML5, CSS3, Responsive Design',
    },
    {
      icon: <Database size={24} />,
      title: 'Backend & Database',
      description: 'Node.js, REST APIs',
    },
    {
      icon: <Globe size={24} />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development, Agile methodologies, SEO optimization',
    },
  ];

  const experience = [
    {
      role: 'Full-Stack Software Developer',
      company: 'WecanGroup SA - Genève - CDI',
      period: '06/2022 - 12/2024',
      description: 'Led the development of the Wecan Connect app from scratch using React Native, delivering robust iOS and Android applications.',
    },
    {
      role: 'Full-Stack Software Developer',
      company: 'Thirdfort Limited - London - CDI',
      period: '09/2019 - 05/2022',
      description: 'Led the development of a native Android application, driving the migration from React Native to a native architecture. Implemented a datastore using Go. Debugged, tested and improved backend code in Node.js.',
    },
    {
      role: 'Mobile Applications / Web Developer',
      company: 'XIVIS - Buenos Aires - CDI',
      period: '2018 - 2020',
      description: 'Maintained and developed mobile applications using React Native and native Android technologies. Designed, developed and maintained web applications using React.js. Built decentralised applications (dApps) using the Truffle Suite.',
    },
    {
      role: 'Freelance Android Developer',
      company: 'EUROCASE - Buenos Aires - CDI',
      period: '2016 - 2018',
      description: 'Created native Android applications for kinesiologists and a learning game for kids.',
    },
    {
      role: 'Android Developer',
      company: 'CRAN.IO - Buenos Aires - CDI',
      period: '2015 - 2016',
      description: 'Developed Android applications for different companies.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer with 10+ years of experience building modern web and mobile applications. 
            I specialize in full-stack development and love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{skill.title}</h3>
              <p className="text-slate-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-white">Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="bg-slate-900/30 p-8 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;