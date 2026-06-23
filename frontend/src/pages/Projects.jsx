import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiSearch } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

// Static projects data
const staticProjects = [
  {
    id: '1',
    title: 'Digital Certificate Management System',
    description: 'Led a team to architect and develop a blockchain-based certificate management system, ensuring tamper-proof issuance and storage of digital credentials. Implemented QR code–based certificate verification to enable instant authenticity checks and prevent certificate fraud. Designed the end-to-end workflow from certificate generation to verification, integrating blockchain immutability with a user-friendly interface.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Blockchain', 'QR Code API'],
    image_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    github_url: 'https://github.com/yogeshmagatam/Digital-Certificate-Management-System',
    live_url: '#',
    featured: true,
    created_at: '2025-10-20'
  },
  {
    id: '2',
    title: 'AI Career Guidance Chatbot',
    description: 'Built an AI-powered career advisory chatbot that delivers personalized skill recommendations and career roadmaps based on user input. Leveraged large language model (LLM) APIs and prompt engineering techniques to generate context-aware, actionable career guidance. Developed and submitted as part of a Google Hackathon, demonstrating ability to deliver an end-to-end AI product under time constraints.',
    technologies: ['Python', 'LLM APIs (Gemini/OpenAI)', 'Prompt Engineering', 'REST APIs'],
    image_url: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop',
    github_url: 'https://github.com/yogeshmagatam/AI-Career-Advisor-Chatbot',
    live_url: '#',
    featured: true,
    created_at: '2025-11-18'
  },
  {
    id: '3',
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a fully responsive portfolio website using HTML5, CSS3, and vanilla JavaScript, showcasing projects, skills, and achievements. Ensured cross-device and cross-browser compatibility with a mobile-first responsive design approach.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    image_url: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
    github_url: 'https://github.com/yogeshmagatam/portfolio-website',
    live_url: '#',
    featured: true,
    created_at: '2025-07-31'
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
        className="absolute top-20 left-10 w-96 h-96 bg-neon-blue opacity-10 rounded-full blur-3xl"
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
        className="absolute top-40 right-20 w-96 h-96 bg-neon-purple opacity-10 rounded-full blur-3xl"
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
        className="absolute bottom-40 left-1/4 w-72 h-72 bg-neon-cyan opacity-10 rounded-full blur-3xl"
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
            <div className="relative flex-1 max-w-md">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
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
                  className="card card-3d glow-on-hover group"
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
                      {project.featured && (
                        <motion.div 
                          className="absolute top-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          Featured
                        </motion.div>
                      )}
                    </div>

                    {/* Project Info */}
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, backgroundColor: "#3B82F6", color: "white" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4">
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
      <section className="section-padding bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-white mb-6">Interested in Working Together?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together!
          </p>
          <a
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;