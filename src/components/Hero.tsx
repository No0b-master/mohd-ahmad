import React from "react";
import { Code, Shield, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="p-3 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              <Code className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/20">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Software Developer
            </span>
            <br />
            <span className="text-2xl md:text-4xl text-gray-300 font-normal">
              & Cybersecurity Engineer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building secure, scalable applications while protecting digital
            infrastructures. Bridging the gap between development and security
            with a passion for invention and innovation.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/No0b-master"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
            >
              <Github className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
            <a
              href="http://linkedin.com/in/ahmad-mohd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="mailto:ahmadaug20@gmail.com"
              className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <a
              href="/mohammad_ahmad_resume.pdf"
              target="blank"
              download="mohammad_ahmad_resume.pdf"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Download My Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
