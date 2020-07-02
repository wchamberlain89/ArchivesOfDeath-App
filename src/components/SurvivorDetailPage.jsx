import React from 'react';
import { useAPI } from './hooks/useAPI';
import FightingArts from './FightingArts';
import SurvivorAttribute from './SurvivorAttribute';

const SurvivorDetailPage = (props) => {
  const survivorId = props.match.params.survivorId;
  
  const [ survivor, setSurvivor, isLoading, error ] = useAPI('getSurvivor', survivorId);
  
  if(isLoading) {
    return null
  }

  if(survivor) {
    return (
      <>
        <div>{survivor.name}</div>
        {
          survivor && Object.keys(survivor.attributes).map(attribute => {
            return <SurvivorAttribute
              key={attribute}
              name={attribute}
              value={survivor.attributes[attribute]}
            /> 
          })
        }
        <FightingArts survivorId={survivor.survivorId} fightingArts={survivor.FightingArts}/>
      </>
    )

  }

}

export default SurvivorDetailPage;