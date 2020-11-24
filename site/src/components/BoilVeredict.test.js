import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import BoilVeredict from './BoilVeredict';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Predicts boil at or above 100 degrees', () => {
  const msg = 'Will boil';

  act(() => {
    render(<BoilVeredict celsius="123" />, container);
  });
  expect(container.textContent).toBe(msg);

  act(() => {
    render(<BoilVeredict celsius="100" />, container);
  });
  expect(container.textContent).toBe(msg);
});

it('Predicts no boil below 100 degrees', () => {
  act(() => {
    render(<BoilVeredict celsius="99" />, container);
  });
  expect(container.textContent).toBe('Will not boil');
});

it('Waits when empty or no temperature specified', () => {
  const msg = 'Waiting...';

  act(() => {
    render(<BoilVeredict />, container);
  });
  expect(container.textContent).toBe(msg);

  act(() => {
    render(<BoilVeredict celsius="" />, container);
  });
  expect(container.textContent).toBe(msg);
});
