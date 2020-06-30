import React, { useState } from 'react';

const ResourceListController = ({children}) => {
  const [ selectedResource, setSelectedResource ] = useState(null);

  const selectResource = (resource) => {
    setSelectedResource(resource)
  }

  const renderProps = {
    selectResource,
    selectedResource
  }

  return typeof children === 'function'
  ?  children(renderProps)
  :  children
}

export default ResourceListController