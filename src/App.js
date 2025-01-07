import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatApp from "./screen/screen1/chatscreen";
import './index.css'; // Import your Tailwind CSS
import WelcomeScreen from "./screen/welcome/welcomescreen";
import ChatScreenAlt from "./screen/screen2/chatbotscreen2";
import LuxuryChatScreen from "./screen/screen3/chatscreen3";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the ChatApp */}
        <Route path="/" element={<WelcomeScreen/>} />
        <Route path="/chatapp" element={<ChatApp />} />
        <Route path="/chatscreen2" element={<ChatScreenAlt />} />
        <Route path="/chatscreen3" element={<LuxuryChatScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
