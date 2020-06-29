import React, { useState } from 'react';
import ResourceUpdateController from './ResourceUpdateController';
import Counter from './Counter';

const ResourceDetailModal = (props) => {
  const { name, description, resourceId, settlementId, onUpdateResource, toggle } = props;
  const [ qty, setQty ] = useState(props.qty);

  const handleIncrement = () => {
    setQty(qty + 1);
  }

  const handleDecrement = () => {
    if(qty > 0) {
      setQty(qty - 1);
    }
  }

  return (
    <div>
      <p>{name}</p>
      <p>Description is : {description}</p>
      <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} count={qty}/>
      <p>resource ID is : {resourceId}</p>
      <ResourceUpdateController onFinishUpdating={onUpdateResource}>
        {({ updateResource }) => (
          <button onClick={() => {
            updateResource(settlementId, resourceId, qty)
            toggle()
          }}>
            Update Quantity
          </button>
        )}
      </ResourceUpdateController>
      <button onClick={() => toggle()}>close</button>
    </div>
  )
}

export default ResourceDetailModal;