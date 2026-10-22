import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap, HiCalendar } from 'react-icons/hi';

const TimelineItem = ({ data, index, type }) => {
  const isLeft = index % 2 === 0;
  const Icon = type === 'experience' ? HiBriefcase : HiAcademicCap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex items-center mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content */}
      <motion.div
        className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="glass-card p-6 hover:shadow-neon-purple transition-all duration-300">
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            <HiCalendar className="text-neon-cyan" />
            <span className="text-neon-blue text-sm font-mono">{data.period}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{data.title}</h3>
          <h4 className="text-neon-purple font-semibold mb-3">{data.organization}</h4>
          {data.bullets ? (
            <ul className="text-gray-300 mb-4 space-y-2 text-sm">
              {data.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className={`flex items-start gap-2 ${isLeft ? 'md:flex-row-reverse md:text-right' : 'md:flex-row md:text-left'}`}>
                  <span className="text-neon-cyan mt-1 select-none font-bold">›</span>
                  <span className="text-gray-300">{bullet}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 mb-4">{data.description}</p>
          )}
          {data.technologies && (
            <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
              {data.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-dark-600 text-neon-cyan rounded-full border border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Center Icon */}
      <div className="hidden md:flex items-center justify-center w-2/12 relative">
        <div className="absolute w-0.5 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan" />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          className="relative z-10 w-12 h-12 rounded-full bg-dark-800 border-2 border-neon-cyan flex items-center justify-center shadow-neon-cyan"
        >
          <Icon className="text-neon-cyan text-xl" />
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      period: 'Jun 2026 – Present',
      title: 'Full Stack Developer Intern',
      organization: 'Super Teacher Edu Reforms Pvt. Ltd., Hyderabad',
      bullets: [
        'Designed, developed and deployed a Learning Management System (LMS) web portal that lets teachers create and run assessments and lets students follow courses, read ebooks and take tests online.',
        'Building a Windows desktop version of the LMS with Tauri + React, adding encrypted ebooks that students can read offline, written to a formal product requirements document (PRD).',
        'Adapting the LMS into an Android app for Google Play Store release, reusing the existing web codebase.',
        'Implemented scripted content-scheduling logic that automated ad rotation, enabling unattended 24/7 operation across deployed display devices.'
      ],
      technologies: ['React.js', 'Tauri (Desktop)', 'Node.js', 'Python (Flask)', 'MongoDB', 'Android', 'Automation']
    }
  ];

  const education = [
    {
      period: 'May 2026',
      title: 'B. Tech in Computer Science & Engineering',
      organization: 'Holy Mary Institute of Technology and Science, Telangana',
      description: 'Focused on full-stack software development, data structures, algorithms, databases, and AI-powered application architecture.',
      technologies: ['Computer Science', 'Software Engineering', 'Data Structures & Algorithms', 'Databases']
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-dark-900">
      {/* Background Effects */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-neon-purple opacity-5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <HiBriefcase className="text-neon-cyan" />
            Work Experience
          </h3>
          <div className="relative">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} data={exp} index={index} type="experience" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <HiAcademicCap className="text-neon-purple" />
            Education
          </h3>
          <div className="relative">
            {education.map((edu, index) => (
              <TimelineItem key={index} data={edu} index={index} type="education" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
