import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiExternalLink } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { portfolioAPI } from '../services/api';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, skillsRes, experienceRes] = await Promise.all([
          portfolioAPI.getProjects(),
          portfolioAPI.getSkills(),
          portfolioAPI.getExperience()
        ]);
        setProjects(projectsRes.data.slice(0, 3)); // Show only 3 featured projects
        setSkills(skillsRes.data);
        setExperience(experienceRes.data.slice(0, 2)); // Show only 2 recent experiences
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding min-h-screen flex items-center">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="John Doe"
                className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
              />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Hi, I'm <span className="gradient-text">John Doe</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              A passionate <span className="font-semibold text-primary-600">Full Stack Developer</span> who loves creating 
              beautiful and functional web applications with modern technologies.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/contact" className="btn-primary inline-flex items-center">
                <HiMail className="mr-2" />
                Get In Touch
              </Link>
              <a 
                href="/resume.pdf" 
                download 
                className="btn-secondary inline-flex items-center"
              >
                <HiDownload className="mr-2" />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              <a href="https://github.com/johndoe" className="text-gray-600 hover:text-primary-600 text-2xl">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/johndoe" className="text-gray-600 hover:text-primary-600 text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/johndoe" className="text-gray-600 hover:text-primary-600 text-2xl">
                <FaTwitter />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-center mb-12">
              About Me
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  I'm a software developer with 5+ years of experience building scalable web applications. 
                  I specialize in React, Node.js, and Python, and I'm passionate about clean code, 
                  user experience, and continuous learning.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  When I'm not coding, you can find me contributing to open-source projects, 
                  writing technical blogs, or exploring the latest tech trends. I believe in 
                  building software that makes a positive impact on people's lives.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'MongoDB'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop"
                  alt="Workspace"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-center mb-12">
              Skills & Technologies
            </motion.h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { category: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
                { category: 'Backend', skills: ['Node.js', 'Python', 'FastAPI', 'Express.js'] },
                { category: 'Database', skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] },
                { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma'] }
              ].map((group, index) => (
                <motion.div
                  key={group.category}
                  variants={itemVariants}
                  className="card text-center"
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary-600">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-gray-600">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2>Featured Projects</h2>
              <p className="text-gray-600 mt-4">
                Some of my recent work that I'm proud of
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Sample projects data - will be replaced with real data */}
              {[
                {
                  title: "E-Commerce Platform",
                  description: "A full-stack e-commerce solution built with React and Node.js",
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
                  technologies: ["React", "Node.js", "MongoDB"],
                  github: "#",
                  live: "#"
                },
                {
                  title: "Task Management App",
                  description: "A collaborative task management tool with real-time updates",
                  image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
                  technologies: ["Vue.js", "Python", "PostgreSQL"],
                  github: "#",
                  live: "#"
                },
                {
                  title: "Weather Dashboard",
                  description: "A beautiful weather dashboard with data visualization",
                  image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
                  technologies: ["React", "D3.js", "API"],
                  github: "#",
                  live: "#"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card hover-lift"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-primary-600 hover:text-primary-700">
                      <FaGithub className="inline mr-1" /> Code
                    </a>
                    <a href={project.live} className="text-primary-600 hover:text-primary-700">
                      <HiExternalLink className="inline mr-1" /> Live
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link to="/projects" className="btn-primary">
                View All Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-center mb-12">
              Work Experience
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  company: "TechCorp Inc.",
                  position: "Senior Full Stack Developer",
                  period: "2022 - Present",
                  description: "Led development of microservices architecture serving 1M+ users. Mentored junior developers and established coding standards.",
                  technologies: ["React", "Node.js", "AWS", "MongoDB"]
                },
                {
                  company: "StartupXYZ",
                  position: "Full Stack Developer",
                  period: "2020 - 2022",
                  description: "Built the core platform from scratch, implemented CI/CD pipelines, and reduced deployment time by 60%.",
                  technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card mb-6 border-l-4 border-primary-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <p className="text-primary-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-white mb-6">
              Let's Work Together
            </motion.h2>
            <motion.p variants={itemVariants} className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's discuss how we can bring your ideas to life!
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;