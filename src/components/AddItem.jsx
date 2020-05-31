import React from 'react';

const AddItem = ({ settlementId }) => {
  const handleSubmit = ({ itemId, invId }) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          itemId : itemId,
          invId : invId,
          qty: 1
        })
      };
      fetch(`http://localhost:7000/settlement/inventory/${settlementId}`, requestOptions)
      .then(response => response.json())
      .then(response => console.log(response));
    };
  return (
    <div>{settlementId}</div>
  )
}

export default AddItem;