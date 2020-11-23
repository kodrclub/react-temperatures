import React from 'react';
import './TempInput.css';

const scales = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

const TempInput = ({ value, setValue, scale }) => {
  const valueDidChange = (e) => {
    const v = e.target.value;
    setValue(v);
  };

  return (
    <div className="main">
      <input
        type="text"
        placeholder={scales[scale]}
        value={value}
        onChange={valueDidChange}
      />
    </div>
  );
};

export default TempInput;
