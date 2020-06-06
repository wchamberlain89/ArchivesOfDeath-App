import React from 'react';
import SettlementInventory from './SettlementInventory';

const Settlement = ( props ) => {
  const { settlement } = props.location.state;
  return (
    <>
      <h1>{settlement.name}</h1>
      <SettlementInventory settlementId={settlement.settlementId}/>
    </>
  )
}

export default Settlement;