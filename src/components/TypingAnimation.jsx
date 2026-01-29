import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypingAnimation = ({ texts, className = "" }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];

      if (!isDeleting) {
        // Typing
        if (currentText !== fullText) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          setTypingSpeed(150);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText !== '') {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          setTypingSpeed(75);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="font-semibold text-primary-600 dark:text-primary-400">
        {currentText}
      </span>
      <motion.span
        className="inline-block w-0.5 h-6 bg-primary-600 dark:bg-primary-400 ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};

export default TypingAnimation;
