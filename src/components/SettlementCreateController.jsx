import React from 'react';

const SettlementCreateController = ({ onCreateSettlement, children }) => {
  
  const createSettlement = ({ name }) => {
    console.log(name)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    };
    fetch('http://localhost:7000/settlements', requestOptions)
    .then(response => response.json())
    .then(response => onCreateSettlement(response));
  };

  const renderProps = {
    createSettlement
  }

  return typeof children === 'function'
  ?  children(renderProps)
  :  children
}

export default SettlementCreateController;