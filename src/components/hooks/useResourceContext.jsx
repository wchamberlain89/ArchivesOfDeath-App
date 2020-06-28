import React, { useReducer, useEffect } from 'react';
import { initialState, resourceReducer } from './useResourceReducer';
import useArchivesFetch from './useArchivesFetch';

export const ResourcesContext = React.createContext(null);

export const ResourcesProvider = ({ children }) => {
  const [resources, dispatch] = useReducer(resourceReducer, initialState);

  return (
    <ResourcesContext.Provider value={{ resources, dispatch }}>
      {children}
    </ResourcesContext.Provider>
  );
}

export const ResourcesConsumer = ResourcesContext.Consumer;