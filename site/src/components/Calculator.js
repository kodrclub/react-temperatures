import React from 'react';
import TempInput from './TempInput';

export default function Calculator() {
  return (
    <div>
      <TempInput scale="c" />
      <TempInput scale="f" />
    </div>
  );
}
