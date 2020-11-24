import React from 'react';
import './BoilVeredict.css';

const BoilVeredict = ({ celsius }) => {
  const veredict = celsius
    ? 100 <= celsius
      ? 'Will boil'
      : 'Will not boil'
    : 'Waiting...';
  return <div className="main">{veredict}</div>;
};

export default BoilVeredict;
