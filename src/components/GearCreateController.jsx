import React from 'react';

const GearCreateController = ({ settlementId, onCreateGear, children }) => {
  const createGear = (gearId) => {
    console.log("Attempting to create gear with gearId ", gearId)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        qty: 1
      })
    };
    fetch(`http://localhost:7000/settlements/${settlementId}/gear/${gearId}}`, requestOptions)
    .then(response => response.json())
    .then(json => {
      console.log(json, "Created Gear is")
      onCreateGear(json)
    });
  }
   
  const renderProps = {
    createGear
  }

  return typeof children === 'function'
  ?  children(renderProps)
  :  children
}

export default GearCreateController;