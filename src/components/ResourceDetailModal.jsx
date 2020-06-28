import React, { useState } from 'react';
import Counter from './Counter';

const ResourceDetailModal = (props) => {
  const { name, description, resourceId, settlementId, onUpdateResource, toggle } = props;
  const [ qty, setQty ] = useState(props.qty);
  const [ isUpdating, setIsUpdating ] = useState(false);

  const handleIncrement = () => {
    setQty(qty + 1);
  }

  const handleDecrement = () => {
    if(qty > 0) {
      setQty(qty - 1);
    }
  }

  const handleUpdateResource = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        qty: qty
      })
    }
    
    fetch(`http://localhost:7000/settlements/${settlementId}/resources/${resourceId}}`, requestOptions)
    .then(response => response.json())
    .then(updatedResource => {
      onUpdateResource(updatedResource)
    })
    .finally(() => {
      toggle();
    });
  };
  
  return <div>
    <p>{name}</p>
    <p>Description is : {description}</p>
    <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} count={qty}/>
    <p>resource ID is : {resourceId}</p>
    <button onClick={handleUpdateResource}>Update Quantity</button>
    <button onClick={() => toggle()}>close</button>
  </div>
}

export default ResourceDetailModal;