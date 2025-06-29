import React, { useState } from 'react';

const VoiceInput = ({ onText }) => {
  const [listening, setListening] = useState(false);
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const start = () => {
    if (!recognition) return alert('SpeechRecognition not supported');
    recognition.lang = 'en-IN';
    recognition.start();
    setListening(true);
    recognition.onresult = (e) => {
      const transcript = Array.from(e.results)
        .map(r => r[0])
        .map(r => r.transcript)
        .join('');
      onText(transcript);
    };
    recognition.onend = () => setListening(false);
  };

  return (
    <button onClick={start} disabled={listening}>
      {listening ? 'Listening...' : '🎤'}
    </button>
  );
};

export default VoiceInput;
