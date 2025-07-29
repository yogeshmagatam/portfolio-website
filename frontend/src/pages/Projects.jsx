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
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing with Stripe, real-time inventory management, and admin dashboard.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
            image_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
            github_url: 'https://github.com/johndoe/ecommerce-platform',
            live_url: 'https://ecommerce-demo.johndoe.com',
            featured: true,
            created_at: '2023-12-01'
          },
          {
            id: '2',
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates using Socket.io. Built with Vue.js frontend and Python FastAPI backend with PostgreSQL database.',
            technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Socket.io'],
            image_url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
            github_url: 'https://github.com/johndoe/task-manager',
            live_url: 'https://tasks.johndoe.com',
            featured: true,
            created_at: '2023-11-15'
          },
          {
            id: '3',
            title: 'Weather Dashboard',
            description: 'A beautiful weather dashboard with data visualization using D3.js. Integrates with OpenWeather API to provide real-time weather data and forecasts with interactive charts.',
            technologies: ['React', 'D3.js', 'OpenWeather API', 'Chart.js'],
            image_url: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
            github_url: 'https://github.com/johndoe/weather-dashboard',
            live_url: 'https://weather.johndoe.com',
            featured: false,
            created_at: '2023-10-20'
          },
          {
            id: '4',
            title: 'Social Media Analytics Tool',
            description: 'A comprehensive analytics tool for social media metrics. Built with React dashboard and Python backend for data processing. Features automated reporting and insights.',
            technologies: ['React', 'Python', 'Pandas', 'MongoDB', 'Chart.js'],
            image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
            github_url: 'https://github.com/johndoe/social-analytics',
            live_url: 'https://analytics.johndoe.com',
            featured: false,
            created_at: '2023-09-10'
          },
          {
            id: '5',
            title: 'Real Estate Listing Platform',
            description: 'A modern real estate platform with advanced search filters, interactive maps using Mapbox, and virtual tour integration. Built with Next.js for optimal performance.',
            technologies: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox API', 'Cloudinary'],
            image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop',
            github_url: 'https://github.com/johndoe/realestate-platform',
            live_url: 'https://realestate.johndoe.com',
            featured: true,
            created_at: '2023-08-05'
          },
          {
            id: '6',
            title: 'Personal Finance Tracker',
            description: 'A comprehensive personal finance management application with expense tracking, budget planning, and financial goal setting. Features secure bank integration and detailed analytics.',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Plaid API', 'Chart.js'],
            image_url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
            github_url: 'https://github.com/johndoe/finance-tracker',
            live_url: 'https://finance.johndoe.com',
            featured: false,
            created_at: '2023-07-12'
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h1 variants={itemVariants} className="mb-6">
              My <span className="gradient-text">Projects</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work, featuring full-stack applications, 
              web platforms, and creative solutions built with modern technologies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
              <p className="text-gray-600 text-lg">No projects match your search criteria.</p>
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