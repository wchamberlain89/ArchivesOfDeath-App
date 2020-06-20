import React from 'react';
import SettlementInventory from './SettlementInventory';
import { ResourcesProvider } from './hooks/useResourceContext';

const Settlement = ( props ) => {
  const { settlement } = props.location.state;
  console.log("rendering settlement");
  return (
    <>
      <ResourcesProvider>
        <h1>{settlement.name}</h1>
        <SettlementInventory settlementId={settlement.settlementId}/>
      </ResourcesProvider>
    </>
  )
}

export default Settlement;