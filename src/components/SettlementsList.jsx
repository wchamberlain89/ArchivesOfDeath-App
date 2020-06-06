import React, {useEffect, useState} from 'react';
import Settlement from './Settlement';
import { Link } from 'react-router-dom';
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
            <Link to={{ pathname: '/settlement', state: { settlement: settlement } }}>
              {settlement.name}
            </Link>
          ) 
        })
      }
    </ul>
  )
}
 export default SettlementsList;
