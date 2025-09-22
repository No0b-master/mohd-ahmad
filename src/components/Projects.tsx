
import { Code, Shield, Github } from 'lucide-react';
import { toast } from 'sonner';

const Projects = () => {
  const projects = [
    {
      title: "SBF India",
      description: "The Society for Bright Future mobile app lets anyone register as a disaster‑relief volunteer, submit their details, download official ID cards, and stay connected. It provides seamless management of volunteers enabling SBF to assign tasks, track participation, and coordinate emergency response efficiently",
      tech: ["Flutter", "Node.js", "MySQL", "Firebase", "AWS"],
      category: "development",
      image: "/sbf_logo.png",
      demo: "https://play.google.com/store/apps/details?id=com.mobile.sbf&hl=en_IN",
      github: "#"
    },
       {
      title: "Cyber Probe",
      description: "Cyber Probe is a VAPT Security Scanner which is a fullstack vulnerability assessment and penetration testing tool designed to analyze and report critical security issues in web applications. Built using React (frontend) and FastAPI (backend), it performs real-time scanning of target URLs and delivers structured results based on widely recognized OWASP and cybersecurity standards.",
      tech: ["React", "FastAPI", "Python","VAPT",],
      category: "security",
      image: "/vapt.jpg",
      demo: "https://cyberprobe.welkdock.com",
      github: "#"
    },
    {
      title: "Tellme Live",
      description: "TellMeLive is a social event app that helps you connect with people through shared interests. Easily create or join public and private events—from workouts to meetups. Enjoy secure access with QR-code tickets and real-time updates. Perfect for friends, families, and communities to build lasting memories .",
      tech: ["Flutter", "Nodejs", "Socket.IO", "PostgresSQL", "Firebase", "PHP"],
      category: "developemnt",
      image: "/tellmelive.webp",
      demo: "https://play.google.com/store/apps/details?id=com.tml.miumiu&hl=en_IN",
      github: "#"
    },
    {
      title: "Flutter Docs",
      description: "Open Source contribution for official Flutter Docs repository",
      tech: ["Flutter", "GitHub"],
      category: "devlopment",
      image: "/flutter_docs.png",
      demo: "https://docs.flutter.dev/",
      github: "https://github.com/flutter/website/pull/9490"
    },
    {
      title: "Rapid Fire Assault",
      description: "A DDoS attacking tool which send a large number of request to a particular url in order to test it's request handling , Used for testing API's against hackers (Brute force)",
      tech: ["React", "Vite", "DDoS", "REST API", "Tailwind"],
      category: "security",
      image: "/ddos.jpeg",
      demo: "https://ddosattacker.vercel.app/",
      github: "https://github.com/No0b-master/DDoS_attacker"
    },
    {
      title: "EKL Trip Tracker",
      description: "A Real time distance tracking tool for Escorts Kubota Limited internal employees for their travel claim reimbursement and management.",
      tech: ["Flutter","Node.js", "Redis", "JWT", "Rate Limiting", "Background Process","Google Maps API and Services"],
      category: "development",
      image: "/trip_tracker.png",
      demo: "https://play.google.com/store/apps/details?id=com.escortskubota.ekl_trip_tracker&hl=en_IN&pli=1",
      github: "#"
    }
 
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'development':
        return <Code className="h-5 w-5" />;
      case 'security':
        return <Shield className="h-5 w-5" />;
      case 'devsecops':
        return (
          <div className="flex">
            <Code className="h-4 w-4" />
            <Shield className="h-4 w-4 -ml-1" />
          </div>
        );
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'development':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'security':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'devsecops':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default:
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my work spanning secure application development, 
            cybersecurity tools, and DevSecOps implementations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    <span className="ml-1 capitalize">{project.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.demo}
                    className="flex-1 text-center py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                  <p onClick={()=>{
                    if(project.github=="#"){
                      toast("Access Denied", {
                        description : 'The Following repository is private'
                      })
                    }
                    else{
                      window.open(project.github, "_blank")
                    }
                  }}
               
                    className="flex items-center justify-center p-2 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-gray-500 hover:bg-slate-700 transition-all duration-300"
                  >
                    <Github className="h-4 w-4 text-gray-400 hover:text-white transition-colors duration-300" />
                  </p>
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
