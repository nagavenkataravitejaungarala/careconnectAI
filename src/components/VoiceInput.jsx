import React from "react";
import { useSpeechRecognition } from "react-speech-recognition";

const VoiceInput = ({ setInput }) => {
  const { transcript, listening, startListening, stopListening } = useSpeechRecognition();

  const handleVoiceInput = () => {
    if (listening) {
      stopListening();
      setInput(transcript);
    } else {
      startListening();
    }
  };

  return (
    <button
      onClick={handleVoiceInput}
      className={`p-2 rounded-lg ${
        listening ? "bg-red-600" : "bg-green-600"
      } text-white`}
    >
      {listening ? "Stop" : "Voice"}
    </button>
  );
};

export default VoiceInput;
