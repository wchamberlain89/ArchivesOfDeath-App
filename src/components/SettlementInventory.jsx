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
  fetching: false,
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
  let resourcesCopy = state.resources;
  switch(action.type) {
    case 'UPDATE_INIT' :
      console.log("UPDATING"); 
      return {
        ...state,
        fetching: true
      };
    case 'UPDATE_FINISHED' :
      console.log(action.payload)
      resourcesCopy = resourcesCopy.map(resource => {
        if(resource.resourceId === action.payload.resourceId) {
          resource.qty = action.payload.qty
        }
        return resource;
      });
      console.log(resourcesCopy);
      return {
        ...state,
        resources: resourcesCopy
      }
      
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
    console.log("Fetch Success");
    dispatch({ type: 'FETCH_SUCCESS', payload: data })
  }

  const fetchFailure = (error) => {
    dispatch({ type: 'FETCH_FAILURE', payload: error})
  }

  const addResource = (resource) => {
    dispatch({ type: 'ADD_RESOURCE_TO_LIST', payload: { resource }})
  }

  useEffect(() => {
    console.log("using effect")
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

  console.log("rendering settlement inventory")
  if (state.isLoading) {
    return <h1>"Loading"</h1>
  }

  else {
    return (
      <>
        <ModalProvider>
          <ResourceList settlementId={settlementId} resources={state.resources} dispatch={dispatch}/>
        </ModalProvider>
        <CreateResource settlementId={settlementId} handleCreateResource={addResource}/>
      </>  
    )
  }
}

export default SettlementInventory;