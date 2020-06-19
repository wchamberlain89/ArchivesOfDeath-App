import React from 'react';

const ResourceListItem = ({ name, qty }) => {
  return (
    <li>{name} {qty}</li>
  )
}

export default ResourceListItem;