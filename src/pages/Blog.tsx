import { useState } from 'react';
import ExternalNavigation from '@/components/ExternalNavigation';

const categories = ['All', 'Development', 'Cybersecurity', 'DevSecOps', 'Architecture'];

const blogPosts = [
  {
    title: 'Top 10 Web Security Vulnerabilities in 2025',
    excerpt:
      'A practical guide to today\'s most impactful vulnerabilities in production web systems and how engineering teams can reduce risk early.',
    date: '2025-07-24',
    category: 'Cybersecurity',
    readTime: '3 min read',
    slug: 'top-10-web-security-vulnerabilities-2025',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=720&fit=crop',
    url: 'https://medium.com/@ahmadaug20/top-10-web-security-vulnerabilities-in-2025-b36d9d50e7e2',
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <ExternalNavigation />

      <main className="pt-24 pb-16">
        <section className="section-shell">
          <header className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">Blog</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-100 md:text-5xl">
              Software Engineering Insights for Product Teams and Founders
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
              Articles covering secure development, architecture decisions, and implementation strategies for
              web and mobile products.
            </p>
          </header>

          <div className="mt-8 flex flex-wrap gap-5 border-b border-slate-800 pb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`border-b pb-1 text-sm font-semibold ${
                  selectedCategory === category
                    ? 'border-amber-300 text-amber-200'
                    : 'border-transparent text-slate-300 hover:border-amber-300 hover:text-amber-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <section className="mt-8 divide-y divide-slate-800 border-y border-slate-800">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="grid gap-6 py-8 md:grid-cols-[260px_1fr]">
                <img src={post.image} alt={post.title} className="h-40 w-full border border-slate-800 object-cover md:h-32" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">{post.category}</p>
                  <h2 className="mt-2 text-lg font-bold text-slate-100">{post.title}</h2>
                  <p className="mt-2 text-sm text-slate-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}{' '}
                    | {post.readTime}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
                  <button
                    className="mt-4 inline-flex border-b border-amber-300 pb-1 text-sm font-semibold text-amber-300 hover:text-amber-200"
                    onClick={() => window.open(post.url, '_blank')}
                  >
                    Read Full Article
                  </button>
                </div>
              </article>
            ))}
          </section>

          {filteredPosts.length === 0 && (
            <div className="mt-8 border border-slate-800 p-8 text-center">
              <p className="text-base text-slate-300">No posts found in this category.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Blog;
