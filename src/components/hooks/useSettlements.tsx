import { useEffect, useState, useReducer } from 'react';
import { Status } from '../../types/Service';
import { Settlement } from '../../types/interfaces';
import archivesOfDeathTestService from '../../services/archivesOfDeathTestService';

type SettlementState = Settlement[] | [];

type StatusState = {
  isLoading: boolean;
  error: unknown;
}

type InitialStateType = {
  data: Settlement[] | [];
  status: {
    isLoading: boolean
    error: unknown
  }
}

type SettlementActions =
  { type: 'SET_INITIAL_SETTLEMENTS', payload: Settlement[] } |
  { type: 'ADD_SETTLEMENT', payload: Settlement };

type StatusActions = 
  { type: 'INIT_LOADING' }  |
  { type: 'FINISH_LOADING'} |
  { type: 'SET_ERROR', error: string }
;

const statusReducer = (state: StatusState, action: StatusActions): StatusState => {
  switch(action.type) {
    case "INIT_LOADING":
      return { ...state, isLoading: true };
    case "FINISH_LOADING":
      return { ...state, isLoading: false };
    default: return state;
  }
}
  
const settlementsReducer = (state: SettlementState, action: SettlementActions): SettlementState => {
  console.log("SettlementReducer State", state)
  switch(action.type) {
    case "SET_INITIAL_SETTLEMENTS":
      return action.payload;
    case "ADD_SETTLEMENT":
      return [ ...state, action.payload ]
    default: return state;
  }
}

const mainReducer = ( state: InitialStateType, action: SettlementActions | StatusActions ) => ({
  data: settlementsReducer(state.data, action as SettlementActions),
  status: statusReducer(state.status, action as StatusActions)
});

const initialState = {
  data: [],
  status: {
    isLoading: false,
    error: '' 
  }
};

const useSettlements = () => {
  const [settlements, dispatch] = useReducer(mainReducer, initialState);

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