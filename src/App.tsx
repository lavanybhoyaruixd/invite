import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Hero from './components/Hero';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Details from './components/Details';
import RSVP from './components/RSVP';
import ParticleBackground from './components/ParticleBackground';
import FloatingElements from './components/FloatingElements';
import MusicPlayer from './components/MusicPlayer';
import Navigation from './components/Navigation';
import CreditRibbon from './components/CreditRibbon';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="App">
      <ParticleBackground />
      <FloatingElements />
      <MusicPlayer />
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Hero />
        <Story />
        <Gallery />
        <Details />
        <RSVP />
      </motion.div>
      <CreditRibbon />
    </div>
  );
}

export default App;