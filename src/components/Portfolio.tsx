"use client";

import { useState, useEffect, useRef } from 'react';
import { Terminal, Github, Linkedin, Mail, Download, Server, Code, Database, Cloud, Monitor, ChevronRight, ExternalLink, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: 'Welcome to my portfolio terminal. Type "help" for available commands.' }
  ]);
  const [isDark, setIsDark] = useState(true);
  const [emailForm, setEmailForm] = useState({ name: '', email: '', message: '' });
  const [emailStatus, setEmailStatus] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    // terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const skills = {
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Terraform', 'Ansible'],
    cloud: ['AWS', 'Azure', 'GCP', 'DigitalOcean'],
    linux: ['Ubuntu', 'CentOS', 'Arch Linux', 'Shell Scripting', 'System Administration'],
    monitoring: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
    languages: ['Python', 'Bash', 'JavaScript', 'Go', 'YAML']
  };

  const projects = [
    {
      title: 'Kubernetes Auto-Scaler',
      desc: 'Custom HPA implementation with predictive scaling based on historical metrics',
      tech: ['K8s', 'Python', 'Prometheus'],
      link: '#'
    },
    {
      title: 'Infrastructure as Code Pipeline',
      desc: 'Automated multi-cloud deployment using Terraform with GitOps workflow',
      tech: ['Terraform', 'GitLab CI', 'AWS', 'Azure'],
      link: '#'
    },
    {
      title: 'Monitoring Dashboard',
      desc: 'Real-time infrastructure monitoring with custom alerting rules',
      tech: ['Grafana', 'Prometheus', 'Docker'],
      link: '#'
    }
  ];

  const commands = {
    help: () => 'Available commands: about, skills, projects, contact, clear, resume, theme',
    about: () => 'DevOps Engineer passionate about automation, cloud infrastructure, and Linux systems. Building scalable and reliable solutions.',
    skills: () => Object.entries(skills).map(([cat, items]) => `${cat.toUpperCase()}: ${items.join(', ')}`).join('\n'),
    projects: () => projects.map((p, i) => `${i + 1}. ${p.title}\n   ${p.desc}\n   Tech: ${p.tech.join(', ')}`).join('\n\n'),
    contact: () => 'Email: your.email@example.com\nGitHub: github.com/yourusername\nLinkedIn: linkedin.com/in/yourusername',
    clear: () => 'CLEAR',
    resume: () => 'Opening resume download...',
    theme: () => 'Theme toggled!'
  };

  const handleTerminalSubmit = (e: any) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.toLowerCase().trim();
    const newHistory = [...terminalHistory, { type: 'input', text: `$ ${terminalInput}` }];

    if (cmd === 'clear') {
      setTerminalHistory([]);
    } else if (cmd === 'theme') {
      setIsDark(!isDark);
      newHistory.push({ type: 'output', text: commands.theme() });
      setTerminalHistory(newHistory);
    } else if (cmd === 'resume') {
      downloadResume();
      newHistory.push({ type: 'output', text: commands.resume() });
      setTerminalHistory(newHistory);
    }
    else if (cmd in commands) {
      newHistory.push({ type: 'output', text: commands[cmd as keyof typeof commands]() });
      setTerminalHistory(newHistory);
    }
    else {
      newHistory.push({ type: 'error', text: `Command not found: ${cmd}. Type "help" for available commands.` });
      setTerminalHistory(newHistory);
    }

    setTerminalInput('');
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = isDark ? '/resume-dark.pdf' : '/resume-light.pdf';
    link.download = `resume-${isDark ? 'dark' : 'light'}.pdf`;
    link.click();
  };

  const handleEmailSubmit = async () => {
    setEmailStatus('sending');

    // EmailJS integration here - replace with your actual service
    // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailForm, 'YOUR_PUBLIC_KEY');

    setTimeout(() => {
      setEmailStatus('success');
      setEmailForm({ name: '', email: '', message: '' });
      setTimeout(() => setEmailStatus(''), 3000);
    }, 1000);
  };

  const bgColor = isDark ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const accentColor = isDark ? 'text-blue-400' : 'text-blue-600';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-300';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300`}>
      {/* Header */}
      <header className={`border-b ${borderColor} sticky top-0 ${cardBg} backdrop-blur-sm bg-opacity-90 z-50`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Terminal className={accentColor} size={24} />
              <span className="font-mono font-bold text-xl">root@portfolio:~#</span>
            </div>
            <nav className="flex gap-6 items-center">
              <button onClick={() => setActiveSection('about')} className={`hover:${accentColor} transition-colors`}>About</button>
              <button onClick={() => setActiveSection('skills')} className={`hover:${accentColor} transition-colors`}>Skills</button>
              <button onClick={() => setActiveSection('projects')} className={`hover:${accentColor} transition-colors`}>Projects</button>
              <button onClick={() => setActiveSection('contact')} className={`hover:${accentColor} transition-colors`}>Contact</button>
              <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-lg ${cardBg} hover:opacity-80`}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className={`${cardBg} border ${borderColor} rounded-lg p-8`}>
            <div className="flex items-start gap-2 mb-4">
              <span className={`${accentColor} font-mono`}>[user@arch ~]$</span>
              <span className="font-mono">cat introduction.txt</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 font-mono">
              <span className={accentColor}>&gt;</span> DevOps Engineer
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Building robust infrastructure, automating workflows, and optimizing cloud environments
            </p>
            <div className="flex gap-4">
              <button onClick={downloadResume} className={`${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors`}>
                <Download size={18} />
                Download Resume
              </button>
              <a href="#contact" className={`border ${borderColor} px-6 py-2 rounded-lg hover:${accentColor} transition-colors flex items-center gap-2`}>
                <Mail size={18} />
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Terminal Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 font-mono flex items-center gap-2">
            <ChevronRight className={accentColor} />
            Interactive Terminal
          </h2>
          <div className={`${cardBg} border ${borderColor} rounded-lg overflow-hidden`}>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-200'} px-4 py-2 flex items-center gap-2`}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="font-mono text-sm ml-4">terminal</span>
            </div>
            <div className="p-4 font-mono text-sm h-64 overflow-y-auto">
              {terminalHistory.map((item, i) => (
                <div key={i} className={`mb-2 ${item.type === 'error' ? 'text-red-500' : item.type === 'input' ? accentColor : ''}`}>
                  {item.text.split('\n').map((line, j) => (
                    <div key={j}>{line}</div>
                  ))}
                </div>
              ))}
              <div className="flex items-center gap-2">
                <span className={accentColor}>$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTerminalSubmit(e)}
                  className={`flex-1 bg-transparent outline-none ${textColor}`}
                  autoFocus
                  placeholder="Type 'help' for commands"
                />
              </div>
              <div ref={terminalEndRef} />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 font-mono flex items-center gap-2">
            <ChevronRight className={accentColor} />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`${cardBg} border ${borderColor} rounded-lg p-6`}>
                <h3 className={`font-mono font-bold mb-3 ${accentColor} uppercase flex items-center gap-2`}>
                  {category === 'devops' && <Server size={20} />}
                  {category === 'cloud' && <Cloud size={20} />}
                  {category === 'linux' && <Monitor size={20} />}
                  {category === 'monitoring' && <Database size={20} />}
                  {category === 'languages' && <Code size={20} />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className={`${isDark ? 'bg-gray-700' : 'bg-gray-200'} px-3 py-1 rounded text-sm`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 font-mono flex items-center gap-2">
            <ChevronRight className={accentColor} />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className={`${cardBg} border ${borderColor} rounded-lg p-6 hover:border-blue-500 transition-colors`}>
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="opacity-80 mb-4 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`${accentColor} text-xs font-mono`}>#{tech}</span>
                  ))}
                </div>
                <a href={project.link} className={`flex items-center gap-2 ${accentColor} hover:underline text-sm`}>
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 font-mono flex items-center gap-2">
            <ChevronRight className={accentColor} />
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={`${cardBg} border ${borderColor} rounded-lg p-6`}>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 font-mono text-sm">Name</label>
                  <input
                    type="text"
                    value={emailForm.name}
                    onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                    className={`w-full p-3 border ${borderColor} rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} outline-none focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-mono text-sm">Email</label>
                  <input
                    type="email"
                    value={emailForm.email}
                    onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                    className={`w-full p-3 border ${borderColor} rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} outline-none focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-mono text-sm">Message</label>
                  <textarea
                    value={emailForm.message}
                    onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                    className={`w-full p-3 border ${borderColor} rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} outline-none focus:border-blue-500 h-32`}
                  />
                </div>
                <button
                  onClick={handleEmailSubmit}
                  disabled={emailStatus === 'sending'}
                  className={`w-full ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white py-3 rounded-lg transition-colors disabled:opacity-50`}
                >
                  {emailStatus === 'sending' ? 'Sending...' : emailStatus === 'success' ? 'Sent!' : 'Send Message'}
                </button>
              </div>
            </div>
            <div className={`${cardBg} border ${borderColor} rounded-lg p-6 space-y-6`}>
              <div>
                <h3 className="font-mono font-bold mb-4">Connect with me</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <Github size={20} />
                    <span>github.com/yourusername</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <Linkedin size={20} />
                    <span>linkedin.com/in/yourusername</span>
                  </a>
                  <a href="mailto:your.email@example.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <Mail size={20} />
                    <span>your.email@example.com</span>
                  </a>
                </div>
              </div>
              <div className={`border-t ${borderColor} pt-6`}>
                <h3 className="font-mono font-bold mb-3">Location</h3>
                <p className="opacity-80">Available for remote opportunities worldwide</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`border-t ${borderColor} py-8`}>
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-sm opacity-70">
            © 2025 | Built with Next.js & Tailwind CSS | Optimized for SEO
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;