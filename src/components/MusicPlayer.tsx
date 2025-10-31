import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MusicPlayer.css';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Add event listeners for audio loading and errors
    const handleCanPlay = () => {
      console.log('Audio can play now');
      setAudioLoaded(true);
      startPlayback();
    };

    const handleError = (e: Event) => {
      console.error('Audio loading error:', (e as ErrorEvent).message);
      setIsPlaying(false);
    };

    // Function to start playback
    const startPlayback = async () => {
      try {
        console.log('Attempting to play...');
        await audio.play();
        setIsPlaying(true);
        console.log('Playing successfully');
      } catch (error) {
        console.error('Playback failed:', error);
        setIsPlaying(false);
      }
    };

    // Set up audio element
    audio.load(); // Force reload the audio
    audio.volume = 1.0;
    audio.muted = false;

    // Add event listeners
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };

    // Handle page visibility changes
    const handleVisibilityChange = () => {
      if (!audio) return;
      
      if (document.hidden) {
        audio.pause();
        setIsPlaying(false);
      } else if (audioLoaded) {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(console.error);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Auto-hide after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying, audioLoaded]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="music-player"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="music-toggle"
              onClick={togglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="music-icon"
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
              >
                {isPlaying ? '🎵' : '🎶'}
              </motion.div>
            </motion.button>
            <span className="music-label">
              {isPlaying ? 'Playing...' : 'Play Music'}
            </span>
            <button className="music-close" onClick={toggleVisibility}>
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!isVisible && (
        <motion.button
          className="music-show"
          onClick={toggleVisibility}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🎵
        </motion.button>
      )}

      {/* Wedding background music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        autoPlay
        controls={false}
        muted={false}
        onError={(e) => console.error('Audio error:', e)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source 
          src="/music/Classic Love Mashup  SICKVED  2025  Ek Dil Ek Jaan  Aayat  Laal Ishq - SICKVED (youtube).mp3" 
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default MusicPlayer;

