import React, { useState, useEffect } from 'react';
import { Code, Shield, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  const texts = [
    'Software Developer',
    'Cybersecurity Engineer',
    'Full Stack Developer',
    'Security Analyst',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        setTypeSpeed(75);
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typeSpeed, texts]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          <source
            src="/IMG_0036.mov"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/90"></div>
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Floating Icons */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="p-4 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 animate-float">
              <Code className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="p-4 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-2xl shadow-blue-500/20 animate-float-delay">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          {/* Main Title with Typing Effect */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                {currentText}
                <span className="animate-blink text-cyan-400">|</span>
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 font-normal opacity-90">
              Building Tomorrow's Digital Solutions
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-2xl">
            Crafting secure, scalable applications while protecting digital
            infrastructures. Bridging the gap between development and security
            with a passion for <span className="text-cyan-400 font-semibold">innovation</span> and 
            <span className="text-blue-400 font-semibold"> excellence</span>.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/No0b-master"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-600/50 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 group shadow-2xl hover:shadow-cyan-500/25 hover:scale-110"
            >
              <Github className="h-6 w-6 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
            <a
              href="http://linkedin.com/in/ahmad-mohd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-600/50 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300 group shadow-2xl hover:shadow-blue-500/25 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="mailto:ahmadaug20@gmail.com"
              className="p-4 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-600/50 hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 group shadow-2xl hover:shadow-purple-500/25 hover:scale-110"
            >
              <Mail className="h-6 w-6 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/30 border border-cyan-500/50 backdrop-blur-sm"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-cyan-400/80 rounded-xl font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 shadow-2xl hover:shadow-cyan-500/30"
            >
              Get In Touch
            </button>
            <a
              href="/mohammad_ahmad_resume.pdf"
              target="blank"
              download="mohammad_ahmad_resume.pdf"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/30 border border-purple-500/50 backdrop-blur-sm">
                Download Resume
              </button>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};


export default Hero;
