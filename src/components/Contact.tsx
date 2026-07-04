import { useState } from 'react';
import { Github, Linkedin, Mail, PhoneCall, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent',
      description: 'Thank you for reaching out. I will get back to you shortly.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">Contact</p>
          <h2 className="section-heading mt-3">Let&apos;s Build Something Valuable for Your Business</h2>
          <p className="section-copy">
            If you need a reliable engineer to lead or support your next software initiative, I am available for freelance
            collaborations across web, mobile, backend architecture, and product implementation.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="space-y-6 border-r border-slate-800 pr-6">
            <div>
              <h3 className="text-lg font-bold text-slate-100">Project Fit</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Ideal for startups, product teams, and businesses that need hands-on support in designing, building,
                modernizing, or scaling software systems.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <PhoneCall className="h-4 w-4 text-amber-300" />
                <span>+971 503092584 | +91 9899880626</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-4 w-4 text-amber-300" />
                <span>ahmadaug20@gmail.com</span>
              </div>
              <a
                href="https://github.com/No0b-master"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-amber-300"
              >
                <Github className="h-4 w-4 text-amber-300" />
                <span>github.com/No0b-master</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-mohd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-amber-300"
              >
                <Linkedin className="h-4 w-4 text-amber-300" />
                <span>linkedin.com/in/ahmad-mohd</span>
              </a>
              <a
                href="https://x.com/N00b_Master88"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-amber-300"
              >
                <Twitter className="h-4 w-4 text-amber-300" />
                <span>x.com/N00b_Master88</span>
              </a>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Common Engagements</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li className="grid grid-cols-[10px_1fr] gap-2">
                  <span className="text-amber-300">-</span>
                  <span>End-to-end web and mobile product development</span>
                </li>
                <li className="grid grid-cols-[10px_1fr] gap-2">
                  <span className="text-amber-300">-</span>
                  <span>Backend architecture and API modernization</span>
                </li>
                <li className="grid grid-cols-[10px_1fr] gap-2">
                  <span className="text-amber-300">-</span>
                  <span>UI/UX implementation with production-ready frontend code</span>
                </li>
                <li className="grid grid-cols-[10px_1fr] gap-2">
                  <span className="text-amber-300">-</span>
                  <span>Technical support, updates, and platform improvements</span>
                </li>
              </ul>
            </div>
          </aside>

          <div className="border border-slate-800 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-600 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-600 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-900/80 px-4 py-3 text-slate-100 focus:border-amber-300 focus:outline-none"
                >
                  <option value="">Select project type</option>
                  <option value="development">Web Development Project</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="backend">Backend Architecture and APIs</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border border-slate-600 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none"
                  placeholder="Share your goals, timeline, and current challenges."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-slate-900 hover:bg-amber-300"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
