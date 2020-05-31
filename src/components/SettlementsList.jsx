import React, {useEffect, useState} from 'react';
import Settlement from './Settlement';

const SettlementsList = () => {
  const [settlements, setSettlements] = useState([]);
  const [activeSettlement, setActiveSettlement] = useState();

  useEffect(() => {
    fetch("http://localhost:7000/settlements")
    .then(res => res.json())
    .then( result => {
      console.log(result);
      setSettlements(result);
    })
    .catch( err => console.error(err));
  }, []);

  return (
    <ul>
      {
        settlements.map(settlement => {
          return (
            <Settlement 
            name={settlement.name} 
            settlementId={settlement.settlementId} 
            key={settlement.settlementId} 
            handleClick={() => setActiveSettlement(settlement)}
            active={activeSettlement === settlement ? 'active' : null}
          />
          ) 
        })
      }
    </ul>
  )
}
 export default SettlementsList;
