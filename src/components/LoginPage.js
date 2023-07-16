import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin, onShowSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    // For simplicity, we'll just set isLoggedIn to true
    onLogin();
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account?{' '}
        <span className="sign-up-link" onClick={onShowSignUp}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
