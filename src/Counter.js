import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounter } from './selectors';

function Counter() {
  const counter = useSelector(selectCounter);

  return (
    <div>
      <p>Count: {counter}</p>
      {/* <p>Thank for Watching</p> */}
    </div>
  );
}

export default Counter;
