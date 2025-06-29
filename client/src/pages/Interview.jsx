import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const Interview = () => {
  const [role, setRole] = useState('');
  const [qa, setQa] = useState([]);

  const generate = async () => {
    if (!role) return;
    const res = await fetch('http://localhost:5000/api/interview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role })
    });
    const data = await res.json();
    setQa(data.qa);
  };

  return (
    <div className="container">
      <SectionHeader title="Mock Interview" subtitle="Practice common questions for your target role" />
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input 
          value={role} 
          onChange={e => setRole(e.target.value)} 
          placeholder="e.g. Frontend Developer" 
          style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }} 
        />
        <button className="button-primary" onClick={generate}>Generate</button>
      </div>
      {qa.length > 0 && (
        <div className="card">
          {qa.map((q, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
              <strong>Q{i+1}: {q.question}</strong>
              <p style={{ marginLeft: '1rem' }}>{q.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Interview;
