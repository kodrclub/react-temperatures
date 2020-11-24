import React from 'react';
import './BoilVeredict.css';

const BoilVeredict = ({ celsius }) => {
  const veredict = 100 <= celsius ? 'Will boil' : 'Will not boil';
  return <div className="main">{veredict}</div>;
};

export default BoilVeredict;
