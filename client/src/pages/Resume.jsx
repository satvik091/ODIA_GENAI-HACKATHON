import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const Resume = () => {
  const [html, setHtml] = useState('<h2>John Doe</h2><p>AI Enthusiast | React Developer</p>');
  const [pdfUrl, setPdfUrl] = useState('');

  const generate = async () => {
    const res = await fetch('http://localhost:5000/api/resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ htmlContent: html })
    });
    const data = await res.json();
    setPdfUrl(data.url);
  };

  return (
    <div className="container">
      <SectionHeader title="Resume Builder" subtitle="Paste or edit HTML and generate a neat PDF" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <textarea 
          value={html} 
          onChange={e => setHtml(e.target.value)} 
          rows="18" 
          style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }} 
        />
        <div className="card">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
      <button className="button-primary" style={{ marginTop: '1rem' }} onClick={generate}>Generate PDF</button>
      {pdfUrl && <p><a href={pdfUrl} target="_blank" rel="noreferrer">Download PDF</a></p>}
    </div>
  );
};

export default Resume;
