import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CreateSettlement } from './index';

const SettlementsList = () => {
  const [settlements, setSettlements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/settlements")
    .then(res => res.json())
    .then( result => {
      console.log(result);
      setSettlements(result);
    })
    .catch( err => console.error(err));
  }, []);

  const updateSettlements = (settlement) => {
    const settlementsCopy = settlements.slice();
    settlementsCopy.push(settlement);
    setSettlements(settlementsCopy);
  }

  return (
    <>
      <ul>
        {
          settlements.map(settlement => {
            return (
              <li key={settlement.id}>
                <Link to={{ pathname: '/settlement', state: { settlement: settlement } }}>
                    {settlement.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
      <CreateSettlement
        updateSettlements={updateSettlements}
      />
    </>
  )
}
 export default SettlementsList;
