import React from 'react';
import './ParticleBackground.css';

const ParticleBackground: React.FC = () => {
  return (
    <div className="particle-background">
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticleBackground;