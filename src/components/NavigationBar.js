// src/components/NavigationBar.js

import React from 'react';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="logo">Your Company Logo</div>
      <div className="settings-bar">Settings</div>
      <div className="navigation-menu">
        <ul>
          <li>Hospitals</li>
          <li>Pharmacy</li>
          <li>Insurance</li>
          <li>Medical Record</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
