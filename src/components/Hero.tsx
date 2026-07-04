import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const expertiseItems = [
  'Mobile App Developer',
  'Full Stack Application Engineer',
  'Product Design',
  'Software Development',
  'Backend Systems',
  'UI and UX Engineering',
];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentExpertiseIndex, setCurrentExpertiseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentExpertise = expertiseItems[currentExpertiseIndex];
    const typingSpeed = isDeleting ? 50 : 90;

    if (!isDeleting && typedText === currentExpertise) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentExpertiseIndex((prev) => (prev + 1) % expertiseItems.length);
        return;
      }

      const nextText = isDeleting
        ? currentExpertise.slice(0, typedText.length - 1)
        : currentExpertise.slice(0, typedText.length + 1);

      setTypedText(nextText);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentExpertiseIndex]);

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-slate-800/90 pb-20 pt-28 md:pt-32"
    >
      <img
        src="/laptop.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/58" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(251,191,36,0.14),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.1),transparent_45%)]" />

      <div className="section-shell grid items-start gap-12 lg:grid-cols-[1.25fr_0.9fr]">
        <div>
          <p className="inline-flex items-center border-l-2 border-amber-300 pl-3 text-sm font-semibold uppercase tracking-[0.12em] text-amber-200">
            Available for freelance projects
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-slate-100 md:text-5xl lg:text-6xl">
            Freelance Software Engineer for Web, Mobile, and Scalable Backend Systems
          </h1>

          <p className="mt-5 min-h-[1.75rem] text-lg font-semibold text-amber-300 md:min-h-[2rem] md:text-xl">
            {typedText}
            <span className="ml-0.5 text-amber-300 animate-pulse">|</span>
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            I help companies design, build, and scale digital products end-to-end. With 5+ years of hands-on experience,
            I deliver production-ready web platforms, mobile applications, and robust backend architecture with a strong
            focus on reliability, performance, and maintainable code.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <p className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-300" />
              Product-focused engineering from idea to launch
            </p>
            <p className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-300" />
              Web, mobile, API, and architecture expertise
            </p>
            <p className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-300" />
              Clean, user-friendly UI and scalable systems
            </p>
            <p className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-300" />
              Clear communication and dependable delivery
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 text-sm font-bold text-slate-900 hover:bg-amber-300"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-amber-300 hover:text-amber-300"
            >
              View Case Studies
            </button>
            <a
              href="/mohammad_ahmad_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="mohammad_ahmad_resume.pdf"
              className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-amber-300 hover:text-amber-300"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://github.com/No0b-master"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 hover:border-amber-300 hover:text-amber-300"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="http://linkedin.com/in/ahmad-mohd"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 hover:border-amber-300 hover:text-amber-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/N00b_Master88"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 hover:border-amber-300 hover:text-amber-300"
              aria-label="X profile"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:ahmadaug20@gmail.com"
              className="rounded-lg border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 hover:border-amber-300 hover:text-amber-300"
              aria-label="Send email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <aside className="space-y-6 border-l border-slate-800 pl-6 lg:mt-4">
          <h2 className="text-xl font-bold text-slate-100">What Clients Hire Me For</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="border-b border-slate-800 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Experience</p>
              <p className="mt-2 text-3xl font-extrabold text-amber-300">5+ Years</p>
              <p className="mt-1 text-sm text-slate-400">Professional software engineering across web and mobile products</p>
            </div>
            <div className="border-b border-slate-800 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Delivery Scope</p>
              <p className="mt-2 text-3xl font-extrabold text-amber-300">End-to-End</p>
              <p className="mt-1 text-sm text-slate-400">Frontend, backend, mobile, architecture, testing, and deployment</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-200">Primary Tech Stack</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Flutter, React, React Native, Angular, Java, Spring Boot, Node.js, Python, PostgreSQL, MySQL, Docker,
              and cloud-ready backend services.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
