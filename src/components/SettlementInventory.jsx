import React, { useReducer, useEffect } from 'react';
import CreateResource from './CreateResource';
import ResourceListItem from './ResourceListItem';

const initialState = {
  inventory: [],
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

const inventoryReducer = ( state, action ) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        inventory: action.payload
      };

    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case 'ADD_RESOURCE_TO_LIST':
      let inventoryCopy = state.inventory;
      inventoryCopy.push(action.payload.item);
      inventoryCopy = sortByName(inventoryCopy);
      return {
        ...state,
        inventory: inventoryCopy
      }
  }
}

const SettlementInventory = ({ settlementId }) => {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);
  
  const fetchSuccess = (data) => {
    dispatch({ type: 'FETCH_SUCCESS', payload: data })
  }

  const fetchFailure = (error) => {
    dispatch({ type: 'FETCH_FAILURE', payload: error})
  }

  const addResourceToList = (item) => {
    dispatch({ type: 'ADD_RESOURCE_TO_LIST', payload: { item }})
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

  {console.log(state)}
  return (
    <>
      {state.isLoading ? <div>Loading</div>
      : 
      (
        <>
        <ul>
          {
            state.inventory && state.inventory.map(({ resourceInfo, qty }) => {
              return (
                <ResourceListItem 
                  key={resourceInfo.resourceId} 
                  name={resourceInfo.name}
                  qty={qty} 
                  resourceId={resourceInfo.resourceId}
                />
              )
            })
          }
        </ul>
        <CreateResource settlementId={settlementId} handleCreateResource={addResourceToList}/>
        </>
      )}
    </>
  )
}

export default SettlementInventory;