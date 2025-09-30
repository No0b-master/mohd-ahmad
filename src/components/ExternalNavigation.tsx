import React, { useState } from "react";
import { Menu, X, Code, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ExternalNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Code className="h-6 w-6 text-cyan-400" />
              <Shield className="h-6 w-6 text-cyan-400" />
            </div>
            <Link to={"/"}>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Mohd Ahmad
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to={"/"}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to={"/"}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Skills
              </Link>
              <Link
                to={"/"}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                to={"/"}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Recent Blogs
              </Link>
              <Link
                to={"/"}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Projects
              </button>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ExternalNavigation;
