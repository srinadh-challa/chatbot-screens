import React, { useState } from 'react';
import './chatbotscreen2.css'; // Import the CSS file

const ChatScreenAlt = () => {
  const [messages, setMessages] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);

  const questions = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is JSX?", answer: "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript." },
    { question: "What are React Hooks?", answer: "Hooks are functions that let you use React state and lifecycle features in functional components." },
    { question: "What is a component?", answer: "A component is a reusable piece of UI in React." },
  ];

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
    setShowQuestions(true); // Keep showing the questions for further selection
  };

  return (
    <div className="alternative-chat-screen">
      {/* Header */}
      <div className="chat-header-alt">Alternative Chat Screen</div>

      {/* Chat Body */}
      <div className="chat-body-alt">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message-alt ${message.sender}`}
          >
            {message.sender === 'bot' && <div className="avatar">B</div>}
            <div className={`chat-message-bubble ${message.sender}`}>
              {message.text}
            </div>
          </div>
        ))}

        {!showQuestions && (
          <div className="hi-button-container-alt" onClick={handleHiClick}>
          <button className="hi-button-alt">
            Hi
          </button>
          </div>
        )}

        {showQuestions && (
          <div className="question-options-alt">
            {questions.map((q, index) => (
              <button
                key={index}
                className="question-button-alt"
                onClick={() => handleQuestionClick(q)}
              >
                {q.question}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="chat-footer-alt">
        <input
          type="text"
          placeholder="Type your message..."
          className="chat-input"
          disabled
        />
        <button disabled>Send</button>
      </div>
            <button className="next-button" onClick={() => window.location.href = '/chatscreen3'}>
              Next Screen
            </button>
    </div>
  );
};

export default ChatScreenAlt;
