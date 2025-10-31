import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import './Details.css';

const Details: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    config: { tension: 280, friction: 60 },
  });

  const fadeInDelayed1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    delay: 300,
    config: { tension: 280, friction: 60 },
  });

  const fadeInDelayed2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    delay: 600,
    config: { tension: 280, friction: 60 },
  });

  return (
    <section className="details" id="details" ref={ref}>
      <div className="details-container">
        <animated.div style={fadeIn} className="details-header">
          <h2 className="details-title">Wedding Details</h2>
          <p className="details-subtitle">
            Join us for the celebration of our lifetime
          </p>
          <div className="details-divider"></div>
        </animated.div>

        <div className="details-content">
          <animated.div style={fadeInDelayed1} className="details-card ceremony">
            <motion.div
              className="details-card-inner"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="details-icon">
                <span>💒</span>
              </div>
              <h3>Wedding Ceremony</h3>
              <div className="details-info">
                <div className="info-item">
                  <span className="info-label">Date</span>
                  <span className="info-value">December 15, 2024</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Time</span>
                  <span className="info-value">4:00 PM</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Venue</span>
                  <span className="info-value">
                    Royal Palace Gardens<br />
                    Udaipur, Rajasthan
                  </span>
                </div>
              </div>
              <motion.button
                className="details-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Location
              </motion.button>
            </motion.div>
          </animated.div>

          <animated.div style={fadeInDelayed2} className="details-card reception">
            <motion.div
              className="details-card-inner"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="details-icon">
                <span>🎉</span>
              </div>
              <h3>Reception Party</h3>
              <div className="details-info">
                <div className="info-item">
                  <span className="info-label">Date</span>
                  <span className="info-value">December 15, 2024</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Time</span>
                  <span className="info-value">7:00 PM</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Venue</span>
                  <span className="info-value">
                    Grand Ballroom<br />
                    Lake Palace Hotel
                  </span>
                </div>
              </div>
              <motion.button
                className="details-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Location
              </motion.button>
            </motion.div>
          </animated.div>
        </div>

        <motion.div
          className="details-additional"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="additional-info">
            <div className="info-section">
              <h4>Dress Code</h4>
              <p>Traditional Indian Attire Preferred</p>
              <p>Colors: Cream, Gold, Maroon</p>
            </div>
            <div className="info-section">
              <h4>Special Notes</h4>
              <p>Vegetarian meals will be served</p>
              <p>Photography is encouraged</p>
            </div>
            <div className="info-section">
              <h4>Contact</h4>
              <p>For any queries:</p>
              <p>+91 9923111212</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="details-countdown"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3>Counting Down to Our Big Day</h3>
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-number">45</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">12</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">30</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">15</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Details;
