import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="glass-card px-5 py-4 hover:shadow-neon transition-all duration-300 group cursor-default"
      whileHover={{ y: -4, scale: 1.05 }}
    >
      <span className="text-base font-semibold text-white group-hover:text-neon-cyan transition-colors">
        {skill}
      </span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skills = {
    Frontend: [
      'React',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'HTML/CSS',
    ],
    Backend: [
      'Node.js',
      'Python',
      'Flask',
      'MongoDB',
    ],
    Tools: [
      'Git',
      'VS Code',
      'Raspberry Pi',
      'Linux',
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue opacity-10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple opacity-10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-neon-blue to-neon-purple rounded mr-3" />
              {category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {skillList.map((skill, index) => (
                <SkillCard
                  key={skill}
                  skill={skill}
                  delay={index * 0.08}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
