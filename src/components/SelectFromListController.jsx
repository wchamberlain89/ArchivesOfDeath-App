import React, { useState } from 'react';

const SelectListItemController = ({ children }) => {
  const [ selectedListItem, setSelectedListItem ] = useState(null);

  const selectListItem = (listItem) => {
    setSelectedListItem(listItem)
  }

  const renderProps = {
    selectedListItem,
    selectListItem
  }

  return typeof children === 'function'
  ?  children(renderProps)
  :  children
}

export default SelectListItemController