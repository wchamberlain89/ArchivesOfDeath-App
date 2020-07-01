import React from 'react';

const SurvivorCreateController = ({ settlementId, onCreateSurvivor, children }) => {
  const createSurvivor = (body) => {
    console.log(body.name, body.gender)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: body.name,
        gender: body.gender 
      })
    };
    fetch(`http://localhost:7000/settlements/${settlementId}/survivors`, requestOptions)
    .then(response => response.json())
    .then(json => {
      console.log(json)
    });
  }
   
  const renderProps = {
    createSurvivor
  }

  return typeof children === 'function'
  ?  children(renderProps)
  :  children
}

export default SurvivorCreateController;