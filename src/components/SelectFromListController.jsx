import React, { useState } from 'react';

const SelectFromListController = ({ children }) => {
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

export default SelectFromListController