
import React, { useState } from 'react';
import { Menu, X, Code, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Services', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Insights', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700/70 bg-slate-950/92 backdrop-blur-md">
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-amber-300">
              <Code className="h-5 w-5" />
              <Shield className="h-5 w-5" />
            </div>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left"
              aria-label="Go to top of portfolio"
            >
              <span className="text-lg font-bold text-slate-100">Mohd Ahmad</span>
              <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">Freelance Software Engineer</span>
            </button>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <div className="ml-6 flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-slate-300 hover:text-amber-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Link
              to="/blog"
              className="rounded-lg border border-slate-600 px-3 py-2 text-sm font-semibold text-slate-200 hover:border-amber-300 hover:text-amber-300"
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
            >
              Start A Project
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-amber-300"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-xl border border-slate-700/70 bg-slate-900/95 px-3 py-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-300"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/blog"
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-300"
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-2 w-full rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Start A Project
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
