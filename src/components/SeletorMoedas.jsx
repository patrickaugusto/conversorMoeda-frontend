import React from 'react';
import Select from 'react-select';
import Flag from 'react-world-flags';
import { FaFlag } from 'react-icons/fa';

function SeletorMoedas({ moedas, selected, onChange }) {
  const options = moedas.map((moeda) => {
    const isXCode = moeda.startsWith('X');
    return {
      value: moeda,
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {isXCode ? (
            <FaFlag style={{ color: 'gray', marginRight: '8px' }} />
          ) : (
            <Flag code={moeda.slice(0, 2)} style={{ width: '20px', marginRight: '8px' }} />
          )}
          {moeda}
        </div>
      ),
    };
  });

  const customStyles = {
    control: (base) => ({
      ...base,
      width: '8em',
      minHeight: '2em',
    }),
    menu: (base) => ({
      ...base,
      width: '8em',
    }),
  };

  return (
    <Select
      value={options.find(option => option.value === selected)}
      onChange={(option) => onChange(option.value)}
      options={options}
      styles={customStyles}
      isSearchable={false}
      getOptionLabel={(e) => e.label}
      className="select-monedas"
    />
  );
}


export default SeletorMoedas;
