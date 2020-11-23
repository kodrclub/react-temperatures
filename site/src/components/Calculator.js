import React, { useState } from 'react';
import TempInput from './TempInput';

const Calculator = () => {
  const [temp, setTemp] = useState(0);

  const tempDidChange = (t) => {
    console.log('*** ' + t);
    setTemp(t);
  };

  return (
    <div>
      <TempInput value={temp} setValue={tempDidChange} scale="c" />
      <TempInput value={temp} setValue={tempDidChange} scale="f" />
    </div>
  );
};

export default Calculator;
