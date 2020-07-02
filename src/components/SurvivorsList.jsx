import React from 'react';
import { Link } from 'react-router-dom';
import SurvivorListItem from './SurvivorListItem/SurvivorListItem';

const SurvivorsList = ({ survivors, settlementId }) => {
  console.log("in survivors list", settlementId)
  return (
        <ul>
          {
            survivors.map(survivor => (
              <Link to={{ pathname: `/survivor/${survivor.survivorId}`, state: { survivor: survivor, settlementId: settlementId } }}>
                <SurvivorListItem 
                  name={survivor.name}
                  gender={survivor.gender}
                  attributes={survivor.attributes}
                />
              </Link>
            ))
          }
        </ul>
  )
}

export default SurvivorsList;