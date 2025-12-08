import React, { useState, useEffect } from 'react';
import { Code, Shield, Linkedin, Github, Mail, User } from 'lucide-react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const developmentSkills = [
    'React', 'Flutter', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'C++',
    'MySQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'REST APIs', 'Bash'
  ];

  const securitySkills = [
    'Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'SIEM',
    'Incident Response', 'Malware Analysis', 'Cryptography', 'Compliance (SOC 2, ISO 27001)',
    'Security Auditing', 'Risk Assessment', 'Firewall Management', 'OWASP Top 10'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills appearing one by one
          developmentSkills.concat(securitySkills).forEach((_, index) => {
            setTimeout(() => {
              setVisibleSkills(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Photo */}
        <div className="text-center mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
            {/* Photo Section */}
            <div className="relative group">
              {/* Animated Holographic Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-400/20 rounded-3xl animate-spin-slow"></div>
              
              {/* Main Photo Container */}
              <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-700/90 backdrop-blur-xl p-1 rounded-3xl border border-cyan-500/50 shadow-2xl shadow-cyan-500/20 transform group-hover:scale-105 transition-all duration-500">
                <div className="w-72 h-72 rounded-3xl overflow-hidden relative bg-gradient-to-br from-slate-800 to-slate-700">
                  {/* Working photo - replace src with your actual photo */}
                  <img 
                    src="/ahmad.jpg" 
                    alt="Mohammad Ahmad working on laptop - Software Developer & Cybersecurity Engineer"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
                  />
                  
                  {/* Tech overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-cyan-500/10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Matrix-style code overlay */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="absolute top-4 left-4 text-cyan-400 text-xs font-mono animate-pulse">
                      {'console.log("Building...");'}
                    </div>
                    <div className="absolute top-8 left-4 text-green-400 text-xs font-mono animate-pulse delay-1000">
                      {'npm run secure-deploy'}
                    </div>
                    <div className="absolute bottom-8 right-4 text-blue-400 text-xs font-mono animate-pulse delay-500">
                      {'> Security: Active'}
                    </div>
                  </div>
                  
                  {/* Glowing border animation */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-border"></div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 p-4 bg-gradient-to-r from-cyan-500/30 to-cyan-400/30 backdrop-blur-md rounded-2xl border border-cyan-400/50 shadow-2xl shadow-cyan-500/25 animate-float">
                <Code className="h-8 w-8 text-cyan-300" />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-gradient-to-r from-blue-500/30 to-blue-400/30 backdrop-blur-md rounded-2xl border border-blue-400/50 shadow-2xl shadow-blue-500/25 animate-float-reverse">
                <Shield className="h-8 w-8 text-blue-300" />
              </div>
              
              {/* Additional floating particles */}
              <div className="absolute top-1/4 -left-8 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute bottom-1/3 -right-8 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000 opacity-75"></div>
              <div className="absolute top-3/4 -right-4 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-500 opacity-60"></div>
              
              {/* Scanning line effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-left lg:max-w-2xl">
              <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  Technical Expertise
                </span>
              </h2>
              <p className={`text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                With a <span className="text-cyan-400 font-semibold">comprehensive skill set</span> spanning both 
                software development and cybersecurity, I build <span className="text-blue-400 font-semibold">secure, 
                scalable applications</span> from the ground up. My dual expertise allows me to anticipate 
                security challenges during development and create robust digital solutions.
              </p>
              
              
              {/* Stats */}
              <div className="flex gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">4+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">15+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">10+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline Section */}
          <div className="mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Professional Journey
              </span>
            </h2>

            <div className="max-w-5xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Experience Item 1 */}
                <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-cyan-400 mb-2">Senior Software Developer & Security Engineer</h3>
                        <p className="text-gray-400 mb-3">Taleef Technologies - <i>Dubai, UAE</i></p>
                        <p className="text-sm text-gray-500 mb-3">2023 - Present</p>
                        <p className="text-gray-300 text-sm">Led development of secure enterprise applications, implemented security protocols, and conducted penetration testing to ensure robust system security.</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-500/50 z-10 animate-pulse"></div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>
                </div>

                {/* Experience Item 2 */}
                <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:pr-12"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50 z-10 animate-pulse"></div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-blue-400 mb-2">Full Stack Developer and Devops Engineer</h3>
                        <p className="text-gray-400 mb-3">Escorts Kubota Limited <i>Faridabad, India</i></p>
                        <p className="text-sm text-gray-500 mb-3">Apr 2024 - Nov 2025</p>
                        <p className="text-gray-300 text-sm">Developed responsive web applications using React and Node.js,optimized database performance, Deployed application using Docker and Kubertes and collaborated with cross-functional teams.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Item 3 */}
                <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '1s' }}>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-purple-400 mb-2">Junior Mobile App and Web Developer</h3>
                        <p className="text-gray-400 mb-3">Leanports Software Solution GmBH <i>Berlin, Germany (remote)</i></p>
                        <p className="text-sm text-gray-500 mb-3">Mar 2021 - Mar 2024</p>
                        <p className="text-gray-300 text-sm">Assisted in building mobile applications with Flutter & React Native, along with Building API with Node.js and Express.js and testing API via mocha   </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50 z-10 animate-pulse"></div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>
                </div>

                {/* Starting Point */}
                <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
                  <div className="flex flex-col items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-gray-500 to-gray-400 rounded-full border-4 border-slate-900 shadow-lg z-10"></div>
                    <div className="mt-12 text-center">
                      <p className="text-gray-400 text-sm">Started Journey in Tech</p>
                      <p className="text-gray-500 text-xs">2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Development Skills */}
          <div className={`bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 rounded-2xl border border-cyan-500/30 mr-4 shadow-lg">
                <Code className="h-8 w-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">Software Development</h3>
                <p className="text-gray-400 text-sm">Full-stack development expertise</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {developmentSkills.map((skill, index) => (
                <div 
                  key={skill}
                  className={`bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-600/50 hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-cyan-400/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/20 ${visibleSkills.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <span className="text-sm font-medium text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Skills */}
          <div className={`bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-2xl border border-blue-500/30 mr-4 shadow-lg">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Cybersecurity</h3>
                <p className="text-gray-400 text-sm">Advanced security & penetration testing</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {securitySkills.map((skill, index) => (
                <div 
                  key={skill}
                  className={`bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-600/50 hover:border-blue-400/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-400/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20 ${visibleSkills.includes(developmentSkills.length + index) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${(developmentSkills.length + index) * 0.1}s` }}
                >
                  <span className="text-sm font-medium text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
        
        @keyframes scan {
          0% {
            top: 0%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        
        @keyframes gradient-border {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        
        .animate-gradient-border {
          animation: gradient-border 2s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;