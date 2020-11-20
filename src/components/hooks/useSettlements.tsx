import { useEffect, useState, useReducer } from 'react';
import { Status } from '../../types/Service';
import { Settlement } from '../../types/interfaces';
import archivesOfDeathTestService from '../../services/archivesOfDeathTestService';

type State = {
  data: Settlement[] | [];
  isLoading: boolean;
  error: string;
}

type ActionTypes =
  { type: 'SET_INITIAL_SETTLEMENTS', payload: Settlement[] } |
  { type: 'ADD_SETTLEMENT', payload: Settlement } |
  { type: 'INIT_LOADING' } |
  { type: 'FINISH_LOADING'} |
  { type: 'SET_ERROR', error: string }
;
  

const settlementReducer = (state: State, action: ActionTypes): State => {
  switch(action.type) {
    case "SET_INITIAL_SETTLEMENTS":
      return { ...state, data: action.payload };
    case "ADD_SETTLEMENT":
      return { ...state, data: [ ...state.data, action.payload ]}
    case "INIT_LOADING":
      return { ...state, isLoading: true };
    case "FINISH_LOADING":
      return { ...state, isLoading: false};
    default: return state;
  }
}

const initialState = {
  data: [],
  isLoading: false,
  error: '' 
}

const useSettlements = () => {
  const [settlements, dispatch] = useReducer(settlementReducer, initialState);

  const actions = {
    addSettlement : ( payload: { name: string } ) => {
      archivesOfDeathTestService.createSettlement(payload)
      .then((response) => dispatch({ type: "ADD_SETTLEMENT", payload: response.data }))
      .catch((error) => console.log(error))
    }
  }

  useEffect(() => {
      dispatch({ type: "INIT_LOADING" });
      
      archivesOfDeathTestService.getSettlements()
      .then(response => dispatch({ type: "SET_INITIAL_SETTLEMENTS", payload: response.data }))
      .catch(error => dispatch({ type: 'SET_ERROR', error }))
      .finally(() => dispatch({ type: "FINISH_LOADING" }))

  }, []);

  return [ settlements, dispatch, actions ] as const;
};

export default useSettlements;