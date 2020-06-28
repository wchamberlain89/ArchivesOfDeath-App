import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { CreateSettlement } from './index';
import { useAPI } from './hooks/useApi';

const SettlementsList = () => {
  const [ settlements, isLoading, error, fetchData ] = useAPI('getSettlements');

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
      {/* <CreateSettlement
        handleAddSettlement={addSettlement}
      /> */}
    </>
  ) 
}

export default SettlementsList;
