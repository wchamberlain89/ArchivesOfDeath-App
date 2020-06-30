import React, { useState } from 'react';

const GearListController = ({children}) => {
  const [ selectedGear, setSelectedGear ] = useState(null);

  const selectGear = (resource) => {
    setSelectedGear(resource)
  }

  const renderProps = {
    selectGear,
    selectedGear
  }

  return typeof children === 'function'
  ?  children(renderProps)
  :  children
}

export default GearListController