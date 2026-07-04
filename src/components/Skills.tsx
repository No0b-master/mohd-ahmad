import { BriefcaseBusiness, Database, Layers, Smartphone, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Web Application Engineering',
    description:
      'Custom web platforms with modern frontend architecture, clean UX implementation, and business-oriented workflows.',
    icon: Layers,
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps built with Flutter and React Native for high performance, strong usability, and smooth release cycles.',
    icon: Smartphone,
  },
  {
    title: 'Backend Architecture',
    description:
      'Scalable APIs and backend systems using Node.js, Spring Boot, and Python with maintainable design and robust error handling.',
    icon: Database,
  },
  {
    title: 'System Design and Product Delivery',
    description:
      'End-to-end engineering support from planning and architecture to release, iteration, and long-term platform stability.',
    icon: Workflow,
  },
];

const experience = [
  {
    company: 'Royal Development for Gas Works L.L.C',
    role: 'Software Engineer',
    duration: 'February 2026 - Present',
    points: [
      'Responsible for managing, maintaining, and improving the company software systems and mobile applications.',
      'Working on web and mobile application development to support business operations.',
      'Handling software updates, backend improvements, UI enhancements, and technical support.',
      'Contributing to reliable, scalable, and user-friendly digital solutions for the company.',
    ],
  },
  {
    company: 'Escorts Kubota Limited',
    role: 'Full Stack Developer and DevOps Engineer',
    duration: 'April 2024 - November 2025',
    points: [
      'Developed and maintained web solutions for business operations with React and Node.js.',
      'Improved platform reliability and deployment workflows using Docker-based infrastructure.',
      'Collaborated with cross-functional teams to deliver secure and maintainable digital products.',
    ],
  },
  {
    company: 'Leanports Software Solution GmbH',
    role: 'Junior Mobile and Web Developer',
    duration: 'March 2021 - March 2024',
    points: [
      'Built mobile and web experiences with Flutter, React Native, Node.js, and Express.',
      'Contributed to API development, quality testing, and iterative product improvements.',
      'Supported delivery of production features for international clients in a remote team setup.',
    ],
  },
];

const stackGroups = [
  {
    title: 'Frontend and Mobile',
    items: ['Flutter', 'React', 'React Native', 'Angular', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Backend and APIs',
    items: ['Node.js', 'Java', 'Spring Boot', 'Python', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Databases and Infrastructure',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'CI/CD'],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden border-b border-slate-800/90 py-20 md:py-24"
    >
      <img
        src="/startup.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/70" />
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">Services and Expertise</p>
          <h2 className="section-heading mt-3">End-to-End Software Development for Serious Product Teams</h2>
          <p className="section-copy">
            I work with founders and organizations that need a dependable engineering partner for product design,
            application development, architecture decisions, and long-term technical execution.
          </p>
        </div>

        <div className="mt-10 grid gap-0 border-y border-slate-800 md:grid-cols-2 md:divide-x md:divide-slate-800">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="border-b border-slate-800 p-6 md:border-b-0 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="border border-amber-300/35 p-2.5 text-amber-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <BriefcaseBusiness className="h-5 w-5 text-amber-300" />
            <h3 className="text-2xl font-bold text-slate-100">Professional Experience</h3>
          </div>
          <div className="divide-y divide-slate-800 border-y border-slate-800">
            {experience.map((item) => (
              <article key={item.company} className="py-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-lg font-bold text-slate-100">{item.role}</h4>
                  <p className="text-sm font-medium text-amber-300">{item.duration}</p>
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-300">{item.company}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-400">
                  {item.points.map((point) => (
                    <li key={point} className="grid grid-cols-[10px_1fr] gap-2">
                      <span className="text-amber-300">-</span>
                      <span className="block">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-100">Technology Stack</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
            Practical, production-focused tools I use to deliver maintainable products, strong developer velocity,
            and reliable system behavior.
          </p>
          <div className="mt-6 grid gap-0 border-y border-slate-800 md:grid-cols-3 md:divide-x md:divide-slate-800">
            {stackGroups.map((group) => (
              <article key={group.title} className="border-b border-slate-800 p-6 md:border-b-0 md:p-8">
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">{group.title}</h4>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{group.items.join(', ')}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
