import React from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-gray-700 dark:text-gray-300"
      >
        {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle; 