
import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <BlogPreview />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
