import React, { useState } from 'react';
import BoilVeredict from './BoilVeredict';
import TempInput from './TempInput';

const Calculator = () => {
  const [temp, setTemp] = useState(0);

  const celsiusDidChange = (degrees) => {
    setTemp({ degrees: degrees, scale: 'c' });
  };

  const fahrenheitDidChange = (degrees) => {
    setTemp({ degrees: degrees, scale: 'f' });
  };

  const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };
  const toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const tryConvert = (degrees, toScale) => {
    const input = parseFloat(degrees);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = toScale(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  const celsius =
    'c' === temp.scale ? temp.degrees : tryConvert(temp.degrees, toCelsius);
  const fahrenheit =
    'f' === temp.scale ? temp.degrees : tryConvert(temp.degrees, toFahrenheit);

  return (
    <div>
      <BoilVeredict celsius={celsius} />
      <TempInput value={celsius} setValue={celsiusDidChange} scale="c" />
      <TempInput value={fahrenheit} setValue={fahrenheitDidChange} scale="f" />
    </div>
  );
};

export default Calculator;
