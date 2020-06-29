import React from 'react';

const ResourceCreateController = ({ settlementId, onCreateResource, children }) => {
  const createResource = (resourceId) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        qty: 1 
      })
    };
    fetch(`http://localhost:7000/settlements/${settlementId}/resources/${resourceId}}`, requestOptions)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      onCreateResource(json)
    });
  }
   
  const renderProps = {
    createResource
  }

  return typeof children === 'function'
  ?  children(renderProps)
  :  children
}

export default ResourceCreateController;