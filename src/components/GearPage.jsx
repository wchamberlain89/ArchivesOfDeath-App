import React from 'react';

const initialState = {
  gear: [],
  isLoading: true,
  error: ''
}

const gearReducer = ( state, action ) => {
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
        settlements: action.payload
      };

    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default :
      return state;
  }
}

const GearPage = (props) => {
  const { settlement } = props.location.state;
  const [ gear, dispatch ] = React.useReducer( gearReducer, initialState );

  React.useEffect(() => {
    dispatch({ type: "INIT_FETCH" });

    fetch(`http://localhost:7000/settlements/${settlement.settlementId}/gear`)
    .then( response => response.json())
    .then( result => {
      console.log(result)
      dispatch({ type: "FETCH_SUCCESS", payload: result });
    })
    .catch( error => {
      dispatch({ type: "FETCH_FAILURE", payload: error})
    });
  }, []);
  
  if(gear.isLoading) {
    return <h1>Loading</h1>
  }
  
  return (
    <>
    <h1>{settlement.name}</h1>
    
    <ul>
      {
        gear.gear.map(gearItem => (
          <li>gear.name</li>
        ))
      }
    </ul>
    </>
  )
}

export default GearPage;
