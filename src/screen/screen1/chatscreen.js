import React, { useState } from 'react';
import './chatscreen.css'; // Import the CSS file

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showQuestions, setShowQuestions] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const questions = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is JSX?", answer: "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript." },
    { question: "What are React Hooks?", answer: "Hooks are functions that let you use React state and lifecycle features in functional components." },
    { question: "What is a component?", answer: "A component is a reusable piece of UI in React." },
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: inputValue }];
    setMessages(newMessages);

    if (inputValue.toLowerCase() === 'hi') {
      const botResponse = { sender: 'bot', text: 'Hello! Here are some questions you can ask:' };
      setMessages([...newMessages, botResponse]);
      setShowQuestions(true);
    } else {
      setShowQuestions(false);
    }

    setInputValue('');
  };

  const handleHiClick = () => {
    const newMessages = [
      ...messages,
      { sender: 'user', text: 'Hi' },
      { sender: 'bot', text: 'Hello! Here are some questions you can ask:' },
    ];
    setMessages(newMessages);
    setShowQuestions(true);
  };

  const handleQuestionClick = (question) => {
    const newMessages = [
      ...messages,
      { sender: 'user', text: question.question },
      { sender: 'bot', text: question.answer },
    ];
    setMessages(newMessages);
    setShowQuestions(true); // Keep showing questions for further selection
  };

  const handleClearChat = () => {
    setMessages([]);
    setShowQuestions(false);
    setInputValue('');
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="chat-app">
      <div className="chat-box">
        {/* Header */}
        <div className="chat-header">
          Chat Application
          <div className="dropdown-container" onClick={toggleDropdown}>
            <span className="menu-icon">⋮</span>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <button className="clear-chat-button" onClick={handleClearChat}>
                  Clear
                </button>
                <button className="exit-button" onClick={() => window.location.href = '/'}>
                  Exit
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.sender === 'user' ? 'user-message' : 'bot-message'}
            >
              <div className="message">{message.text}</div>
            </div>
          ))}

          {!messages.length && (
            <div className="hi-button-container">
              <button className="hi-button" onClick={handleHiClick}>
                Hi
              </button>
            </div>
          )}

          {showQuestions && (
            <div className="question-options">
              {questions.map((q, index) => (
                <button
                  key={index}
                  className="question-button"
                  onClick={() => handleQuestionClick(q)}
                >
                  {q.question}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="chat-send-button" onClick={handleSend}>
            Send
          </button>
        </div>
            <button className="next-button" onClick={() => window.location.href = '/chatscreen2'}>
              Next Screen
            </button>
      </div>
    </div>
  );
};

export default ChatApp;
