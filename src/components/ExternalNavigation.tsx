import React, { useState } from "react";
import { Menu, X, Code, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ExternalNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/#skills" },
    { label: "Projects", to: "/#projects" },
    { label: "Contact", to: "/#contact" },
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
            <Link to={"/"}>
              <span className="text-lg font-bold text-slate-100">
                Mohd Ahmad
              </span>
            </Link>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-medium text-slate-300 hover:text-amber-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/blog"
              className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
            >
              Blog
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-amber-300"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-xl border border-slate-700/70 bg-slate-900/95 px-3 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-300"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/blog"
                className="mt-2 block rounded-lg bg-amber-400 px-4 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ExternalNavigation;
