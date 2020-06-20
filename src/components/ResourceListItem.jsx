import React from 'react';

const ResourceListItem = ({ name, qty, onClick }) => {
  return (
    <li onClick={onClick}>{name} {qty}</li>
  )
}

export default ResourceListItem;