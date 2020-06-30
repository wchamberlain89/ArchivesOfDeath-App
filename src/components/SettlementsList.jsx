import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useAPI } from './hooks/useAPI';
import SettlementCreateForm from './SettlementCreateForm';

const SettlementsList = () => {
  const [ settlements, setSettlements, isLoading, error, makeRequest ] = useAPI('getSettlements');

  const addSettlement = ( settlement ) => {
    setSettlements(settlements => [...settlements, settlement]);
  }

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <ul>
        {
          settlements.map(settlement => {
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
      <SettlementCreateForm
        onCreateSettlement={addSettlement}
      />
    </>
  ) 
}

export default SettlementsList;
