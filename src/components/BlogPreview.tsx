import { Link } from 'react-router-dom';

const recentPosts = [
  {
    title: 'Top 10 Web Security Vulnerabilities in 2025',
    excerpt:
      'A practical breakdown of the most critical vulnerabilities affecting modern web applications, with implementation-focused guidance for engineering teams.',
    date: '2025-07-24',
    category: 'Cybersecurity',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=680&fit=crop',
    url: 'https://medium.com/@ahmadaug20/top-10-web-security-vulnerabilities-in-2025-b36d9d50e7e2',
  },
];

const BlogPreview = () => {
  const featuredPost = recentPosts[0];

  return (
    <section id="blog" className="border-b border-slate-800/90 py-20 md:py-24">
      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">Technical Insights</p>
            <h2 className="section-heading mt-3">Engineering Articles on Product Development and Application Security</h2>
            <p className="section-copy">
              Practical writing on software architecture, secure development practices, and implementation lessons from
              real-world projects.
            </p>
          </div>
          <Link
            to="/blog"
            className="border-b border-slate-600 pb-1 text-sm font-semibold text-slate-200 hover:border-amber-300 hover:text-amber-300"
          >
            View All Articles
          </Link>
        </div>

        <article className="mt-8 overflow-hidden border border-slate-800 md:grid md:grid-cols-[1.1fr_1fr]">
          <img src={featuredPost.image} alt={featuredPost.title} className="h-64 w-full object-cover md:h-full" />

          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">{featuredPost.category}</p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-100">{featuredPost.title}</h3>
            <p className="mt-3 text-sm text-slate-400">
              {new Date(featuredPost.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              | {featuredPost.readTime}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{featuredPost.excerpt}</p>
            <a
              href={featuredPost.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex border-b border-amber-300 pb-1 text-sm font-semibold text-amber-300 hover:text-amber-200"
            >
              Read Article
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogPreview;
