import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, category, level, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 hover:shadow-neon transition-all duration-300 group"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors">
          {skill}
        </h3>
        <span className="text-neon-blue text-sm font-mono">{level}%</span>
      </div>
      
      {/* Animated Progress Bar */}
      <div className="w-full h-2 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-full relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
      
      <div className="mt-2 text-xs text-gray-400 font-mono">{category}</div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skills = {
    Frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Framer Motion', level: 80 },
    ],
    Backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 88 },
      { name: 'Flask', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'Express.js', level: 83 },
      { name: 'REST APIs', level: 87 },
    ],
    Tools: [
      { name: 'Git', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 75 },
      { name: 'Vite', level: 85 },
      { name: 'Raspberry Pi', level: 78 },
      { name: 'Linux', level: 80 },
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillList.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill.name}
                  category={category}
                  level={skill.level}
                  delay={index * 0.1}
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
