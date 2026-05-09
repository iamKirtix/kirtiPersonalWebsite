import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const projects = [
  {
    title: 'Leave Management System',
    desc: 'Role-based leave tracking with automated workflows',
    tech: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
    link: 'https://github.com/kirti-sudha/LeaveManagementSystem',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Expense Flow',
    desc: 'Personal finance app with budget alerts and analytics',
    tech: ['React', 'Vite', 'JavaScript'],
    link: 'https://expensetrackr1.netlify.app/',
    gradient: 'from-emerald-600 to-teal-600'
  },
  {
    title: 'Cropwise',
    desc: 'AI-powered crop recommendation system',
    tech: ['Python', 'Flask', 'ML', 'REST API'],
    link: 'https://github.com/kirti-sudha/Cropwise',
    gradient: 'from-amber-600 to-orange-600'
  },
  {
    title: 'Groupify Tabs',
    desc: 'Chrome extension for smart tab organization',
    tech: ['JavaScript', 'Chrome API'],
    link: 'https://github.com/kirti-sudha/GroupifyTabs',
    gradient: 'from-pink-600 to-rose-600'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div></div>
          <div className="flex gap-8">
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a
              href="https://drive.google.com/file/d/1Y_dw79cMllW9P-4xD1JQp5VdDuo2D70r/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <FileText size={18} />
              Resume
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            Hey ! I am Kirti 
          </h1>
          <p className="text-2xl text-blue-400 font-semibold mb-6">
            Software Engineer
          </p>
          <p className="text-lg text-slate-300 mb-8">
            Building software with purpose.
          </p>
          <p className="text-lg text-slate-300 mb-8">
            Engineer | Builder | Problem solver
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/30 rounded-lg overflow-hidden border border-slate-600/50 hover:border-blue-400/50 transition group cursor-pointer hover:shadow-lg hover:shadow-blue-500/30"
              >
                <div className={`h-32 bg-gradient-to-br ${project.gradient} group-hover:opacity-80 transition`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-2 py-1 bg-slate-600/50 text-slate-200 text-xs rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Let's Connect</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kirtisudha25@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="https://linkedin.com/in/kirti-sudha-sahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/kirti-sudha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
}
