import React from 'react';

const Counter = ({ initialState }) => {
  const [ count, setCount ] = React.useState(initialState || 0);

  const handleIncrement = () => {
    setCount(count + 1);
  }
  
  const handleDecrement = () => {
    if ( count > 0 ) {
      setCount(count - 1);
    };
  }

  return (
    <div>
      <button onClick={handleDecrement}> - </button>
      <h5>Qty : {count}</h5>
      <button onClick={handleIncrement}> + </button>
    </div>
  )
}

export default Counter;