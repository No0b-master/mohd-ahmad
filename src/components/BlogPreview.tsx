
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const recentPosts = [
    {
      title: "Top 10 Secuirty Vulnerability in 2025",
      excerpt: "The internet never sleeps, and unfortunately, neither do hackers. As web apps grow more powerful and complex, so do the ways they can be attacked. Whether you’re running an e-commerce store, a startup dashboard, or a portfolio site, knowing where you’re vulnerable in 2025 is not optional it’s essential.",
      date: "2025-07-24",
      category: "Cybersecurity",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      url :"https://medium.com/@ahmadaug20/top-10-web-security-vulnerabilities-in-2025-b36d9d50e7e2"
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
    <section id="blog" className="py-20 bg-slate-800/30">
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
                
                <a 
                  href={post.url}
                  target='blank'
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
