import React, { useState } from 'react';
import VoiceInput from './VoiceInput';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const send = async (text) => {
    if (!text) return;
    setMessages([...messages, { from: 'user', text }]);
    setInput('');

    const res = await fetch('http://localhost:5000/api/llm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: text })
    });
    const data = await res.json();
    setMessages(m => [...m, { from: 'bot', text: data.response }]);
  };

  return (
    <div>
      <div style={{ height: 200, overflow: 'auto', border: '1px solid #ccc', padding: 8 }}>
        {messages.map((m, idx) => <p key={idx}><b>{m.from}:</b> {m.text}</p>)}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => send(input)}>Send</button>
      <VoiceInput onText={send} />
    </div>
  );
};

export default ChatBox;
