import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { CreateSettlement } from './index';

const initialState = {
  settlements: [],
  isloading: false,
  error: ''
}

const settlementsReducer = ( state, action ) => {
  switch (action.type) {
    case 'INIT_FETCH':
      return {
        ...state,
        isLoading: true
      };

    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        settlements: action.payload
      };

    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case 'ADD_SETTLEMENT':
      const settlementsCopy = state.settlements;
      settlementsCopy.push(action.payload.settlement);
      return {
        ...state,
        settlements: settlementsCopy
      };

    default : 
      return state;
    }
  }

const SettlementsList = () => {
  
  const [state, dispatch] = useReducer(settlementsReducer, initialState);

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

  const addSettlement = (settlement) => {
    dispatch({ type: 'ADD_SETTLEMENT', payload: { settlement }})
  }
  
  useEffect(() => {
    initFetch();

    fetch("http://localhost:7000/settlements")
    .then( response => response.json())
    .then( result => {
      console.log(result)
      fetchSuccess(result);
    })
    .catch( error => {
      fetchFailure(`Fetching of settlement data failed because ${error}`)
    });
  }, []);

  if(state.isLoading) {
    return <div>Loading...</div>
  }
    return (
      <>
        <ul>
          {
            state.settlements.map(settlement => {
              return (
                <li key={settlement.id}>
                  {/* Links to Settlement Component passing the settlement object data.*/}
                  <Link to={{ pathname: '/settlement', state: { settlement: settlement } }}>
                      {settlement.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <CreateSettlement
          handleAddSettlement={addSettlement}
        />
      </>
    ) 
}

export default SettlementsList;
