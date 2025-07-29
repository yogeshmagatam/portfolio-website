import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiSearch } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { portfolioAPI } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await portfolioAPI.getProjects();
        // Use sample data if no projects in database
        const sampleProjects = [
          {
            id: '1',
            title: 'Digital Certificate Management System',
            description: 'A full-stack digital certificate management system built with React.js and Flask. Features include secure certificate generation, validation, and management with user authentication and admin dashboard.',
            technologies: ['React', 'Flask', 'MongoDB', 'Python', 'JavaScript'],
            image_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
            github_url: 'https://github.com/yogeshmagatam/Digital-Certificate-Management-System',
            live_url: '#',
            featured: true,
            created_at: '2023-12-01'
          },
          {
            id: '2',
            title: 'Pi Ads',
            description: 'An innovative application that helps display ads on screens using Raspberry Pi. Features include remote ad management, scheduling, and real-time content updates for digital signage solutions.',
            technologies: ['Python', 'Raspberry Pi', 'Linux', 'GPIO'],
            image_url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
            github_url: 'https://github.com/yogeshmagatam/Pi-Ads',
            live_url: '#',
            featured: true,
            created_at: '2023-11-15'
          },
          {
            id: '3',
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with React and FastAPI. Features include dark mode, animations, contact form, and admin dashboard for content management.',
            technologies: ['React', 'FastAPI', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
            image_url: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
            github_url: 'https://github.com/yogeshmagatam/portfolio-website',
            live_url: '#',
            featured: false,
            created_at: '2023-10-20'
          }
        ];
        
        const projectsData = response.data.length > 0 ? response.data : sampleProjects;
        setProjects(projectsData);
        setFilteredProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
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

            {/* Technology Filter */}
            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTech === tech
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
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
                  className="card hover-lift group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <FaGithub className="mr-1" />
                        Code
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <HiExternalLink className="mr-1" />
                        Live Demo
                      </a>
                    )}
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