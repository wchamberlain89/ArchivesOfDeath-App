import React from 'react';

const GearUpdateController = ({ onFinishUpdating, children }) => {
  const updateGear = (settlementId, gearId, qty) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        qty: qty
      })
    }
    console.log(`attempting put request with ${settlementId} and ${gearId}`)
    fetch(`http://localhost:7000/settlements/${settlementId}/gear/${gearId}}`, requestOptions)
    .then(response => response.json())
    .then(updatedGear => {
      onFinishUpdating(updatedGear);
    });
  };

  const renderProps = {
    updateGear
  }

  return typeof children === 'function'
  ? children(renderProps)
  : children
}

export default GearUpdateController;