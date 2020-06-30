import React from 'react';
import GearListItem from './GearListItem';

const GearList = ({ settlementId, gear, onClick }) => {
  return (
    <ul>
      {gear.map(( gearItem ) => {
        return <GearListItem 
          key={gearItem.resourceId} 
          name={gearItem.gearInfo.name}
          qty={gearItem.qty} 
          onClick={() => onClick(gearItem)}
        />
      })}
    </ul>
  )
}

export default GearList;