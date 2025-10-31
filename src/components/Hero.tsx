import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import './Hero.css';

const Hero: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
  });

  const slideIn = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 1000,
  });

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <motion.img
          src="/images/get.jpeg"
          alt="Wedding couple"
          className="hero-image"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <animated.div style={slideIn}>
            <h1 className="hero-title">
              <span className="title-line">Together</span>
              <span className="title-line">Forever</span>
            </h1>
          </animated.div>
          
          <animated.div style={fadeIn}>
            <p className="hero-subtitle">
              Join us as we celebrate our love story
            </p>
          </animated.div>
          
          <motion.div
            className="hero-names"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <span className="bride-name">Priya</span>
            <span className="ampersand">&</span>
            <span className="groom-name">Arjun</span>
          </motion.div>
          
          <motion.div
            className="wedding-date"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <span>December 15, 2024</span>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
