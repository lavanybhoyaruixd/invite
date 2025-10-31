import React from 'react';
import { motion } from 'framer-motion';
import './FloatingElements.css';

const FloatingElements: React.FC = () => {
  const elements = [
    { emoji: '🌸', delay: 0, duration: 8 },
    { emoji: '💐', delay: 2, duration: 10 },
    { emoji: '🦋', delay: 4, duration: 12 },
    { emoji: '✨', delay: 1, duration: 9 },
    { emoji: '🌺', delay: 3, duration: 11 },
    { emoji: '🕊️', delay: 5, duration: 7 },
  ];

  return (
    <div className="floating-elements">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="floating-element"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            opacity: 0 
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: -100,
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;

