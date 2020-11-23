import React from 'react';
import './TempInput.css';

const scales = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export default function TempInput(props) {
  return (
    <div className="main">
      <input type="text" placeholder={scales[props.scale]} />
    </div>
  );
}
