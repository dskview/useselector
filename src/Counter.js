import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounter } from './selectors';

function Counter() {
  const counter = useSelector(selectCounter);

  return (
    <div>
      <p>Count: {counter}</p>
    </div>
  );
}

export default Counter;
