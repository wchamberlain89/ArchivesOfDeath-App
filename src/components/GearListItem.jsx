import React from 'react';

const GearListItem = ({ name, qty, onClick }) => {
  return (
    <li onClick={onClick}>{name} {qty}</li>
  )
}

export default GearListItem;