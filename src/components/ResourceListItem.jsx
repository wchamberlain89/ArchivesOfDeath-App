import React from 'react';

const ResourceListItem = ({ name, qty, onClick }) => {
  console.log("rendering ", name);
  return (
    <li onClick={onClick}>{name} {qty}</li>
  )
}

export default ResourceListItem;