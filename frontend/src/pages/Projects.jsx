import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiSearch } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

// Static projects data
// Static projects data matching updated ATS resume
const staticProjects = [
  {
    id: '1',
    title: 'Digital Certificate Management System',
    role: 'Team Lead',
    tag: 'Blockchain & Web3',
    description: 'Led a team to design and build a blockchain-backed system for tamper-proof issuing and storing of digital certificates. Implemented QR-code verification so anyone can confirm a certificate\'s authenticity instantly, preventing forgery.',
    bullets: [
      'Led a team to design and build a blockchain-backed system for tamper-proof issuing and storing of digital certificates.',
      'Implemented QR-code verification so anyone can confirm a certificate\'s authenticity instantly, preventing forgery.',
      'Designed end-to-end issuance and verification workflows with MongoDB persistence and REST APIs.'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Blockchain', 'QR Code API'],
    image_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    github_url: 'https://github.com/yogeshmagatam/Digital-Certificate-Management-System',
    live_url: '#',
    featured: true,
    created_at: '2026-05-15'
  },
  {
    id: '2',
    title: 'AI Career Guidance Chatbot — Google Hackathon',
    role: 'Sole Developer',
    tag: 'Google Hackathon',
    description: 'Built an LLM-powered career advisor that generates personalised skill recommendations and career roadmaps from user input. Leveraged large language model (LLM) APIs and prompt engineering techniques to generate context-aware, actionable career guidance. Developed and submitted as part of a Google Hackathon, demonstrating ability to deliver an end-to-end AI product under time constraints.',
    bullets: [
      'Built an LLM-powered career advisor that generates personalised skill recommendations and career roadmaps from user input.',
      'Leveraged large language model (LLM) APIs and prompt engineering techniques to generate context-aware, actionable career guidance.',
      'Developed and submitted as part of a Google Hackathon, delivering an end-to-end AI product under strict time constraints.'
    ],
    technologies: ['Python', 'Gemini / OpenAI APIs', 'Prompt Engineering', 'REST APIs'],
    image_url: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop',
    github_url: 'https://github.com/yogeshmagatam/AI-Career-Advisor-Chatbot',
    live_url: '#',
    featured: true,
    created_at: '2026-04-10'
  },
  {
    id: '3',
    title: 'Online Voting System with AI Fraud Detection',
    role: 'Full Stack & AI Engineer',
    tag: 'AI & Security',
    description: 'Built a full-stack election platform with role-based access (Voter / Admin), JWT auth, email-OTP multi-factor login, bcrypt password hashing and photo-based identity verification. Features AI fraud detection via a scikit-learn Random Forest model analyzing voter behavioural features in real time, with Docker deployment.',
    bullets: [
      'Built a full-stack election platform with role-based access (Voter / Admin), JWT auth, email-OTP multi-factor login, bcrypt password hashing and photo-based identity verification.',
      'Integrated AI fraud detection using a local Random Forest model analysing voter behavioural features in real time.',
      'Designed prompts for context-aware, actionable answers; shipped a working end-to-end product within the hackathon deadline.'
    ],
    technologies: ['React', 'Flask', 'MongoDB', 'scikit-learn', 'JWT', 'Docker'],
    image_url: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=500&h=300&fit=crop',
    github_url: 'https://github.com/yogeshmagatam/Online-Voting-System',
    live_url: '#',
    featured: true,
    created_at: '2026-03-01'
  },
  {
    id: '4',
    title: 'Invoice & Receipt Sorter Web App',
    role: 'Open Source Contributor',
    tag: 'DEV Hacktoberfest 2026',
    description: 'Built a privacy-first invoice and receipt sorter web app for freelancers participating in the DEV Hacktoberfest 2026 Open-Source AI Challenge. Enables automatic parsing, field extraction, and intelligent categorization of receipts.',
    bullets: [
      'Built a privacy-first invoice and receipt sorter web app for freelancers.',
      'Participant in the DEV Hacktoberfest 2026 Open-Source AI Challenge.',
      'Implemented automated document parsing, field extraction, and categorization using LLM APIs.'
    ],
    technologies: ['React.js', 'Python', 'Generative AI', 'Prompt Engineering', 'REST APIs'],
    image_url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
    github_url: 'https://github.com/yogeshmagatam',
    live_url: '#',
    featured: false,
    created_at: '2026-10-01'
  }
];

const Projects = () => {
  const [projects, setProjects] = useState(staticProjects);
  const [filteredProjects, setFilteredProjects] = useState(staticProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let filtered = projects;

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.role && project.role.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (project.tag && project.tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedTech !== 'All') {
      filtered = filtered.filter(project =>
        project.technologies.includes(selectedTech)
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedTech, projects]);

  const allTechnologies = ['All', ...new Set(projects.flatMap(p => p.technologies))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Animated Background Elements - Neon Theme */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-neon-blue opacity-10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-neon-purple opacity-10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-72 h-72 bg-neon-cyan opacity-10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero Section */}
      <section className="section-padding relative z-10">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h1 variants={itemVariants} className="mb-6 text-gray-900 dark:text-white">
              My <span className="gradient-text">Projects</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work, featuring full-stack applications, 
              web platforms, and creative solutions built with modern technologies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search projects by name, role, tech..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 items-center">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedTech === tech
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No projects match your search criteria.</p>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="card card-3d glow-on-hover group flex flex-col justify-between"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="card-3d-content">
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <motion.img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {project.featured && (
                          <span className="bg-primary-600 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold shadow">
                            Featured
                          </span>
                        )}
                        {project.role && (
                          <span className="bg-amber-500 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold shadow">
                            {project.role}
                          </span>
                        )}
                        {project.tag && (
                          <span className="bg-purple-600 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold shadow">
                            {project.tag}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Info */}
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>

                    {project.bullets ? (
                      <ul className="text-gray-600 dark:text-gray-300 mb-4 space-y-1.5 text-sm">
                        {project.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-1.5">
                            <span className="text-primary-500 font-bold select-none">›</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                      {project.github_url && (
                        <motion.a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          whileHover={{ scale: 1.1, x: 5 }}
                        >
                          <FaGithub className="mr-1" />
                          Code
                        </motion.a>
                      )}
                      {project.live_url && (
                        <motion.a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          whileHover={{ scale: 1.1, x: 5 }}
                        >
                          <HiExternalLink className="mr-1" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white relative z-10 overflow-hidden">
        <div className="container text-center relative z-10">
          <h2 className="text-white mb-6 text-3xl md:text-4xl font-bold">Interested in Working Together?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer relative z-20"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;