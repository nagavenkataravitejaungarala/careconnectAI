import React, { useState } from "react";
import VoiceInput from "./VoiceInput";

const Chatbot = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Thank you for describing your symptoms. A doctor will be assigned shortly.", sender: "ai" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-2 rounded-lg max-w-xs ${
              msg.sender === "user" ? "bg-blue-100 ml-auto" : "bg-gray-100"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Describe your symptoms..."
        />
        <VoiceInput setInput={setInput} />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
