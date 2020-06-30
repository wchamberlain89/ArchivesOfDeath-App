import React, { useState } from 'react';
import GearUpdateController from './GearUpdateController';
import Counter from './Counter';

const GearDetailModal = (props) => {
  const { name, description, gearId, settlementId, onUpdateGear, toggle } = props;
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
      <p>resource ID is : {gearId}</p>
      <GearUpdateController onFinishUpdating={onUpdateGear}>
        {({ updateGear }) => (
          <button onClick={() => {
            updateGear(settlementId, gearId, qty)
            toggle()
          }}>
            Update Quantity
          </button>
        )}
      </GearUpdateController>
      <button onClick={() => toggle()}>close</button>
    </div>
  )
}

export default GearDetailModal;