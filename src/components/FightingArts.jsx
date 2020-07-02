import React from 'react';
import ApiController from './ApiController';
import FightingArtsForm from './FightingArtsForm';

const FightingArts = ({ fightingArts, settlementId, survivorId }) => {
  console.log(settlementId, "in fighting arts")
  return (
    <>
      {
        fightingArts.map(fightingArt => (
          <div style={{marginTop: "10px"}}>
            <div>{fightingArt.name}</div>
            <div dangerouslySetInnerHTML={{ __html : fightingArt.effect}}/>
          </div> 
        ))
      }
      <FightingArtsForm settlementId={settlementId} survivorId={survivorId}/>
    </>
  )
}

export default FightingArts;