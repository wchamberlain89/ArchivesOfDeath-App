import React from 'react';
import SettlementInventory from './SettlementInventory';

const Settlement = ({ name, settlementId, active, handleClick }) => {
  return (
    <>
    <li onClick={handleClick}> {name} {settlementId}</li>
    { active === 'active' && <SettlementInventory settlementId={settlementId}/>}
    
    
    </>
  )
}

export default Settlement;