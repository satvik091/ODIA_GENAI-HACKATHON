import React from 'react';

const SectionHeader = ({ title, subtitle }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <h2 style={{ margin: 0 }}>{title}</h2>
    {subtitle && <p style={{ color: '#6b7280' }}>{subtitle}</p>}
  </div>
);

export default SectionHeader;
