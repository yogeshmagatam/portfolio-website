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
          <p className="text-gray-400 mb-4">{data.description}</p>
          {data.gpa && (
            <div className={`mb-4 flex items-center gap-1 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
              <span className="text-xs text-gray-500 font-mono">GPA:</span>
              <span className="text-sm text-neon-cyan font-bold font-mono">{data.gpa}</span>
            </div>
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
      period: 'May 2023 - Jun 2023',
      title: 'Associate Intern',
      organization: 'Shanrohi Technologies (Pi Ads)',
      description: 'Designed and deployed a Raspberry Pi-based digital advertising system that automated remote content delivery, replacing manual on-site advertisement updates for ~5 client locations. Developed a full-stack web application (HTML/CSS/JS + backend API) enabling clients to remotely upload and schedule advertisement videos, reducing operational overhead by eliminating on-site visits. Implemented scripted content scheduling logic that improved system automation and allowed unattended 24/7 ad rotation across deployed devices.',
      technologies: ['Raspberry Pi', 'Python', 'Flask', 'JavaScript', 'HTML/CSS', 'Linux']
    }
  ];

  const education = [
    {
      period: '2022 - 2026',
      title: 'B. Tech in Computer Science & Engineering',
      organization: 'Holy Mary Institute of Technology and Science, Telangana',
      description: 'Focused on software development, data structures, algorithms, and prompt engineering.',
      gpa: '7.0'
    },
    {
      period: '2020 - 2022',
      title: 'Intermediate (MPC)',
      organization: 'Narayana Junior College, Telangana',
      description: 'Mathematics, Physics, Chemistry stream.',
      gpa: '6.9'
    },
    {
      period: '2015 - 2020',
      title: 'High School (SSC)',
      organization: 'New Little Lilly High School, Telangana',
      description: 'Secondary School Certificate foundational studies.',
      gpa: '9.2'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-dark-900">
      {/* Background Effects */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-neon-purple opacity-5 rounded-full blur-3xl"
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
