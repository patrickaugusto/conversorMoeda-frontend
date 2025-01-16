import React from 'react';

function SeletorMoedas({ moedas, selected, onChange }) {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      {moedas.map((moeda) => (
        <option key={moeda} value={moeda}>
          {moeda}
        </option>
      ))}
    </select>
  );
}

export default SeletorMoedas;
