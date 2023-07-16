import React, { useState } from 'react';
import './HomePage.css';

const HomePage = ({ onLogin, onSignup }) => {
  const [companyName] = useState('Medcare');

  return (
    <div className="home-page">
      <h1 className="company-name">{companyName}</h1>
      <div className="button-container">
        <button className="login-button" onClick={onLogin}>Login</button>
        <button className="signup-button" onClick={onSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default HomePage;
