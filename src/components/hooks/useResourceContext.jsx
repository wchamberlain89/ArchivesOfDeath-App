import React, { useReducer } from 'react';
import { initialState, resourceReducer } from './useResourceReducer';

const ResourcesContext = React.createContext(null);

const ResourcesProvider = ({ children }) => {
  const [resources, dispatch] = useReducer(resourceReducer, initialState);

  return (
    <ResourcesContext.Provider value={{ resources, dispatch }}>
      {children}
    </ResourcesContext.Provider>
  );
}

const ResourcesConsumer = ResourcesContext.Consumer;

export default { ResourcesContext, ResourcesConsumer, ResourcesProvider };