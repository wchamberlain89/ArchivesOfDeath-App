import React from 'react';

const ResourceUpdateController = ({ onFinishUpdating, children }) => {
  const updateResource = (settlementId, resourceId, qty) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        qty: qty
      })
    }
    console.log(`attempting put request with ${settlementId} and ${resourceId}`)
    fetch(`http://localhost:7000/settlements/${settlementId}/resources/${resourceId}}`, requestOptions)
    .then(response => response.json())
    .then(updatedResource => {
      onFinishUpdating(updatedResource);
    });
  };

  const renderProps = {
    updateResource
  }

  return typeof children === 'function'
  ? children(renderProps)
  : children
}

export default ResourceUpdateController;