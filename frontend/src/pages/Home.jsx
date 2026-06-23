import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiDownload, HiMail, HiExternalLink, HiCode, HiLightningBolt, HiSparkles, HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb } from 'react-icons/si';
import TypingAnimation from '../components/TypingAnimation';
import SkillsSection from '../components/SkillsSection';
import Timeline from '../components/Timeline';
import yogeshImage from '../images/yogesh.jpeg';

const Home = () => {
  // No need for state management as we're using static data directly

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const techIcons = [
    { icon: FaReact, name: 'React', color: 'text-blue-500' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-600' },
    { icon: FaPython, name: 'Python', color: 'text-yellow-500' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-dark-900">
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

      {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-500 dark:to-orange-600 rounded-full opacity-30 dark:opacity-40"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 dark:from-indigo-500 dark:to-purple-600 rounded-full opacity-25 dark:opacity-35"
        animate={{
          x: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Particle System */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white dark:bg-blue-400 rounded-full opacity-60 dark:opacity-80"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${10 + (i % 2 * 30)}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.6, 0, 0.6],
            scale: [1, 0.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating Tech Icons */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`absolute text-4xl ${tech.color} opacity-30 dark:opacity-50`}
          style={{
            left: `${20 + (index * 15)}%`,
            top: `${30 + (index % 2 * 20)}%`,
          }}
          variants={floatingVariants}
          animate="animate"
          transition={{
            delay: index * 0.5,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <tech.icon />
        </motion.div>
      ))}

      {/* Hero Section */}
      <section className="hero-gradient section-padding min-h-screen flex items-center relative z-10">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.div 
              variants={itemVariants} 
              className="mb-8 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img
                src={yogeshImage}
                alt="Magatam Yogesh Vishwanath"
                className="relative w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover border-4 border-white"
              />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Hi, I'm <motion.span 
                className="gradient-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Magatam Yogesh Vishwanath
              </motion.span>
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto"
            >
              A passionate{' '}
              <TypingAnimation 
                texts={[
                  'Software Developer',
                  'AI Prompt Engineer',
                  'Full Stack Developer',
                  'Problem Solver',
                  'Tech Enthusiast'
                ]} 
                className="text-xl md:text-2xl"
              />
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              who loves creating beautiful and functional applications with modern technologies.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/contact" className="btn-primary inline-flex items-center relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                <HiMail className="mr-2" />
                Get In Touch
                  </span>
              </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
              <a 
                href="/resume.pdf" 
                download 
                  className="btn-secondary inline-flex items-center relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                <HiDownload className="mr-2" />
                Download Resume
                  </span>
              </a>
              </motion.div>
            </motion.div> 
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              {[
                { icon: FaGithub, href: "https://github.com/yogeshmagatam", label: "GitHub" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/magatam-yogesh", label: "LinkedIn" },
                { icon: FaTwitter, href: "https://twitter.com/yogeshmagatam", label: "Twitter" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-600 hover:text-primary-600 text-2xl relative group"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    rotate: [0, -10, 10, 0]
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    duration: 0.3
                  }}
                >
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <social.icon className="relative z-10" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-center mb-12 text-gray-900 dark:text-white">
              About Me
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              <motion.div variants={itemVariants} className="text-center">
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  I am a Computer Science Engineering student (graduating May 2026) with hands-on experience in full-stack web development using Python and Generative AI. I am skilled in data structures, algorithms, and prompt engineering, and passionate about building scalable, production-ready applications.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  I enjoy participating in hackathons and coding competitions, including Google-hosted hackathons where I build functional AI products. I'm actively interested in AI, Web3, open-source software development, and engaging with the local tech community.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'SQL', 'Raspberry Pi', 'Generative AI', 'Prompt Engineering'].map((tech, index) => (
                    <motion.span 
                      key={tech} 
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm cursor-pointer"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#3B82F6",
                        color: "white",
                        y: -2
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300,
                        duration: 0.3, 
                        delay: index * 0.1 
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - New Component */}
      <SkillsSection />

      {/* Experience & Education Timeline - New Component */}
      <Timeline />

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
              <h2 className="text-gray-900 dark:text-black">Featured Projects</h2>
              <p className="text-gray-600 dark:text-black-300 mt-4">
                Some of my recent work that I'm proud of
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Featured projects from GitHub profile */}
              {[
                {
                  title: "Digital Certificate Management System",
                  description: "Led a team to architect and develop a blockchain-based certificate management system, ensuring tamper-proof issuance and storage of digital credentials. Implemented QR code–based certificate verification to enable instant authenticity checks and prevent certificate fraud.",
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
                  technologies: ["React.js", "Node.js", "MongoDB", "Blockchain", "QR Code API"],
                  github: "https://github.com/yogeshmagatam/Digital-Certificate-Management-System",
                  live: "#"
                },
                {
                  title: "AI Career Guidance Chatbot",
                  description: "Built an AI-powered career advisory chatbot that delivers personalized skill recommendations and career roadmaps based on user input. Leveraged LLM APIs and prompt engineering techniques to generate context-aware, actionable career guidance.",
                  image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
                  technologies: ["Python", "LLM APIs", "Prompt Engineering", "REST APIs"],
                  github: "https://github.com/yogeshmagatam/AI-Career-Advisor-Chatbot",
                  live: "#"
                },
                {
                  title: "Personal Portfolio Website",
                  description: "Designed and developed a fully responsive portfolio website using HTML5, CSS3, and vanilla JavaScript, showcasing projects, skills, and achievements.",
                  image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
                  technologies: ["HTML5", "CSS3", "JavaScript", "React"],
                  github: "https://github.com/yogeshmagatam/portfolio-website",
                  live: "#"
                },
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan text-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-white mb-6 text-4xl md:text-5xl font-bold">
              Let's Work Together
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's discuss how we can bring your ideas to life!
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-dark-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
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
