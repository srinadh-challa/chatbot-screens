import React from 'react';
import './welcomescreen.css'; // Import the CSS file

const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      {/* Logo or Main Heading */}
      <div className="welcome-logo">ChatBot AI</div>

      {/* Description */}
      <p className="welcome-description">
        Welcome to ChatBot AI, your personal assistant for smarter, faster, and 
        more interactive conversations. Ready to get started?
      </p>

      {/* Action Buttons */}
      <div className="welcome-buttons">
        <button
          className="welcome-button start-chat"
          onClick={() => window.location.href = '/chatapp'}
        >
          Start Chat
        </button>
        <button
          className="welcome-button learn-more"
          onClick={() => alert('Learn more about ChatBot AI!')}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
