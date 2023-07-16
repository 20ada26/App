import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = ({ onSignup, onShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add your sign-up logic here
    // For simplicity, we'll just set isLoggedIn to true
    onSignup();
  };

  return (
    <div className="sign-up-page">
      <h2>Sign Up</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{' '}
        <span className="login-link" onClick={onShowLogin}>
          Log in
        </span>
      </p>
    </div>
  );
};

export default SignUpPage;
