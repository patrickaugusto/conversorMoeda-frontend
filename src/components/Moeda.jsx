import React from 'react';
import Flag from 'react-world-flags';

function Moeda({ codigo }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Flag code={codigo} style={{ width: '20px', marginRight: '8px' }} />
      {codigo}
    </div>
  );
}

export default Moeda;
