
import React from 'react';
import { Code, Shield, Linkedin, Github, Mail, User } from 'lucide-react';

const Skills = () => {
  const developmentSkills = [
    'React','Flutter','TypeScript', 'Node.js', 'Python', 'JavaScript', 'C++',
    'MySQL', 'MongoDB', 'Docker', , 'AWS', 'Git', 'REST APIs', 'Bash'
  ];

  const securitySkills = [
    'Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'SIEM',
    'Incident Response', 'Malware Analysis', 'Cryptography', 'Compliance (SOC 2, ISO 27001)',
    'Security Auditing', 'Risk Assessment', 'Firewall Management', 'OWASP Top 10'
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
  I have a comprehensive skill set spanning software development and cybersecurity, which enables me to build secure applications from the ground up.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Development Skills */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-full border border-cyan-500/20 mr-4">
                <Code className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400">Software Development</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {developmentSkills.map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-slate-700/50 rounded-lg p-3 text-center border border-slate-600/50 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-sm font-medium text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Skills */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/20 mr-4">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-blue-400">Cybersecurity</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {securitySkills.map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-slate-700/50 rounded-lg p-3 text-center border border-slate-600/50 hover:border-blue-400/50 hover:bg-blue-500/5 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-sm font-medium text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-300 mb-8">Certifications & Education</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">CISSP</h4>
              <p className="text-gray-400">Certified Information Systems Security Professional</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">CEH</h4>
              <p className="text-gray-400">Certified Ethical Hacker</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">B.Tech Electronics and Communication</h4>
              <p className="text-gray-400">Focus on Netowrking and Communications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
