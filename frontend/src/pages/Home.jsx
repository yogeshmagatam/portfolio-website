import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiDownload, HiMail, HiExternalLink, HiCode, HiLightningBolt, HiSparkles, HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaPython, FaTrophy, FaAward } from 'react-icons/fa';
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
                alt="M Yogesh Vishwanath"
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
                M Yogesh Vishwanath
              </motion.span>
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto"
            >
              A passionate{' '}
              <TypingAnimation 
                texts={[
                  'Full Stack Developer',
                  'Software Developer',
                  'AI / ML Integrations',
                  'Tauri & React Engineer'
                ]} 
                className="text-xl md:text-2xl"
              />
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Full stack developer and 2026 B.Tech CSE graduate, currently interning at Super Teacher Edu Reforms where I build and ship production Learning Management Systems. Hands-on with React, Node.js, Python (Flask), MongoDB and SQL, plus LLM APIs, prompt engineering, and scikit-learn. Seeking a Software Developer / Full Stack Engineer role.
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
                  href="/Yogesh_Resume_ATS_Updated.pdf" 
                  download="M_Yogesh_Vishwanath_Resume.pdf"
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
                  Full stack developer and 2026 B.Tech CSE graduate from Holy Mary Institute of Technology and Science, currently interning at Super Teacher Edu Reforms Pvt. Ltd., where I build and ship production software. Experienced in designing, developing, and deploying full-stack web portals (LMS), Windows desktop applications using Tauri + React with offline encrypted ebooks, and adapting apps for Android release.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Skilled in building secure, end-to-end full stack and AI-powered applications from authentication (JWT, email-OTP MFA, bcrypt password hashing) and fraud detection (scikit-learn Random Forest) to Dockerized deployment and REST API integrations. Active participant in hackathons—built and submitted a functional AI product at a Google-hosted hackathon and built a privacy-first invoice sorter for the DEV Hacktoberfest 2026 Open-Source AI Challenge.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {[
                    'React.js',
                    'Node.js',
                    'Python (Flask)',
                    'JavaScript (ES6+)',
                    'MongoDB',
                    'SQL',
                    'Generative AI',
                    'LLM APIs (Gemini/OpenAI)',
                    'Prompt Engineering',
                    'scikit-learn',
                    'Docker',
                    'Tauri (desktop)',
                    'Git & GitHub',
                    'Google Antigravity'
                  ].map((tech, index) => (
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
                        delay: index * 0.05 
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
      {/* Featured Projects Section */}
      <section className="section-padding bg-white dark:bg-gray-800 transition-colors">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-gray-900 dark:text-white">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Full-stack & AI projects highlighted in my updated resume
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Certificate Management System",
                  role: "Team Lead",
                  tag: "Blockchain & Web3",
                  description: "Led a team to design and build a blockchain-backed system for tamper-proof issuing and storing of digital certificates. Implemented QR-code verification so anyone can confirm a certificate's authenticity instantly, preventing forgery.",
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
                  technologies: ["React.js", "Node.js", "MongoDB", "Blockchain", "QR Code API"],
                  github: "https://github.com/yogeshmagatam/Digital-Certificate-Management-System",
                  live: "#"
                },
                {
                  title: "AI Career Guidance Chatbot",
                  tag: "Google Hackathon",
                  description: "Built an LLM-powered career advisor that generates personalised skill recommendations and career roadmaps from user input. Leveraged large language model (LLM) APIs and prompt engineering techniques to generate context-aware, actionable career guidance.",
                  image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
                  technologies: ["Python", "Gemini / OpenAI APIs", "Prompt Engineering", "REST APIs"],
                  github: "https://github.com/yogeshmagatam/AI-Career-Advisor-Chatbot",
                  live: "#"
                },
                {
                  title: "Online Voting System with AI Fraud Detection",
                  tag: "AI & Security",
                  description: "Built a full-stack election platform with role-based access (Voter / Admin), JWT auth, email-OTP multi-factor login, bcrypt password hashing, photo-based identity verification, and AI fraud detection using scikit-learn Random Forest.",
                  image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=250&fit=crop",
                  technologies: ["React", "Flask", "MongoDB", "scikit-learn", "JWT", "Docker"],
                  github: "https://github.com/yogeshmagatam/Online-Voting-System",
                  live: "#"
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card hover-lift bg-white dark:bg-gray-700/60 dark:border-gray-600 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
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
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs rounded font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4 pt-3 border-t border-gray-100 dark:border-gray-600">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm flex items-center">
                      <FaGithub className="inline mr-1" /> Code
                    </a>
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm flex items-center">
                        <HiExternalLink className="inline mr-1" /> Live
                      </a>
                    )}
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

      {/* Achievements & Activities Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900 relative overflow-hidden border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <span className="text-neon-cyan font-mono text-sm tracking-widest uppercase font-semibold">Honors & Extracurriculars</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                Achievements & Activities
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
                Hackathons, open-source challenges, and core engineering passions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: Google-hosted Hackathon */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl hover:shadow-neon-cyan transition-all duration-300 group"
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center text-neon-blue text-2xl mb-4 group-hover:scale-110 transition-transform">
                  <FaTrophy />
                </div>
                <div className="text-xs font-semibold text-neon-blue uppercase tracking-wider mb-1">
                  Google-Hosted Hackathon
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  AI Product Builder
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Built and submitted a functional AI career advisor under tight hackathon constraints, leveraging LLM APIs and prompt engineering. Regular participant in competitive hackathons and coding contests.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/20 font-medium">Google Hackathon</span>
                  <span className="px-2.5 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/20 font-medium">Generative AI</span>
                  <span className="px-2.5 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/20 font-medium">Coding Contests</span>
                </div>
              </motion.div>

              {/* Card 2: DEV Hacktoberfest 2026 */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl hover:shadow-neon-purple transition-all duration-300 group"
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center text-neon-purple text-2xl mb-4 group-hover:scale-110 transition-transform">
                  <FaAward />
                </div>
                <div className="text-xs font-semibold text-neon-purple uppercase tracking-wider mb-1">
                  DEV Hacktoberfest 2026
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Open-Source AI Challenge
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Participant in the DEV Hacktoberfest 2026 Open-Source AI Challenge — architected and built a privacy-first invoice and receipt sorter web application tailored for independent freelancers.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-neon-purple/10 text-neon-purple text-xs rounded-full border border-neon-purple/20 font-medium">Open Source</span>
                  <span className="px-2.5 py-1 bg-neon-purple/10 text-neon-purple text-xs rounded-full border border-neon-purple/20 font-medium">Privacy-First AI</span>
                  <span className="px-2.5 py-1 bg-neon-purple/10 text-neon-purple text-xs rounded-full border border-neon-purple/20 font-medium">DEV Challenge</span>
                </div>
              </motion.div>

              {/* Card 3: Interests & Tech Community */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl hover:shadow-neon transition-all duration-300 group"
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan text-2xl mb-4 group-hover:scale-110 transition-transform">
                  <HiSparkles />
                </div>
                <div className="text-xs font-semibold text-neon-cyan uppercase tracking-wider mb-1">
                  Passions & Involvement
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Interests & Community
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Deeply passionate about Generative AI, Web3, open-source software, music production, and actively collaborating with peers in the local tech and developer community.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded-full border border-neon-cyan/20 font-medium">Generative AI</span>
                  <span className="px-2.5 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded-full border border-neon-cyan/20 font-medium">Web3</span>
                  <span className="px-2.5 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded-full border border-neon-cyan/20 font-medium">Music Production</span>
                </div>
              </motion.div>
            </div>
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
