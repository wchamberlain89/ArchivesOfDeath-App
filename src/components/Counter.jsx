import React from 'react';

const Counter = (props) => {
  const { count, onDecrement, onIncrement } = props;

  return (
    <div>
      <button onClick={onDecrement}> - </button>
      <h5>{count}</h5>
      <button onClick={onIncrement}> + </button>
    </div>
  )
}

export default Counter;