import React, { useState } from 'react';
import './chatscreen3.css'; // Import the CSS file

const LuxuryChatScreen = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Welcome! How can I assist you today?' },
    { type: 'user', text: 'Tell me more about your features.' },
    { type: 'bot', text: 'Sure! I can help you with AI-powered solutions.' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'user', text: input }]);
      setInput('');
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: 'bot', text: 'Let me process that for you.' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="luxury-chat-screen">
      {/* Header */}
      <div className="luxury-chat-header">
        Chat with AI
        <button className="exit-button-screen3" onClick={() => window.location.href = '/'}>
              Exit
            </button>
      </div>

      {/* Chat Body */}
      <div className="luxury-chat-body">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-bubble ${message.type}`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="luxury-chat-footer">
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="chat-send-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default LuxuryChatScreen;
