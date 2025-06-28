
import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <BlogPreview />
      <Contact />
    </div>
  );
};

export default Index;
