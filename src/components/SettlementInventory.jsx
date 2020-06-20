import React, { useReducer, useEffect } from 'react';
import {
  Count, 
  CreateResource,
  ResourceList, 
} from './index';
import { ModalProvider } from './hooks/useModalContext';


const initialState = {
  resources: [],
  isLoading: true,
  error: ''
}

const sortByName = (resources) => {
  return resources.sort(function(a, b) {
    const resourceA = a.resourceInfo.name.toUpperCase(); // ignore upper and lowercase
    const resourceB = b.resourceInfo.name.toUpperCase(); // ignore upper and lowercase
    if (resourceA < resourceB) {
      return -1;
    }
    if (resourceA > resourceB) {
      return 1;
    }

    return 0;
  });
}

const resourcesReducer = ( state, action ) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        resources: action.payload
      };

    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case 'ADD_RESOURCE_TO_LIST':
      let resourcesCopy = state.resources;
      resourcesCopy.push(action.payload.resource);
      resourcesCopy = sortByName(resourcesCopy);
      return {
        ...state,
        resources: resourcesCopy
      }
  }
}

const SettlementInventory = ({ settlementId }) => {
  const [state, dispatch] = useReducer(resourcesReducer, initialState);
  
  const fetchSuccess = (data) => {
    dispatch({ type: 'FETCH_SUCCESS', payload: data })
  }

  const fetchFailure = (error) => {
    dispatch({ type: 'FETCH_FAILURE', payload: error})
  }

  const addResource = (resource) => {
    dispatch({ type: 'ADD_RESOURCE_TO_LIST', payload: { resource }})
  }

  useEffect(() => {
    fetch(`http://localhost:7000/settlements/${settlementId}/resources`)
    .then( response => response.json())
    .then( json => {
      console.log("json is", json)
      fetchSuccess(json);
    })
    .catch( error => {
      fetchFailure(`Fetching of inventory data failed because ${error}`); 
    });
  }, []);

  return (
    <>
      {state.isLoading ? <div>Loading</div> : 
      (
        <>
        <ModalProvider>
          <ResourceList resources={state.resources}/>
        </ModalProvider>
        <CreateResource settlementId={settlementId} handleCreateResource={addResource}/>
        </>  
      )}
    </>
  )
}

export default SettlementInventory;