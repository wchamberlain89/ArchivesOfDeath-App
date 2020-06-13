import React, { useReducer, useEffect } from 'react';
import CreateItem from './CreateItem';

const initialState = {
  inventory: [],
  isLoading: false,
  error: ''
}

const inventoryReducer = ( state, action ) => {
  switch(action.type) {
    case 'INIT_FETCH':
      return {
        ...state,
        isLoading: true
      };

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

    case 'ADD_ITEM':
      const inventoryCopy = state.inventory;
      console.log("ADDITEM inventory items BEFORE", inventoryCopy.items);
      inventoryCopy.items.push(action.payload.item);
      console.log("ADDITEM inventory items AFTER", inventoryCopy.items);
      return {
        ...state,
        inventory: inventoryCopy
      }
  }
}

const SettlementInventory = ({ settlementId }) => {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  const initFetch = () => {
    console.log("initializing fetch")
    dispatch({ type: 'INIT_FETCH' })
  };
  
  const fetchSuccess = (data) => {
    dispatch({ type: 'FETCH_SUCCESS', payload: data })
  }

  const fetchFailure = (error) => {
    dispatch({ type: 'FETCH_FAILURE', payload: error})
  }

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: { item }})
  }

  useEffect(() => {
    initFetch();

    fetch(`http://localhost:7000/inventories/${settlementId}`)
    .then( response => response.json())
    .then( json => {
      console.log("json is", json[0])
      fetchSuccess(json[0]);
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
            state.inventory.items && state.inventory.items.map(item => <li key={item.itemId}>{item.name} {item.InventoryItem.qty}</li>)
          }
        </ul>
        <CreateItem inventoryId={state.inventory.invId} addItem={addItem}/>
        </>
      )}
    <div>testing</div>
    </>
  )
}

export default SettlementInventory;