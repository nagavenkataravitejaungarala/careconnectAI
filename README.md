import React, { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Chatbot from "./components/Chatbot";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <Header username={username} />
      {!isLoggedIn ? (
        <div className="flex justify-center items-center h-screen">
          {isRegistering ? (
            <Register onLogin={handleLogin} toggleRegister={toggleRegister} />
          ) : (
            <Login onLogin={handleLogin} toggleRegister={toggleRegister} />
          )}
        </div>
      ) : (
        <Chatbot username={username} />
      )}
    </div>
  );
}

export default App;
