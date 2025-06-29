import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const dummySchemes = [
  { name: 'PMKVY', desc: 'Pradhan Mantri Kaushal Vikas Yojana – free training & certification.' },
  { name: 'DDU-GKY', desc: 'Skill development & placement support for rural youth.' }
];

const Schemes = () => {
  const [schemes] = useState(dummySchemes);

  return (
    <div className="container">
      <SectionHeader title="Government Skilling Schemes" />
      {schemes.map(s => (
        <div className="card" key={s.name}>
          <h3 style={{ marginTop: 0 }}>{s.name}</h3>
          <p style={{ margin: 0 }}>{s.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Schemes;
