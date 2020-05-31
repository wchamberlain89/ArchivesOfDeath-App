import React from 'react';

const ItemOption = ( {itemId, name} ) => {
  return (
    <option value={itemId}>{name}</option>
  )
}

export default ItemOption;