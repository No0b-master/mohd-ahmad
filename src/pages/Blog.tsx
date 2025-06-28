
import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Development', 'Cybersecurity', 'DevSecOps', 'Tutorials'];

  const blogPosts = [
    {
      title: "Implementing Zero Trust Architecture in Modern Applications",
      excerpt: "A comprehensive guide to building applications with Zero Trust principles, covering authentication, authorization, and continuous verification.",
      content: "Zero Trust Architecture represents a fundamental shift in how we approach cybersecurity...",
      date: "2024-05-15",
      category: "Cybersecurity",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      slug: "implementing-zero-trust-architecture-in-modern-applications"
    },
    {
      title: "Building Secure APIs with Node.js and Express",
      excerpt: "Best practices for developing secure RESTful APIs, including input validation, rate limiting, and proper error handling.",
      content: "When building APIs, security should be a primary concern from the very beginning...",
      date: "2024-05-10",
      category: "Development",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      slug: "building-secure-apis-with-nodejs-and-express"
    },
    {
      title: "DevSecOps: Integrating Security into CI/CD Pipelines",
      excerpt: "How to seamlessly integrate security testing and compliance checks into your development workflow without slowing down delivery.",
      content: "DevSecOps bridges the traditional gap between development, security, and operations teams...",
      date: "2024-05-05",
      category: "DevSecOps",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      slug: "devsecops-integrating-security-into-cicd-pipelines"
    },
    {
      title: "Understanding SQL Injection and Prevention Techniques",
      excerpt: "Deep dive into SQL injection attacks, how they work, and comprehensive prevention strategies for developers.",
      content: "SQL injection remains one of the most common and dangerous web application vulnerabilities...",
      date: "2024-04-28",
      category: "Cybersecurity",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      slug: "understanding-sql-injection-and-prevention-techniques"
    },
    {
      title: "React Security Best Practices for 2024",
      excerpt: "Essential security considerations for React developers, including XSS prevention, secure authentication, and dependency management.",
      content: "React applications face unique security challenges that developers must address proactively...",
      date: "2024-04-20",
      category: "Development",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      slug: "react-security-best-practices-for-2024"
    },
    {
      title: "Container Security: Docker and Kubernetes Hardening",
      excerpt: "Comprehensive guide to securing containerized applications, from image scanning to runtime protection.",
      content: "As containerization becomes ubiquitous, securing containers and orchestration platforms is crucial...",
      date: "2024-04-15",
      category: "DevSecOps",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      slug: "container-security-docker-and-kubernetes-hardening"
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Development':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'Cybersecurity':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'DevSecOps':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'Tutorials':
        return 'text-green-400 bg-green-500/10 border-green-500/20';
      default:
        return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Tech Blog
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights, tutorials, and deep dives into software development, cybersecurity, 
              and the evolving landscape of secure application development.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-400 border border-slate-700/50 hover:border-slate-600/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                    Read Full Article
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">No posts found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
