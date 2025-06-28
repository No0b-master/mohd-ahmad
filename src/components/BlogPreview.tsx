
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const recentPosts = [
    {
      title: "Implementing Zero Trust Architecture in Modern Applications",
      excerpt: "A comprehensive guide to building applications with Zero Trust principles, covering authentication, authorization, and continuous verification.",
      date: "2024-05-15",
      category: "Cybersecurity",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },
    {
      title: "Building Secure APIs with Node.js and Express",
      excerpt: "Best practices for developing secure RESTful APIs, including input validation, rate limiting, and proper error handling.",
      date: "2024-05-10",
      category: "Development",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "DevSecOps: Integrating Security into CI/CD Pipelines",
      excerpt: "How to seamlessly integrate security testing and compliance checks into your development workflow without slowing down delivery.",
      date: "2024-05-05",
      category: "DevSecOps",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Development':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'Cybersecurity':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'DevSecOps':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default:
        return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Latest from the Blog
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Insights, tutorials, and thoughts on software development, cybersecurity, 
            and the intersection of both fields.
          </p>
          <Link 
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 font-medium"
          >
            View All Posts
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <article 
              key={post.title}
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
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
