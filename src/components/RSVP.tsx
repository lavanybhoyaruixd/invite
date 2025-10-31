import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import './RSVP.css';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attendance: '',
    dietary: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const formAnimation = useSpring({
    from: { opacity: 0 },
    to: { 
      opacity: inView ? 1 : 0
    },
    config: { tension: 280, friction: 60 },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '1',
        attendance: '',
        dietary: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section className="rsvp" id="rsvp" ref={ref}>
      <div className="rsvp-container">
        <motion.div
          className="rsvp-header"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="rsvp-title">RSVP</h2>
          <p className="rsvp-subtitle">
            Please let us know if you'll be joining our celebration
          </p>
          <div className="rsvp-divider"></div>
        </motion.div>

        <animated.div style={formAnimation} className="rsvp-content">
          {!isSubmitted ? (
            <motion.form 
              className="rsvp-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <motion.select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </motion.select>
                </div>
              </div>

              <div className="form-group">
                <label>Will you be attending? *</label>
                <div className="radio-group">
                  <motion.label 
                    className="radio-label"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="radio-custom"></span>
                    Joyfully Accept
                  </motion.label>
                  <motion.label 
                    className="radio-label"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="radio-custom"></span>
                    Regretfully Decline
                  </motion.label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="dietary">Dietary Restrictions</label>
                <motion.input
                  type="text"
                  id="dietary"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleInputChange}
                  placeholder="Any allergies or special requirements?"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Special Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your wishes for the happy couple..."
                  rows={4}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <motion.button
                type="submit"
                className="rsvp-submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Send RSVP
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              className="rsvp-success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon">✨</div>
              <h3>Thank You!</h3>
              <p>Your RSVP has been received. We can't wait to celebrate with you!</p>
              <div className="success-hearts">
                {[...Array(3)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="success-heart"
                    animate={{
                      y: [-10, -20, -10],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    💖
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </animated.div>

        <motion.div
          className="rsvp-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>Can't wait to celebrate with you!</p>
          <div className="rsvp-contact">
            <p>Questions? Contact us at:</p>
            <a href="mailto:design.tbhoyar@gmail.com">design.tbhoyar@gmail.com</a>
            <span> | </span>
            <a href="tel:+91 9923111212">+91 9923111212</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
