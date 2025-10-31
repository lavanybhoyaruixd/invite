import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Story.css';

const Story: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <section className="story" id="story" ref={ref}>
      <div className="story-container">
        <motion.div
          className="story-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="story-header" variants={itemVariants} transition={{ duration: 1.2 }}>
            <h2 className="story-title">Our Love Story</h2>
            <div className="story-divider"></div>
          </motion.div>

          <div className="story-timeline">
            <motion.div className="story-item" variants={itemVariants} transition={{ duration: 1.2 }}>
              <div className="story-image-container">
                <motion.img
                  src="/images/get (1).jpeg"
                  alt="First meeting"
                  className="story-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="story-image-overlay">
                  <span className="story-date">January 2020</span>
                </div>
              </div>
              <div className="story-text">
                <h3>The First Meeting</h3>
                <p>
                  Our paths crossed at a mutual friend's celebration, where a single glance
                  across the room changed everything. What started as a simple conversation
                  under the starlit sky became the beginning of our beautiful journey together.
                </p>
              </div>
            </motion.div>

            <motion.div className="story-item reverse" variants={itemVariants} transition={{ duration: 1.2 }}>
              <div className="story-image-container">
                <motion.img
                  src="/images/get (2).jpeg"
                  alt="The proposal"
                  className="story-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="story-image-overlay">
                  <span className="story-date">March 2023</span>
                </div>
              </div>
              <div className="story-text">
                <h3>The Proposal</h3>
                <p>
                  In the same palace where we shared countless memories, surrounded by
                  the architecture that witnessed our love grow, he got down on one knee.
                  With tears of joy and hearts full of love, we said yes to forever.
                </p>
              </div>
            </motion.div>

            <motion.div className="story-item" variants={itemVariants} transition={{ duration: 1.2 }}>
              <div className="story-image-container">
                <motion.img
                  src="/images/get (3).jpeg"
                  alt="Engagement celebration"
                  className="story-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="story-image-overlay">
                  <span className="story-date">December 2024</span>
                </div>
              </div>
              <div className="story-text">
                <h3>Our Wedding Day</h3>
                <p>
                  Now, we invite you to be part of our most special day as we promise
                  to love, cherish, and support each other through all of life's
                  adventures. Join us as we begin this new chapter together.
                </p>
              </div>
            </motion.div>
          </div>

                    <motion.div className="story-quote" variants={itemVariants} transition={{ duration: 1.2 }}>
            <div className="quote-content">
              <h3>"When I saw you, I fell in love, and you smiled because you knew."</h3>
              <p>- Arrigo Boito</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
