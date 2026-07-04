import { useState } from 'react';
import { Code, Github, LayoutGrid, List, Shield } from 'lucide-react';
import { toast } from 'sonner';

type ProjectCategory = 'Web and Backend' | 'Mobile Apps' | 'Security Engineering';

type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  image: string;
  demo: string;
  github: string;
};

const projects: ProjectItem[] = [
  {
    title: 'SBF India',
    description:
      'A disaster-relief volunteer management application enabling registration, digital ID generation, and coordinated operational response workflows.',
    tech: ['Flutter', 'Node.js', 'MySQL', 'Firebase', 'AWS'],
    category: 'Mobile Apps',
    image: '/sbf_logo.png',
    demo: 'https://play.google.com/store/apps/details?id=com.mobile.sbf&hl=en_IN',
    github: '#',
  },
    {
    title: 'Rapid Fire Assault',
    description:
      'A high-load request simulation tool used for stress-testing endpoint behavior and request handling in API security exercises.',
    tech: ['React', 'Vite', 'REST API', 'Security Testing'],
    category: 'Security Engineering',
    image: '/ddos.jpeg',
    demo: 'https://ddosattacker.vercel.app/',
    github: 'https://github.com/No0b-master/DDoS_attacker',
  },
  {
    title: 'Ekonnect Mobile Application',
    description:
      'Comprehensive employee portal built with Flutter to centralize HR workflows, IT support, attendance, ESS, and service operations.',
    tech: ['Flutter', 'Android', 'iOS', 'Firebase', 'REST APIs', 'Push Notifications'],
    image:
      'https://play-lh.googleusercontent.com/gIeQAJ3tVB9q4rLrK95gI_maNhfDHWhCwWg9C1yAD7oxYeVo2LuWabdwCWrGyItKVLhMBhgdz5NhbRc507c_-1s=w240-h480-rw',
    demo: 'https://play.google.com/store/apps/details?id=com.ekl.ekonnect',
    category: 'Mobile Apps',
    github: '#',
  },
    {
    title: 'Cyber Probe',
    description:
      'A VAPT security platform for web applications, delivering structured findings based on OWASP principles through a React and FastAPI stack.',
    tech: ['React', 'FastAPI', 'Python', 'VAPT'],
    category: 'Security Engineering',
    image: '/vapt.jpg',
    demo: 'https://cyberprobe.welkdock.com',
    github: '#',
  },
  
  {
    title: 'SERV GENIE | AI Chatbot',
    description:
      'Cross-platform AI chatbot interface using Flutter and React to support tractor-service users with contextual answers and guided assistance.',
    tech: ['Flutter', 'React', 'AI Integration', 'REST APIs'],
    image: '/serv_genie.webp',
    demo: 'https://play.google.com/store/apps/details?id=com.ekl.servgenie&hl=en',
    category: 'Mobile Apps',
    github: '#',
  },

  {
    title: 'Advance ListView',
    description:
      'A reusable Flutter package with pagination, search support, and robust error handling to accelerate production-grade list experiences.',
    tech: ['Flutter', 'Dart', 'Pub.dev', 'UI Components'],
    category: 'Mobile Apps',
    image: '/pub_dev.png',
    demo: 'https://pub.dev/packages/advance_listview',
    github: 'https://github.com/No0b-master/advance_listview',
  },
  {
    title: 'Ncryptor',
    description:
      'A JavaScript package for advanced password hashing and hash comparison with practical API ergonomics for secure implementation.',
    tech: ['Cybersecurity', 'Hashing', 'SHA-3', 'JavaScript'],
    category: 'Security Engineering',
    image: '/ncryptor.webp',
    demo: 'https://www.npmjs.com/package/ncryptor',
    github: 'https://github.com/No0b-master/Ncryptor',
  },
  {
    title: 'TellMe Live',
    description:
      'A social event platform with real-time interaction, QR ticketing, and private/public event workflows for community-driven engagement.',
    tech: ['Flutter', 'Node.js', 'Socket.IO', 'PostgreSQL', 'Firebase'],
    category: 'Mobile Apps',
    image: '/tellmelive.webp',
    demo: 'https://play.google.com/store/apps/details?id=com.tml.miumiu&hl=en_IN',
    github: '#',
  },
 

  {
    title: 'EKL Trip Tracker',
    description:
      'A real-time travel-distance tracking platform for internal enterprise reimbursement workflows and operational reporting.',
    tech: ['Flutter', 'Node.js', 'Redis', 'JWT', 'Google Maps APIs'],
    category: 'Mobile Apps',
    image: '/trip_tracker.png',
    demo: 'https://play.google.com/store/apps/details?id=com.escortskubota.ekl_trip_tracker&hl=en_IN&pli=1',
    github: '#',
  },
];

const getCategoryIcon = (category: ProjectCategory) => {
  if (category === 'Security Engineering') {
    return <Shield className="h-3.5 w-3.5" />;
  }
  return <Code className="h-3.5 w-3.5" />;
};

const Projects = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <section id="projects" className="relative isolate overflow-hidden border-b border-slate-800/90 py-20 md:py-24">
      <img src="/app.jpg" alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-slate-950/70" />

      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">Selected Work</p>
            <h2 className="section-heading mt-3">Case Studies Built for Real Product and Business Outcomes</h2>
            <p className="section-copy">
              A portfolio of delivered products across mobile apps, backend-driven systems, and security-focused engineering.
              Each engagement emphasizes reliability, usability, and practical value to the end client.
            </p>
          </div>

          <div className="inline-flex items-center border border-slate-700 bg-slate-950/70 p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] ${
                viewMode === 'list' ? 'bg-amber-300 text-slate-950' : 'text-slate-300 hover:text-amber-300'
              }`}
              aria-label="Switch to list view"
            >
              <List className="h-3.5 w-3.5" />
              List
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] ${
                viewMode === 'grid' ? 'bg-amber-300 text-slate-950' : 'text-slate-300 hover:text-amber-300'
              }`}
              aria-label="Switch to grid view"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              Grid
            </button>
          </div>
        </div>

        <div
          className={`mt-10 ${
            viewMode === 'list'
              ? 'divide-y divide-slate-800 border-y border-slate-800'
              : 'grid gap-6 md:grid-cols-2 xl:grid-cols-3'
          }`}
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className={
                viewMode === 'list'
                  ? 'grid gap-6 py-8 md:grid-cols-[220px_1fr] md:items-start'
                  : 'border border-slate-800 bg-slate-950/55'
              }
            >
              <img
                src={project.image}
                alt={project.title}
                className={
                  viewMode === 'list'
                    ? 'aspect-square w-full border border-slate-800 object-cover'
                    : 'aspect-square w-full border-b border-slate-800 object-cover'
                }
              />

              <div className={viewMode === 'list' ? 'flex flex-1 flex-col' : 'p-5'}>
                <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                  <span className="inline-flex items-center gap-1 text-amber-300">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                  <span className="text-slate-600">/</span>
                  <span>{project.tech.length} Technologies</span>
                </div>

                <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">{project.description}</p>
                <p className="mt-3 text-sm text-slate-500">Tech stack: {project.tech.join(', ')}</p>

                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-amber-300 pb-1 font-semibold text-amber-300 hover:text-amber-200"
                  >
                    Live Demo
                  </a>
                  <button
                    onClick={() => {
                      if (project.github === '#') {
                        toast('Access Restricted', {
                          description: 'This repository is private for client or internal reasons.',
                        });
                        return;
                      }

                      window.open(project.github, '_blank');
                    }}
                    className="inline-flex items-center gap-2 border-b border-slate-600 pb-1 text-slate-300 hover:border-amber-300 hover:text-amber-300"
                    aria-label={`Open repository for ${project.title}`}
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
