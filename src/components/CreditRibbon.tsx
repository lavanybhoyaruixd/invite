import React from 'react';
import './CreditRibbon.css';

const CreditRibbon: React.FC = () => {
  return (
    <div className="credit-ribbon">
      <span className="credit-text">
        Made with <span className="credit-heart">🩷</span> by Tanmay
      </span>
    </div>
  );
};

export default CreditRibbon;