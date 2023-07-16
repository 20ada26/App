import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import LoggedInPage from './components/LoggedInPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPage(false);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
    setShowSignUpPage(false);
  };

  const handleShowLoginPage = () => {
    setShowLoginPage(true);
    setShowSignUpPage(false);
  };

  const handleShowSignUpPage = () => {
    setShowSignUpPage(true);
    setShowLoginPage(false);
  };

  if (!isLoggedIn && showLoginPage) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (!isLoggedIn && showSignUpPage) {
    return <SignUpPage onSignup={handleSignup} />;
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <LoggedInPage />
      ) : (
        <HomePage
          onLogin={handleShowLoginPage}
          onSignup={handleShowSignUpPage}
        />
      )}
    </div>
  );
}

export default App;
