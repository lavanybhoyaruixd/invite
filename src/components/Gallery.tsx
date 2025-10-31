import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const images = [
    { src: '/images/get.jpeg', alt: 'Wedding couple in palace' },
    { src: '/images/get (1).jpeg', alt: 'Romantic moment under arches' },
    { src: '/images/get (2).jpeg', alt: 'Walking together' },
    { src: '/images/get (3).jpeg', alt: 'Couple by the water' },
    { src: '/images/get (4).jpeg', alt: 'Holding hands' },
    { src: '/images/get (5).jpeg', alt: 'With flying birds' },
    { src: '/images/get (6).jpeg', alt: 'Intimate embrace' },
    { src: '/images/get (7).jpeg', alt: 'Close together' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemTransition = {
    duration: 0.6,
    ease: [0.6, -0.05, 0.01, 0.99] as const,
  };

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="gallery-container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gallery-title">Captured Moments</h2>
          <p className="gallery-subtitle">
            Every picture tells a story of our love
          </p>
          <div className="gallery-divider"></div>
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              variants={itemVariants}
              transition={itemTransition}
              whileHover={{ opacity: 0.9 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="gallery-image-container">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <span className="gallery-icon">👁</span>
                      <p>View Photo</p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="gallery-hearts"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-heart"
              animate={{
                y: [-20, -40, -20],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              💖
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="gallery-modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="gallery-modal-close"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Wedding moment"
                className="gallery-modal-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
